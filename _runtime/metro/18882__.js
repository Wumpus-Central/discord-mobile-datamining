// _runtime/metro/18882__.js
import _mod18883 from "18883__.js";
import capitalize from "../18891_capitalize.js";

export default _mod18883((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
