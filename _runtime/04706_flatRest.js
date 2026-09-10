// === Module 4706: flatRest ===

// Module 4706 (flatRest)
import _mod4707 from "module_4707" /* 4707 */;
import basePick from "basePick" /* 4717 */;


export default _mod4707((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});