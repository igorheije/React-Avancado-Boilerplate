import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = ' TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo src="img/logo.svg" alt="Imagem de atomo React Avançado" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Ilustration src="img/illustration.svg" alt="" />
    </S.Wrapper>
  )
}

export default Main
