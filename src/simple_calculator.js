function add(){
    let sum = 0;
    for(let i=0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return (sum)
}
function multiply(){
    let prod = 1
    for(let i=0; i < arguments.length; i++){
        prod *= arguments[i];
    }
    return (prod)
}
 module.exports = add
 module.exports = multiply