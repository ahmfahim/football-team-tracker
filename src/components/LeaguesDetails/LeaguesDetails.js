import React, { useEffect, useState } from 'react';
import './LeaguesDetails.css'
import {  useParams } from 'react-router-dom';
import LeagueInfo from '../LeagueInfo/LeagueInfo';


const LeaguesDetails = () => {
    const { idTeam } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams))
    }, [])


    return (
        <div>
            {
                details.map(info => <LeagueInfo leagueInfo={info}></LeagueInfo>)
            }
        </div>
    );
};

export default LeaguesDetails;