// _runtime/metro/20170__.js
import _mod20171 from "20171__.js";
import capitalize from "../20178_capitalize.js";

export default _mod20171((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
