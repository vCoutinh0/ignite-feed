import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({ content, onDeleteComment }) {
    
    function handleDeleteComment(){
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/ViniciusCoutt.png" />

            <section>
                <div className={styles.commentBox}>
                    <header>
                        <span>
                            <strong>Vinicius Coutinho</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h</time>
                        </span>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <main>
                        <p>
                            {content}
                        </p>
                    </main>
                </div>
                
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </section>
        </div>
    );
}