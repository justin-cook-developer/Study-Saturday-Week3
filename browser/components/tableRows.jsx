import React from 'react';

const TableRows = props => {
    return (
      props.students.map(student => {
        return (
          <tr key={student.id} >
            <td>
              {student.fullName}
            </td>
          </tr>
        )
      })
    )
}

export default TableRows;
