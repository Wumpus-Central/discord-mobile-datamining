// _runtime/metro/20120__.js
import _mod20121 from "20121__.js";
import capitalize from "../20128_capitalize.js";

export default _mod20121((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
