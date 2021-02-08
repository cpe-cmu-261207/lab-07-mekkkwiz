import { useContext, useState } from "react";
import dynamic from 'next/dynamic'
//const CardContext = dynamic(() => import('../pages/gpa'))
import {CardContext} from '../pages/gpa'
const CourseCard = (props) => {
  const { dispatch } = useContext(CardContext);
  return (props.state.map(obj => {
    return (<>
      <div class="CourseCard">
        <tr id="CC">
          <td>
            <div class="tag">
              <p>วิชา : {obj.name}</p>
              <p>เกรด : {obj.a}</p>
              <p>หน่วยกิต : {obj.c}</p>
            </div>
          </td>
          <td>
            <button class="btn" onClick = {()=>{
                dispatch({
                    type: "DELETE_CARD",
                    payload: obj.id,
                });}}>x</button>
          </td>
        </tr>
      </div>
    </>)
  }))
  
};

export default CourseCard;