import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import s from "../styles/anasayfa/Style.module.css";
import Box from "../components/Box";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
<Header/>
    

      <div className="container-fluid p-0">
        <main className={s.ust}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className={s.AnaBilgi}>
                  <h1 className="mb-0">SMS BROŞÜR</h1>
                  <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi hic officia modi delectus cumque sunt provident sit, iure maiores? Consectetur dolor dignissimos sequi quas doloribus sit odio adipisci hic libero.</p>
                  <button className="button bg-mavi text-white fs-4 mt-3">Başla</button>
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="boxes ">
                <Box toRight icon={"/svg/para.svg"} baslik="TASARRUFLU SATIŞ" yazi="Broşürlerinizin artan baskı ve tasarım
masrafları için artım dijital sms
broşüre geçmenin tam zamanı "/>
                <Box toRight  icon={"/svg/para.svg"} baslik="TASARRUFLU SATIŞ" yazi="Broşürlerinizin artan baskı ve tasarım
masrafları için artım dijital sms
broşüre geçmenin tam zamanı "/>
                </div>
              </div>
            </div>

            
          </div>
        </main>
      </div>

      <div className="container-fluid p-0 pt-5 bg-white">
        <div className="row">
          <div className="col-md-6">
            <div className={s.icerik2 + " micerik"}>
              <h1>TEK TIK İLE</h1>
              <h2>10,000'LERCE</h2>
              <h3>Kişiye broşürünüzü yayınlayın</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, aperiam, repellat dolorem dolor voluptas quia quos aliquam inventore eaque modi voluptatum minus ad. Voluptatum ut facilis itaque animi optio culpa.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img className="telefon3" src={"/svg/3telefon.svg"} style={{width:"100%"}} />
          </div>
        </div>
      </div>

      <div className="container-fluid p-0 pb-5" style={{background:"#222"}}>
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap">

        <div className="cv50">

        <Box cl=" me-4   " icon={"/svg/para.svg"} baslik="TASARRUFLU SATIŞ" yazi="Broşürlerinizin artan baskı ve tasarım
masrafları için artım dijital sms
broşüre geçmenin tam zamanı "/>
        </div>

        <div  className="cv50">

<Box cl=" me-4   " icon={"/svg/para.svg"} baslik="TASARRUFLU SATIŞ" yazi="Broşürlerinizin artan baskı ve tasarım
masrafları için artım dijital sms
broşüre geçmenin tam zamanı "/>
</div>
        




          </div>
        </div>
      </div>

      <div className="container-fluid p-0 bg-white">
        <div className="container mt-4">
        <div className="row bg-white">
              <div className="col-md-6">
                <h1 className={s.h1}>SMS BROŞÜR NEDİR</h1>
                <p className="fs-5 mt-2">Lorem ipsum dolor sit amet, c onsectetur adipiscing elit. Cras feugiat hendrerit moles tie. Integer a or sit amet, c onsectetur adipiscing elit. Cras feugiat hendrerit moles tie. Integer tincidunt dolor. erdumLo onsectetur adipiscing elit. Cras feugiat hendrerit moles tie. Integer a tincidunt dolor. erdum</p>
              </div>

              <div className="col-md-6 pb-4">
                <div className={s.ResimBoxes}>
                <iframe height={300} src="https://www.youtube.com/embed/QtXby3twMmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                  
                </div>
              </div>
            </div>
        </div>
      </div>


    

      <div className="container-fluid " >

        <div className="row">
          <div className={s.fSol + " col-md-6"}>
            <div className={s.icerik}>
                <img src="/svg/3pc.svg" alt="" className="w-100" />
                <h1 className={s.h1 + " mt-3 text-center"}>Tüm Platformlardan Erişim</h1>
                <p className="text-center text-white w-75">Lorem ipsum dolor sit amet, c
onsectetur adipiscing elit.
 Cras feugiat hendrerit moles
tie. Integer a tincidunt dolor. erdumLo
</p>
            </div>
          </div>
          <div  className={s.fSag + " col-md-6 pb-3"}>
            <div className={s.icerik}>
              <h1 className={s.beyazH1 + " text-center text-md-start"}>TÜM AVANTAJLARDAN FAYDALANMAK<br/>
<span>İÇİN ŞİMDİ KAYDOL</span></h1>
            </div>

            <div className="buttons d-flex flex-column w-50 mx-auto">
          <button className="button bg-mavi text-white mb-2">Kayıt Ol</button>
          <button className="button bg-white text-mavi">Giriş Yap</button>
        </div>
            
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}