// === Module 4590: flatRest ===

// Module 4590 (flatRest)
import flatRest from "flatRest" /* 4591 */;
import basePick from "basePick" /* 4601 */;


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});