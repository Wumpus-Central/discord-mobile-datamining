// _runtime/metro/19183__.js
import _mod19184 from "19184__.js";
import capitalize from "../19191_capitalize.js";

export default _mod19184((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
