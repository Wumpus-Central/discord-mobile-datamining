// _runtime/metro/03844__.js
const obj = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc(endImportTime) {
    if (endImportTime < 0) {
      const _Math2 = Math;
      let rounded = Math.ceil(endImportTime);
    } else {
      const _Math = Math;
      rounded = Math.floor(endImportTime);
    }
    return rounded;
  },
};
const trunc = "trunc";

export const getRoundingMethod = function getRoundingMethod(roundingMethod) {
  if (roundingMethod) {
    let tmp3 = obj[roundingMethod];
  } else {
    tmp3 = obj[trunc];
  }
  return tmp3;
};
