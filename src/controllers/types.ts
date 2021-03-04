export type IState = Partial<Record<string, unknown>>;

export interface ISetStateHandler<S extends IState> {
  (arg0?: S): void;
}

export interface IController<S extends IState> {
  state: S;
  _setStateHandler: ISetStateHandler<S>;

  setState(): void;
  subscribe(arg0: ISetStateHandler<S>): void;
  mounted(): void;
  updated(): void;
  unmounted(): void;
}
