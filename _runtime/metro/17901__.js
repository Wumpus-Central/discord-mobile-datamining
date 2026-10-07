// _runtime/metro/17901__.js
import _mod17902 from "17902__.js";
import capitalize from "../17910_capitalize.js";

export default _mod17902((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
