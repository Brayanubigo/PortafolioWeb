import { ErrorResponse } from '@remix-run/router';
import React ,{ useRef, useState }from 'react';
import Avatar from '../assets/lupe.png'
import emailjs from '@emailjs/browser';
import validator from 'validator'
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
function Contact(datos) {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [massage, setMassage] = useState('');
const [emailError, setEmailError] = useState();   


const resetForm = () => {
        setName("")
        setEmail("")
        setMassage("")
      }
    
  const form = useRef();
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm(form.current);

  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Email valido')
      return true;
    } else {
      setEmailError('Ingresa un email valido')
      return false;
    }
  }

 
const sendEmail = (e) => {
  e.preventDefault();
  
  if (!name == "" && !email == "" && !massage == ""){
  emailjs.sendForm('service_2se1r8r', 'template_kyvdk1n', e.target, 'X5zHYYE_N-Z9EkKUg')
    .then((result) => {
      Swal.fire({
        title: 'Enviado!',
        text: 'Su correo fue enviado!',
        icon: 'success',
        confirmButtonText: 'Ok'
      })  
      console.log(result.text);
      resetForm();
    }, (error) => {
        console.log(error.text);
    });

  }else{
    Swal.fire({
      title: 'Error',
      text: 'Todos los campos deben ser llenados',
      icon: 'error',
      confirmButtonText: 'Ok'
    })  
  }
};






    return (
    <div className='separate'>
        <nav className="navbar is-transparent is-planner animate-fadeDown is-mobile">
      <div className="container">
        <div className="navbar-brand navbar-logo-cont"><a className="navbar-item logo-cont" href="/"> <svg className="svg-inline--fa fa-square-terminal fa-stack-1x fa-stack-1x2 has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="square-terminal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M106.4 147.9L218.4 243.9C221.1 246.9 224 251.3 224 256C224 260.7 221.1 265.1 218.4 268.1L106.4 364.1C99.7 369.9 89.6 369.1 83.85 362.4C78.1 355.7 78.88 345.6 85.59 339.9L183.4 256L85.59 172.1C78.88 166.4 78.1 156.3 83.85 149.6C89.6 142.9 99.7 142.1 106.4 147.9V147.9zM368 352C376.8 352 384 359.2 384 368C384 376.8 376.8 384 368 384H208C199.2 384 192 376.8 192 368C192 359.2 199.2 352 208 352H368zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 64H64C46.33 64 32 78.33 32 96V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V96C416 78.33 401.7 64 384 64z"></path></svg></a></div>
        <div className="navbar-menu" id="navMenu">
          <div className="navbar-end">
            <div className="navbar-item">
              <p className="buttons"><a className="button is-medium tooltip is-tooltip-bottom" data-tooltip="Reset" onClick={() => resetForm()}><span className="icon is-small"><svg className="svg-inline--fa fa-undo-alt" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="undo-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"></path></svg></span></a><a className="button is-medium tooltip is-tooltip-bottom" data-tooltip="Close" href="/"><span className="icon is-small"><svg className="svg-inline--fa fa-times" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path></svg></span></a></p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div className="is-form-page">
      <section className="is-white has-text-centered">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-8  "><img className="avatar" src={Avatar}/>
              <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Gracias por tomarte el tiempo de escribir. Dime, ¿Como te puedo ayudar hoy?</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="is-white">
        <div className="container">
          <form id="form" ref={form} accept-charset="UTF-8" action="" method="POST" onSubmit={sendEmail}>
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="field">
                  <label className="label">Nombre</label>
                  <div className="control is-expanded ">
                    <input  className="input is-large input-name-ct" id="nombre" name="nombre" type="text" required="" value={name} onChange={(e) => setName(e.target.value)}/>
             
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control is-expanded">
                    <input className="input is-large input-name-ct" id="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value); validateEmail(e) }}/>
                    <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-centered">
              <div className="column">
                <div className="field">
                  <label className="label">Mensaje</label>
                  <div className="control is-expanded input-name-ct ">
                    <textarea className="textarea is-large " id="message" name="message" rows="5" required="" value={massage} onChange={(e) => setMassage(e.target.value)}></textarea>
                  </div>
                </div>
                <div className="field is-hidden">
                  <label className="is-hidden"></label>
                  <div className="control is-expanded is-hidden ">
                    <input className="is-hidden" name="bot_vortex" type="hidden"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns is-centered ">
              <div className="column is-one-third ">
                <div className="field ">
                  <div className="control ">
                
                    <button className=" move button is-danger is-outlined is-rounded is-medium is-fullwidth animate__animated animate__jello"><strong>Enviar!</strong></button></div>
                    
                 
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
   </div>
  )
}

export default Contact