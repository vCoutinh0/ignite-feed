import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

export default function App(){
  return (
    <div>
      <Header/>

      <Post
        author="Vinicius Coutinho"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perferendis saepe voluptate sed, iste rem, quod repellat modi molestiae temporibus facere atque minus nemo ex! Voluptatibus quaerat incidunt asperiores porro."
      /> 
    </div>
  )
}