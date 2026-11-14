// === Module 6143: flatRest ===

// Module 6143 (flatRest)
import _mod6144 from "module_6144" /* 6144 */;
import basePick from "basePick" /* 6154 */;


export default _mod6144((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});