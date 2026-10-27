// _runtime/metro/19231__.js
import _mod19232 from "19232__.js";
import capitalize from "../19239_capitalize.js";

export default _mod19232((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
