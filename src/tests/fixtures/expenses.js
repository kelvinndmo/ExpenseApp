import moment from "moment";

export const expenses = [
    {
        note:'kelvin onkundi',
        id:"1",
        description:'aubameyang',
        amount:1200,
        createdAt:moment(0).valueOf()
    },
    {
        note:'Gum',
        id:"2",
        description:'good and good stuff',
        amount:1095,
        createdAt:moment(0).subtract(4,'days').valueOf()
    },
    {
        note:'credit card',
        id:"3",
        description:'Rent',
        amount:1021,
        createdAt:moment(0).add(4, 'day').valueOf()
    }
]