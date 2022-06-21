import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `NewsApp - ${this.capitalizeFirstLetter(this.props.category)}`
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eed3e87a3e12452f9bf3a218d75cb8e6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
  }

  async componentDidMount() {
    console.log("cdm");
    this.updateNews();
  }

  handleNextClick = async () => {
    console.log("Next");
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  }

  handlePreviousClick = async () => {
    console.log("Previous");
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }

  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h2 className='text-center'>Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div key={element.url} className="col-md-4">
              <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-center">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-3" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark mx-3" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

