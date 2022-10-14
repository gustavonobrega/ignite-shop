import { keyframes, styled } from '../../styles';
import * as Dialog from '@radix-ui/react-dialog';

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translateX(110%) ' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const contentClose = keyframes({
  '0%': { opacity: 1, transform: 'translateX(0) ' },
  '100%': { opacity: 0, transform: 'translateX(110%)' },
});

export const Content = styled(Dialog.Content, {
  width: '100%',
  maxWidth: '30rem',
  height: '100vh',
  padding: '4.5rem 3rem 3rem', 
  backgroundColor: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',

  position: 'absolute',
  right: 0,
  top: 0,

  '&[data-state="open"]': {
    animation: `${contentShow} 500ms`,
  },

  '&[data-state="closed"]': {
    animation: `${contentClose} 500ms`,
  },

  ul: {
    maxHeight: '24rem',
    overflow: 'auto',
    marginTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',

    '&::-webkit-scrollbar': {
      width: 8,
    },

    '&::-webkit-scrollbar-thumb': {
      borderRadius: '5px',
      backgroundColor: '$green500',

      '&:hover': {
        backgroundColor: '$green300',
      } 
    },

    '&::-webkit-scrollbar-track': {
      borderRadius: '5px',
      backgroundColor: '$gray300',
    },
  }
})

export const CloseButton = styled(Dialog.Close, {
  backgroundColor: 'transparent',
  border: 0,
  color: '$gray300',
  cursor: 'pointer',
  
  position: 'absolute',
  top: '1.75rem',
  right: '1.75rem',
})

export const CartItem = styled('li', {
  display: 'flex',
  alignItems: 'center', 
  listStyle: 'none',
  gap: '1.469rem',

  div: {
    p: {
      fontSize: '$md',
      color: '$gray300',
      lineHeight: 1.6,
    },
  
    span: {
      marginTop: '0.125rem',
      display: 'block',
      fontSize: '$md',
      color: '$gray100',
      fontWeight: 'bold',
      lineHeight: 1.6,
    },
  
    button: {
      marginTop: '0.5rem',
      backgroundColor: 'transparent',
      border: 0,
      color: '$green500',
      fontWeight: 'bold',
      fontSize: '1rem',
      lineHeight: 1.6,
      cursor: 'pointer',
      transition: 'color 0.2s',

      '&:hover': {
        color: '$green300',
      }
    },
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 96,
  height: 96,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ConfirmOrder = styled('div', {
  marginTop: 'auto',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    lineHeight: 1.6,

    '& + div': {
      marginTop: 7,
    },

    'span:last-child': {
      fontSize: '$md',
      color: '$gray300',      
    },

    'strong:first-child': {
      fontSize: '$md',
    },

    'strong:last-child': {
      fontSize: '$xl',     
    },
  },

  button: {
    marginTop: '3.438rem',
    width: '100%',
    height: '4.313rem',
    border: 0,
    borderRadius: 8,
    backgroundColor: '$green500',
    color: '$white',
    fontSize: '$md',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'backgroundColor 0.2s',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },
})