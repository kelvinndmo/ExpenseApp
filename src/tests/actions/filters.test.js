import {setEndDate, setTextFilter, setStartDate, sortByAmount, sortByDate} from "../../actions/filters"
import moment from "moment";

test('should set text filter', () => {
    const filter = setTextFilter('kelvin')
    expect(filter).toEqual({
        type:'SET_TEXT_FILTER',
        text:'kelvin'
    })
});

test('should set sortByDate', () => {
    const filter = sortByDate()
    expect(filter).toEqual({
        type:'SORT_BY_DATE'
    })
});

test('should set start Date', () => {
    const filter = setStartDate(moment(10000))
    expect(filter).toEqual({
        type:'SET_START_DATE',
        startDate:moment(10000)
    })
});

test('should  set endDate', () => {
    const filter = setEndDate(moment(10000))
    expect(filter).toEqual({
        type:'SET_END_DATE',
        endDate:moment(10000)
    })
});