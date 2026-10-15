// _runtime/metro/18761__.js
import _mod18762 from "18762__.js";
import capitalize from "../18770_capitalize.js";

export default _mod18762((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
