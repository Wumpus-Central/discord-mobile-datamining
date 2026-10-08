// _runtime/metro/18188__.js
import _mod18189 from "18189__.js";
import capitalize from "../18197_capitalize.js";

export default _mod18189((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
