import { useState } from "react";
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}


export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
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
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </section>
        </div>
    );
}