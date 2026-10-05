// === Module 4925: toFinite ===

// Module 4925 (toFinite)
import toNumber from "toNumber" /* 552 */;


export default function toFinite(arg0) {
  let num;
  const tmp = arg0;
  if (tmp) {
    const tmp4 = toNumber(arg0);
    if (tmp4 !== Infinity) {
      let num4;
      if (tmp4 !== -Infinity) {
        num4 = 0;
        if (tmp4 == tmp4) {
          num4 = tmp4;
        }
      }
      num = num4;
    }
    let num6 = 1;
    if (tmp4 < 0) {
      num6 = -1;
    }
    num4 = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 * num6;
  } else {
    num = 0;
    if (0 === arg0) {
      num = arg0;
    }
  }
  return num;
};