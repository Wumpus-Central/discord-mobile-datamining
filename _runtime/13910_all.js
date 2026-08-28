// === Module 13910: all ===

// Module 13910 (all)
import all from "all" /* 13911 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};