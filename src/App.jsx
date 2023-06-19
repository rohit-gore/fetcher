import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import './App.css'

const App = () => {
  const [userData, setUserData] = useState([])
  const fetchData = async () => {
    const { data } = await axios.get('https://dummyjson.com/users')
    console.log(data)
    setUserData(data.users)
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className='app_wrapper'>
      <table className='table'>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Blood Group</th>
          <th>Weight</th>
          <th>University</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
        {userData.map((value, i) => (
          <tr key={i}>
            <td>{value.firstName+" " +value.lastName}</td>
            <td>{value.age}</td>
            <td>{value.gender}</td>
            <td>{value.bloodGroup}</td>
            <td>{value.weight}</td>
            <td>{value.university}</td>
            <td>{value.email}</td>
            <td>{value.address.address + ", "+value.address.city}</td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default App