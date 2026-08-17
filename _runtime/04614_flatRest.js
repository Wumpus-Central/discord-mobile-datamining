// _runtime/04614_flatRest.js
import flatRest from "04615_flatRest.js";
import basePick from "04625_basePick.js";


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});