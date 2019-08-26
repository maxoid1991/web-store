

const CatalogPageReducer = (data = {}, action) => {
    switch (action.type) {
        case "updateCatalog" : return {...data} 
    } 
    
    return data;
}

export { CatalogPageReducer };