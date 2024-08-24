import FriendServiceReview from "./components/FriendServiceReview";
import Header from "./components/Header";
import Service from "./components/Service";
import Total from "./components/Total";
import TotalBill from "./components/TotalBill";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen w-full font-josefin">
      <div className="max-w-[1500px] w-[90%] mx-auto flex flex-col gap-4">
        <Header />
        <TotalBill />
        <Service />
        <FriendServiceReview />
        <Total />
      </div>
    </div>
  );
}

export default App;
