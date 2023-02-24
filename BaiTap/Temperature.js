class Temperature{
    doC;
    constructor(doC){
        this.doC = doC
    }
    changetoDoF(){
        return this.doC * 9/5 +32
    }
    changetoDoK(){
        return this.doC + 273.13
    }
}
let getTemp = new Temperature(31);
let getDoF = getTemp.changetoDoF();
let getDoK = getTemp.changetoDoK();
console.log('Nhiệt độ F: ' + getDoF + ' Nhiệt độ K: ' + getDoK);