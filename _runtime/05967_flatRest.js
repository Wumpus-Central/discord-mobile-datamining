// === Module 5967: flatRest ===

// Module 5967 (flatRest)
import _mod5968 from "module_5968" /* 5968 */;
import basePick from "basePick" /* 5978 */;


export default _mod5968((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});