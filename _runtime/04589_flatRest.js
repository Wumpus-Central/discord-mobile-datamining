// === Module 4589: flatRest ===

// Module 4589 (flatRest)
import flatRest from "flatRest" /* 4590 */;
import basePick from "basePick" /* 4600 */;


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});