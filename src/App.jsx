import "./styles/css.css"
import {CheckCircleOutlined, CheckOutlined, CloseCircleOutlined, CloseOutlined, DownloadOutlined, ExclamationCircleOutlined, GithubOutlined, LinkedinOutlined, UserOutlined, WhatsAppOutlined} from '@ant-design/icons'
import Typewriter from 'typewriter-effect';
import imagenProyecto from './assets/proyecto-1.png'
import imagenProyecto2 from './assets/proyecto-2.png'
import imagenProyecto3 from './assets/proyecto-3.png'
import imagenProyecto4 from './assets/proyecto-4.png'
import imagenProyecto5 from './assets/proyecto-5.png'
import imagenProyecto6 from './assets/proyecto-6.png'
import axios from 'axios';
import { useState } from "react";
import Spinner from "./components/Spinner";

function App() {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const [cargando, setCargando] = useState(false);

  const [enviado, setEnviado] = useState(false);
  const [noEnviado, setNoEnviado] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    if ([nombre, email, mensaje].includes('')) {
      return;
    }

    setCargando(true);

    
    try {
      const {data} = await axios.post(`${import.meta.env.VITE_BACKEND}`, {nombre, emailReclutador: email, mensaje })

       setCargando(false)
       setEnviado(true);

       setNombre('')
       setEmail('')
       setMensaje('')

      setTimeout(() => {
        setEnviado(false)
      }, 3000);
      
    } catch (error) {
      setCargando(false)
      setNoEnviado(true);
      setTimeout(() => {
        setNoEnviado(false)
      }, 2000);
    }

   
  }


  return (
   <>
    <section className="banner">
        <div className="banner-content">
          <div className="contenedor">
            <div className="contenedor-maquina">
                <Typewriter
                  options={{
                    strings: ['#Nahuel'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </div>

            <h2>full stack developer</h2>

            <div className="icons">
                <a href="https://github.com/nahul133" className="circulo">
                  <GithubOutlined style={{color: 'white', background: '#0062ffb5', fontSize:'25px'}}/>
                </a>
                <a href="https://www.linkedin.com/in/nahuel-doval-599b52231/" className="circulo" style={{color: 'white', background: '#0062ff', fontSize:'25px'}}>
                  <LinkedinOutlined />
                </a>
                <a className="circulo" style={{color: 'white', background: '#0062ff', fontSize:'25px'}}>
                 <WhatsAppOutlined />
                </a>
            </div>

            <a href="#form" className="boton" type="button" style={{ height: 40, width:100 }}>Contactar</a>
          </div>
        </div>
    </section>

    <section className="sobre-mi">
        <h1>Sobre mi</h1>

        <div className="contenedor-sobre-mi">

            <div className="circulo-xl">
              <UserOutlined style={{fontSize:'15rem', color:'white'}}/>     
            </div>
            <div className="sobre-mi-texto">
              <p>Me considero una Persona responsable, Honesta y Muy trabajadora Dispuesto a Aprender y Progresar</p>

              <p>Las Tecnologías Que Más Utilizo Son React, Express y MongoDB como base de datos </p>  

              <h2>Habilidades</h2>

              <div className="habilidades">
                  <div><CheckCircleOutlined style={{color:'#0ad249', fontSize:'25px'}}/> <span>React</span></div>
                  <div><CheckCircleOutlined style={{color:'#0ad249', fontSize:'25px'}}/> <span>Git</span></div>
                  <div><CheckCircleOutlined style={{color:'#0ad249', fontSize:'25px'}}/> <span>Express</span> </div>
                  <div><CheckCircleOutlined style={{color:'#0ad249', fontSize:'25px'}}/><span>MongoDB</span> </div>
                  <div><CheckCircleOutlined style={{color:'#0ad249', fontSize:'25px'}}/> <span>Tailwind</span></div>
                  <div><CheckCircleOutlined style={{color:'#0ad249', fontSize:'25px'}}/><span>PostMan</span> </div>
                  <div><CheckCircleOutlined style={{color:'#0ad249', fontSize:'25px'}}/> <span>SQL</span></div>
                  <div><CheckCircleOutlined style={{color:'#0ad249', fontSize:'25px'}}/> <span>Web Sockets</span></div>
              </div>

              <a href="../public/CVNAHUELDOVAL_pre.pdf" download>
                Descargar CV   
              </a>      
            </div>      

        </div>

    </section>

    <section className="proyectos">
        <h1>Mis Proyectos <span> {`</>`} </span></h1>

        <div className="contenedor-proyectos">
          <div className="contenedor-grid">
              <a href="https://cheerful-hamster-365fda.netlify.app/auth">
                <img src={imagenProyecto}/>
                <p style={{width: '300px', color:'white'}}>Chat Creado con socket.io, React y Node.js</p>
              </a>
              <a href="https://festival-musical-nd.netlify.app/">
                <img src={imagenProyecto2}/>
                <p style={{maxWidth: '300px', color:'white'}}>Pagina Web creada con HTLM, CSS y Java Script</p>  
              </a>
              <a>
                <img src={imagenProyecto3}/>
                <p style={{maxWidth: '300px', color:'white'}}>Tienda o Kiosco de Comida Rapida Creado Con Next.js</p> 
              </a>
              <a>
                <img src={imagenProyecto4}/>
                <p style={{maxWidth: '300px', color:'white'}}>Administrador de Proyectos CRM con React y Node.js</p> 
              </a>
              <a>
              <img src={imagenProyecto5}/>
              <p style={{maxWidth: '300px', color:'white'}}>Sitio similar a Firefox Send construido Con React y Node.js</p> 
             </a>
             <a href="https://calculadora-presupuesto-react-nd.netlify.app/">
              <img src={imagenProyecto6} />
              <p style={{maxWidth: '300px', color:'white'}}>Planificador de Gastos</p> 
            </a>
          </div>
        </div>
    </section>

    <section className="educacion">
        <h1 >Educación</h1>    

        <p>Me considero un desarrollador auto-didacta, Todos mis conocimientos Desarrollando Software los adquirí atravez de plataformas de estudio</p>
        <p>Certificados Obtenidos:</p>
        <DownloadOutlined style={{ display:'flex', justifyContent:'center', alignItems:'center', marginTop:'2rem', fontSize:'2rem', cursor:'pointer' }}/>
         
    </section>

    <section className="contacto">
      <div className="contenedor-contacto">
        <h1>Contacto</h1>

        <p>Tenés una Propuesta acorde a mi perfil? Hablemos!</p>

        <p>Tenés una Proyecto en mente? Hablemos!</p>
      </div>

      <form id="form" className="formulario-contacto" onSubmit={ev => handleSubmit(ev)}>

        <input type="text" placeholder="Nombre" className="focus" value={nombre} onChange={e => setNombre(e.target.value)}/>

        <input type="text" placeholder="Email" className="focus" value={email} onChange={e => setEmail(e.target.value)}/>

        <textarea placeholder="Mensaje" className="focus" value={mensaje} onChange={e => setMensaje(e.target.value)}/>
        
        <button className={`boton-formulario ${cargando || enviado || noEnviado && 'disabled' }`}  disabled={ cargando ? true : false }>{ cargando ? <Spinner /> : enviado ? <CheckOutlined style={{fontSize:'1.5rem', color:'#4fff7b', padding:'0px', margin:'0px'}}/> : noEnviado ? <ExclamationCircleOutlined style={{fontSize:'1.5rem', color:'#d01d1d81', padding:'0px', margin:'0px'}} /> : 'Enviar' }</button>
          

      </form>
        
    </section>
   </> 
  )
}

export default App
