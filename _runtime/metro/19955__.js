// _runtime/metro/19955__.js
import _mod19956 from "19956__.js";
import capitalize from "../19963_capitalize.js";

export default _mod19956((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
