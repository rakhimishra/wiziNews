import React, { Component } from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalTitle,
  ModalContent,
  Button,
} from "react-bootstrap";
import Details from "./Modal.js";
class Display extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      articles: [],
      modalShow: false,
    };
  }

  // setModalShow() {
  //   this.setState({ modalShow: !this.state.modalShow });
  // }

  // Lifecycle method
  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        url: `https://newsapi.org/v2/top-headlines?sources=${
          nextProps.default
        }&apiKey=01686adcb97543e7bb3536e40bb37e63`,
      });

      this.getArticles(nextProps.default);
    }
  }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime =
      day +
      "/" +
      month +
      "/" +
      year +
      " | " +
      hour +
      ":" +
      (minute < 10 ? "0" + minute : minute);
    return composedTime;
  }

  getArticles(url) {
    const apiKey = process.env.REACT_APP_API_KEY;
    // Make HTTP reques with Axios
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=01686adcb97543e7bb3536e40bb37e63`
      )
      .then((res) => {
        const articles = res.data.articles;
        // Set state with result
        console.log(articles);
        this.setState({ articles: articles });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  

  render() {
    return (
      <div className="cardsContainer">
        {this.state.articles.map((news, i) => {
          return (
            <div className="card" key={i}>
              <div className="content">
                <h3>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </h3>
                <p>{news.description}</p>
                <div className="author">
                  <p>
                    By <i>{news.author ? news.author : this.props.default}</i>
                  </p>
                  <p>{this.formatDate(news.publishedAt)}</p>
                </div>
              </div>
              <div className="image">
                <img src={news.urlToImage} alt="" />
              </div>

              <div>
                {/* <Details data={this.articles}/> */}
             
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Display;
