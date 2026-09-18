// _runtime/metro/18026__.js
import _mod18027 from "18027__.js";
import capitalize from "../18035_capitalize.js";

export default _mod18027((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
