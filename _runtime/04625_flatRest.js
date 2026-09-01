// _runtime/04625_flatRest.js
import flatRest from "04626_flatRest.js";
import basePick from "04636_basePick.js";

export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
