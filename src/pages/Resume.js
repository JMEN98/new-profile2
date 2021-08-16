import React from "react";
import test from "../test.json"
import skills from"../skills.json"
  import hire from"../images/hire.jpg"

function Resume(props) {
 console.log(test)
 return(
  

  <div> <h1>behold my Resume </h1>
  <div className="class"  >
   <article class="shadow">
  <h1>{skills.header}</h1> 
  <h1>{skills.education}</h1>
  <h5>{skills.h5}</h5>
  <h1>{skills.job}</h1>
  <p> {skills.li}</p>
  <p>{skills.li1}</p>
  <h1>{skills.h1}</h1>
  <ol>{skills.skillList}</ol>
   <img  className="hire" src={hire} width="200px" height="200px" align="center"></img>
  </article>

      
    
  </div>

</div>



 
    


   


 )




}
export default Resume;