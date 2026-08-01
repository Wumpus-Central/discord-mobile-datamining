// === Module 4335: flatRest ===

// Module 4335 (flatRest)
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require(4346) /* basePick */(arg0, arg1);
  }
  return obj;
});