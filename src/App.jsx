import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import womanImg from "./assets/woman-img.svg"
import profileImage from "./assets/profileImage.svg"
import bannerImage from "./assets/banner.svg"

import styles from "./App.module.css"

import './global.css'

export default function App(){
  return (
    <div>
      <header>
        <Header/>
      </header>
      <div className={styles.wrapper}>
        <Sidebar 
          name="Leslie Alexander"
          bio="UI Designer"
          banner={bannerImage}
          photo={profileImage}
        />
        <main>
          <Post 
            photo={"https://github.com/ViniciusCoutt.png"}
            author="Jane Cooper"
            bio="Dev Front-End"
            createdAt={1}
            content="Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
             👉 jane.design/doctorcare
            #novoprojeto #nlw #rocketseat" 
          /> 

          <Post 
            photo={"https://github.com/ViniciusCoutt.png"}
            author="Vinicius Coutinho"
            bio="Dev Back-End"
            createdAt={3}
            content="Fala galeraa 👋 Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
             👉 jane.design/doctorcare
            #novoprojeto #nlw #rocketseat" 
          /> 
        </main>
      </div>
    </div>
  )
}