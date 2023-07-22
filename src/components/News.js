import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spiner from "./Spiner";
import PropTypes from 'prop-types'


export class News extends Component {
 static defaultProps={
  country:'in',
  pageSize:8,
 }
  PropTypes ={
  country:PropTypes.string,
  pageSize:PropTypes.number,
 }

 capitalizaFirstLetter=(string)=>{
  return string.charAt(0).toUpperCase() + string.slice(1); 
 }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1,
    }
  document.title=`${this.props.category} -Newsmonkey`  
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=967334c6cc364ca18dba4fab85bf3a67&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true })
      let data = await fetch(url);
    let parseData = await data.json();

    this.setState({
      articles: parseData.articles,totalResult:parseData.totalResult,
      loading:false
    });
  }

  handleprevbtn = async () => {
    console.log("prev");
    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=967334c6cc364ca18dba4fab85bf3a67&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true })
    let data = await fetch(url);
  let parseData = await data.json();
    this.setState({
     page: this.state.page-1,
     articles: parseData.articles,

    })
  
  };
  handlenextvbtn = async () => {
    console.log("next");
    if(!(this.state.page+1 >Math.ceil(this.state.totalResult/this.props.pageSize))){

    let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=967334c6cc364ca18dba4fab85bf3a67&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true })
  let data = await fetch(url);
  let parseData = await data.json();
  
    this.setState({
     page: this.state.page+1,
     articles: parseData.articles,
      loading:false
    })
  }
  };

  render() {
    return (
      <div>
        <div className="container text-center py-4 mt-5 ">
          <h2 >TimeStamp -Top News Headlines from {this.capitalizaFirstLetter(this.props.category)}</h2>
          {this.state.loading &&<Spiner   />} 
          <div className="row pt-4 ">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 col " key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 44) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    urlImage={element.urlToImage}
                    newsUrl={element.url}
                  author={element.author} date={element.publishedAt}
                  />
                </div>
              );
            })}
            <div className="container d-flex justify-content-between">
              <button type="button"disabled={this.state.page <= 1}className="btn btn-dark  "onClick={this.handleprevbtn}>Prev  </button>
              <button className="btn btn-dark" disabled={this.state.page+1>Math.ceil.totalResult/this.props.pageSize}  onClick={this.handlenextvbtn} type="button">Next</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
