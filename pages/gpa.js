import { createContext, useEffect, useReducer , useState } from "react";
import dynamic from 'next/dynamic'
const CourseCard = dynamic(() => import('../components/CourseCard'))
const CourseForm = dynamic(() => import('../components/CourseForm'))
import Link from 'next/link'

export const CardContext = createContext({});

function App() {
  const [GPA, setGPA] = useState(0.00);
  function calculateGPA() {
    // TODO
    let grade = 0.00
    let credit = 0
    state.currentState.forEach(obj => {
      if(obj.a !== "W"){
        grade += Number(obj.g) * Number(obj.c)
        credit += Number(obj.c)
      }
    })
    grade  = Number(grade) / Number(credit)
    if(Number(grade) >= 0)
      setGPA(Number(grade.toPrecision(3)))
    else setGPA(0.00)
  }

  const reducer = (state , action) =>{
    switch(action.type){
      case "ADD_CARD":
        return {
          ...state,
          currentState: [...state.currentState, action.payload],
        };
      case "SET_CARD":
        return {
          ...state,
          currentState: action.payload,
        };
      case "DELETE_CARD":
        return {
          ...state,
          currentState: state.currentState.filter((card) => card.id !== action.payload),
        };
      }
  }

  const [state,dispatch] = useReducer(reducer, {currentState:[],})
  function fetchCards() {
    const localState = localStorage.getItem("currentState");
    if (localState) {
      dispatch({
        type: "SET_CARD",
        payload: JSON.parse(localState),
      })
    }
    calculateGPA()
  }

  useEffect(fetchCards, [])
  useEffect(() => {
    localStorage.setItem("currentState", JSON.stringify(state.currentState));
    calculateGPA()
  }, [state.currentState])
  const style = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 10px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
  }
  return (
      <section class = "main">
    <CardContext.Provider value = {{state,dispatch}}>
      <div>
        <nav>
            <div class = "logo">
                <name>MEK WISARUT</name>
                <sl>&nbsp;/&nbsp;</sl>
                <pos>SOFTWARE DEV</pos>
            </div>
            <div class = "nav-links">
                <ul class = "menu">
                    <li><a href="/">HOME</a></li>
                    <li><a href="/gallery">GALLERY</a></li>
                    <li><a href="/gpa">GPA</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                    <li><a href="/post">POST</a></li>
                </ul>
            </div>
        </nav>
        <h1 class = "title">GPA CALCULATOR</h1>
        <CourseCard state={state.currentState} />
      </div>
      <CourseForm />
      <h2>GPA : {GPA.toFixed(2)}</h2>
    </CardContext.Provider>
    </section>
  );
}

export default App;