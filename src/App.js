import './App.css';
import {useState, useEffect} from 'react';
import uuid from 'react-uuid';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() =>{
    const names = ['Anna', 'Inkeri', 'Matleena', 'Anna'];
    setItems(names);
  },[])

  return (
   <div style={{margin: '30px'}}>
     <h3>Names</h3>
     <ul>
       {items.map(item => (
         <li key={uuid()}>{item}</li>
       ))}
     </ul>
   </div>
  );
}

export default App;
