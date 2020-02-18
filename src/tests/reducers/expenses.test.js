import expensesReducer from "../../reducers/expenses"
import { expenses } from "../fixtures/expenses";
import moment from "moment";

test('should set defualt set', () => {
    const state = expensesReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual([])
});

test('should remove expense', () => {
    const action  = {
        type:'REMOVE_EXPENSE',
        id:'1'
    }

    const state = expensesReducer(expenses, action)
    expect(state.length).toBe(2)
    expect(state).toEqual([expenses[1], expenses[2]])
});

test('should not remove expense wrong id', () => {
    const action  = {
        type:'REMOVE_EXPENSE',
        id:'-1'
    }

    const state = expensesReducer(expenses, action)
    expect(state.length).toBe(3)
    expect(state).toEqual(expenses)
});

test('should add an expense', () => {
    const action = {
        type:'ADD_EXPENSE',
        expense:{
            note:'kelvin onkundi',
            id:"4",
            description:'aubameyang',
            amount:1200,
            createdAt:moment(0).valueOf()
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state.length).toEqual(4)
});

test('should edit an expense', () => {
    const action = {
        type:'EDIT_EXPENSE',
        id:'2',
        updates:{
            description:'auba'
        }

    }

    const state = expensesReducer(expenses, action)
    expect(state[1].description).toEqual('auba')
});

test('should not edit an expense if not found', () => {
    const action = {
        type:'EDIT_EXPENSE',
        id:'-2',
        updates:{
            description:'auba'
        }

    }

    const state = expensesReducer(expenses, action)
    expect(state[1].description).toEqual('good and good stuff')
});
