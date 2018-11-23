import React from 'react';

const TableRows = props => {
    return (
      props.students.map(student => {
        return (
          <tr key={student.id} id={student.id} onClick={props.getId}>
            <td>
              {student.fullName}
            </td>
            <td>
              <strong>Details</strong>
            </td>
          </tr>
        )
      })
    )
}

export default TableRows;
