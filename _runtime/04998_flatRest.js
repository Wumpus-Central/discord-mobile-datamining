// _runtime/04998_flatRest.js
import _mod4999 from "metro/04999__.js";
import basePick from "05009_basePick.js";

export default _mod4999((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
