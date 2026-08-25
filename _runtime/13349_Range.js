// === Module 13349: Range ===

// Module 13349 (Range)
import Range from "Range" /* 13347 */;


export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new Range(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};