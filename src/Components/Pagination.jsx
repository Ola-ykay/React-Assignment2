import React, { useState } from "react";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination =() => {
  const [total, setTotal] = useState([]);
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pageVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pageVisited, pageVisited + usersPerPage)
   
    .map((user) => {
      
         return (
      <div className="user-section">
    <img src={user.picture.large} alt='' />
        <div className='user-details'>
       <h3><b>Name: </b>{user.name.title} {user.name.first} {user.name.last}</h3>
      <p><b>Email: </b>{user.email}</p>
      <p><b>Country: </b>{user.location.country}</p>
           </div>
      </div>

    )
    })

   // To get users from the API
  useEffect(() => {
    let getData = async () => {
      let response = await fetch("https://randomuser.me/api/?results=50");
      let data = response.json();
      return data;
    };
    getData()
      .then((data) => {
        data = data.results;
        setUsers(data.slice(0, 50));
        setTotal(data);
        
      })
  }, []);

  const pageCount = Math.ceil(total.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
        <div className="user-profile">
          {displayUsers}
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBtns"}
            previousLinkClassName={"prevBtn"}
            nextLinkClassName={"nextBtn"}
            activeClassName={"activeBtn"}
            disabledClassName={"disableBtn"}
          />
        </div>
  
    
  );
    }

export default Pagination