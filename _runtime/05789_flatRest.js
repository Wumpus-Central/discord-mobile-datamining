// === Module 5789: flatRest ===

// Module 5789 (flatRest)
import _mod5790 from "module_5790" /* 5790 */;
import basePick from "basePick" /* 5800 */;


export default _mod5790((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});