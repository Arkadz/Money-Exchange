// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency>10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
        } else if (currency<=0) return {};
    
    let obj = {"H":0,"Q":0,"D":0,"N":0,"P":0};
        
    obj.H = calculate (currency, 50);
    currency -= 50*obj.H;
    if (obj.H == 0) delete obj.H;
    obj.Q = calculate (currency ,25);
    currency -= 25*obj.Q;
    if (obj.Q == 0) delete obj.Q;
    obj.D = calculate (currency, 10);
    currency -= 10*obj.D;
    if (obj.D == 0) delete obj.D;
    obj.N = calculate (currency ,5);
    currency -= 5*obj.N;
    if (obj.N == 0) delete obj.N;
    obj.P = calculate (currency ,1);
    if (obj.P == 0) delete obj.P;
    
    
    return obj;
}

const calculate = (exchange, divider) => {
    let x = Math.floor(exchange/divider);
    return x;

}