// === Module 13783: Range ===

// Module 13783 (Range)
import Range from "Range" /* 13772 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};