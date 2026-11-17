// === Module 6133: flatRest ===

// Module 6133 (flatRest)
import _mod6134 from "module_6134" /* 6134 */;
import basePick from "basePick" /* 6144 */;


export default _mod6134((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});