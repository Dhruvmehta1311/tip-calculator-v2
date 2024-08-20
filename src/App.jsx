import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen w-full font-josefin">
      <div className="max-w-[1500px] w-[95%] mx-auto">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
