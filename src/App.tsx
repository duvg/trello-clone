import React from 'react';
import { useAppState } from './AppStateContext';
import { AddNewItem } from './components/AddNewItem';
import { Card } from './components/Card';
import { Column } from './components/Column';
import { AppContainer } from "./styles";
import CustomDragLayer  from './components/CustomDragLayer';

function App() {

  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column
          text={list.text}
          key={list.id}
          id={list.id}
          index={i}
        />
      ))}
      
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={text => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
}

export default App;
