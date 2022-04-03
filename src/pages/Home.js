import { useFetch } from "../hooks/useFetch";
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
          <div key={el.key} className="card">
            <h3>{el.title}</h3>
            <p>{el.author}</p>
          </div>
        ))}
    </div>
  );
}
