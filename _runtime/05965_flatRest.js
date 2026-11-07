// === Module 5965: flatRest ===

// Module 5965 (flatRest)
import _mod5966 from "module_5966" /* 5966 */;
import basePick from "basePick" /* 5976 */;


export default _mod5966((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});