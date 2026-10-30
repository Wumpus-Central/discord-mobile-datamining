// === Module 4483: ? ===

// Module 4483
const obj = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc(arg0) {
    if (arg0 < 0) {
      const _Math2 = Math;
      let rounded = Math.ceil(arg0);
    } else {
      const _Math = Math;
      rounded = Math.floor(arg0);
    }
    return rounded;
  }
};
const trunc = "trunc";

export function getRoundingMethod(roundingMethod) {
  if (roundingMethod) {
    let tmp3 = obj[roundingMethod];
  } else {
    tmp3 = obj[trunc];
  }
  return tmp3;
}