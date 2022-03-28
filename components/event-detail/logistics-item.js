import styled from 'styled-components';

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <Item>
      <OneLiner>
        <IconContainer>
          <Icon />
        </IconContainer>
      </OneLiner>
      <OneLiner>
        <Content>
        {props.children}
        </Content>
      </OneLiner>
    </Item>
  );
}

const Item = styled.li`
display: flex;
font-size: 1.5rem;
align-items: center;
flex-direction: column;
text-align: center;
color: #aefff8;
`;

const OneLiner = styled.span`
display: block;
`;

const IconContainer = styled.section`
margin-right: 1rem;
color: #18e0d0;
width: 2rem;
height: 2rem;
`;

const Content = styled.span`
`;

export default LogisticsItem;
