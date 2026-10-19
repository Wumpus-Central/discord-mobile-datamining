// _runtime/metro/18917__.js
import _mod18918 from "18918__.js";
import capitalize from "../18926_capitalize.js";

export default _mod18918((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
