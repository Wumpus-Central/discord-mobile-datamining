// _runtime/metro/20682__.js
import _mod20683 from "20683__.js";
import capitalize from "../20690_capitalize.js";

export default _mod20683((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
