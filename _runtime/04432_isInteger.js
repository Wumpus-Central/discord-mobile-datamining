// === Module 4432: isInteger ===

// Module 4432 (isInteger)
import isNaN from "isNaN" /* 572 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!isNaN(num)) {
      if (tmp2(4424)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};