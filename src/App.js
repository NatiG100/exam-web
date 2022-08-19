import './App.css';
import Radio from './components/Radio/Radio';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
import { useState } from 'react';
import {ReactComponent as SearchIcon} from './assets/svg/search.svg'
import Checkbox from './components/Checkbox/Checkbox';

function App() {
  const [value,setValue] = useState("specific");
  const [checked,setChecked] = useState(false);
  const handleChange = (event)=>{
    setValue(event.target.value);
  }
  const handleThisChange = ()=>{
    setChecked((checked)=>(!checked));
    console.log(checked);
  }
  const items = [
    {
      name:"Bracelets",
      subItems:[
        "Jasinthe Bracelets",
        "Jasinthe Bracelets",
        "Inspire Braceclets"
      ]
    },
    {
      name:"",
      subItems:[
        "Recurring Item",
        "Recurring Item with questions",
        "Zero amount item with questions",
        "Normal item with questions",
        "normal item"
      ]
    }
  ]
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
          <Input
            maxWidth={"320px"}
            Icon={SearchIcon}
            placeholder="Search Items"
          />
          {
            items.map((item,index)=>(
              <div key={index}>
                <div style={{width:"100%",padding:"8px",backgroundColor:"rgb(229,231,235)",marginTop:"10px",marginBottom:"10px"}}>
                  <Checkbox
                    selected={checked}
                    text={item.name}
                    onChange={handleThisChange}
                    id={"this"}
                  />
                </div>
                {
                  item.subItems.map((subItem,subIndex)=>(
                    <div style={{width:"100%",padding:"8px",marginLeft:"15px",marginTop:"10px",marginBottom:"10px"}}>
                      <Checkbox
                        selected={checked}
                        text={subItem}
                        onChange={handleThisChange}
                        id={"this"}
                      />
                    </div>
                  ))
                }
              </div>
            ))
          }
        </form>
      </Container>
    </div>
  );
}

export default App;
