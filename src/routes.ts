import { Router } from 'express'
import multer from 'multer'
import uploadConfig from './config/multer'
import { isAutenticado } from './Middleware/isAutenticado'

import { LoginController } from './Controller/Login/LoginController'
import { CriarusuariosController } from './Controller/Usuarios/CriarUsuariosController'
import { CategoriasController } from './Controller/Categorias/CategoriasController'
import { ListarCategoriasController } from './Controller/Categorias/ListarCategoriasController'
import { ProdutosController } from './Controller/Produtos/ProdutosController'
import { ListarUsuarioTokenController } from './Controller/Usuarios/ListarUsuarioTokenController'


const router = Router()
const upload = multer(uploadConfig.upload('./tmp'))

//Rotas de Logins
router.post('/LoginUsuarios', new LoginController().handle)

//Estrutura de Usuários
router.post('/CriarUsuarios', new CriarusuariosController().handle)
router.get('/ListarUsuarioToken', isAutenticado, new ListarUsuarioTokenController().handle)

//categorias
router.post('/Categorias', isAutenticado, new CategoriasController().handle)
router.get('/ListarCategorias', isAutenticado, new ListarCategoriasController().handle)
//produtos
router.post('/Produtos',  isAutenticado, upload.single('file'), new ProdutosController().handle)


export { router }