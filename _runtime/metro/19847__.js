// _runtime/metro/19847__.js
import _mod19848 from "19848__.js";
import capitalize from "../19855_capitalize.js";

export default _mod19848((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
