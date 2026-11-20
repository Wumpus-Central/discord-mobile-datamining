// _runtime/metro/19786__.js
import _mod19787 from "19787__.js";
import capitalize from "../19794_capitalize.js";

export default _mod19787((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
