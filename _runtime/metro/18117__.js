// _runtime/metro/18117__.js
import _mod18118 from "18118__.js";
import capitalize from "../18126_capitalize.js";

export default _mod18118((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
