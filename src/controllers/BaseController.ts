import { IController, ISetStateHandler, IState } from './types';

class BaseController<S extends IState> implements IController<S> {
  _setStateHandler: ISetStateHandler<S>;

  constructor() {
    this._setStateHandler = () => {
      return;
    };

    this.setState = this.setState.bind(this);
  }

  get state() {
    return {} as S;
  }

  subscribe(callback: ISetStateHandler<S>) {
    this._setStateHandler = callback;
  }

  setState() {
    this._setStateHandler(this.state);
  }

  mounted() {
    return;
  }

  updated() {
    return;
  }

  unmounted() {
    return;
  }
}

export default BaseController;
