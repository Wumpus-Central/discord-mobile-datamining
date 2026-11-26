// === Module 5915: flatRest ===

// Module 5915 (flatRest)
import _mod5916 from "module_5916" /* 5916 */;
import basePick from "basePick" /* 5926 */;


export default _mod5916((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});