// _runtime/03844_getRoundingMethod.js
arg5.getRoundingMethod = function getRoundingMethod(roundingMethod) {
  if (roundingMethod) {
    let tmp3 = tmp[roundingMethod];
  } else {
    tmp3 = tmp[trunc];
  }
  return tmp3;
};
const obj = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc(result) {
    if (result < 0) {
      const _Math2 = Math;
      let rounded = Math.ceil(result);
    } else {
      const _Math = Math;
      rounded = Math.floor(result);
    }
    return rounded;
  },
};
const trunc = "trunc";
