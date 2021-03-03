export type IState = Partial<Record<string, unknown>>;

export interface ISetStateHandler<S extends IState> {
  (arg0?: S): void;
}

export interface IController<S extends IState> {
  setState(arg0: Partial<S>): void;
  mounted(): void;
  updated(): void;
  unmounted(): void;
}
