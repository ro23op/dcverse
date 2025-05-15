import './App.css'
import Dashboard from './components/Dashboard'
import { useEffect, useState } from 'react'
import axios from 'axios';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/avatars")
      .then((res) => setUsers(res.data))
      .catch(() => {
        axios
          .get("https://reqres.in/api/users?page=1")
          .then((res) => setUsers(res.data.data.slice(0, 3)));
      });
  }, []);
  return (
    <>
      <Dashboard users = {users}/>
    </>
  )
}

export default App