import { floor } from "04560_floor.js";
import { 00541__ } from "metro/00541__.js";
// _runtime/04559_truncate.js

export default function truncate(num) {
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const tmp10 = new 00541__("argument must be a Number or a BigInt");
      throw tmp10;
    }
  }
  if (num < 0) {
    let tmp3 = -floor /* floor */(-num);
  } else {
    tmp3 = floor /* floor */(num);
  }
  num = 0;
  if (0 !== tmp3) {
    num = tmp3;
  }
  return num;
};