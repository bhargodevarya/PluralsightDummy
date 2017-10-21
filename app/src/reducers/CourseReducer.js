export default function CourseReducer(state = [],action) {
    console.log(">>>>>>>>",...state,action)
    switch (action.type) {
        case 'ADD_COURSE':console.log('returning',action)
            return [...state,Object.assign({}, action.course)];
        default:console.log("default state",state)
            return state;
    }
}