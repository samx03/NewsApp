import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className="card my-3" style={{width: '18rem'}}>
        <img src={!imageUrl?"https://static.toiimg.com/photo/92284197.cms":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More...</a>
          </div>
      </div>
    )
  }
}
