// _runtime/metro/19193__.js
import _mod19194 from "19194__.js";
import capitalize from "../19201_capitalize.js";

export default _mod19194((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
