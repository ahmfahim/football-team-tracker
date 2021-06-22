import React from 'react';
import './Home.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Leagues from '../Leagues/Leagues';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.teams))
    }, [])
    return (
        <div className="home-body">
            <Header></Header>
            {
                leagues.map(league => <Leagues league={league}></Leagues>)
            }
        </div>
    );
};

export default Home;