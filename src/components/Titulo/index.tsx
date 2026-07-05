import { Titulo as TituloEstilo } from './styles'
import type { ReactNode } from 'react'

export type Props = {
  children: ReactNode
  fontSize?: number
}

const Titulo = (p: Props) => (
  <TituloEstilo fontSize={p.fontSize}>{p.children}</TituloEstilo>
)

export default Titulo
