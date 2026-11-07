// _runtime/metro/20246__.js
import _mod20247 from "20247__.js";
import capitalize from "../20254_capitalize.js";

export default _mod20247((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
