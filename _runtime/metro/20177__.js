// _runtime/metro/20177__.js
import _mod20178 from "20178__.js";
import capitalize from "../20185_capitalize.js";

export default _mod20178((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
