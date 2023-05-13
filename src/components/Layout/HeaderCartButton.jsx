import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './headerCartButton.module.css'
import CartContext from '../../store/CardContext'

const HeaderCartButton = (props) => {
  const cartctx = useContext(CartContext)

  const numberOfCartItems = cartctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  })

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
