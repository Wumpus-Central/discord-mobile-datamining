// === Module 5836: flatRest ===

// Module 5836 (flatRest)
import _mod5837 from "module_5837" /* 5837 */;
import basePick from "basePick" /* 5847 */;


export default _mod5837((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});