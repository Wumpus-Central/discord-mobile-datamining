// === Module 5183: flatRest ===

// Module 5183 (flatRest)
import _mod5184 from "module_5184" /* 5184 */;
import basePick from "basePick" /* 5194 */;


export default _mod5184((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});