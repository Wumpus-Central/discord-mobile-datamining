// _runtime/04740_flatRest.js
import _mod4741 from "metro/04741__.js";
import basePick from "04751_basePick.js";

export default _mod4741((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
