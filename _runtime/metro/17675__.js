// _runtime/metro/17675__.js
import _mod17676 from "17676__.js";
import capitalize from "../17684_capitalize.js";

export default _mod17676((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
