import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import PokemonsContainer from "./PokemonsContainer";
import "./App.css";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app",
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <PokemonsContainer />
      </div>
    </ApolloProvider>
  );
}

export default App;
