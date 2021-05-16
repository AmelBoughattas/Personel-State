import React from 'react';
import "./App.css";
import imgSrc from "./123.png";
import enve1 from "./enveloppe.png";
import Component from "./comp/component"; 

class App extends React.Component {
  
  constructor (props) {
    super(props)
    this.state ={
      FullName:"Amel Boughattas",
      bio: "professional master's degree in information systems engineering",
      imgSrc:<img  src={imgSrc} alt="" style={{ width:"15%", height:"15%", borderRadius:" 50% 20% ",  border: "1px solid red", margin:"50px 10PX 0 40px"}}/>,
      profession: "Web developper",
      imageURL:enve1,
      show:false,
      time:0
    }
   }
 
    show=() => {
     this.setState({
      show:!this.state.show,
       })
     }

    increment=()=>this.setState({time: this.state.time +1});
    componentDidMount() { 
    setInterval(this.increment,1000)
    } 
  
 render()
  { 
   return (
     <div className="App">
        <Component/> 
     <>  
       {this.state.show===true?
         <div className="contenu"> 
           {this.state.imgSrc}
           <div className="parg"><p>My name is <span className="">{this.state.FullName}</span></p>
           <p><span>Bio :</span> After I got my {this.state.bio}  and despite unemployment, I was eager to learn the skills and I had hope because there are opportunities in life until I came up with this opportunity w hamdoulilah, i found my way in web developper</p>
           <p><span>Profession :</span> I'm a {this.state.profession}</p>
           </div>
         </div>
       :null}
      <h3 className="time">The last component was mounted since :{this.state.time}</h3>
       <img className="image" alt="" src={this.state.imageURL}
       onClick={this.show} /> 
     </>
     </div>
   )
 }
}

export default App

