import React from 'react'
import styled from 'styled-components'
import Avatar from '../assets/lupe.png'
import Project from '../assets/logo.webp'
import Project2 from '../assets/duoc.jpg'
import Project3 from '../assets/Buffon.jpg'
import node from '../assets/pngwing.png'
import mongo from '../assets/mongo.png'
import tailwind from '../assets/tailwind.png'
import reactlogo from '../assets/logo-react-icon.png'
import Fondo from '../assets/hero-devices.svg';
import antlogo from '../assets/ant-design-logo.png'
import oracle from '../assets/Oracle.png'
import python from '../assets/python.png'
import postgrest from '../assets/postgresql_elephant.png'
import logolbla from '../assets/acacias.jpg'
import matrialUI from '../assets/material.png'
import {  Link } from 'react-router-dom';
import "../assets/hero-devices.svg";
import '../CSS/Imagen.css'
import 'animate.css';
import '../CSS/text.css'

function Content() {
  return (
    <>
   <section className="hero is-white has-text-centered">
  <div className="hero-body">
    <div className="container">
      
      <div>
        <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">
      Developer Full Stack
      </h1>
      <h2 className="subtitle is-size-4-tablet">
      Diseño y codifico cosas hermosas y minimalistas, me encanta lo que hago.</h2>
        <div className="image is-128x128 center">
            <img className="is-rounded" src={Avatar}/>
      
            </div>
      </div>
    </div>
  </div>
  
  <div className="hero-foot ">
    <div className="container imgFondo ">
     <img className="is-bottom" src={Fondo} alt="" />
    </div>
  </div>
  
</section>
<section className="section is-medium is-primary has-text-centered is-long margin  ">
    <div className="container ">
    <div className="columns is-centered ">
        <div className="column is-three-fifths  ">
        <h1 className="title is-size-2-desktop is-size-4-mobile " >Hola, Yo soy Brayan. Gusto en conocerte.</h1>
        <h2 className="subtitle is-size-5-desktop has-text-weight-normal text-margin" >Desde que comencé mi viaje como programador, he realizado trabajos remotos pequeñas empresas y colaborado con personas talentosas para crear productos digitales para uso comercial y de consumo. Soy naturalmente curioso y trabajo perpetuamente para mejorar mis habilidades.</h2>
        </div>
    </div>
    </div>

</section>

<section className='section skills has-text-centered'>
  <div className='container is-narrow'>
    <div className='box'>
      <div className='columns is-centered'>
        <div className='column'>
          <span className="fa-stack fa-2x">
          <svg className="svg-inline--fa fa-circle fa-stack-2x has-text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512" data-fa-i2svg="">
            <path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 
            0 256S114.6 512 256 512z"></path></svg>
            <svg className="svg-inline--fa fa-layer-plus fa-stack-1x has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="layer-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M448 64H488C496.8 64 504 71.16 504 80C504 88.84 496.8 96 488 96H448V136C448 144.8 440.8 152 432 152C423.2 152 416 144.8 416 136V96H376C367.2 96 360 88.84 360 80C360 71.16 367.2 64 376 64H416V24C416 15.16 423.2 8 432 8C440.8 8 448 15.16 448 24V64zM277.8 132.7L495.2 230.1C505.4 234.7 512 244.8 512 256C512 267.2 505.4 277.3 495.2 281.9L277.8 379.3C270.1 382.4 263.5 384 256 384C248.5 384 241 382.4 234.2 379.3L16.76 281.9C6.561 277.3 .0003 267.2 .0003 256C.0003 244.8 6.561 234.7 16.76 230.1L234.2 132.7C241 129.6 248.5 128 256 128C263.5 128 270.1 129.6 277.8 132.7V132.7zM37.27 256L247.2 350.1C249.1 351.4 252.1 352 256 352C259 352 262 351.4 264.8 350.1L474.7 256L264.8 161.9C262 160.6 259 160 256 160C252.1 160 249.1 160.6 247.2 161.9L37.27 256zM37.27 384L247.2 478.1C249.1 479.4 252.1 480 256 480C259 480 262 479.4 264.8 478.1L474.7 384L441.5 369.1C433.4 365.5 429.8 356 433.4 347.9C437 339.9 446.5 336.3 454.5 339.9L495.2 358.1C505.4 362.7 512 372.8 512 384C512 395.2 505.4 405.3 495.2 409.9L277.8 507.3C270.1 510.4 263.5 512 256 512C248.5 512 241 510.4 234.2 507.3L16.76 409.9C6.561 405.3 0 395.2 0 384C0 372.8 6.561 362.7 16.76 358.1L57.46 339.9C65.52 336.3 74.99 339.9 78.6 347.9C82.21 356 78.61 365.5 70.54 369.1L37.27 384z"></path></svg>
          </span>
            <h1 className="title is-size-4 is-spaced"> BackEnd Developer</h1>
            <p> Codificar todo el funcionamiento de atras, para dar vida a las consultas de la pagina.</p>
          
            <p className="list-title has-text-primary has-text-weight-normal">Conocimiento:</p>
            <ul className='p-text'>
                <li>Javascript </li>
                <li>Node Js</li>
                <li>MongoDB</li>
                <li>MySql</li>
                <li>Postgrest Sql</li>  
                <li></li>
                <li className='ulitmoLi'></li>
                
               


            </ul>
        </div>

        <div className='column'>
          <span className="fa-stack fa-2x">
          <svg className="svg-inline--fa fa-circle fa-stack-2x has-text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 512 512" data-fa-i2svg="">
            <path fill="currentColor" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 
            0 256S114.6 512 256 512z"></path></svg>
            <svg className="svg-inline--fa fa-layer-plus fa-stack-1x has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="layer-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M448 64H488C496.8 64 504 71.16 504 80C504 88.84 496.8 96 488 96H448V136C448 144.8 440.8 152 432 152C423.2 152 416 144.8 416 136V96H376C367.2 96 360 88.84 360 80C360 71.16 367.2 64 376 64H416V24C416 15.16 423.2 8 432 8C440.8 8 448 15.16 448 24V64zM277.8 132.7L495.2 230.1C505.4 234.7 512 244.8 512 256C512 267.2 505.4 277.3 495.2 281.9L277.8 379.3C270.1 382.4 263.5 384 256 384C248.5 384 241 382.4 234.2 379.3L16.76 281.9C6.561 277.3 .0003 267.2 .0003 256C.0003 244.8 6.561 234.7 16.76 230.1L234.2 132.7C241 129.6 248.5 128 256 128C263.5 128 270.1 129.6 277.8 132.7V132.7zM37.27 256L247.2 350.1C249.1 351.4 252.1 352 256 352C259 352 262 351.4 264.8 350.1L474.7 256L264.8 161.9C262 160.6 259 160 256 160C252.1 160 249.1 160.6 247.2 161.9L37.27 256zM37.27 384L247.2 478.1C249.1 479.4 252.1 480 256 480C259 480 262 479.4 264.8 478.1L474.7 384L441.5 369.1C433.4 365.5 429.8 356 433.4 347.9C437 339.9 446.5 336.3 454.5 339.9L495.2 358.1C505.4 362.7 512 372.8 512 384C512 395.2 505.4 405.3 495.2 409.9L277.8 507.3C270.1 510.4 263.5 512 256 512C248.5 512 241 510.4 234.2 507.3L16.76 409.9C6.561 405.3 0 395.2 0 384C0 372.8 6.561 362.7 16.76 358.1L57.46 339.9C65.52 336.3 74.99 339.9 78.6 347.9C82.21 356 78.61 365.5 70.54 369.1L37.27 384z"></path></svg>
          </span>
            <h1 className="title is-size-4 is-spaced"> FrontEnd Developer</h1>
            <p> Codificar vistas desde cero y disfrutar el proceso, dando vida a las ideas en el navegador.</p>
            <p className="list-title has-text-primary has-text-weight-normal">Cosas que me gusta diseñar:</p>
            <p >Web, Apps</p>
            <p className="list-title has-text-primary has-text-weight-normal">Conocimientos:</p>
            <ul className='p-text'>
                <li>Bulma</li>
                <li>Bootstrap</li>
                <li>Github</li>
                <li>React Js</li>
                <li>Material UI</li>
                <li >Tailwind</li>
                
               


            </ul>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="section projects is-medium is-white has-text-centered">
    <div className="container is-narrow">
      <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Mis trabajos recientes.</h1>
      <h2 className="subtitle is-size-5-desktop">Aquí hay algunos proyectos anteriores en los que he trabajado. ¿Quieres ver más? <Link className="has-text-weight-normal"  to='/contacto'>Email</Link>
       </h2>
    <div className='project-grid'>
        <div className="columns is-multiline is-mobile ">
          <div className="column is-12-mobile  " >
              <figure className="image is-3by2">
                  <img src={Project} alt="" />
                  <figcaption className=''>
                    <h1 className="title is-size-5 is-size-4-widescreen"> Sistema de ventas MetalVai </h1>
                    <ul className="columns is-mobile par-color ">
                      <li className=""> <figure className="image is-32x32 imagen">
  <img className="is-rounded " src={node}/>
</figure> Node js</li>
                      <li>  <figure className="image is-32x32 imagen">
  <img className="is-rounded" src={postgrest}/>
</figure> Postgrest Sql</li>
<li>  <figure className="image is-32x32 imagen">
   <img className="is-rounded" src={reactlogo}/>
 </figure> React JS</li>

            
                    </ul>
                    <a className="button is-primary is-outlined is-rounded " href="https://github.com/Brayanubigo/Metalvai" target="_blank"> <span>Visitar</span></a>
                  </figcaption>

                  
              </figure>
          </div>
          
          <div className="column is-12-mobile  ">
              <figure className="image is-3by2">
                  <img src={logolbla} alt="" />
                  <figcaption>
                    <h1 className="title is-size-5 is-size-4-widescreen"> LBLA Solicitudes de insumo</h1>
                    <ul className="columns is-mobile par-color ">
                      <li className=""> <figure className="image is-32x32 imagen">
  <img className="is-rounded " src={node}/>
</figure> Node js</li>
                      <li>  <figure className="image is-32x32 imagen">
  <img className="is-rounded" src={mongo}/>
</figure> MongoDB</li>
                     
                      <li><figure className="image is-32x32 imagen">
  <img className="is-rounded" src={reactlogo}/>
</figure>React Js</li>
                    </ul>
                    <a className="button is-primary is-outlined is-rounded " href="https://github.com/Brayanubigo/Portafoliov2" target="_blank">Visitar</a>
                  </figcaption>
              </figure>
          </div>



          <div className="column is-12-mobile">
              <figure className="image is-3by2">
                  <img src={Project3} alt="" />
                  <figcaption>
                    <h1 className="title is-size-5 is-size-4-widescreen"> Owlypragh</h1>
                    <ul className="columns is-mobile par-color ">
                      <li className=""> <figure className="image is-32x32 imagen">
  <img className="is-rounded " src={node}/>
</figure> Node js</li>
                      <li>  <figure className="image is-32x32 imagen">
  <img className="is-rounded" src={mongo}/>
</figure> MongoDB</li>
                      
                      <li><figure className="image is-32x32 imagen">
  <img className="is-rounded" src={reactlogo}/>
</figure>React Js</li>
                    </ul>

                    <a className="button is-primary is-outlined is-rounded " href="https://owlypragh.vercel.app/inicio" target="_blank" >Visitar</a>
                  </figcaption>
              </figure>
          </div>
       

       
        </div>
    </div>
    </div>


    <div className="container is-narrow">
     
     <div className='project-grid'>
         <div className="columns is-multiline is-mobile ">
           
           <div className="column is-12-mobile  " >
           
           </div>
           <div className="column is-12-mobile  ">
      
           </div>
           <div className="column is-12-mobile">
            
           </div>
        
 
        
         </div>
     </div>
     </div>
</section>



 


</>

 
  )
}

export default Content

