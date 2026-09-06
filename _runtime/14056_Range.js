// === Module 14056: Range ===

// Module 14056 (Range)
import Range from "Range" /* 14045 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};