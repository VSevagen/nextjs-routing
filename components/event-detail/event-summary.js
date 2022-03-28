import styled from 'styled-components';

function EventSummary(props) {
  const { title } = props;

  return (
    <Summary>
      <Heading>{title}</Heading>
    </Summary>
  );
}

const Summary = styled.section`
width: 100%;
height: 30vh;
background-image: linear-gradient(to bottom left,  #008b79, #1180a1);
`;

const Heading = styled.h1`
margin: 0;
padding-top: 3rem;
font-size: 2rem;
text-align: center;
text-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
color: white;
`;

export default EventSummary;