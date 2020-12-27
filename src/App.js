import logo from "./logo.svg";
import amplify from "./amplify.webp";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            // justifyContent: "space-between",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <span style={{ fontSize: "10em" }}>+</span>
          <img
            src={amplify}
            className="App-logo"
            alt="logo"
            style={{ paddingLeft: "5rem" }}
          />
        </div>
        <h2>Demo of React App deployment into AWS Amplify</h2>
        <p>
          <a
            className="App-link"
            href="https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Amplify
          </a>
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
