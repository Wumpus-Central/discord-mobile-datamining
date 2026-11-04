// === Module 5970: flatRest ===

// Module 5970 (flatRest)
import _mod5971 from "module_5971" /* 5971 */;
import basePick from "basePick" /* 5981 */;


export default _mod5971((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});