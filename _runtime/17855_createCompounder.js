// === Module 17855: createCompounder ===

// Module 17855 (createCompounder)
import createCompounder from "createCompounder" /* 17856 */;
import capitalize from "capitalize" /* 17864 */;


export default createCompounder((arg0, str, arg2) => {
  const formatted = str.toLowerCase();
  let tmp2 = formatted;
  if (arg2) {
    tmp2 = capitalize(formatted);
  }
  return arg0 + tmp2;
});