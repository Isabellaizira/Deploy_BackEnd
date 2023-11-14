import { Request, Response } from 'express'
import { ListarUsuarioTokenServices } from '../../Services/Usuarios/ListarUsuarioTokenServices'


class ListarUsuarioTokenController {
    async handle(req: Request, res: Response) {
        const  id  = req.user_id
        const listarUsuarioTokenServices = new ListarUsuarioTokenServices()
        const resposta = await listarUsuarioTokenServices.execute({
             id
         })
         return res.json(resposta)
        
    }
}

export { ListarUsuarioTokenController }
