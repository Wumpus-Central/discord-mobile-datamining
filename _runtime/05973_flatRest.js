// === Module 5973: flatRest ===

// Module 5973 (flatRest)
import _mod5974 from "module_5974" /* 5974 */;
import basePick from "basePick" /* 5984 */;


export default _mod5974((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});