// === Module 4620: flatRest ===

// Module 4620 (flatRest)
import flatRest from "flatRest" /* 4621 */;
import basePick from "basePick" /* 4631 */;


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});