import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';

import styled from 'styled-components';

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <Item>
      <Image src={'/' + image} alt={title} />
      <Content>
        <div>
          <h2>{title}</h2>
          <Time>
            <IconContainer>
              <DateIcon />
            </IconContainer>
            <time>{humanReadableDate}</time>
          </Time>
          <Address>
            <IconContainer>
              <AddressIcon />
            </IconContainer>
            <address>{formattedAddress}</address>
          </Address>
        </div>
        <Actions>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <Icon>
              <IconContainer>
                <ArrowRightIcon />
              </IconContainer>
            </Icon>
          </Button>
        </Actions>
      </Content>
    </Item>
  );
}

const Item = styled.li`
box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
border-radius: 8px;
overflow: hidden;
background-color: white;
margin: 1rem;
display: flex;
flex-direction: column;
gap: 1rem;
`;

const Image = styled.img`
width: 100%;
object-fit: cover;
height: 10rem;
`;

const Content = styled.div`
width: 100%;
padding: 0 1rem;
text-align: center;
`;

const Time = styled.div`
display: flex;
gap: 0.5rem;
align-items: center;
`;

const Address = styled.div`
display: flex;
gap: 0.5rem;
align-items: center;
`;

const IconContainer = styled.div`
width: 1.25rem;
height: 1.25rem;
color: #666666;
`;

const Actions = styled.div`
display: flex;
flex-direction: column;
padding: 1rem;
`;

const Icon = styled.span`
margin-left: 0.5rem;
display: inline-flex;
justify-content: center;
align-items: center;
`;

export default EventItem;
