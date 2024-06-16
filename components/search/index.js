import { IoSearch } from "react-icons/io5";


import './search.css';



const SearchBox = () =>{
    return(
        <div className="searchBox position-relative d-flex align-items-center">
        <IoSearch className="mr-2"/>
          <input type="text" placeholder="Search.."/>
        </div>
    )
}

export default SearchBox;