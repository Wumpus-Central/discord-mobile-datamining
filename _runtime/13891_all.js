// === Module 13891: all ===

// Module 13891 (all)
import all from "all" /* 13892 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};