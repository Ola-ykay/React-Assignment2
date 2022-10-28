import React from "react";



const Users = ({ users, loading , error}) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (!loading && error) {
    return <>Error</>
  }

   return (
    
  <div className="user-section">
    {users.map((each , index) => {
      const picture =<img src={each.picture.large} alt='' />
      const name =`${each.name.title} ${each.name.first} ${each.name.last}`
        const email =`${each.email}`
       const country=`${each.location.country}`
        
         
     
      
      return (
      <div className="user-details">
      <div key={picture}>{picture}</div> 
      <h3 key={name.toLowerCase().replaceAll(' ', '')}>
      {`${name}`}</h3>
      <p key={email}><b>Email:</b> {email}</p>
      <p key={country}><b>Country:</b> {country}</p>
      
 </div>
    )
})}
  </div>
  )
};

export default Users;
