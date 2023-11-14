import prismaClient from '../../prisma'

interface CriarCategorias {
   nome: string
}

class CategoriasServices {
   async execute({ nome }: CriarCategorias) {
      const resposta = await prismaClient.category.create({
         data: {
            name: nome
         }
      })
   return resposta
   }

}

export { CategoriasServices}