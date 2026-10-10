// === Module 5184: flatRest ===

// Module 5184 (flatRest)
import _mod5185 from "module_5185" /* 5185 */;
import basePick from "basePick" /* 5195 */;


export default _mod5185((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});