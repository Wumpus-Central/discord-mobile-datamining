// === Module 4554: toFinite ===

// Module 4554 (toFinite)
import toNumber from "toNumber" /* 637 */;


export default function toFinite(arg0) {
  if (arg0) {
    const tmp3 = toNumber(arg0);
    if (tmp3 !== Infinity) {
      if (tmp3 !== -Infinity) {
      }
    }
  } else {
    let num = 0;
    if (0 === arg0) {
      num = arg0;
    }
    return num;
  }
};