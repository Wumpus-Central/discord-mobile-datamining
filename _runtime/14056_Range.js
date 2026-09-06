// _runtime/14056_Range.js
import Range from "14045_Range.js";

export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};
