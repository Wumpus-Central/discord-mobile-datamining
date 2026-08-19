// === Module 13698: all ===

// Module 13698 (all)
import all from "all" /* 13699 */;


export default (obj) => {
  if (typeof obj === "object") {
    let tmp2 = null !== obj;
  } else {
    tmp2 = all(obj);
  }
  return tmp2;
};