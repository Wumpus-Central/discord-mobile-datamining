// === Module 4739: flatRest ===

// Module 4739 (flatRest)
import _mod4740 from "module_4740" /* 4740 */;
import basePick from "basePick" /* 4750 */;


export default _mod4740((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});