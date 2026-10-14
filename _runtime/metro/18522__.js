// _runtime/metro/18522__.js
import _mod18523 from "18523__.js";
import capitalize from "../18531_capitalize.js";

export default _mod18523((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
