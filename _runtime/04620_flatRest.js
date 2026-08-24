// _runtime/04620_flatRest.js
import flatRest from "04621_flatRest.js";
import basePick from "04631_basePick.js";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});