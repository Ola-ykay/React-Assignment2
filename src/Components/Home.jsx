 import { Link } from 'react-router-dom' ;

const Home = () => {
  return (
    <div className='section-home' >
    
      <h2>Hey, there</h2>
      <p>Welcome to Monee App</p>

      <Link to='about' className='btn-2'>More Info</Link>
    
     </div>
    
 
    
      

    
  );
};

export default Home;