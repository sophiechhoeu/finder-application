import React from 'react';
import data from '../data.json';

export default function ArticleList() {

    const feedList = data.map((article, index) =>
      <div key={index}>
        <a href={`${article.url}`}>{article.title}</a>
      <div>{article.description}</div>
      <hr></hr>
      </div>
    );
  return (

    <div>
      <div className="article-header">Article of the week</div>
      <div>{feedList}</div>
    </div>
  );
}
