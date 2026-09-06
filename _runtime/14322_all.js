// === Module 14322: all ===

// Module 14322 (all)
import all from "all" /* 14323 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};