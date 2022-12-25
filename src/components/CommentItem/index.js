// Write your code here

const Welcome = props => {
  const {commentsType, deleteCommentMain, changeLikeMain} = props
  const {name, text, id, isLiked, deleteUrl, likeUrl} = commentsType

  const deleteComment = () => {
    deleteCommentMain(id)
  }

  const changeLike = () => {
    changeLikeMain(id)
  }

  const selectLike = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  if (name !== undefined) {
    return (
      <li>
        <p>{name}</p>
        <p>less than a minute ago</p>
        <p>{text}</p>
        <img alt="like" src={selectLike} />
        <button onClick={changeLike}>Like</button>
        <button value="delete" type="button" onClick={deleteComment}>
          <img alt="delete" src={deleteUrl} />
        </button>
      </li>
    )
  }
  return <></>
}

export default Welcome
