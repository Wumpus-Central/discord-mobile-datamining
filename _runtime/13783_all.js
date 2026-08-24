// === Module 13783: all ===

// Module 13783 (all)
import all from "all" /* 13756 */;


export default (arg0) => {
  if (all(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};