// _runtime/metro/17486__.js
import _mod17487 from "17487__.js";
import capitalize from "../17495_capitalize.js";

export default _mod17487((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
