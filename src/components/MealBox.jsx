import React from 'react';
import meals from '../meals.json';

const MealBox = (props) => {
   const {name, calories, image} = props;
  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="img-fluid" alt="Responsive image">
              <img src={image} className="img-fluid" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="btn btn-primary" >+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MealBox;