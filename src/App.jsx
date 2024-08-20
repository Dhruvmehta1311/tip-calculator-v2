import Header from "./components/Header";
import TotalBill from "./components/TotalBill";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen w-full font-josefin">
      <div className="max-w-[1500px] w-[90%] mx-auto">
        <Header />
        <TotalBill />
      </div>
    </div>
  );
}

export default App;
