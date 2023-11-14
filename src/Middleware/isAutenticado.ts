import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface Payload {
    sub: string
}

export function isAutenticado(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const autetToken = req.headers.authorization
    const [, token] = autetToken.split(' ')
    if (token === 'null') {
        return res.json({dados: 'Token Invalido'})
    }


    try {

        const { sub } = verify(
            token,
            process.env.JWT_SECRET

        ) as Payload
        req.user_id = sub
        return next()

    } catch (err) {
        return res.json({dados:'Token Expirado'})
        
    }
    
}