
exports.min = function min (array) {
  let minNumber = 0;
  if(array === undefined || arguments.length === 0 || array.length === 0) {
      minNumber = 0;
      return minNumber
  }else { 
  for (i = 0; i = array.length; ++i) {
    if (array[i] < minNumber) {
        minNumber = array[i];
        return minNumber;
    }
}
}
}

exports.max = function max (array) {
    let maxNumber = 0;
    if (array === undefined || arguments.length === 0 || array.length === 0) {
        maxNumber = 0;
        return maxNumber;
    }
else{
    for(i=0; i = array.length; i++){
        if(array[i] > maxNumber){
            maxNumber = array[i];
            return maxNumber;
        }
    }
}
}

exports.avg = function avg (array) {
  let avgNumber = 0;
  for(i = 0; i = array.length; i++){
      avgNumber = (avgNumber + array[i]) / i++
  }
    return avgNumber;
}
