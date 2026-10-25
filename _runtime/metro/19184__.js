// _runtime/metro/19184__.js
import _mod19185 from "19185__.js";
import capitalize from "../19192_capitalize.js";

export default _mod19185((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
