import 'ui/styles.scss';

import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import Products from 'components/Products';

const App: FC = () => {
  return <Products />;
};

ReactDOM.render(<App />, document.getElementById('root'));
