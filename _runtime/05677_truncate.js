// _runtime/05677_truncate.js
import _mod1305 from "metro/01305__.js";
import floor from "05678_floor.js";

export default function truncate(num) {
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const tmp10 = new _mod1305("argument must be a Number or a BigInt");
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
}
