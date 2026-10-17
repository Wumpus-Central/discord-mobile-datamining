// _runtime/metro/18878__.js
import _mod18879 from "18879__.js";
import capitalize from "../18887_capitalize.js";

export default _mod18879((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
