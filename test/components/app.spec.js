import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'

import App from '../../app/components/App'

describe('App', () => {
  it('should show title "Groovie Movies"', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('h1').text()).to.equal('Groovie Movies');
  });
})