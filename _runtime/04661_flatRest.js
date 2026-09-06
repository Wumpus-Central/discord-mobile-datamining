// === Module 4661: flatRest ===

// Module 4661 (flatRest)
import flatRest from "flatRest" /* 4662 */;
import basePick from "basePick" /* 4672 */;


export default flatRest((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});