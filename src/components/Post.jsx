import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { Comment } from './Comment.jsx';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        'Muito top!'
    ])
     
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
      });
    
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }
    
    function handleNewCommentChange() {
        event.target.setCustomValidity('');

        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        })
        
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.perfil}>
                    <Avatar src={author.avatarUrl} alt="photo"/>
                    <span>
                        <strong>{author.name}</strong> 
                        <p>{author.role}</p>
                    </span>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <main className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </main>
 
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <p>
                    <strong>Deixe seu feedback</strong>
                </p>

                <textarea 
                    name="comment"
                    placeholder="Escreva um comentário..."
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <button type="submit" disabled={isNewCommentEmpty}>
                    <strong>Publicar</strong>
                </button>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (<Comment 
                            key={comment} 
                            content = {comment} 
                            onDeleteComment = {deleteComment}
                        />)
                        }
                    )
                }
            </div>
        </article>
    )
}