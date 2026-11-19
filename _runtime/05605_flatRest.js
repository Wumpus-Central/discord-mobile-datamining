// === Module 5605: flatRest ===

// Module 5605 (flatRest)
import _mod5606 from "module_5606" /* 5606 */;
import basePick from "basePick" /* 5616 */;


export default _mod5606((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});