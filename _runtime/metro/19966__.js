// _runtime/metro/19966__.js
import _mod19967 from "19967__.js";
import capitalize from "../19974_capitalize.js";

export default _mod19967((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
