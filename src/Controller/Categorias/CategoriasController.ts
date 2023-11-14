import { Request, Response } from 'express'
import { CategoriasServices } from '../../Services/Categorias/CategoriasServices'

class CategoriasController {
  async handle(req: Request, res: Response) {
    const { nome } = req.body
    const categoriasServices = new CategoriasServices()
    const response = await categoriasServices.execute({
      nome
    })
    return res.json(response)
  }
}

export { CategoriasController }