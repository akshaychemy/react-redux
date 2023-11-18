export const ExampleReducer_INITIAL_STATE={
    name:'name',
    age:0
}

//export const ExampleReducer = (state=INITIAL_STATE,action)=>{
export const ExampleReducer = (state,action)=>{
    switch(action.type){
        case"PUT_DATA":
        return{
            ...state,
            name:action.payload.name,
            age:action.payload.age,
        }
        case "GET_DATA":
            return{
                ...state,
                name:'',
                age:0
            }
        default:
            return state;

    }
}
