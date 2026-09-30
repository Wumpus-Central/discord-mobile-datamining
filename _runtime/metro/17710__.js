// _runtime/metro/17710__.js
import _mod17711 from "17711__.js";
import capitalize from "../17719_capitalize.js";

export default _mod17711((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
