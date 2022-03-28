import { useRef } from 'react';

import Button from '../ui/button';

import styled from 'styled-components';

const options = [
  {value: 1, month: "January"},
  {value: 2, month: "February"},
  {value: 3, month: "March"},
  {value: 4, month: "April"},
  {value: 5, month: "May"},
  {value: 6, month: "June"},
  {value: 7, month: "July"},
  {value: 8, month: "August"},
  {value: 9, month: "September"},
  {value: 10, month: "October"},
  {value: 11, month: "November"},
  {value: 12, month: "December"},
]

function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;

    props.onSearch(selectedYear, selectedMonth);    
  }

  return (
    <Form onSubmit={submitHandler}>
      <Control>
        <Controls>
          <label htmlFor='year'>Year</label>
          <select id='year' ref={yearInputRef}>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
          </select>
        </Controls>
        <Controls>
          <label htmlFor='month'>Month</label>
          <select id='month' ref={monthInputRef}>
            {options.map((option) => {
              return <option value={option.value}>{option.month}</option>
            })}
          </select>
        </Controls>
      </Control>
      <Button>Find Events</Button>
    </Form>
  );
}

const Form = styled.form`
margin: 2rem auto;
box-shadow: 0 1px 4px rgba(0,0,0,0.2);
padding: 1rem;
background-color: white;
border-radius: 6px;
width: 90%;
max-width: 40rem;
display: flex;
justify-content: space-between;
flex-direction: column;
gap: 1rem;
`;
const Controls = styled.div`
width: 100%;
display: flex;
gap: 1rem;
flex-direction: column;
`;

const Control = styled.div`
flex: 1;
display: flex;
gap: 1rem;
align-items: center;
justify-content: space-between;
`;

export default EventsSearch;
