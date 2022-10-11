import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginTop: '3rem'
  },

  p: {
    marginTop: '2rem',
    fontSize: '$xl',
    color: '$gray300',
    textAlign: 'center',
    maxWidth: 560,
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',
    textDecoration: 'none',
    transition: 'color 0.2s',

    '&:hover': {
      color: '$green300',
    },
  },

  ul: {
    display: 'flex',
    listStyle: 'none',

    li: {
      marginLeft: '-1.5rem'
    }
  }
})

export const ImageContainer = styled('div', {
  width: '100%',
  borderRadius: '50%',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})