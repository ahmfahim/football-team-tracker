import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaYoutube, FaTransgenderAlt, FaInstagram } from 'react-icons/fa';
import { CgSearchFound } from 'react-icons/cg';
import { BsFillFlagFill } from 'react-icons/bs';
import { GiSoccerBall } from 'react-icons/gi';
import './LeagueInfo.css';
import teamImg from '../../assets/male.png'
import {Button} from 'react-bootstrap'

const LeagueInfo = (props) => {
    const { strTeam, strYoutube, strTwitter, strSport, strTeamBadge, strGender, strStadiumLocation, intFormedYear, strInstagram, strFacebook, strDescriptionDE, strDescriptionEN, strDescriptionES, strDescriptionFR } = props.leagueInfo;
    return (
        <div className="leagueInfo-body" >
            <Button className="home-btn">
                <Link to="/home"><span>HOME</span></Link>
            </Button>
            <div className="league-thumb d-flex justify-content-center">
                <img src={strTeamBadge} alt="" />
            </div>
            <div className="league-main-info">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-lg-5">
                        <h2>{strTeam}</h2>
                        <p><CgSearchFound className='icon' /> Founded: {intFormedYear}</p>
                        <p><BsFillFlagFill className='icon' /> Country:<strong>{strStadiumLocation}</strong></p>
                        <p><GiSoccerBall className='icon' /> Sport Type: {strSport}</p>
                        <p><FaTransgenderAlt className='icon' /> Gender: <strong>{strGender}</strong> </p>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-7 team-img">
                        <img src={teamImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="league-details">
                <p>{strDescriptionDE}</p>
                <br />
                <p>{strDescriptionEN}</p>
                <br />
                <p>{strDescriptionES}</p>
                <br />
                <p>{strDescriptionFR}</p>
            </div>
            <div className="social-link d-flex justify-content-center">
                <a target="_blank" href={`https://${strInstagram}`}><FaInstagram className='s-icon' style={{ color: 'red' }} /></a>
                <a target="_blank" href={`https://${strTwitter}`}><FaTwitter className='s-icon' style={{ color: 'cyan' }}/></a>
                <a target="_blank" href={`https://${strFacebook}`}><FaFacebookF className='s-icon' /></a>
                <a target="_blank" href={`https://${strYoutube}`}><FaYoutube className='s-icon' style={{color:'red'}} /></a>
            </div>


        </div>
    );
};

export default LeagueInfo;