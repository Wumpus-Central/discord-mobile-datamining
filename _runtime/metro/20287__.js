// _runtime/metro/20287__.js
import _mod20288 from "20288__.js";
import capitalize from "../20295_capitalize.js";

export default _mod20288((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
