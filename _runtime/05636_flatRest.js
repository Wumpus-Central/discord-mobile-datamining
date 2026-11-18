// === Module 5636: flatRest ===

// Module 5636 (flatRest)
import _mod5637 from "module_5637" /* 5637 */;
import basePick from "basePick" /* 5647 */;


export default _mod5637((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});