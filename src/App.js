
import './App.css';
import React, {useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// const info={
//   firstName:'',
// }

function App() {

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName:'',
    age:'',
    profession:'',
    gender:'male',
  })

  const [errorInfo, setErrorInfo]=useState({
    firstName: '',
    lastName:'',
    age:''
  })

  const handleChange=(evt)=>{
      setUserInfo({
        ...userInfo,
        [evt.target.name]:evt.target.value

      })

      setErrorInfo('')
    
  }

  const handleSubmit=(evt)=>{
    evt.preventDefault()

    //validation
    const {firstName,lastName,age,profession,gender}=userInfo
     
    // if(firstName===''|| lastName===''|| age===''){
    //   setErrorInfo('Please Provide Ncessary Information')
    //   return
    // }
    if(firstName===''){
      setErrorInfo({
        ...errorInfo,
        firstName:'Please provide FirstName'
      })
      return
    }

    console.log('Submitting')

    console.log(userInfo)

      //reset
  setUserInfo({
    firstName: '',
    lastName:'',
    age:'',
    profession:'',
    gender:'male',
  })


  }



  const {firstName,lastName,age,profession,gender}=userInfo

  return (
    <>
     {/* {errorInfo && errorInfo} */}

     <form onSubmit={handleSubmit}>
        <h1>Forms with React</h1>
         
         <div className='form-group'>
           {errorInfo.firstName && errorInfo.firstName}
           <label htmlFor='firstName'>First Name:</label>
           <input type='text'
                name='firstName'
                id='firstName'
                value={firstName}
                onChange={handleChange}
              />
         </div>

         <div className='form-group'>
           <label htmlFor='lastName'>Last Name:</label>
           <input type='text'
                name='lastName'
                id='lastName'
                value={lastName}
                onChange={handleChange}
              />
         </div>


         <div className='form-group'>
           <label htmlFor='age'>Age Name:</label>
           <input type='number'
                name='age'
                id='age'
                value={age}
                onChange={handleChange}
              />
         </div>
         
         <div className='form-group'>
           <label htmlFor='profession'>Profession:</label>
           <select
             id='profession'
             name='profession'
             onChange={handleChange}
             value={profession}

           >
             <option value='developer'>Developer</option>
             <option value='designer'>Designer</option>
             <option value='programmer'>Programmer</option>
           </select>

         </div>

         <div>
           <label htmlFor='gender'>Gender:</label>
           Male <input 
               name='gender'
               type='radio'
               value='male'
               checked={gender==='male'}
               onChange={handleChange}      
            />
           Female <input
               name='gender'
                type='radio'
                value='female'  
                checked={gender==='female'}
                onChange={handleChange}
           />
         </div>
          
          <input type='submit' value='Submit'/>
     
     </form>
    </>
  );
}

export default App;
