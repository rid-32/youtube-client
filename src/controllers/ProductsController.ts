import BaseController from './BaseController';

type ProductsControllerState = {
  value: number;
  handleClick: () => void;
};

class ProductsController extends BaseController<ProductsControllerState> {
  constructor() {
    super();

    this.state = {
      value: 0,
      handleClick: this.handleClick.bind(this),
    };
  }

  async mounted() {
    // fetch data here
  }

  handleClick() {
    this.setState({ value: this.state.value + 1 });
  }
}

export default ProductsController;
