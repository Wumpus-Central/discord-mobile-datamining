// _runtime/metro/19084__.js
import _mod19085 from "19085__.js";
import capitalize from "../19093_capitalize.js";

export default _mod19085((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
