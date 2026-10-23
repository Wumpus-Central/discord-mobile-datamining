// _runtime/metro/19151__.js
import _mod19152 from "19152__.js";
import capitalize from "../19160_capitalize.js";

export default _mod19152((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
