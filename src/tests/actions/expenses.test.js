import {editExpense, addExpense, removeExpense} from "../../actions/expenses"

test('should setup remove expense action object', () => {
    const action = removeExpense({id:'1234'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'1234'
    })
});

test('should setup edit expense', () => {
    const action = editExpense(1234, {note:'new note value'})
    expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:1234,
    updates:{note:'new note value'}
    })
});

test('should setup addd expense', () => {
    const expenseData = {
        description:"Rent",
        note:"rent for 2019",
        amount:10000,
        createdAt:200000
    }

    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id:expect.any(String)
        }
    })
});

test('should what is addded when we call add expense with no data', () => {
  
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            description:'',
            note:'',
            amount:0,
            createdAt:0
        }
    })
});