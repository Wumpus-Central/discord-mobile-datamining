// _runtime/metro/20004__.js
import _mod20005 from "20005__.js";
import capitalize from "../20012_capitalize.js";

export default _mod20005((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
