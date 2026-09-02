// _runtime/00515_validate.js
const module = arg2;
const dependencyMap = arg6;
arg5.default = function validate(str) {
  let isMatch = typeof str === "string";
  if (typeof str === "string") {
    isMatch = module(516).test(str);
    const obj = module(516);
  }
  return isMatch;
};
