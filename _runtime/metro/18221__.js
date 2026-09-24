// _runtime/metro/18221__.js
import _mod18222 from "18222__.js";
import capitalize from "../18230_capitalize.js";

export default _mod18222((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
