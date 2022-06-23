import React from 'react'

const Newsitem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="card my-3">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%', zIndex: '1'}}>
          {source}
        </span>
        <img src={!imageUrl ? "https://static.toiimg.com/photo/92284197.cms" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}... </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-muted">By {author == null ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
          <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More...</a>
        </div>
      </div>
    )
}
export default Newsitem
