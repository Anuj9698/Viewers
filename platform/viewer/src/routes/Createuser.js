import React from 'react';
import './CreateUser.css';
import DatePicker from 'react-date-picker';

class CreateUser extends React.Component {
  render() {
    return (
      <body style={{ backgroundColor: 'lightgrey' }}>
        <div
          style={{
            width: '80%',
            backgroundColor: 'lightgrey',
            paddingTop: '5%',
          }}
        >
          <div
            className="justify-content-center"
            style={{
              marginLeft: '20%',
              backgroundColor: '#DCDCDC',
              padding: '20px',
            }}
          >
            Add Patient's Details
          </div>
          <form
            className="justify-content-center"
            style={{
              marginLeft: '20%',
              backgroundColor: 'white',
              padding: '20px',
            }}
          >
            <div className="form-group row">
              <label
                forName="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                First Name
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                forName="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                Last Name
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                forName="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                Email
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                forName="colFormLabelSm"
                className="col-sm-2 col-form-label col-form-label-sm"
              >
                Contact Number
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  id="colFormLabelSm"
                  placeholder="Contact Number"
                />
              </div>
            </div>
            <DatePicker onChange={this.onChange} value={this.state.date} />
          </form>

          {/* <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={this.handleChange}
                id="exampleInputEmail1"
                name="fullname"
                placeholder="First Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                onChange={this.handleChange}
                id="exampleInputEmail1"
                name="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={this.handleChange}
                id="exampleInputEmail1"
                name="fullname"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                onChange={this.handleChange}
                id="exampleInputPassword1"
                name="location"
                placeholder="Current Location"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Signup
            </button>
            <div>
              Already a member?<a href="/signin">Sign in</a>
            </div>
          </form> */}
        </div>
      </body>
    );
  }
}

export default CreateUser;
