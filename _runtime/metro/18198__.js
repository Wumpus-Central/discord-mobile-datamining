// _runtime/metro/18198__.js
import _mod18199 from "18199__.js";
import capitalize from "../18207_capitalize.js";

export default _mod18199((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
