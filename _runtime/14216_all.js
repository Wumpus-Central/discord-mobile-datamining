// === Module 14216: all ===

// Module 14216 (all)
import all from "all" /* 14217 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};