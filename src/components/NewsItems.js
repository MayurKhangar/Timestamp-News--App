import React, { Component } from "react";

export class NewsItems extends Component {

    
    
  render() {
    let { title, description,urlImage,newsUrl,author,date } = this.props; //desctructing
    return (
      <div>

            <div className="col-md-4 ">
              <div className="card" style={{ width: "18rem" }}>
                <img src={!urlImage?"https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/04/27/Pictures/_1640c7f6-8830-11ea-8e78-f1b6d2f5bc87.jpg":urlImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p className="card-text"> <small className="text-mutes"> By:- {!author?"Unknown":author} on  {new Date (date).toDateString()  }</small> </p>
                  <a href={newsUrl}  className="btn btn-primary">
                        Read More
                    </a>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default NewsItems;
