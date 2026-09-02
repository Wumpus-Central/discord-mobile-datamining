// _runtime/00526_version.js
const module = arg2;
const dependencyMap = arg6;
arg5.default = function version(arr) {
  if (module(515)(arr)) {
    const _parseInt = parseInt;
    return parseInt(arr.slice(14, 15), 16);
  } else {
    const _TypeError = TypeError;
    throw TypeError("Invalid UUID");
  }
};
