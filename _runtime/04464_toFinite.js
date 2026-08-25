// === Module 4464: toFinite ===

// Module 4464 (toFinite)
import toNumber from "toNumber" /* 637 */;


export default function toFinite(arg0) {
  if (arg0) {
    const tmp3 = toNumber(arg0);
    if (tmp3 !== Infinity) {
      if (tmp3 !== -Infinity) {
        let num4 = 0;
        if (tmp3 == tmp3) {
          num4 = tmp3;
        }
      }
    }
    let num6 = 1;
    if (tmp3 < 0) {
      num6 = -1;
    }
    num4 = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 * num6;
  } else {
    let num = 0;
    if (0 === arg0) {
      num = arg0;
    }
    return num;
  }
};