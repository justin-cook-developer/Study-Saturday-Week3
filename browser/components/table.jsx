import React from 'react';

import TableRows from './tableRows'

const StudentsTable = props => {
  return (
    <table>
      <tbody>
        <TableRows students={props.students} />
      </tbody>
    </table>
  );
}

export default StudentsTable;
