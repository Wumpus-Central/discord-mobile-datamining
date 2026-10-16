// _runtime/metro/18816__.js
import _mod18817 from "18817__.js";
import capitalize from "../18825_capitalize.js";

export default _mod18817((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
