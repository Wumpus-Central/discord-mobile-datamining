// === Module 5822: flatRest ===

// Module 5822 (flatRest)
import _mod5823 from "module_5823" /* 5823 */;
import basePick from "basePick" /* 5833 */;


export default _mod5823((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});