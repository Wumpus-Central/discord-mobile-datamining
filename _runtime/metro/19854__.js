// _runtime/metro/19854__.js
import _mod19855 from "19855__.js";
import capitalize from "../19862_capitalize.js";

export default _mod19855((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
