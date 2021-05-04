import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Table from "components/Table";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Hello World</h1>
        <Table />
      </div>
      <Footer />
    </>
  );
}

export default App;
