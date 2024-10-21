import { useEffect, useState } from "react";
import instance from "../axiosInstance";
import Card from "../components/Card";

export default function Groceries() {
  const [groceries, setGroceries] = useState([]);

  async function fetchData() {
    try {
      const { data } = await instance.get("/groceries", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      setGroceries(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row gap-3 justify-content-around">
        {groceries.map((el, i) => {
          return <Card key={i} groceries={el} />;
        })}
      </div>
    </div>
  );
}
