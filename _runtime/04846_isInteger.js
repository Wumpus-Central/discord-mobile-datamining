// _runtime/04846_isInteger.js
import isNaN from "01314_isNaN.js";

export default function isInteger(num) {
  if (typeof num === "number") {
    if (!isNaN(num)) {
      if (tmp2(4838)(num)) {
        const tmp = tmp2(1307)(num);
        return tmp2(1308)(tmp) === tmp;
      }
    }
  }
  return false;
}
