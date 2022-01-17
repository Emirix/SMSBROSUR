import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4 className="fw-bold text-mavi text-center p-0 mb-0 mt-3">
              Hakkımızda
            </h4>
            <p className="text-center text-white mt-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
              perspiciatis doloribus error laboriosam tempore esse. Assumenda
              amet nobis sapiente enim aliquam quibusdam unde molestias
              molestiae pariatur. At illo natus ratione.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4 className="fw-bold text-mavi text-center p-0  mt-3 mb-2">
              Sayfalar
            </h4>

            <ul className="m-0 p-0">
              <li>
                <Link href={"/"}>Ana Sayfa</Link>
              </li>
              <li>
                <Link href={"/sss"}>Sıkça Sorulan Sorular</Link>
              </li>
              <li>
                <Link href={"/hakkimizda"}>Hakkımızda</Link>
              </li>
              <li>
                <Link href={"/iletisim"}>İletişim</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4 className="fw-bold text-mavi text-center p-0  mt-3 mb-2">
              Şartlar ve Politikalar
            </h4>

            <ul className="m-0 p-0">
              <li>
                <Link href={"/"}>Kişisel Verilerin Korunması</Link>
              </li>
              <li>
                <Link href={"/"}>Kullanım Şartları</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4 className="fw-bold text-mavi text-center p-0  mt-3 mb-2">
              İletişim
            </h4>

            <ul className="m-0 p-0">
              <li>0232 332 28 74</li>
              <li>0850 346 88 74</li>
              <li>0553 070 88 74</li>
              <li>Konak/İzmir</li>
            </ul>
          </div>
        </div>
        <div className="row  p-1 " style={{background:"#222"}}>
          <div className="col-12">
            <div className="fugrid">
              <div className="sol d-flex align-items-center">
                <img src="/svg/logo.svg " style={{ width: 90 }} alt="" />
                <div className="text-white fs-6 ms-3 d-lg-block d-none">
                  Buraya slogan yazılacak
                </div>
              </div>

              <div className="icons text-center">
                  <div className="d-flex align-items-center w-100 justify-content-center">
                     <a href={"/s"}><img src="/wp.svg" alt="" /></a>
                     <a href={"/sx"}><img src="/insta.png" alt="" /></a>
                  </div>
              </div>
              <div className="text-mavi fw-700 text-end ">{new Date().getFullYear(   )}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
