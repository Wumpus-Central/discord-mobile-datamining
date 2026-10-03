// _runtime/metro/17831__.js
import _mod17832 from "17832__.js";
import capitalize from "../17840_capitalize.js";

export default _mod17832((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
