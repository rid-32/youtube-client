import { DITypes } from 'di/types';

const DInject = (types: DITypes | DITypes[]) => {
  if (Array.isArray(types)) {
    console.log(types);
    return;
  }

  console.log(types);
};

export default DInject;
