// === Module 6080: flatRest ===

// Module 6080 (flatRest)
import _mod6081 from "module_6081" /* 6081 */;
import basePick from "basePick" /* 6091 */;


export default _mod6081((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});