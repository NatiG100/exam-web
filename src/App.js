import './App.css';
import Radio from './components/Radio/Radio';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
import { useEffect, useState } from 'react';
import {ReactComponent as SearchIcon} from './assets/svg/search.svg'
import Checkbox from './components/Checkbox/Checkbox';
import Button from './components/Button/Button';
import Divider from './components/Divider/Divider';
import { initialItems } from './data';

function App() {
  const [value,setValue] = useState("specific");
  const [checked,setChecked] = useState(false);
  const handleChange = (event)=>{
    setValue(event.target.value);
  }
  useEffect(()=>{
    if(value==="all"){
      let newItems = [...items]
      newItems.forEach((item,index)=>{
        item.selected=true;
        item.subItems.forEach((subItem,index)=>{
          subItem.selected=true;
        })
      })
      setItems(newItems);
    }
  },[value])
  const handleThisChange = ()=>{
    setChecked((checked)=>(!checked));
  }
  const onSubItemChange = (itemIndex,subItemIndex)=>{
    let newItems=[...items];
    newItems[itemIndex].subItems[subItemIndex].selected = !newItems[itemIndex].subItems[subItemIndex].selected;
    let isAllChecked = true;
    newItems[itemIndex].subItems.forEach((item)=>{
      if(!item.selected){
        isAllChecked = false;
      }
    })
    if(isAllChecked){
      newItems[itemIndex].selected=true;
    }else{
      newItems[itemIndex].selected=false;
    }
    let allSelected=true;
    newItems.forEach((item)=>{
      if(!item.selected){
        allSelected=false;
      }
    })
    if(allSelected){
      setValue("all");
    }else{
      setValue("specific")
    }
    setItems(newItems);
  }
  const onItemChange = (itemIndex)=>{
    let newItems = [...items];
    newItems[itemIndex].selected=!newItems[itemIndex].selected;
    newItems[itemIndex].subItems.forEach((item,index)=>{
      newItems[itemIndex].subItems[index].selected = newItems[itemIndex].selected;
    })
    let allSelected=true;
    newItems.forEach((item)=>{
      if(!item.selected){
        allSelected=false;
      }
    })
    if(allSelected){
      setValue("all");
    }else{
      setValue("specific")
    }
    setItems(newItems);
  }
  const [items,setItems] = useState(initialItems);


  // filter logic
  const [searchQuery,setSearchQuery] = useState("");
  const onSearchQueryChange = (event)=>{
    setSearchQuery(event.target.value);
  }
  const filterItems = ()=>{
    let filteredItems= JSON.parse(JSON.stringify(items));
    filteredItems.forEach((item,index)=>{
      filteredItems[index].subItems=item.subItems.filter((subItem)=>{return subItem.name.toLowerCase().includes(searchQuery.toLowerCase())});
    })
    filteredItems.forEach((item,index)=>{
      if(item.subItems.length===0){
        delete filteredItems[index];
      }
    })
    return filteredItems;
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
          <Divider/>
          <Input
            maxWidth={"320px"}
            Icon={SearchIcon}
            placeholder="Search Items"
            onChange = {onSearchQueryChange}
            value={searchQuery}
          />
          {
            filterItems(items).map((item,index)=>(
              <div key={index}>
                <div style={{width:"100%",padding:"8px",backgroundColor:"rgb(229,231,235)",marginTop:"10px",marginBottom:"10px"}}>
                  <Checkbox
                    selected={item.selected}
                    text={item.name}
                    onChange={()=>{onItemChange(index)}}
                    id={"this"}
                  />
                </div>
                {
                  item.subItems.map((subItem,subIndex)=>(
                    <div style={{width:"100%",padding:"8px",marginLeft:"15px",marginTop:"10px",marginBottom:"10px" }} key={subIndex}>
                      <Checkbox
                        selected={subItem.selected}
                        text={subItem.name}
                        onChange={handleThisChange}
                        id={"this"}
                        onClick={()=>{onSubItemChange(index,subIndex)}}
                      />
                    </div>
                  ))
                }
              </div>
            ))
          }
          <p style={{color:"#555",textAlign:"center",marginTop:"20px",marginBottom:"20px",}}>
            {
              !filterItems(items)[0]?"No Items Found":""
            }
          </p>
          {
            filterItems(items)[0]&&(<div style={{display:"flex",width:"100%", justifyContent:"flex-end"}}>
              <Button type="submit">Apply tax to 5 item(s)</Button>
            </div>)
          }
        </form>
      </Container>
    </div>
  );
}

export default App;
