// === Module 4661: flatRest ===

// Module 4661 (flatRest)
import _mod4662 from "module_4662" /* 4662 */;
import basePick from "basePick" /* 4672 */;


export default _mod4662((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});