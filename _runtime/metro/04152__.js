// === Module 4152: ? ===

// Module 4152
const obj = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc(endImportTime) {
    let rounded;
    if (endImportTime < 0) {
      const _Math2 = Math;
      rounded = Math.ceil(endImportTime);
    } else {
      const _Math = Math;
      rounded = Math.floor(endImportTime);
    }
    return rounded;
  }
};
const trunc_str = "trunc";

export const getRoundingMethod = function getRoundingMethod(roundingMethod) {
  let tmp3;
  if (roundingMethod) {
    tmp3 = obj[roundingMethod];
  } else {
    tmp3 = obj[trunc_str];
  }
  return tmp3;
};