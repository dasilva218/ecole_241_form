"use client";

import { Button } from 'antd';
import getFontSizes from 'antd/es/theme/themes/shared/genFontSizes';
import { Roboto } from 'next/font/google';
import React, { useEffect } from 'react';

export default function QRCodeGenerator() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
    script.onload = () => {
      new QRCode(document.getElementById("qrcode"), {
        text: "https://lee20charly.github.io/formulaire-ecole-241/",
        width: 330,
        height:330,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 className='text-3xl font-bold hover:scale-105'>Scannez pour Rejoindre l'Aventure 🥳</h1>
        <div id="qrcode" style={styles.qrcode}></div>
      </div>
    </div>
  );
}

const styles = {
  body: {

    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor:'#f0f0f0',
  },
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '80%',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    height: '60%',
  },
  qrcode: {
    margin: '1rem auto',
  },
//  le travaille continue 

};
