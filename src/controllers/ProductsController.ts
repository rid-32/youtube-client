import BaseController from './BaseController';

type ProductsControllerState = {
  value: number;
  handleClick: () => void;
};

class ProductsController extends BaseController<ProductsControllerState> {
  value: number;

  constructor() {
    super();

    this.value = 0;
    this.handleClick = this.handleClick.bind(this);
  }

  get state() {
    return {
      value: this.value,
      handleClick: this.handleClick,
    };
  }

  async mounted() {
    // fetch data here
  }

  handleClick() {
    this.value++;
    this.setState();
  }
}

export default ProductsController;
