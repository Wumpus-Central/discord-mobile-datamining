// _runtime/metro/18129__.js
import _mod18130 from "18130__.js";
import capitalize from "../18138_capitalize.js";

export default _mod18130((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
