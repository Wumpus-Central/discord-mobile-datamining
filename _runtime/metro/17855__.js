// _runtime/metro/17855__.js
import _mod17856 from "17856__.js";
import capitalize from "../17864_capitalize.js";

export default _mod17856((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
