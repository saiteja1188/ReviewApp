import {Component} from 'react'
// Write your code here
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onRightArrow = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  renderActiveReviews = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    const currentActiveReview = reviewsList[activeReviewIndex]

    return (
      <div className="app-container">
        <h1>Reviews</h1>
        <div className="carousel-container">
          <button
            type="button"
            className="button-arrow"
            testid="leftArrow"
            onClick={this.onLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              data-testid="leftArrow"
            />
          </button>
          {this.renderActiveReviews(currentActiveReview)}
          <button
            type="button"
            className="button-arrow"
            testid="rightArrow"
            onClick={this.onRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              data-testid="rightArrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
