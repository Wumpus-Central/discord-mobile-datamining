// === Module 5182: flatRest ===

// Module 5182 (flatRest)
import _mod5183 from "module_5183" /* 5183 */;
import basePick from "basePick" /* 5193 */;


export default _mod5183((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});