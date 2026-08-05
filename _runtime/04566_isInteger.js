// _runtime/04566_isInteger.js
import { isNaN } from "00572_isNaN.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!isNaN /* isNaN */(num)) {
      if (tmp2(4558)(num)) {
        const tmp = tmp2(565)(num);
        return tmp2(566)(tmp) === tmp;
      }
    }
  }
  return false;
};