// _runtime/04593_flatRest.js
import flatRest from "04594_flatRest.js";
import basePick from "04604_basePick.js";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});