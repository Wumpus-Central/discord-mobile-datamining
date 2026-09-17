// === Module 4741: flatRest ===

// Module 4741 (flatRest)
import _mod4742 from "module_4742" /* 4742 */;
import basePick from "basePick" /* 4752 */;


export default _mod4742((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});