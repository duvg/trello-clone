import React from 'react';
import { Card } from './components/Card';
import { Column } from './components/Column';
import { AppContainer } from "./styles";

function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn TypesScript" />
      </Column>
      <Column text="Done">
        <Card text="Beginto use static typing" />
      </Column>
    </AppContainer>
  );
}

export default App;
