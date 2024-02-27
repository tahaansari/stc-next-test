import Filter from "./components/filter";
import Info from "./components/info";
const Homepage = async () => {
  const url = "http://localhost:3000/api";
  const response = await fetch(url);
  const data = await response.json();
  return (
    <div>
      <Filter initData={data.devices}></Filter>
      <Info></Info>
    </div>
  );
};

export default Homepage;
