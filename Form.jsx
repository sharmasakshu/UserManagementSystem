import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';

const Form = () => {

    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [email, setEmail] = useState("");
    // const [number, setNumber] = useState("");
    useEffect(() => {
      axios.get('http://localhost:5000/users/')
      .then(response => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch(error => console.error(error));
     }, []);

     
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        email: "",
        phoneNumber: "",
      });
    const [users, setUsers] = useState([]);
    const validate = (data) => {
        if (!data.name) {
          // setError("Invalid name")
          return false;
        } else if (!data.age) {
          return false;
        } else if (!data.email) {
          return false;
        } else if (!data.phoneNumber) {
          return false;
        }
        return true;
      };

      const handleFormChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

      const handleDelete=(id)=>{
        console.log(id);
        const updatedusers=users.filter((elem,ind)=>{
          return ind!== id;
        })
        setUsers(updatedusers);
    
      }
      const handleEdit=()=>{
        
      }

    const handleSubmit=(e)=>{
        e.preventDefault();
        let result = validate(formData);
        console.log(result);

        if(result){
          // const data= JSON.stringify(formData);
          const customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
          axios.post('http://localhost:5000/users/create', formData, customConfig)
          .then(response => {
            console.log(response.data);
            // Handle the response data here
          })
          .catch(error => console.error(error));
        setUsers([...users,formData]);
        console.log(users);
        
        setFormData({
            name: "",
            age: "",
            email: "",
            phoneNumber: "",
          });
        }
        else{
            alert("Invalid Data");
        }

    }

  return (
    <div>
  <form onSubmit={handleSubmit}>
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" value={formData.name} name="name"  onChange={handleFormChange}/>

  <label htmlFor="age">Age:</label>
  <input type="number" id="age" name="age" value={formData.age} onChange={handleFormChange}/>

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange}/>

  <label htmlFor="phone">Phone number:</label>
  <input type="tel" id="number" name="phoneNumber" value={formData.phoneNumber}  onChange={handleFormChange}/>

  <input type="submit" value="Submit" />
</form>


 <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody> 
    {
    users.map((user,index)=>( 
        <tr key={user.id}>
        <td >{user.name}</td>
        <td>{user.age}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>
          <button onClick={handleEdit}>Edit</button>
        <button onClick={()=>handleDelete(index)}>Delete</button></td>
      </tr>
    ))
    }

  </tbody>
</table> 
    </div>


  )
}

export default Form
