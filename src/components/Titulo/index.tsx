import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (p: Props) => (
  <TituloEstilo fontSize={p.fontSize}>{p.children}</TituloEstilo>
)

export default Titulo
