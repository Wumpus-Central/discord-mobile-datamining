// === Module 4823: flatRest ===

// Module 4823 (flatRest)
import _mod4824 from "module_4824" /* 4824 */;
import basePick from "basePick" /* 4834 */;


export default _mod4824((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});