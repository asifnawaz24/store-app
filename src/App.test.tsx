import React, { Component } from 'react';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';

describe('App', () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, Component<{}, {}, any>>;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should render Navigation', () => {
    expect(wrapper.find('Navigation').length).toEqual(1);
  });

  it('should render Router', () => {
    expect(wrapper.find('BrowserRouter').length).toEqual(1);
  });
  
});

