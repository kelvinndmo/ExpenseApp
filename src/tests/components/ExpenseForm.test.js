import React from "react"
import {shallow} from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import {expenses} from "../fixtures/expenses"
import moment from "moment";
test('should render expense form correctly', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot()
});

test('should render expenseform with data', () => {
    const wrapper = shallow(<ExpenseForm exepense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
});

test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit', {
        preventDefault:() => {}
    });
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
});

test('should set description', () => {
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{
     target:{
         value:'new description'
     }
    }
    )
    expect(wrapper.state('description')).toBe('new description')
});

test('should set on text area', () => {
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change', {
        target:{value:'kelvin'}
    })
    expect(wrapper.state('note')).toBe('kelvin')
});

test('should set valid amount', () => {
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target:{value:'1.20'}
    })
    expect(wrapper.state('amount')).toBe('1.20')
});

test('should  not set valid amount', () => {
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target:{value:'1.205'}
    })
    expect(wrapper.state('amount')).toBe('')
});

test('should call onsubmit props for valid form submission', () => {
    const {description, amount, note, createdAt} = expenses[0]
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault:() => {}
    })
    expect(wrapper.state('error')).toEqual('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description,
        createdAt,
        amount,
        note
    })
});

test('should set set new date on date change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment())
    expect(wrapper.state('createdAt')).toEqual(moment())
});

test('should set calendar focused to true', () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper.state('calendarFocused')).toEqual(false)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true})
    expect(wrapper.state('calendarFocused')).toEqual(true)
});