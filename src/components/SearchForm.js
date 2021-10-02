import React, {useState} from 'react';
import searchIcon from '../assets/icon-search.svg';

export default function SearchForm({handleSearch, hasError, hasLoading}) {
    const [username, setUsername] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        handleSearch(username)
    }

    return (
        <form className="container formWrapper" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search GitHub username…" value={username}
                   onChange={e => (setUsername(e.target.value))} className="form-control"/>

            <img src={searchIcon} alt="" className="floatIcon"/>
            {hasError && <span className="errorMsg">no result found</span>}
            <button className="btnSearch" disabled={hasLoading}>
                {hasLoading ? 'searching' : 'search'}
            </button>
        </form>
    )
}