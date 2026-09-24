// _runtime/04930_flatRest.js
import _mod4931 from "metro/04931__.js";
import basePick from "04941_basePick.js";

export default _mod4931((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
