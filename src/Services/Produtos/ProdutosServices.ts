import prismaClient from '../../prisma'

interface CriarProdutos {
    nome: string
    fabricante: string
    quantidade: string
    preco: string
    banner: string
    categoriaID: string
}

class ProdutosServices {
    async execute({ nome, fabricante, quantidade, preco, banner, categoriaID }: CriarProdutos) {

        const produtos = await prismaClient.products.create({
            data: {
                name: nome,
                provider: fabricante,
                quantity: quantidade,
                value: preco,
                banner: banner,
                categoryID: categoriaID

            }
        })
        return produtos
    }
}

export { ProdutosServices}