// _runtime/17855_createCompounder.js
import createCompounder from "17856_createCompounder.js";
import capitalize from "17864_capitalize.js";

export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});
