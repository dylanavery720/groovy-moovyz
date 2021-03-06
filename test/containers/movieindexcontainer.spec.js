import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import * as actions from '../../public/app/actions/index'
import MovieIndexContainer, { mapStateToProps } from '../../public/app/containers/MovieIndexContainer'


const fakeStore = configureMockStore()({ movies: [] })

const setup = () => {
  const props = {
    handleSubmit: jest.fn(),
  }

  const wrapper = mount(
    <Provider store={fakeStore}>
    <MovieIndexContainer {...props}/>
    <MovieIndexContainer handleSubmit={props.handleSubmit} movies={props.movies} />
    </Provider>

  )

  const Component = wrapper.find(MovieIndex)

  return {
    props,
    Component
  }
}

describe('components', () => {
  describe('MovieIndexContainer', () => {
    it.skip('map state to props', () => {
      const wrapper = mount(<MovieIndexContainer />)
      assert.isFunction(mapStateToProps);
    });

    xit('should call handleSearch when a user types in the input', () => {
        const { props, Component } = setup()
        let input = Component.find('input')
        form.simulate('change')
        expect(props.handleSearch).toBeCalled('handleSearch')
  });
});
});
