// _runtime/04426_flatRest.js
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = require("04437_basePick.js") /* basePick */(arg0, arg1);
  }
  return obj;
});