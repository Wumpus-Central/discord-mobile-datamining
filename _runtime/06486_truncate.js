// === Module 6486: truncate ===

// Module 6486 (truncate)
import _mod1294 from "module_1294" /* 1294 */;
import floor from "floor" /* 6487 */;


export default function truncate(num) {
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const tmp10 = new _mod1294("argument must be a Number or a BigInt");
      throw tmp10;
    }
  }
  if (num < 0) {
    let tmp3 = -floor(-num);
  } else {
    tmp3 = floor(num);
  }
  num = 0;
  if (0 !== tmp3) {
    num = tmp3;
  }
  return num;
};