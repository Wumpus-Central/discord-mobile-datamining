// _runtime/metro/19912__.js
import _mod19913 from "19913__.js";
import capitalize from "../19920_capitalize.js";

export default _mod19913((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
