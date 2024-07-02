import React, { useState } from 'react';

const commentsData = [
  { name: '익명', content: '이 덱 구려요. 하지마셈.', date: '2024-06-27', time: '09:24:31' },
  { name: '여관주인', content: '나쁘지 않음', date: '2024-06-28', time: '11:56:21' },
  { name: 'Applejuice', content: '이거 쓰다가 강등당함. 만들지 마라', date: '2024-06-28', time: '15:46:03' },
  { name: 'aaabownno', content: '쉽고 쎄서 좋은 덱임', date: '2024-06-30', time: '21:35:54' }
]

const Comment = () => {
  const [comments, setComments] = useState(commentsData);
  const [userComment, setUserComment] = useState('');

  const commentChange = (e) => {
    setUserComment(e.target.value);
  };

  const commentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name: '익명',
      content: userComment,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toTimeString().split(' ')[0]
    };
    setComments([...comments, newComment]);
    setUserComment('');
  };

  return (
    <div style={{ width: '800px', margin: '50px auto', position: 'relative' }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {comments.map((comment, index) => {
          return (
            <li style={{ border: '1px solid', lineHeight: '50px' }}
              key={index}>
              <div style={{ position: 'relative' }}>
                {comment.name} : {comment.content}
                <span style={{ position: 'absolute', right: '8px' }}>{comment.date} {comment.time} </span>
              </div>
            </li>
          )
        })}
      </ul>

      <form onSubmit={commentSubmit}>
        <textarea style={{ width: '800px', minHeight: '100px' }}
          placeholder='내용을 입력해주세요'
          value={userComment}
          onChange={commentChange}
        />

        <button style={{
          position: 'absolute', right: '8px', margin: '20px 0', backgroundColor: '#0059AC',
          color: '#fff', lineHeight: '40px', borderRadius: '10px'
        }}
          type='submit'>댓글 달기</button>
      </form>
    </div>
  )
}

export default Comment