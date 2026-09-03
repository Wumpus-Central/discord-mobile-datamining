// _runtime/04800_isInteger.js
import isNaN from "00569_isNaN.js";

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
}
