import React, { useState } from 'react';
import './index.css';
import List from './List';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList("");
  }

  const deleteItems = (id) => {
    // console.log('deleted');
    setItems((oldItems) => {
      return oldItems.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className='main_div'>
        <div className='center-div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input 
            type='text' 
            placeholder='Add a Items'
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> + </button>

          <ol>
            {
              items.map((itemValue, index) => {
                return <List 
                          key={index}
                          id={index}
                          text={itemValue}
                          onSelect={deleteItems}
                        />
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;