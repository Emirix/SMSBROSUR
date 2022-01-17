import Head from 'next/head'
import Image from 'next/image'
import s from '../styles/Box.module.css'

export default function Home({toRight,icon,baslik,yazi,cl=""}) {
  return (
    <div className={s.Box + cl+  (toRight ? " ms-auto " : "")}>
        
        <div className={s.Sol + " d-flex justify-content-center align-items-center boxsol"}>
           <img src={"/svg/para.svg"} />
        </div>

        <div className={s.Sag + " boxsag"}>
            <h1>{baslik}</h1>
            <p>{yazi}</p>
        </div>

    </div>
  )
}
