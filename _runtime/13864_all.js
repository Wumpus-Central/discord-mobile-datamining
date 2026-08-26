// === Module 13864: all ===

// Module 13864 (all)
import all from "all" /* 13865 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};