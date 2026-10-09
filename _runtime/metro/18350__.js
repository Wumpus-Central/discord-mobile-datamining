// _runtime/metro/18350__.js
import _mod18351 from "18351__.js";
import capitalize from "../18359_capitalize.js";

export default _mod18351((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
