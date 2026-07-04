import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinksBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinksBotao>Visualizar</LinksBotao>
  </Card>
)

export default Projeto
