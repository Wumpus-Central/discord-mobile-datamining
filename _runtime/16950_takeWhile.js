// _runtime/16950_takeWhile.js
import baseIteratee from "00595_baseIteratee.js";
import baseWhile from "16951_baseWhile.js";

export default function takeWhile(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseWhile(arg0, baseIteratee(arg1, 3));
    }
    return [];
  }
}
