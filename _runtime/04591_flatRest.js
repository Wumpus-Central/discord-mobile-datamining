// _runtime/04591_flatRest.js
import flatRest from "04592_flatRest.js";
import basePick from "04602_basePick.js";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});