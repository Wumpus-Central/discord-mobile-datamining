// === Module 13763: Range ===

// Module 13763 (Range)
import Range from "Range" /* 13756 */;


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