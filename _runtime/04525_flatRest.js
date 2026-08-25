// _runtime/04525_flatRest.js
import flatRest from "04526_flatRest.js";
import basePick from "04536_basePick.js";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});