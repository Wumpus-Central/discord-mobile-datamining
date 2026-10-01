// _runtime/metro/17745__.js
import _mod17746 from "17746__.js";
import capitalize from "../17754_capitalize.js";

export default _mod17746((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
