// _runtime/06143_flatRest.js
import _mod6144 from "metro/06144__.js";
import basePick from "06154_basePick.js";

export default _mod6144((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
