import { normalize } from 'polished';

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  ${normalize()}

  a {
    color: #0070f3;
    text-decoration: none;

    &:hover {
     text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
