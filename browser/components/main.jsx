import React from 'react';
import axios from 'axios';

import StudentsTable from './table';
import Details from './details'

class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      students: [],
      errorMessage: '',
      studentIdForDetails: 0
    };
    this.getId = this.getId.bind(this);
  }

  async componentDidMount() {
    let students;
    let err;

    try {
      const fetchStudents = await axios.get('http://localhost:3000/student/');
      console.log(fetchStudents.data);
      students = fetchStudents.data;
      err = '';
    } catch(error) {
      students = [];
      err = error.message;
    }

    this.setState({
      students: students,
      errorMessage: err
    });
  }

  getId(event) {
    if (this.state.studentIdForDetails === event.currentTarget.id) {
      this.setState({
        studentIdForDetails: 0
      });
    } else  {
      this.setState({
        studentIdForDetails: event.currentTarget.id
      });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Students: </h1>
        {
          this.state.errorMessage
          ? <h2> {this.state.errorMessage} </h2>
          : <StudentsTable students={this.state.students} getId={this.getId} />
        }
        {
          this.state.studentIdForDetails !== 0 &&
          <Details id={this.state.studentIdForDetails} />
        }
      </div>
    )
  }
}

export default Main;
