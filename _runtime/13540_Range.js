// === Module 13540: Range ===

// Module 13540 (Range)
import Range from "Range" /* 13533 */;


export default (arg0, arg1) => {
  try {
    const tmp8 = new Range(arg0, arg1);
    let str = tmp8.range;
    if (!str) {
      str = "*";
    }
    return str;
  } catch (err) {
    return null;
  }
};