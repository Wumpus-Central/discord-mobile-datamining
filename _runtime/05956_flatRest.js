// === Module 5956: flatRest ===

// Module 5956 (flatRest)
import _mod5957 from "module_5957" /* 5957 */;
import basePick from "basePick" /* 5967 */;


export default _mod5957((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});