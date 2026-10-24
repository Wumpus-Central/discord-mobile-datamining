// _runtime/metro/19179__.js
import _mod19180 from "19180__.js";
import capitalize from "../19187_capitalize.js";

export default _mod19180((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
