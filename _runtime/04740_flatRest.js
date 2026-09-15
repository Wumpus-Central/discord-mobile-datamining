// === Module 4740: flatRest ===

// Module 4740 (flatRest)
import _mod4741 from "module_4741" /* 4741 */;
import basePick from "basePick" /* 4751 */;


export default _mod4741((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});