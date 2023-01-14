import { Component } from 'react';
import { Label, Input } from './Filter.styled';

class Filter extends Component {
  handleInputChange = e => {
    this.props.filter(e.currentTarget.value);
  };

  render() {
    return (
      <form>
        <Label>
          Find contacts by name
          <Input type="text" onChange={this.handleInputChange} />
        </Label>
      </form>
    );
  }
}

export default Filter;
