import React, { useEffect } from 'react';
import './BOMsOverview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const BOMsOverview = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const table = document.querySelector('.boms-table table');
    if (table) {
      const columns = table.querySelectorAll('th, td');
      let maxWidth = 0;

      // Calculate the maximum width of all columns
      columns.forEach((column) => {
        if (column.offsetWidth > maxWidth) {
          maxWidth = column.offsetWidth;
        }
      });

      // Set all columns to the maximum width
      columns.forEach((column) => {
        column.style.width = `${maxWidth}px`;
      });
    }
  }, []);

  return (
    <div className="boms-container">
      <div className="boms-table">
        <div className="boms-table-header">
          <div>Bill of Materials Overview</div>
          <button className="add-bom-button" onClick={() => navigate('/boms-overview-add')}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>BOM ID</th>
              <th>Location</th>
              <th>Site</th>
              <th>Type</th>
              <th>Order Date</th>
              <th>Status</th>
              <th>Information</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>LORT001</td>
              <td>SEVALO191</td>
              <td>New</td>
              <td>8/22/2022</td>
              <td>Complete</td>
              <td>
                <Link to="/boms-overview-view" className="icon-button">
                  <FontAwesomeIcon icon={faEye} />
                  <span className="tooltip">View</span>
                </Link>
                <Link to="/boms-overview-edit" className="icon-button">
                  <FontAwesomeIcon icon={faEdit} />
                  <span className="tooltip">Edit</span>
                </Link>
              </td>
            </tr>
            <tr>
              <td>002</td>
              <td>LORT001</td>
              <td>SEVALO191</td>
              <td>Plus Up</td>
              <td>8/22/2022</td>
              <td>Complete</td>
              <td>
                <Link to="/boms-overview-view" className="icon-button">
                  <FontAwesomeIcon icon={faEye} />
                  <span className="tooltip">View</span>
                </Link>
                <Link to="/boms-overview-edit" className="icon-button">
                  <FontAwesomeIcon icon={faEdit} />
                  <span className="tooltip">Edit</span>
                </Link>
              </td>
            </tr>
            <tr>
              <td>003</td>
              <td>LORT001</td>
              <td>SEVALO191</td>
              <td>Replacement</td>
              <td>8/22/2022</td>
              <td>Complete</td>
              <td>
                <Link to="/boms-overview-view" className="icon-button">
                  <FontAwesomeIcon icon={faEye} />
                  <span className="tooltip">View</span>
                </Link>
                <Link to="/boms-overview-edit" className="icon-button">
                  <FontAwesomeIcon icon={faEdit} />
                  <span className="tooltip">Edit</span>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BOMsOverview;
