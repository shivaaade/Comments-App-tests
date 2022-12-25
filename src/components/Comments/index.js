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
      isLiked: false,
      likeUrl:
        'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png',
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

  render() {
    const {comments, name, text, count} = this.state
    let disadd
    if (count === 0) {
      disadd = 'displayItem'
    } else {
      disadd = ''
    }

    return (
      <div>
        <h1>Comments</h1>
        <p>say something about 4.0 technology</p>
        <input placeholder="Your Name" onChange={this.onInput} type="text" />
        <textarea
          placeholder="Your Comment"
          rows="10"
          cols="40"
          onChange={this.onText}
        >
          shiva
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
            <Welcome key={each.id} commentsType={each} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
