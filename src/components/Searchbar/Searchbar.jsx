import React, { Component } from 'react';
import {
  ButtonStyled,
  ButtonLabelStyled,
} from '../Button/IconButton/IconButton.styled';
import {
  SearchFormStyled,
  SearchHeaderStyled,
  SearchInputStyled,
} from './Searchbar.styled';

class SearchBar extends Component {
  state = {
    search: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.search.trim() === ``) {
      return;
    }
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <SearchHeaderStyled>
        <SearchFormStyled onSubmit={this.handleSubmit}>
          <SearchInputStyled
            name="search"
            value={this.state.search}
            onChange={this.handleInputChange}
          />
          <ButtonStyled>
            <ButtonLabelStyled />
          </ButtonStyled>
        </SearchFormStyled>
      </SearchHeaderStyled>
    );
  }
}

export default SearchBar;
