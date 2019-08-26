
const MainPageReducer = (data = {}, action) => {

    switch (action.type) {
        case "updateMain" :
            return {
                ...data,
                phones: action.phones
            }
    } 

    return data;
}

export { MainPageReducer };