// _runtime/04428_isInteger.js
import _mod565 from "metro/00565__.js";
import _mod566 from "metro/00566__.js";
import isNaN from "00572_isNaN.js";
import isFinite from "04420_isFinite.js";


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