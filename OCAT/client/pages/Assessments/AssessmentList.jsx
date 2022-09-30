
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

  /*
const data = React.useMemo(
     () => [
       {
         col1: '',
         col2: '',
       },
       {
         col1: '',
         col2: '',
       },
       {
         col1: '',
         col2: '',
       },
     ],
     []
   )

   const columns = React.useMemo(
     () => [
       {
         Header: '',
         accessor: '',
       },
       {
         Header: '',
         accessor: '',
       },
     ],
     []
   )
*/

  return (
    <div>
      {/*
          List goes here
          Please use the library react-table https://www.npmjs.com/package/react-table
           */

        <table>

          <thead>
            <tr>
              <th>cat name</th>
              <th>cat date of birth</th>
              <th>score</th>
              <th>Risk level</th>
              <th>date created</th>
            </tr>
          </thead>

          <tbody>
            {assessments.map(() =>
              <tr>
                <td>{assessments.cat_name}</td>
                <td>{assessments.cat_date_of_birth}</td>
                <td>{assessments.score}</td>
                <td>{assessments.risk_level}</td>
                <td>{assessments.created_at}</td>
              </tr>)}

          </tbody>

        </table>

      }
    </div>
  );
};
