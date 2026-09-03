// === Module 13779: Range ===

// Module 13779 (Range)
import Range from "Range" /* 13772 */;


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