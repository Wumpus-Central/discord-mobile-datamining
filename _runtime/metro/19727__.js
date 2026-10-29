// _runtime/metro/19727__.js
import _mod19728 from "19728__.js";
import capitalize from "../19735_capitalize.js";

export default _mod19728((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
