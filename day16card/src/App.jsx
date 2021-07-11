
import "./style.css";

const Card = () => {
    return (
        <div className="card">
            <img src="https://pbs.twimg.com/media/ELvYLZEWsAA8JJ3.jpg" alt="" />
            <h2>MEME CARDS</h2>
            <p>ROFL</p>
        </div>
    );
};
const Card2 = () => {
    return (
        <div className="card">
            <img src="https://pbs.twimg.com/media/EPmnMw3XsAE1i1C.jpg" alt="" />
            <h2>MEME CARDS</h2>
            <p>ROFL</p>
        </div>
    );
};

function App() {
    return (
        <div className="App">
      <Card />
      <Card2 />
    </div>
    );
}

export default App;