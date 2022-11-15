
import styles from './ComingSoon.module.css'
import Image from 'next/image'


import { Inter } from '@next/font/google'
import localFont from '@next/font/local'

import { motion } from "framer-motion"

const inter = Inter({
    weight: '700',
})

const inter2 = Inter({
    weight: '400',
    subsets: ['latin'] 
})


export default function ComingSoon() {

    const Click = (e) => {
        console.log("ciao")
        e.preventDefaul()

    }


    return (  
        <div className={styles.main}>
            

            <motion.p 
                className={styles.logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
                metrica
            </motion.p>


            <motion.div 
                className={styles.center}
                initial={{ opacity: 0 , y: -100}}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >

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

                <form action='/coming-soon' className={styles.mail_form} onSubmit={Click}>

                    <input className={styles.mail_input} type="mail" require placeholder='Email Address'></input>
                    <button type='submit' className={styles.mail_button}> Sing up</button>

                </form>

            </motion.div>


            <motion.div 
                className={styles.social}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
            >
               <a href='https://twitter.com/_metrica'><Image src="/img/social/twitter.png" alt="Twitter" width={44} height={44} /></a> 
            </motion.div>


        </div>
    )



} 