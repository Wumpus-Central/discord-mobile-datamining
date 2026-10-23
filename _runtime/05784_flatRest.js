// === Module 5784: flatRest ===

// Module 5784 (flatRest)
import _mod5785 from "module_5785" /* 5785 */;
import basePick from "basePick" /* 5795 */;


export default _mod5785((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});