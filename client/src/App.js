import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
// import { render } from "../../api/app";
import Home from './components/pages/Home'


export default function App() {
  // const [page, setPage] = useState("");

  class Branches{
    constructor(name) {
      this.name = name;
      this.branch = [];
      this.owner = null;
      this.name = name;
    }
  
    /** Simple tree methods **/
  
    // Adds the branch as a new zone 
    addBranch(b) {
      this.branch.push(b);
      b.owner = this;
    }
  
    // Deletes the branch 
    deleteBranch(b) {
      this.branch.splice(b);
      b.creator = this;
    }
  
    //Ability to see a list of all created branches
    get listBranch() {
      return this.branch;
    }
  
    //Ability to add 1 promotional offer per branch zone
    addPromo(promotion){
      let img = img;
      let caption = caption;
      this.branch.push(img, caption)
    }
  
  }
  return (
    <section>
    <div className="App">
      
        <h1 className="App-title">Welcome to React !</h1>       
        
      <header className="App-header"/>
     
     
    </div>

     <div className="main-container">
     <div  className="container-map">{/* <img src={logo} className="App-logo" alt="logo" /> */}</div>
     <div className="branches">
     <div  className="branch1"><h1>Branch 1</h1></div>
     <div  className="branch2"><h1>Branch 2</h1></div>
     <div  className="branch3"><h1>Branch 3</h1></div>
     </div>
     </div>
     </section>
    );
  }
  
  // {/* {page ===  <Home/>} */}


