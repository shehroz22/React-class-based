import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { myTitle, myDescription, thisImg, newsUrl } = this.props;

    return (
      <div>
        <div className="card">
          <img src={thisImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{myTitle}</h5>
            <p className="card-text">{myDescription}</p>
            <a href={newsUrl} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
