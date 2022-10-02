import { injectGlobal } from '@emotion/css';

injectGlobal`
  *,
  *::before,
  *::after {
    border: none;
    box-sizing: border-box;
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
`;
