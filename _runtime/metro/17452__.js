// _runtime/metro/17452__.js
import _mod17453 from "17453__.js";
import capitalize from "../17461_capitalize.js";

export default _mod17453((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
