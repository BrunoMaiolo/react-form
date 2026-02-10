import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: "Introduzione a React" },
    { id: 2, title: "Gestione dello stato con useState" },
    { id: 3, title: "Componenti e props" },
  ]);

  const [newTitle, setNewTitle] = useState("");

  return (
    <div>
      <h1>Blog</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (newTitle.trim() === "") return;

          setArticles([
            ...articles,
            {
              id: articles.length + 1,
              title: newTitle,
            },
          ]);

          setNewTitle("");
        }}
      >
        <input
          type="text"
          placeholder="Titolo articolo"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />

        <button type="submit">Aggiungi</button>
      </form>

      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;