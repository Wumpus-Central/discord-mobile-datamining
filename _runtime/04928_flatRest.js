// === Module 4928: flatRest ===

// Module 4928 (flatRest)
import _mod4929 from "module_4929" /* 4929 */;
import basePick from "basePick" /* 4939 */;


export default _mod4929((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});