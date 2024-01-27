import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
function BurgerButton(props) {
  return (
    <Burger>
  

  <div className={` burger ${props.clicked ? 'is-active': ''} ` } >
          <Link className="button is-danger is-outlined is-rounded has-text-centered has-text-weight-normal animate__animated animate__jello " to="/contacto">
            <strong>Saludar!</strong>
          </Link>
        </div>
       
  </Burger>
  )
}

export default BurgerButton

const Burger = styled.a`

position: absolute;
padding-top: 5px;
right: 10px;



}

.burger{
  @media(min-width:1023px){
    display:none
  }
  
}


`


