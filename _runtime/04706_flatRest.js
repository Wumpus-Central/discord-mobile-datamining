// _runtime/04706_flatRest.js
import _mod4707 from "metro/04707__.js";
import basePick from "04717_basePick.js";

export default _mod4707((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
