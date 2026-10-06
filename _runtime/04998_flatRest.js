// _runtime/04998_flatRest.js
import flatRest from "04999_flatRest.js";
import basePick from "05009_basePick.js";

export default flatRest((arg0, arg1) => {
  let obj;
  if (null == arg0) {
    obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
