import React from 'react';
import { Link } from 'react-router-dom';
import './PatientList.css';

class PatientList extends React.Component {
  render() {
    return (
      <body style={{ backgroundColor: 'lightgrey' }}>
        <div>
          <div style={{ padding: '10px' }}>
            <span style={{ fontSize: '35px' }}>Patient List</span>
            <span style={{ float: 'right' }}>
              <Link
                to={{
                  pathname: '/createuser',
                }}
              >
                <button style={{ marginTop: '15px' }}>Add Patient</button>
              </Link>
            </span>
          </div>
          <div>
            <table>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Date of Birth</th>
                <th>Joining Date</th>
                <th>Actions</th>
              </tr>
              <tr>
                <td>Cris Benoit</td>
                <td>CrisBEnoit@malinator.com</td>
                <td>9999999999</td>
                <td>06-06-1999</td>
                <td>09-09-2018</td>
                <td>
                  <span>
                    <Link
                      to={{
                        pathname: '/updateuser',
                      }}
                    >
                      <button>edit</button>
                    </Link>
                  </span>
                  <span>
                    <button>Activate</button>
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </body>
    );
  }
}

export default PatientList;
