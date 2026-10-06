// _runtime/05365_isFinite.js
import _mod1324 from "metro/01324__.js";

export default function isFinite(num) {
  const tmp =
    (typeof num === "number" || typeof num === "bigint") && !_mod1324(num) && num !== Infinity && num !== -Infinity;
  return tmp;
}
