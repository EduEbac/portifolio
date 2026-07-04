import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores velit,
      distinctio quisquam nam eligendi perferendis nobis illum dolorem, eum
      numquam rerum dolore porro ipsam eos quos nesciunt? Dolore, corporis
      nihil.
    </Paragrafo>
    <GithubSecao>
      <img src="/image/imgperf1.jpeg" alt="perfil 1" />
      <img src="/image/imgperf2.jpeg" alt="perfil 2" />
    </GithubSecao>
  </section>
)

export default Sobre
