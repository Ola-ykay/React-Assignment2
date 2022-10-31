
import  { BrowserRouter, Routes, Route}
 from 'react-router-dom'
 import Navbar from './Components/Navbar'
 import Home from './Components/Home';
 import About from './Components/About';
 import Error from './Components/Error';
 import Users from './Components/Users'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Components/Pagination'




function App() {
 const [users, setUsers] =useState([]);
 const [loading, setLoading] = useState(false);

   useEffect(() =>{
  const fetchUsers = async () => {
    setLoading(true);
    const res = await axios.get('https://randomuser.me/api/?results=50');
    setUsers(res.data);
    setLoading(false);
  
  }
fetchUsers();
}, []);


return (
  
    <BrowserRouter>
   <Navbar />
    <Routes>
    <Route path='/' element={<Home />} />
     <Route path='about' element={<About />} />
       <Route path='/users' element={<Pagination /> } />
        <Route path='*' element={<Error />} />
    </Routes>
  </BrowserRouter>
  
  );

 }


 
  



export default App;
