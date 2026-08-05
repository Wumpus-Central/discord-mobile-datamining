// _runtime/06983_baseIndexOf.js

export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = require("06984_strictIndexOf.js") /* strictIndexOf */(arg0, arg1, arg2);
  } else {
    tmp3Result = require("04367_baseFindIndex.js") /* baseFindIndex */(arg0, require("06985_baseIsNaN.js") /* baseIsNaN */, arg2);
    const tmp3 = require("04367_baseFindIndex.js") /* baseFindIndex */;
  }
  return tmp3Result;
};