import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import Footer from '../../components/Footer';
import Header from "../../components/Header";
import SoruKutusu from '../../components/SoruKutusu';
import s from "../../styles/anasayfa/Style.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Header/>

      <div className="container-fluid bg-acik">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <SoruKutusu sayi="1"/>
              <SoruKutusu sayi="2"/>
            </div>
            <div className="col-md-6">
              <div className={s.Akil + " bg-mavi"}>
                <h1>Aklınızda soru<br/><span>kalmasın!</span></h1>
                <p className='text-white fs-5'>Kafanıza takılan soruyu yazın. Ulaşıp cevap vereceğiz yada <span className='fw-bold text-black'>0232 224 31 90</span>’dan bize ulaşın</p>
                <form action="" className='d-flex justify-content-between'  >
                  <div className="form-group w-50">
                    <textarea placeholder='Sorunuz?' className='e-input' cols="30" rows="10"></textarea>
                  </div>
                  <div className="form-group w-50 px-4">
                    <input type="text" className='e-input w-100 ' placeholder='İsminiz' />
                    <input type="text" className='e-input w-100 mt-3' placeholder='İletişim (Numara veya e-posta)' />
                    <button className='button w-100 fw-bold text-mavi mt-2'>Gönder</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <SoruKutusu sayi="3"/>
              <SoruKutusu sayi="4"/>
            </div>
            <div className="col-md-6">
              <SoruKutusu sayi="5"/>
              <SoruKutusu sayi="6"/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}