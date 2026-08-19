// === Module 4428: isInteger ===

// Module 4428 (isInteger)
import _mod565 from "module_565" /* 565 */;
import _mod566 from "module_566" /* 566 */;
import isNaN from "isNaN" /* 572 */;
import isFinite from "isFinite" /* 4420 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!isNaN(num)) {
      if (isFinite(num)) {
        const tmp = _mod565(num);
        return _mod566(tmp) === tmp;
      }
    }
  }
  return false;
};