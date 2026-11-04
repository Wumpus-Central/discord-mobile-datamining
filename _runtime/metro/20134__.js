// _runtime/metro/20134__.js
import _mod20135 from "20135__.js";
import capitalize from "../20142_capitalize.js";

export default _mod20135((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
