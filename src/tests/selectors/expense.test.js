import selectExpenses from "../../selectors/expenses";
import moment from "moment";
import { expenses } from "../fixtures/expenses";



test('should filter by text value', () => {
    const filters = {
        text:'e',
        sortBy:'date',
        startDate:undefined, 
        endDate:undefined
    }
    const result = selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[2], expenses[0]])
});

test('should filter by startDate', () => {
    const filter ={
        text:'',
        startDate:moment(0),
        endDate:undefined,
        sortBy:'date'
    }  
    const results = selectExpenses(expenses, filter)
    expect(results).toEqual([expenses[2], expenses[0]])
});

test('should filter by date', () => {
    const filters ={
        text:'',
        startDate:undefined,
        endDate:moment(0).add(4, 'days'),
        sortBy:'date'
    }

    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
});

test('should sort by date', () => {
    const filters ={
        text:'',
        sortBy:'date',
        endDate:undefined,
        startDate:undefined
    }

    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[2],expenses[0], expenses[1]])
});

test('should sort by amount', () => {
    const filters ={
        text:'',
        sortBy:'amount',
        endDate:undefined,
        startDate:undefined
    }

    const result = selectExpenses(expenses, filters)
    expect(result).toEqual([expenses[0], expenses[1], expenses[2]])
});