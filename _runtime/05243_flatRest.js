// === Module 5243: flatRest ===

// Module 5243 (flatRest)
import _mod5244 from "module_5244" /* 5244 */;
import basePick from "basePick" /* 5254 */;


export default _mod5244((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});