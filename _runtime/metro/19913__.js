// _runtime/metro/19913__.js
import _mod19914 from "19914__.js";
import capitalize from "../19921_capitalize.js";

export default _mod19914((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
