// === Module 5767: flatRest ===

// Module 5767 (flatRest)
import _mod5768 from "module_5768" /* 5768 */;
import basePick from "basePick" /* 5778 */;


export default _mod5768((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});