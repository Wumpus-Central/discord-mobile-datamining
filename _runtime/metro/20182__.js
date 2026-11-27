// _runtime/metro/20182__.js
import _mod20183 from "20183__.js";
import capitalize from "../20190_capitalize.js";

export default _mod20183((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
