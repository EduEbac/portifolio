import { P } from './styles'
import type { ReactNode } from 'react'

export type Props = {
  children: ReactNode
  tipo?: 'principal' | 'secundario'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P tipo={tipo} fontSize={fontSize}>
    {children}
  </P>
)
export default Paragrafo
