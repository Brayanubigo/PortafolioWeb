import React from 'react'
import { useState } from 'react';
import BurgerButton from './BurgerButton';
import styled from 'styled-components';
import Logo from '../assets/pngwing.com (1).png';
import { BrowserRouter as Router ,  Route, Link, Routes } from 'react-router-dom';

function Header() {
    const [clicked, setClicked] = useState(false)
     const handleClick = () =>{
        setClicked(!clicked);
     }
    return (
    <Nav> 
     <nav className="navbar back" role="navigation" aria-label="main navigation">
  <div className='container'>
  <div className="navbar-brand navbar-logo">
    <a className="navbar-item" href="/">
   <div className='logo'>
   
   <svg className="svg-inline--fa fa-square-terminal fa-stack-1x fa-stack-1x2 has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="square-terminal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M106.4 147.9L218.4 243.9C221.1 246.9 224 251.3 224 256C224 260.7 221.1 265.1 218.4 268.1L106.4 364.1C99.7 369.9 89.6 369.1 83.85 362.4C78.1 355.7 78.88 345.6 85.59 339.9L183.4 256L85.59 172.1C78.88 166.4 78.1 156.3 83.85 149.6C89.6 142.9 99.7 142.1 106.4 147.9V147.9zM368 352C376.8 352 384 359.2 384 368C384 376.8 376.8 384 368 384H208C199.2 384 192 376.8 192 368C192 359.2 199.2 352 208 352H368zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 64H64C46.33 64 32 78.33 32 96V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V96C416 78.33 401.7 64 384 64z"></path></svg>
   </div>
    </a>

  <BurgerButton clicked={clicked} handleClick={handleClick}/>
  </div>
  
  <div id="navbarBasicExample" className="navbar-menu">

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons ">
          <Link class="button is-danger is-outlined is-rounded has-text-weight-normal animate__animated animate__jello" to='/contacto'>
            <strong>Saludar!</strong>
          </Link>
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>
    </Nav>
  )
}

export default Header


const Nav = styled.nav`
    a{
    
      margin:0px;
      margin-left:100px;
     
      
      }
    }
    .container{
      
   
      padding:6px;
      padding-right: 50px;
      padding-left: auto;
      margin-top:10px;
      margin-right:auto;
      margin-left:auto;
      

    }
    

      .button.is-primary.is-outlined{
      
      border-color: #6E07F3; 
      color: #6E07F3; 
      margin-left:50px;
      hover: red;
    
    


    }
   
    margin:0;
    padding:0;
    margin-top:20px;

`