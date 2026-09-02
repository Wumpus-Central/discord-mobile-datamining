// === Module 13767: Range ===

// Module 13767 (Range)
import Range from "Range" /* 13756 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};