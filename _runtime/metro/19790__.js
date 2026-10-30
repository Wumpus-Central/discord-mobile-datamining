// _runtime/metro/19790__.js
import _mod19791 from "19791__.js";
import capitalize from "../19798_capitalize.js";

export default _mod19791((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
