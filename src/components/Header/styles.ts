import { styled } from '../../styles';

export const HeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
})

export const CartButton = styled('button', {
  height: '3rem',
  width: '3rem',
  backgroundColor: '$gray800',
  border: 0,
  borderRadius: 6,
  color: '$gray300',
  cursor: 'pointer',
  position: 'relative',
  marginLeft: 'auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    height: '1.8rem',
    width: '1.8rem',
    borderRadius: '50%',
    backgroundColor: '$green500',
    border: '3px solid #121214',
    color: '$white',
    fontWeight: 'bold',

    position: 'absolute',
    top: '-11px',
    right: '-11px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})