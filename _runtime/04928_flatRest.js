// _runtime/04928_flatRest.js
import _mod4929 from "metro/04929__.js";
import basePick from "04939_basePick.js";

export default _mod4929((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
