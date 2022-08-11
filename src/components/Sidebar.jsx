import { PencilSimpleLine } from 'phosphor-react'
import styles from './Sidebar.module.css'

export function Sidebar(props){
    return (
        <aside className={styles.sidebar}>
            <div className={styles.banner}>
                <img src={props.banner} alt="Banner image" />
            </div>

            <div className={styles.profile} >
                <img src={props.photo} alt="Profile photo" />
                <strong>{props.name}</strong>
                <p>{props.bio}</p>
            </div>
            
            <footer>
                <a href="#" className={styles.button}>
                    <PencilSimpleLine size={20} />
                    <strong> 
                        Editar seu perfil
                    </strong>
                </a>
            </footer>
        </aside>
    )

}