// === Module 4967: flatRest ===

// Module 4967 (flatRest)
import _mod4968 from "module_4968" /* 4968 */;
import basePick from "basePick" /* 4978 */;


export default _mod4968((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});