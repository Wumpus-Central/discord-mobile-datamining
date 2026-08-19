// _runtime/03666_getRoundingMethod.js
arg5.getRoundingMethod = function getRoundingMethod(roundingMethod) {
  if (roundingMethod) {
    let tmp3 = obj[roundingMethod];
  } else {
    tmp3 = obj[trunc];
  }
  return tmp3;
};
const trunc = "trunc";