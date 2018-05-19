import React from 'react'
import ArticleList from '../component/ArticleList'
import Quote from '../component/Quote'
import { Button, Col, Row } from 'reactstrap';
import css from '../images/assets/css.jpg';


export default function HomePage() {
  return (
    <div>
          <Row>
            <Col xs="12" lg="8" className="article-feed">
              <div>
                  <ArticleList />
              </div>
            </Col>
            <Col xs="12" lg="4" className="the-week">
                <div className="week-header">Image of the week</div>
                <div><img className="css-img" src={css} alt="img-of-week"></img></div>
                <Button className="img-button" color="primary">See More</Button>
                <hr></hr>
                <div className="week-header">Quote of the week</div>
                <div>
                  <Quote/>
                </div>
            </Col>
          </Row>
    </div>
  );
};
