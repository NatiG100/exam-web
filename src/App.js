import './App.css';
import Radio from './components/Radio/Radio';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
import { useState } from 'react';

function App() {
  const [value,setValue] = useState("specific");
  const handleChange = (event)=>{
      setValue(event.target.value);
  }
  return (
    <div className='app'>
      <Container>
        <form>
          <h2 style={{fontWeight:'450',color:"#374151",marginBottom:"18px"}}>Add Tax</h2>
          <div style={{display:'flex',gap:'10px', paddingBottom:"18px"}}>
            <Input
              maxWidth="400px"
              placeholder="Tax Name"
            />
            <Input
              maxWidth="100px"
              type="number"
              endText="%"
            />
          </div>

          <div style={{paddingLeft:"5px"}}>
            <Radio
              text={"Apply to all items in collection"}
              id="all"
              name="selectType"
              value="all"
              onChange={handleChange}
              selected={value}
            />
            <Radio
              text={"Apply to specific items"}
              id="specific"
              name="selectType"
              value="specific"
              onChange={handleChange}
              selected={value}
            />
          </div>

        </form>
      </Container>
    </div>
  );
}

export default App;
