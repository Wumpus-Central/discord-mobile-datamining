// === Module 4800: isInteger ===

// Module 4800 (isInteger)
import isNaN from "isNaN" /* 569 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!isNaN(num)) {
      if (tmp2(4792)(num)) {
        const tmp = tmp2(562)(num);
        return tmp2(563)(tmp) === tmp;
      }
    }
  }
  return false;
};