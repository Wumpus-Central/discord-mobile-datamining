// _runtime/metro/19107__.js
import _mod19108 from "19108__.js";
import capitalize from "../19116_capitalize.js";

export default _mod19108((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
