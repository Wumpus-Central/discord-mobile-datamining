// === Module 4614: flatRest ===

// Module 4614 (flatRest)
import flatRest from "flatRest" /* 4615 */;
import basePick from "basePick" /* 4625 */;


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});