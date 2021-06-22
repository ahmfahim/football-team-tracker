import React from 'react';
import './Leagues.css'
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Leagues = (props) => {
    const { strTeam, strTeamBadge, strLeague, idTeam} = props.league;
    return (
        <div className="leagues-container">
            <div className="leagues-info">
                <img src={strTeamBadge} alt="" />
                <h1>{strTeam}</h1>
                <p>{strLeague}</p>
            </div>
            <div className="btn-body">
                <Button className="explore-btn">
                    <Link to={'leaguesDetails/' + idTeam} ><span>Explore <FontAwesomeIcon icon={faArrowRight} /></span></Link>
                </Button>
            </div>
        </div>
    );
};

export default Leagues;