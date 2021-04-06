const returnFirstTwoDrivers = function(array) {
    let firstTwoDrivers = array.slice(0,2);
    return firstTwoDrivers;
}

const returnLastTwoDrivers = function(array) {
    let lastTwoDrivers = array.slice(array.length-2,array.length);
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, returnFunction) {
    return returnFunction(arrayOfDrivers);
}