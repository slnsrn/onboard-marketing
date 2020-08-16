import { AppPropsType } from 'next/dist/next-server/lib/utils'
import Head from 'next/head'
import React from 'react'
import '../styles/index.css'
import "../styles/scss/style.scss"


export default function Onboard({ Component, pageProps }:AppPropsType ) {
  return (
    <React.Fragment>
      <Head>
        <title>Onboard-Ofis İşleri</title>
      </Head>
        <Component {...pageProps} />
    </React.Fragment>
  )
}
