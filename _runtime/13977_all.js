// === Module 13977: all ===

// Module 13977 (all)
import all from "all" /* 13978 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};