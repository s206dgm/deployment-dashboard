import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDolly, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [showBOMs, setShowBOMs] = useState(false);
  const location = useLocation();

  return (
    <aside className="sidebar">
      <ul>
        <li className={`home ${location.pathname === '/' ? 'selected' : ''}`}>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <hr />
        <li onClick={() => setShowBOMs(!showBOMs)} className={`boms-menu-item ${showBOMs ? 'selected' : ''}`}>
          <FontAwesomeIcon icon={showBOMs ? faChevronUp : faChevronDown} className="chevron" />
          <FontAwesomeIcon icon={faDolly} /> <span>BOMs</span>
        </li>
        <ul className={`dropdown ${showBOMs ? 'active' : ''}`}>
          <li className={location.pathname === '/boms-overview' ? 'selected' : ''}>
            <Link to="/boms-overview">
              <span>Overview</span>
            </Link>
          </li>
        </ul>
      </ul>
    </aside>
  );
};

export default Sidebar;
