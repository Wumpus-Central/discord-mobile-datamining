// === Module 3666: getRoundingMethod ===

// Module 3666 (getRoundingMethod)
arg5.getRoundingMethod = function getRoundingMethod(roundingMethod) {
  if (roundingMethod) {
    let tmp3 = obj[roundingMethod];
  } else {
    tmp3 = obj[trunc];
  }
  return tmp3;
};
const trunc = "trunc";