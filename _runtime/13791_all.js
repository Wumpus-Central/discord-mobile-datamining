// === Module 13791: all ===

// Module 13791 (all)
import all from "all" /* 13792 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};