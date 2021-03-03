import React, { FC } from 'react';

import { useController } from 'utils';
import { ProductsController } from 'controllers';

// import styles from './styles.scss';

const Products: FC = () => {
  const { value, handleClick } = useController(ProductsController);

  return <button onClick={handleClick}>{value}</button>;
};

export default Products;
