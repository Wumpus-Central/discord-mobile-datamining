// === Module 13163: Range ===

// Module 13163 (Range)
import Range from "Range" /* 13152 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};