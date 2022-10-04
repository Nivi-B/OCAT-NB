
import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';

export const AssessmentList = () => {
  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    const fetchAssessments = async () => {

      console.log(`hello`);

      setAssessments(await AssessmentService.getList());

    };
    fetchAssessments();
  }, []);

  console.log(assessments);

  /* const data = React.useMemo(
    () => [
      {
        col1: `Cat Name`,
        col2: `cat_name`,
      },
      {
        col1: `Cat Date of Birth`,
        col2: `cat_date_of_birth`,
      },
      {
        col1: `Score`,
        col2: `score`,
      },
      {
        col1: `Risk Level`,
        col2: `risk_level`,
      },
      {
        col1: `Date Created`,
        col2: `created_at`,
      },
    ],
    [],
  );
  */
  const columns = React.useMemo(
    () => [
      {
        Header: `Cat Name`,
        accessor: `cat_name`,
      },
      {
        Header: `Cat Date of Birth`,
        accessor: `cat_date_of_birth`,
      },
      {
        Header: `Score`,
        accessor: `score`,
      },
      {
        Header: `Risk Level`,
        accessor: `risk_level`,
      },
      {
        Header: `Date Created`,
        accessor: `created_at`,
      },
    ],
    [],
  );

  function Table({ data }) {
    const {
      getTableBodyProps,
      getTableProps,
      headerGroups,
      prepareRow,
      rows,
    } = useTable({ columns, data });

    return (
      <div>
        {
          /* List goes here
            Please use the library react-table https://www.npmjs.com/package/react-table */

          <table {...getTableProps()} style={{ border: `solid 1px blue` }}>
            <thead>
              {headerGroups.map(headerGroup =>
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column =>
                    <th
                      {...column.getHeaderProps()}
                      style={{
                        borderBottom: `solid 3px red`,
                        background: `aliceblue`,
                        color: `black`,
                        fontWeight: `bold`,
                      }}
                    >
                      {column.render(`Header`)}
                    </th>)}
                </tr>)}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell =>
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: `10px`,
                          border: `solid 1px gray`,
                          background: `papayawhip`,
                        }}
                      >
                        {cell.render(`Cell`)}
                      </td>)}
                  </tr>
                );
              })}
            </tbody>
          </table>
        }
      </div>

    );
  }
  return (
    <div className='Table'>

      <h1><center>Risk Assessment for Cats</center></h1>
      <Table columns={columns} data={assessments} />
    </div>

  );

};
