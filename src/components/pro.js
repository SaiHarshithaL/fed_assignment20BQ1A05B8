import React from 'react'

const pro = () => {
  return (
    <div>
import React, &#123; Component&#125;  from "react";<br></br>
import Sidebar from "./Sidebar";<br></br>

class Main extends Component&#123;<br></br>
  constructor&#40;props&#41;&#123;<br></br>
    super&#40;props&#41;;<br></br>
    this.state=&#123;<br></br>
      time:""<br></br>
      &#125;;<br></br>
      &#125;<br></br>
  componentDidMount&#40;&#41;&#123;<br></br>
    this.tick&#40;&#41;;<br></br>
    &#125;<br></br>
  tick=&#40;&#41;=&gt;&#123;<br></br>
    const h=new Date&#40;&#41;.getHours&#40;&#41;;<br></br>
    const m=new Date&#40;&#41;.getMinutes&#40;&#41;;<br></br>
    const s=new Date&#40;&#41;.getSeconds&#40;&#41;;<br></br>
    const uptime=`$&#123;h&#125;:$&#123;m&#125;:$&#123;s&#125;`;<br></br>
    this.setState&#40;&#123;time:uptime&#125;&#41;;<br></br>
    &#125;;<br></br>
  componentDidUpdate&#40;prevprops,prevstate&#41;&#123;<br></br>
    if&#40;this.state.time!=prevstate.time&#41;&#123;<br></br>
      this.interval=setInterval&#40;&#40;&#41;=&gt;&#123;<br></br>
        this.tick&#40;&#41;;<br></br>
        &#125;,1000&#41;;<br></br>
        &#125;<br></br>
        &#125;<br></br>
  componentWillUnmount&#40;&#41;&#123;<br></br>
    clearInterval&#40;this.interval&#41;;<br></br>
    &#125;<br></br>
  render&#40;&#41;&#123;<br></br>
    return&#40;<br></br>
    &#60;div><br></br>
    &#60;center>DIGITAL CLOCK&#60;/center><br></br>
    &#60;center>&#60;h2>&#123;this.state.time&#125;&#60;/h2>&#60;/center><br></br>
      
    &#60;/div><br></br>
      &#41;;<br></br>
       &#125;<br></br>
       &#125;<br></br>
export default Main;<br></br>
          
    </div>
  )
}
export default pro
