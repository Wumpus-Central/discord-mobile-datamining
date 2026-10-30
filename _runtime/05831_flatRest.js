// === Module 5831: flatRest ===

// Module 5831 (flatRest)
import _mod5832 from "module_5832" /* 5832 */;
import basePick from "basePick" /* 5842 */;


export default _mod5832((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});