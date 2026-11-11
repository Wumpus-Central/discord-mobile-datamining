// _runtime/06080_flatRest.js
import _mod6081 from "metro/06081__.js";
import basePick from "06091_basePick.js";

export default _mod6081((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
