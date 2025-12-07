import React, { Component } from 'react';

class Filters extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.props.onFilter({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <div className="form-group mb-0">
          <label htmlFor="filterText" className="font-weight-bold">
            Search Products
          </label>
          <input
            type="text"
            id="filterText"
            name="filterText"
            className="form-control"
            placeholder="Type to filter by product name..."
            value={this.props.filterText}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

export default Filters;
