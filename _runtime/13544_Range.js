// === Module 13544: Range ===

// Module 13544 (Range)
import Range from "Range" /* 13533 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};