import s from '../styles/Box.module.css'

function SoruKutusu({sayi}) {
    return (
        <div className={s.SoruKutusu}>
            <div className={s.SoruKutusu_Header}>
                <h1 className={s.Sayi}>{sayi}</h1>
                <h1>Nasıl kayıt olurum</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div className={s.Cevap}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt exercitationem quos ad enim vero iste, sed eum maxime? Expedita, nihil. Culpa nobis error laborum magnam eius dignissimos aspernatur quas.</div>
            </div>
           
        </div>
    )
}

export default SoruKutusu
