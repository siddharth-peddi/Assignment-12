import React, { Component } from 'react';

const RESET_VALUES = { id: '', category: '', price: '', name: '' };

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => {
      const product = Object.assign({}, prevState.product);
      product[name] = value;
      return { product };
    });
  }

  handleSave(e) {
    e.preventDefault(); // Prevent HTTP POST

    this.props.onSave(this.state.product);

    this.setState({
      product: Object.assign({}, RESET_VALUES),
      errors: {}
    });
  }

  render() {
    const { name, category, price } = this.state.product;

    return (
      <form>
        <h5 className="mb-3">Add New Product</h5>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              placeholder="Product name"
              value={name}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="category">Category</label>
            <input
              className="form-control"
              id="category"
              name="category"
              type="text"
              placeholder="Category"
              value={category}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group col-md-4">
            <label htmlFor="price">Price</label>
            <input
              className="form-control"
              id="price"
              name="price"
              type="text"
              placeholder="$0.00"
              value={price}
              onChange={this.handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSave}
        >
          Save
        </button>
      </form>
    );
  }
}

export default ProductForm;
