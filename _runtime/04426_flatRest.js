import { basePick } from "04437_basePick.js";
// _runtime/04426_flatRest.js
import flatRest from "flatRest";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick /* basePick */(arg0, arg1);
  }
  return obj;
});