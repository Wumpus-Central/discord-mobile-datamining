// _runtime/metro/20635__.js
import _mod20636 from "20636__.js";
import capitalize from "../20643_capitalize.js";

export default _mod20636((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
