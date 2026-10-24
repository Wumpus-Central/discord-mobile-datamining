// === Module 5786: flatRest ===

// Module 5786 (flatRest)
import _mod5787 from "module_5787" /* 5787 */;
import basePick from "basePick" /* 5797 */;


export default _mod5787((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});