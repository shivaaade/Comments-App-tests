import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Welcome from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
const initialComments = ['']

class Comments extends Component {
  state = {comments: initialComments, name: '', text: '', count: 0}

  onInput = event => {
    this.setState({name: event.target.value})
  }

  onText = event => {
    this.setState({text: event.target.value})
  }

  submitInput = event => {
    event.preventDefault()
    const {name, text} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      text,
      isLiked: true,
      likeUrl:
        'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png',
      deleteUrl:
        'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png',
    }
    this.setState(prev => ({
      comments: [...prev.comments, newComment],
      name: '',
      text: '',
      count: prev.count + 1,
    }))
  }

  deleteCommentMain = id => {
    const {comments} = this.state
    const filterList = comments.filter(each => each.id !== id)
    this.setState(prev => ({comments: filterList, count: prev.count - 1}))
  }

  changeLikeMain = id => {
    this.setState(prev => ({
      comments: prev.comments.map(each => {
        if (each.id === id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  render() {
    const {comments, name, text, count} = this.state

    return (
      <div>
        <h1>Comments</h1>
        <p>say something about 4.0 technology</p>
        <input
          value={name}
          placeholder="Your Name"
          onChange={this.onInput}
          type="text"
        />
        <textarea
          value={text}
          placeholder="Your Comment"
          rows="10"
          cols="40"
          onChange={this.onText}
        >
          ``
        </textarea>
        <img
          alt="comments"
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
        />
        <form onSubmit={this.submitInput}>
          <button type="submit">Add Comment</button>
        </form>
        <p>{count} comments</p>
        <ul>
          {comments.map(each => (
            <Welcome
              changeLikeMain={this.changeLikeMain}
              key={each.id}
              deleteCommentMain={this.deleteCommentMain}
              commentsType={each}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
