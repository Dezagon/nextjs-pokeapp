import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/AllPage.module.css';
import React, { useState } from 'react';
import Image from 'next/image';
import { Gallery } from "react-grid-gallery";
import { createImagesList } from "./index"


export const pokeGridImagesList = () => {
  const imageLinks = createImagesList();
  let images = []
  imageLinks.map(item => {
    images.push({
      src: item, 
      width: 'auto', 
      height: 300,
      customOverlay: (
        <div style={{
          border: '8px solid #152C44',
          borderRadius: '25px',
          height: 180
        }}>

        </div>
      )
    })
  });

  return images
}

const pokePreview = () => {
  return (
    <div className={styles.Preview}>
      <h1></h1>
    </div>
  )
}

const imageStyle = () => {
  const style = {
    backgroundColor: '#1c6591',
  }
  return style
}


export default function AllPage() {
    return (
    <div className={styles.container}>
      <Head>
        <title>All Pokémon</title>
        <link rel="icon" href="/pokeball.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>


      <div className={styles.backgroundbarTop}>
        <a href="/" className={styles.homeLink}>
            <img className={styles.homeIcon} src={"/home.png"}/>
        </a>
        <h1 className={styles.title}>
            All Pokémon
        </h1>
        <h2>
            hi :D
        </h2>
      </div>

      <main className={styles.main}>
        <div className={styles.IMGgrid}>
          <Gallery images={pokeGridImagesList()} enableImageSelection={false} tileViewportStyle={imageStyle()}/>
          
        </div>
        <div className={styles.pokePreview}>
          
        </div>
      </main>

      <div className={styles.backgroundbarBottom}>
        <h5>By Antonio Hernandez :D</h5>
      </div>

      


      <style jsx>{`
        
        
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
      
    );

}


