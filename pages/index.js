
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
//import blastoise from '../public/blastoise.png'
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

// npm run dev

function PokeSlides({ imageLink }) {
  return (
      <div className={styles.slide}>
        <div style={{ 'backgroundImage': `url(${imageLink})`, 'height': '550px', 'background-repeat': 'no-repeat'}}>
        </div>
      </div>
  )
};

export function createImagesList() {
  let images = [];
  let start = 1;
  while (start < 1018) {
    images.push("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/" + start.toString() + ".png");
    start++;
    }

  return images
}

const PokeSlideshow = () => {

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  const randNum = getRandomIntInclusive(1, 1017);
    
    
    
  
  const pokeList = createImagesList()
  //console.log(createImagesList());

    
  const properties = {
    prevArrow:<button className={styles.buttonL}>
              </button>,
    nextArrow:<button className={styles.buttonR}>
              </button>
  }

  return (
    <Slide
    {...properties}
    duration={4000}
    transitionDuration={150}
    className={styles.sliders}
    >
      {pokeList.map(image =>
        <PokeSlides imageLink={image} />
      )}
    </Slide>
       
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to the Pokédex</title>
        <link rel="icon" href="/pokeball.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>


      <div className={styles.backgroundbarTop}>
        <h1 className={styles.title}>
          Welcome to the Pokédex
        </h1>
      </div>

      <main className={styles.main}>
        
        <div className={styles.grid}>
          
          <a href="/allpokemon" className={styles.card}>
            <h3>All Pokémon</h3>
          </a>


          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>By Region</h3>   
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}>
            <h3>Search</h3>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}>
            <h3>Random</h3>
          </a>
          
        </div>
        <div className={styles.pokePreview}>
          <div className={styles.circle}>
            <PokeSlideshow/>
          </div>
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
