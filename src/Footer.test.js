import Footer from './Footer';
import { shallow } from 'enzyme';
import React from 'react';

describe('Footer render check', ()=>{
    const wrapper=shallow(<Footer />);
    it('renders correctly',() => {
    expect(wrapper.find("p").text()).toEqual("footer");
    });
});