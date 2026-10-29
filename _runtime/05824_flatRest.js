// === Module 5824: flatRest ===

// Module 5824 (flatRest)
import _mod5825 from "module_5825" /* 5825 */;
import basePick from "basePick" /* 5835 */;


export default _mod5825((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});