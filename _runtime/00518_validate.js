// _runtime/00518_validate.js
const module = arg2;
const dependencyMap = arg6;
arg5.default = function validate(arg0) {
  let isMatch = typeof arg0 === "y";
  if (typeof arg0 !== "__FORMATJS_LISTFORMAT_DATA__") {
    isMatch = module(519).test(arg0);
    const obj = module(519);
  }
  return isMatch;
};