// === Module 14243: all ===

// Module 14243 (all)
import all from "all" /* 14216 */;


export default (arg0) => {
  if (all(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};