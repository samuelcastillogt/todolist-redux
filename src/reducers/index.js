const stateReducer = (state =[], action)=>{
    switch(action.type){
        case "SAVE":
            return [...state, action.payload]
        case "IMPORTANT":
             return state.map(item =>{
                if(item.id == action.payload){
                    console.log(item.id)
                    return {
                        ...item,
                        important: !item.important
                    }
                }
                return item
            })
            return state
        case "DELETE":
            return state.map(item =>{
                if(item.id == action.payload){
                    console.log(item.id)
                    return {
                        ...item,
                        terminada: !item.terminada
                    }
                }
                return item
            })
            return state
    }
    
}
export {stateReducer}