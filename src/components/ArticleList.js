import React from "react";
import Article from "./Article";

function ArticleList({ articles }) {
  return (
    <main>
      {articles.map((article) => (
        <Article key={article.id} {...article} />
      ))}
    </main>
  );
}

export default ArticleList;
