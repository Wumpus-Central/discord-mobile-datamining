// === Module 14349: all ===

// Module 14349 (all)
import all from "all" /* 14322 */;


export default (arg0) => {
  if (all(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};