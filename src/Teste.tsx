import styled from 'styled-components'

type BotaoProps = {
  $principal?: boolean
  $fontSize?: string
  $fontFamily?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(p) => (p.$principal ? 'green' : 'blue')};
  font-size: ${(p) => p.$fontSize || '16px'};
  font-family: ${(p) => p.$fontFamily || 'sans-serif'};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao $fontSize="18px" $principal>
        Enviar
      </Botao>
      <Botao $fontSize="14px">Cancelar</Botao>
      <BotaoPerigo as="a">
        <span>Perigo Não Clique</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
