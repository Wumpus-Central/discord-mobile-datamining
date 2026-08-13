// _runtime/04486_flatRest.js
import flatRest from "flatRest";
import { basePick } from "04497_basePick.js";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});