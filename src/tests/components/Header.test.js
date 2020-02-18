import React from "react"
import {shallow }from "enzyme";
import Header from "../../components/Header"

test('should render the header component correct', () => {
    const wrapper = new shallow(<Header/>);
    // expect(wrapper.find('h1').length).toBe(1)
    // expect(wrapper.find('h1').text()).toBe('Expensify')
    expect(wrapper).toMatchSnapshot()
});