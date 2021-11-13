import React from "react";
import Tours from "./Tours";
import Loading from "./Loading";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <main>
        <Tours data={data} />
      </main>
    </>
  );
}

export default App;
