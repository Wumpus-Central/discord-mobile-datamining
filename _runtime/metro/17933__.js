// _runtime/metro/17933__.js
import _mod17934 from "17934__.js";
import capitalize from "../17942_capitalize.js";

export default _mod17934((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
