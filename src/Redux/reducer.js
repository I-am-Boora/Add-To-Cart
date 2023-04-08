export const  cartData = (data=[],action)=>{
//     if(action.type ==='ADD_TO_CART'){
//         console.log('add to cart condition',action)
//         return data
//     }
// else{
//     return 'no action'
// }
switch(action.type){
    case 'ADD_TO_CART':
        console.log('add to cart ',data)
        return [action.data,...data];
    case 'REMOVE_FROM_CART':
        console.log('remove from cart ',data)
        
        
        if(data.length <= 0){
            data.length = 0;
        }
        else{
            data.length= data.length - 1;
        }       
        return [...data];
    case 'EMPTY_FROM_CART':
        return []
    
    default:return data;
}
}