import React from 'react'
import styled from 'styled-components'
function BurgerButton(props) {
  return (
    <Burger>
    <div onClick={props.handleClick}>
        <a role="button" 
        className={`navbar-burger ${props.clicked ? 'is-active': ''} ` } 
        aria-label="menu" 
        aria-expanded="false"
        >
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    
  </a> 
    
  </div>
  <div class="navbar-menu buttons burger">
          <a class="button is-danger is-outlined is-rounded has-text-centered has-text-weight-normal animate__animated animate__jello ">
            <strong>Saludar!</strong>
          </a>
        </div>
  </Burger>
  )
}

export default BurgerButton

const Burger = styled.a`
position: absolute;
top: 8px;
right: 16px;
margin-right:auto;

}

.burger{
  @media(min-width:1023px){
    display:none
  }
  
}

`

