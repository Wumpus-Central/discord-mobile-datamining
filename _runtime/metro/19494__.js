// _runtime/metro/19494__.js
import _mod19495 from "19495__.js";
import capitalize from "../19502_capitalize.js";

export default _mod19495((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
