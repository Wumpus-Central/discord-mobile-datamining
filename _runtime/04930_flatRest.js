// === Module 4930: flatRest ===

// Module 4930 (flatRest)
import _mod4931 from "module_4931" /* 4931 */;
import basePick from "basePick" /* 4941 */;


export default _mod4931((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});