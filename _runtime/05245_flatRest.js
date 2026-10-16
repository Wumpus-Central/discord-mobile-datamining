// === Module 5245: flatRest ===

// Module 5245 (flatRest)
import _mod5246 from "module_5246" /* 5246 */;
import basePick from "basePick" /* 5256 */;


export default _mod5246((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});