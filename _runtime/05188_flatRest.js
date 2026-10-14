// === Module 5188: flatRest ===

// Module 5188 (flatRest)
import _mod5189 from "module_5189" /* 5189 */;
import basePick from "basePick" /* 5199 */;


export default _mod5189((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});