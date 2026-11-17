// _runtime/06140_flatRest.js
import _mod6141 from "metro/06141__.js";
import basePick from "06151_basePick.js";

export default _mod6141((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
