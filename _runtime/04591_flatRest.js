// === Module 4591: flatRest ===

// Module 4591 (flatRest)
import flatRest from "flatRest" /* 4592 */;
import basePick from "basePick" /* 4602 */;


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});