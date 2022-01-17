import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Header from "../../components/Header";
import s from "../../styles/hakkimizda/Hakkimizda.module.css";
function index() {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className={s.c + " mt-5 d-flex flex-column align-items-center justify-content-center"}>
                    <h1>Hakkımızda</h1>
                    <p className="text-center w-50">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aut reprehenderit dolore laboriosam. Repudiandae exercitationem quia corrupti inventore dolorem delectus. Incidunt sint libero alias corporis tempora consequuntur quaerat nulla nemo.    
                    </p>
                    <Link href={"/iletisim"} ><button className="button bg-mavi text-white fs-5">Bize Ulaşın</button></Link>

                    <Image width={200} height={100} src={"/svg/logo-siyah.svg"}/>
                </div>
                
            </div>
        </div>
    )   
}

export default index
