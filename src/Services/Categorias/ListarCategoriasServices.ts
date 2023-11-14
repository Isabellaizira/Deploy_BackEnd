import prismaClient from '../../prisma'


class ListarCategoriasServices {
    async execute() {
        const resposta = await prismaClient.category.findMany()
        return resposta
    }
}
export { ListarCategoriasServices }