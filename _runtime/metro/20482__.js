// _runtime/metro/20482__.js
import _mod20483 from "20483__.js";
import capitalize from "../20490_capitalize.js";

export default _mod20483((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
