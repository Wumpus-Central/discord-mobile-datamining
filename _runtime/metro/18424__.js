// _runtime/metro/18424__.js
import _mod18425 from "18425__.js";
import capitalize from "../18433_capitalize.js";

export default _mod18425((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
