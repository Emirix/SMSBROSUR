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
                    <h1>İletişim</h1>
                    
                </div>
                
            </div>
        </div>
    )   
}

export default index
