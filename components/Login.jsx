import React,{useState} from 'react'
import styled from 'styled-components';
import s from '../styles/Login.module.css'

function Login({show,kapat}) {

    const [smsMode,setSmsMode] = useState(false)
    
    return (
        <div className={s.loginBG}>
            <div className={s.loginContainer}>
                <div className={s.loginGradient + " lgr"}>
                    {!smsMode ? 
                    <div className="w-50 ms-auto cx">
                        <h1>Giriş Yap</h1>
                        <div className={s.ps}>Hoşgeldiniz</div>
                        <form action="" className='mt-2' onSubmit={e=>{
                  e.preventDefault()
                }}>
                            <input type="text" className="e-input w-100 input-parlat" placeholder="Telefon Numarası" />
                            <input type="text" className="e-input w-100 input-parlat mt-2" placeholder="Şifre" />
                            <div className="row mt-2">
                                <div className="col-md-6 col-12 mb-2 mb-md-0">
                                <button className='button bg-gri text-white w-100'>Yeni Kayıt</button>

                                </div>
                                <div className="col-md-6 col-12">
                                <button className='button bg-mavi text-white w-100'>Giriş Yap</button>

                                </div>
                            </div>
                        </form>

                        <div className={s.footer}>
                            <div className={s.ps}>Şifremi unuttum</div>
                            <div className={s.ps} onClick={()=>{kapat()}}>İptal</div>
                        </div>
                    </div> : 

                    <div className='w-50 ms-auto'>

                    <h1>SMS<br/><span className='text-white'>Doğrulaması</span></h1>
                        <div className={s.ps}>Telefonunuza gelen 5 haneli kodu giriniz</div>
                        <form action="" className='mt-2' onSubmit={e=>{
                  e.preventDefault()
                }}>
                            <input type="text" className="e-input w-100 input-parlat" placeholder="Doğrulama kodu" />
                            <div className="row mt-2">
                                <div className="col-md-6 col-12">
                                <button className='button bg-gri text-white w-100'>Tekrar Gönder</button>

                                </div>
                                <div className="col-md-6 col-12">
                                <button className='button bg-mavi text-white w-100'>Doğrula</button>

                                </div>
                            </div>
                        </form>
                        <div className={s.footer}>
                            <div className={s.ps + " ms-auto"} onClick={()=>{kapat()}}>İptal</div>
                        </div>
                    </div>
            }
                </div>
            </div>
        </div>
    )
}

export default Login
