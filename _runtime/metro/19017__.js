// _runtime/metro/19017__.js
import _mod19018 from "19018__.js";
import capitalize from "../19026_capitalize.js";

export default _mod19018((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
