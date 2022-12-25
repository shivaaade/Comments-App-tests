// Write your code here

const Welcome = props => {
  const {commentsType} = props
  const {name, text, id, isLiked, deleteUrl, likeUrl} = commentsType

  return (
    <li>
      <p>{name}</p>
      <p>{text}</p>
      <img alt="like" src={likeUrl} />
      <button>
        <img alt="delete" src={deleteUrl} />
      </button>
    </li>
  )
}

export default Welcome
