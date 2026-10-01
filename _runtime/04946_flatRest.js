// === Module 4946: flatRest ===

// Module 4946 (flatRest)
import _mod4947 from "module_4947" /* 4947 */;
import basePick from "basePick" /* 4957 */;


export default _mod4947((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});