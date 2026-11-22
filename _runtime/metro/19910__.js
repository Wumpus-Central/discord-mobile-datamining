// _runtime/metro/19910__.js
import _mod19911 from "19911__.js";
import capitalize from "../19918_capitalize.js";

export default _mod19911((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
