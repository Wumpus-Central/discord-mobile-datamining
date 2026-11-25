// === Module 5884: flatRest ===

// Module 5884 (flatRest)
import _mod5885 from "module_5885" /* 5885 */;
import basePick from "basePick" /* 5895 */;


export default _mod5885((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});