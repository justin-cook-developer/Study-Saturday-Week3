import React from 'react';
import axios from 'axios';

import StudentsTable from './table';

class Main extends React.Component {
  constructor () {
    super();
    this.state = {
      students: [],
      errorMessage: ''
    };
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

  render() {
    return (
      <div>
        <h1>Students: </h1>
        {
          this.state.errorMessage
          ? <h2> {this.state.errorMessage} </h2>
          : <StudentsTable students={this.state.students} />
        }
      </div>
    )
  }

}

export default Main;
