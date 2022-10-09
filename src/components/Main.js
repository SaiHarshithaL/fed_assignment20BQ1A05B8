import React, { Component } from "react";
import Sidebar from "./Sidebar";
import pro from "./pro";

class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      time:""
    };
  }
  componentDidMount(){
    this.tick();
  }
  tick=()=>{
    const h=new Date().getHours();
    const m=new Date().getMinutes();
    const s=new Date().getSeconds();
    const uptime= h +":" +m+":"+s;
    this.setState({time:uptime});
  };
  componentDidUpdate(prevprops,prevstate){
    if(this.state.time!=prevstate.time){
      this.interval=setInterval(()=>{
        this.tick();
      },1000);
    }
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render(){
    return(
       <div>
        <div className="article">
        <h1><u><center>DISPLAY A DIGITAL CLOCK USING REACT JS</center></u></h1>
        <h2><u>Description about the Methods Used:</u></h2>
      <h3>1.componentDidMount()-</h3><br></br>
      This is invoked immediately after a component gets rendered and placed on the DOM.<br></br>
       Now, you can do any DOM querying operations.<br></br>
       <h3>2.render()-</h3><br></br>
This method is defined in each and every component. It is responsible for returning a single root HTML node element. <br></br>
If you don't want to render anything, you can return a null or false value.<br></br>
<h3>3.componentWillUpdate()-</h3><br></br>
It is invoked just before the component updating occurs. Here, you can't change the component state by invoking this.setState() method. <br></br>
It will not be called, if shouldComponentUpdate() returns false.<br></br>
<h3>4.componentWillUnmount()-</h3><br></br>
This method is invoked immediately before a component is destroyed and unmounted permanently. <br></br>
It performs any necessary cleanup related task such as invalidating timers, event listener, canceling network requests, or cleaning up DOM elements.<br></br>
 If a component instance is unmounted, you cannot mount it again.<br></br>
<h3><u>The Code to Display Digital clock is:</u></h3>
          <p><pre>{`
          import React, { Component } from "react";
          class Main extends Component{
            constructor(props){
              super(props);
              this.state={
                time:""
              };
            }
            componentDidMount(){
              this.tick();
            }
            tick=()=>{
              const h=new Date().getHours();
              const m=new Date().getMinutes();
              const s=new Date().getSeconds();
              const uptime= h +":" +m+":"+s;
              this.setState({time:uptime});
            };
            componentDidUpdate(prevprops,prevstate){
              if(this.state.time!=prevstate.time){
                this.interval=setInterval(()=>{
                  this.tick();
                },1000);
              }
            }
            componentWillUnmount(){
              clearInterval(this.interval);
            }
            render(){
              return(
                 <div>
                  <div className="article">
                <h1><u>Display a digital clock in React JS</u></h1>
                THE OUTPUT IS:
                <h2>{this.state.time}</h2>
                <h3>The Code to Display Digital clock is:</h3><br></br>
                </div>
                </div>
                 );
              }
          }
          export default Main;`}</pre></p>
          <h3><u>THE OUTPUT IS:</u></h3>
          <div className="box">
          <h2>{this.state.time}</h2>
      </div>
      </div>
      <Sidebar/>
      </div>
       );
    }
}
export default Main;
