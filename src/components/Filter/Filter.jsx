import { Component } from 'react';

class Filter extends Component {
  handleInputChange = e => {
    this.props.filter(e.currentTarget.value);
  };

  render() {
    return (
      <form>
        <label>
          Find contacts by name
          <input type="text" onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default Filter;
