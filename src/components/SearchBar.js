import './SearchBar.css';
import { useState } from "react";
function SearchBar({onSubmit}){
    const [term, setTerm]= useState('');
    const handleFormSubmit=() =>{
        // onSubmit('cars');
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
        onSubmit(term);
    };

    const handleChange =(event)=>{
        setTerm(event.target.value);
    };


    return (
        <div className='parent'>

    <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
    <input value={term} onChange={handleChange}/>
    </form>
    </div>
        </div>
            
    );
}

export default SearchBar;