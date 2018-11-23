import React from 'react';

import TableRows from './tableRows'

const StudentsTable = props => {
  return (
    <table>
      <tbody>
        <TableRows students={props.students} getId={props.getId} />
      </tbody>
    </table>
  );
}

export default StudentsTable;
