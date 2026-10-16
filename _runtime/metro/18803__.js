// _runtime/metro/18803__.js
import _mod18804 from "18804__.js";
import capitalize from "../18812_capitalize.js";

export default _mod18804((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
