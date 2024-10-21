import { Link } from "react-router-dom";

export default function Card({ groceries }) {
  return (
    <div className="col-3">
      <div className="card" style={{ height: "400px", width: "20rem" }}>
        <img
          src={groceries.imageUrl}
          className="card-img-top"
          style={{ height: "50%", objectFit: "cover" }}
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{groceries.title}</h5>
          <p className="card-text">{groceries.price}</p>
          <p>{groceries.tag}</p>
          <Link className="btn btn-danger" style={{ color: "white" }}>
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}
