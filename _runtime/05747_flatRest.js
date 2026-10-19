// === Module 5747: flatRest ===

// Module 5747 (flatRest)
import _mod5748 from "module_5748" /* 5748 */;
import basePick from "basePick" /* 5758 */;


export default _mod5748((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});