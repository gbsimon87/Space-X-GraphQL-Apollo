import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from './components/Launches';
import Launch from './components/Launch';
import logo from './logo.png';

const client = new ApolloClient({
  // uri: "http://localhost:5000/graphql"
  uri: "/graphql"
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App container">
          <img
            src={logo}
            alt="SpaceX"
            style={{ background: "#FFF", width: 300, display: "block", margin: "auto" }} />
            <Route exact path="/" component={Launches} />
            <Route path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
