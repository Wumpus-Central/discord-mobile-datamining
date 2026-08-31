// === Module 13944: all ===

// Module 13944 (all)
import all from "all" /* 13945 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};