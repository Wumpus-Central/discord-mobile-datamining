// _runtime/metro/18482__.js
import _mod18483 from "18483__.js";
import capitalize from "../18491_capitalize.js";

export default _mod18483((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
