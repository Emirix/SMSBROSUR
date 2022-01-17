import Head from 'next/head'
import Image from 'next/image'
import s from "../styles/Header.module.css";
import Link from "next/link";
import Login from './Login';
import React,{useState} from "react"



export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [sidebar,setSidebar] = useState(false)

  return (
    <header className={s.header}>
        <Link href={"/"}><Image src="/svg/logo.svg" width={170} height={80} /></Link>
        <ul className="d-md-flex d-none m-0 p-0">
          <li>
            <Link href="/">Ana Sayfa</Link>
          </li>
          <li>
            <Link href="/sss">S.S.S</Link>
          </li>
          <li>
            <Link href="/hakkimizda">Hakkımızda</Link>
          </li>
          <li>
            <Link href="/iletisim">İletişim</Link>
          </li>
        </ul>
        <div className="buttons d-flex flex-column">
          <button className="button bg-mavi text-white mb-2">Kayıt Ol</button>
          <button className="button bg-white text-mavi" onClick={()=>{
            setIsOpen(true);
          }}>Giriş Yap</button>
        </div>

        <div className={s.burger + " d-flex d-md-none"} onClick={()=>{
          setSidebar(!sidebar)
        }}>
          <div className={s.line + " bg-mavi"}></div>
          <div className={s.line + " bg-mavi"}></div>
          <div className={s.line + " bg-mavi"}></div>
        </div>

        {sidebar ? <div className={s.sidebarBG}>
          <div className={s.side}>
            <ul>
              <li><Link href={"/"}>Ana Sayfa</Link></li>
              <li className={s.cizgi}></li> 
              <li><Link href={"/sss"}>S.S.S</Link></li>
              <li className={s.cizgi}></li> 

              <li><Link href={"/hakkimizda"}>Hakkımızda</Link></li>
              <li className={s.cizgi}></li> 

              <li><Link href={"/iletisim"}>İletişim</Link></li>

              <li className={s.cizgi + " mt-5 mb-2"}></li>
              <li><button className='button bg-mavi text-white d-block w-100' onClick={()=>{
            setIsOpen(true);
          }}>Giriş Yap</button></li> 
              <li><button className='button bg-white text-mavi d-block w-100'>Kayıt Ol</button></li> 

            </ul>
          </div>
        </div> : null}

        

          {isOpen ? <Login kapat={()=>{setIsOpen(false)}} /> : null}
      </header>
  )
}
