import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const {
    data: article,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");

  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {article &&
        article.map((el) => (
          <div key={el.id} className="card">
            <h3>{el.title}</h3>
            <p>{el.author}</p>
            <Link to={`/articles/${el.id}`}>Read more..</Link>
          </div>
        ))}
    </div>
  );
}
