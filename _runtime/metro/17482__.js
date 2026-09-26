// _runtime/metro/17482__.js
import _mod17483 from "17483__.js";
import capitalize from "../17491_capitalize.js";

export default _mod17483((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
