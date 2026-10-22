// === Module 5772: flatRest ===

// Module 5772 (flatRest)
import _mod5773 from "module_5773" /* 5773 */;
import basePick from "basePick" /* 5783 */;


export default _mod5773((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});