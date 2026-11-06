// _runtime/18103_takeWhile.js
import baseIteratee from "00583_baseIteratee.js";
import baseWhile from "18104_baseWhile.js";

export default function takeWhile(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseWhile(arg0, baseIteratee(arg1, 3));
    }
    return [];
  }
}
