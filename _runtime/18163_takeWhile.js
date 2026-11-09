// _runtime/18163_takeWhile.js
import baseIteratee from "00583_baseIteratee.js";
import baseWhile from "18164_baseWhile.js";

export default function takeWhile(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseWhile(arg0, baseIteratee(arg1, 3));
    }
    return [];
  }
}
