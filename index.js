// Code your solution in this file!

const returnFirstTwoDrivers = drivers => {
    const arr = [...drivers.slice(0,2)];
    return arr;
}

const returnLastTwoDrivers = drivers => {
    const arr = drivers.slice(2);
    return arr;
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(){
    const fareMultiplier = function(x){
        return x*x;
    }
    return fareMultiplier;
}

const fareDoubler = x => {return x*2;}

const fareTripler = x => {return x*3;}

const selectDifferentDrivers = (drivers,cb) => {
    return cb(drivers);
}


