import React from 'react'
import"./page.css";
function Page() {
  return (
    <div className='pageContainer'>
    
      <div className='pagecards'>
      <div className='right'>
            Title of Notification
        </div>
      </div>
      <div className='pagecard'> 
    <div className='right'>
            content goes here
        </div>
        </div>
        
        <div className='page'>
        

        <label for="cars">Send to:</label>
  <select name="cars" id="cars">
    <option value="To customer">To customer</option>
    <option value="To field excutive">To field excutive</option>
    
  </select>
  
<button>Send</button>
  </div>
    </div>
  )
}

export default Page
