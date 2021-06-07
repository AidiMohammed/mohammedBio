import React from 'react'
import {NavLink} from 'react-router-dom'
import "../styles/components/sidebarNavigation.css"

export default function SidebarNavigation() {
    return (
        <div className="sidebar-navigation">
            <div className="avatar">
                <div className="avatar-contenet">
                    
                </div>
            </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <NavLink className="link" exact to="/" activeClassName="selected">
                            <i className="fas fa-home"></i>
                            <span>A Propos de moi</span>
                            </NavLink>                             
                        </li>
                        <li>
                            <NavLink className="link" exact to="/competences" activeClassName="selected">
                            <i className="fas fa-graduation-cap"></i>
                            <span>Competences</span>
                            </NavLink>                             
                        </li>
                        <li>
                            <NavLink className="link" exact to="/experience" activeClassName="selected">
                            <i className="fas fa-child"></i>
                            <span>Experinece</span>
                            </NavLink>                             
                        </li>
                        <li>
                            <NavLink className="link" exact to="/portfolio" activeClassName="selected">
                            <i className="fas fa-book"></i>
                            <span>protfolio</span>
                            </NavLink>                             
                        </li>
                    </ul>
                </div>
                <div className="social-network">
                    <ul>
                        <li>
                            <a href="https://www.faceook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkdin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/AidiMohammed" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="signature">
                    <p>Mohammed Aidi 2021</p>
                </div>
        </div>
    )
}
