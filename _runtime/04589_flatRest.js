// _runtime/04589_flatRest.js
import flatRest from "04590_flatRest.js";
import basePick from "04600_basePick.js";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});