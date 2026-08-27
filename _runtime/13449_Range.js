// === Module 13449: Range ===

// Module 13449 (Range)
import Range from "Range" /* 13447 */;


export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new Range(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};