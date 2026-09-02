// === Module 14200: all ===

// Module 14200 (all)
import all from "all" /* 14201 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};