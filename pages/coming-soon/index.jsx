
import styles from './ComingSoon.module.css'
import Image from 'next/image'


import { Inter } from '@next/font/google'
import localFont from '@next/font/local'


const inter = Inter({
    weight: '700',
})

const inter2 = Inter({
    weight: '400',
    subsets: ['latin'] 
})

const myFont = localFont({ src: './fonts/Vellago.ttf' })


export default function ComingSoon() {


    return (  
        <div className={styles.main}>
            

            <p className={styles.logo}>
                metrica
            </p>


            <div className={styles.center}>

                <div className={inter.className}>
                    
                    <h1 className={styles.title}>
                        Coming Soon
                    </h1>

                </div>

                <div className={inter2.className}>

                    <p className={styles.info}>
                        we are working on something great...
                        every day great ideas come to mind. 
                        <br></br>
                        just give us time to finish our Home Page
                    </p>
                    
                </div>

                <form action="post" className={styles.mail_form}>

                    <input className={styles.mail_input} type="mail" require placeholder='Email Address'></input>
                    <button type='submit' className={styles.mail_button}> Sing up</button>

                </form>

            </div>


            <div className={styles.social}>
               <a href='https://twitter.com/_metrica'><Image src="/img/social/twitter.png" alt="Twitter" width={44} height={44} /></a> 
            </div>


        </div>
    )



} 