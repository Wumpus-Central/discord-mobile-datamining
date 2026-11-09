// _runtime/metro/20259__.js
import _mod20260 from "20260__.js";
import capitalize from "../20267_capitalize.js";

export default _mod20260((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
