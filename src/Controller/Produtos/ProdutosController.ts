import { Request, Response } from 'express'
import { ProdutosServices } from '../../Services/Produtos/ProdutosServices'

class ProdutosController {
    async handle(req: Request, res: Response) {
        const { nome, fabricante, quantidade, preco, categoriaID } = req.body
        if (!req.file) {
            throw new Error('Imagem com Problema')
        } else {
            const { originalname, filename: banner } = req.file
            const produtosservices = new ProdutosServices()
            const resposta = await produtosservices.execute({
                nome,
                fabricante,
                quantidade,
                preco,
                banner,
                categoriaID
            })
            return res.json(resposta)
        }
    }

}

export { ProdutosController }