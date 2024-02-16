import React from 'react';
import { shallow } from "enzyme";
import  App  from "./App";

const wrapper = shallow(<App/>);

describe('Test App Entry point',()=> {
  
  it('should have a header tag with Hello world React!', ()=> {
    expect(wrapper.find("h1").text()).toEqual("Hello world React!");
  });

  it('should have a paragraph tag with Edit src/App.js and save to reload.', ()=> {
    expect(wrapper.find("p").text()).toEqual("Edit src/App.js and save to reload.")
  });
});

describe('image tag renders',()=>{
  it('image is rendered',()=>{
    expect(wrapper.find('img').length).toBeGreaterThan(0);
  });
});