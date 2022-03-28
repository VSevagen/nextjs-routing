import EventItem from './event-item';

import styled from 'styled-components';

function EventList(props) {
  const { items } = props;

  return (
    <List>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </List>
  );
}

const List = styled.ul`
width: 90%;
max-width: 40rem;
margin: 5rem auto;
`;

export default EventList;
