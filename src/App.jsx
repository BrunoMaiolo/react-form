import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: "Introduzione a React" },
    { id: 2, title: "Gestione dello stato con useState" },
    { id: 3, title: "Componenti e props" }
  ]);

  return (
    <div>
      <h1>Blog</h1>

      <ul>
        {articles.map(article => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;