// _runtime/04707_flatRest.js
import _mod4708 from "metro/04708__.js";
import basePick from "04718_basePick.js";

export default _mod4708((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
