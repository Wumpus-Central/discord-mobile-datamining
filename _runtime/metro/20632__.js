// _runtime/metro/20632__.js
import _mod20633 from "20633__.js";
import capitalize from "../20640_capitalize.js";

export default _mod20633((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
