// _runtime/13491___exportStarResult9.js
arg5.IsWellFormedCurrencyCode = function IsWellFormedCurrencyCode(str) {
  const replaced = str.replace(/([a-z])/g, (arg0, str) => str.toUpperCase());
  if (3 !== replaced.length) {
    return false;
  } else if (regex.test(replaced)) {
    return false;
  } else {
    return true;
  }
};
const re0 = /[^A-Z]/;