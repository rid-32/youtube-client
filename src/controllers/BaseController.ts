import { IController, ISetStateHandler, IState } from './types';

class BaseController<S extends IState> implements IController<S> {
  state: S;
  _setStateHandler: ISetStateHandler<S>;

  constructor() {
    this.state = {} as S;
    this._setStateHandler = () => {
      return;
    };
  }

  subscribe(callback: ISetStateHandler<S>) {
    this._setStateHandler = callback;
  }

  setState(newState: Partial<S>) {
    this.state = { ...this.state, ...newState };
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
