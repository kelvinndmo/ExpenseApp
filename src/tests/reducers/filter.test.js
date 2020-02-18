import filterReducer from "../../reducers/filters"
import moment from "moment";

test('should set up default default filter values', () => {
    const state = filterReducer(undefined, {type:'@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
});

test('should set sort by to amount', () => {
    const state = filterReducer(undefined, {type:'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
});

test('should sort by date', () => {
    const initalState = {
        text:'',
        sortBy:'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filterReducer(initalState, {type:'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
});

test('should set text filter', () => {
  
    const state = filterReducer(undefined, {type:'SET_TEXT_FILTER',text:'auba'})
    expect(state.text).toBe('auba')
});

test('should set start date filter', () => {
    const state = filterReducer(undefined, {
        type:'SET_START_DATE',
        startDate:moment().startOf('month').valueOf()
    })

    expect(state.startDate).toEqual(moment().startOf('month').valueOf())
});


test('should set end date filter', () => {
    const state = filterReducer(undefined, {
        type:'SET_END_DATE',
        endDate:moment().startOf('month').valueOf()
    })

    expect(state.endDate).toEqual(moment().startOf('month').valueOf())
});