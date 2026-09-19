// _runtime/metro/18106__.js
import _mod18107 from "18107__.js";
import capitalize from "../18115_capitalize.js";

export default _mod18107((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
