// === Module 6140: flatRest ===

// Module 6140 (flatRest)
import _mod6141 from "module_6141" /* 6141 */;
import basePick from "basePick" /* 6151 */;


export default _mod6141((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});