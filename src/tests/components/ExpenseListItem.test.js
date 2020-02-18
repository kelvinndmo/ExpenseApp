import React from "react"
import {shallow} from "enzyme"

import {ExpenseListItem} from "../../components/ExpenseListItem"

test('should render expense list item with props', () => {
    const wrapper = shallow(<ExpenseListItem expense={{id:"1", description:"hello", amount:1200, createdAt:20000}} />)
    expect(wrapper).toMatchSnapshot()
});
