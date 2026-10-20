// _runtime/metro/18940__.js
import _mod18941 from "18941__.js";
import capitalize from "../18949_capitalize.js";

export default _mod18941((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
