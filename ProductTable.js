import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.handleDestroy = this.handleDestroy.bind(this);
  }

  handleDestroy(id) {
    this.props.onDestroy(id);
  }

  render() {
    const rows = [];
    const productsArray = Object.keys(this.props.products).map(
      key => this.props.products[key]
    );

    productsArray.forEach(product => {
      const filterText = this.props.filterText.toLowerCase();

      if (
        filterText &&
        product.name.toLowerCase().indexOf(filterText) === -1
      ) {
        return;
      }

      rows.push(
        <ProductRow
          product={product}
          key={product.id}
          onDestroy={this.handleDestroy}
        />
      );
    });

    return (
      <table className="table table-striped table-hover mb-0">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
