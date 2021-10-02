import './App.css';
import Header from "./components/PageHeader";
import SearchForm from "./components/SearchForm";
import Card from "./components/Card";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [user, setUser] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        fetchUserData('octocat')
    },[])
    function handleSearch(username) {
        setLoading(true)
        setUser('')
        fetchUserData(username)
    }

    function fetchUserData(username) {
        axios.get(  `https://api.github.com/users/${username}`)
            .then((res) => {
                setLoading(false)
                setError(false)
                setUser(res.data)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
    }

    return (
        <>
            <Header/>
            <SearchForm handleSearch={handleSearch} hasError={error} hasLoading={loading}/>
            <Card userData={user} hasError={error} hasLoading={loading}/>
        </>
    );
}

export default App;
