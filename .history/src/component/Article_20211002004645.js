import React, { useEffect, useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    setTimeout(async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setArticles(data);
    }, 5000);
  }, []);
  return (
    <div className="articles">
      <h2>Articles</h2>
      {!articles && <div>Loading...</div>}
    </div>
  );
};

export default Articles;
