import styled from 'styled-components';

function EventContent(props) {
  return (
    <Content>
      {props.children}
    </Content>
  );
}

const Content = styled.section`
font-size: 1.5rem;
color: #3a3a3a;
width: 90%;
max-width: 40em;
margin: auto;
margin-top: 8rem;
text-align: center;
`;

export default EventContent;
