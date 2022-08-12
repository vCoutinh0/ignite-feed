import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { Comment } from './Comment.jsx';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.perfil}>
                    <Avatar src={props.photo} alt="photo"/>
                    <span>
                        <strong>{props.author}</strong> 
                        <p>{props.bio}</p>
                    </span>
                </div>
                <time title="08 de Agosto as 22:51" dateTime="2022-05-11 08:13:36">
                    Públicado há {props.createdAt}h
                </time>
            </header>

            <main className={styles.content}><p>{props.content}</p></main>
 
            <section className={styles.commentSection}>
                <p>
                    <strong>Deixe seu feedback</strong>
                </p>

                <textarea placeholder="Escreva um comentário..."></textarea>

                <button type="submit"><strong>Publicar</strong></button>
            </section>
            <Comment/>
            <Comment/>
            <Comment/>
            
        </article>
    )
}