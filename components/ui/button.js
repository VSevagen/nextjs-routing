import Link from 'next/link';

import styled from 'styled-components';

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <UIButton>
        <a>{props.children}</a>
        </UIButton>
      </Link>
    );
  }

  return (
    <UIButton onClick={props.onClick}>
      {props.children}
    </UIButton>
  );
}

const UIButton = styled.button`
text-decoration: none;
cursor: pointer;
font: inherit;
background-color: #03be9f;
border: 1px solid #03be9f;
border-radius: 6px;
color: #dafff7;
padding: 0.5rem 1.5rem;
text-align: center;
box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);

:hover {
  background-color: #02afa1;
  border-color: #02afa1;
}
`;

export default Button;
