// === Module 5246: flatRest ===

// Module 5246 (flatRest)
import _mod5247 from "module_5247" /* 5247 */;
import basePick from "basePick" /* 5257 */;


export default _mod5247((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});