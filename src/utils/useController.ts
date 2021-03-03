import { useMemo, useState, useEffect, useRef } from 'react';

import { BaseController } from 'controllers';

const useController = <T extends BaseController<T['state']>>(Controller: {
  new (): T;
}) => {
  const isMounting = useRef(true);
  const controller = useMemo(() => {
    return new Controller();
  }, []);
  const [state, setState] = useState(controller.state);

  useMemo(() => {
    controller.subscribe(setState);
  }, []);

  useEffect(() => {
    if (isMounting.current) {
      controller.mounted();

      isMounting.current = false;
    } else {
      controller.updated();
    }

    return () => {
      controller.unmounted();
    };
  });

  return state;
};

export default useController;
