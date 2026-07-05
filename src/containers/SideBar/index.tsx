import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { BotaoTema, Descricao, SideBarContainer } from './styles'

const SideBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Eduardo Figueiredo Basso</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        eduebac
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SideBar
