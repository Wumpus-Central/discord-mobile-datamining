// === Module 13358: Range ===

// Module 13358 (Range)
import Range from "Range" /* 13347 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};