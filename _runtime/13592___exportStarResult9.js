// === Module 13592: __exportStarResult9 ===

// Module 13592 (__exportStarResult9)
arg5.IsWellFormedCurrencyCode = function IsWellFormedCurrencyCode(option) {
  const replaced = option.replace(/([a-z])/g, (arg0, str) => str.toUpperCase());
  if (3 !== replaced.length) {
    return false;
  } else if (regex.test(replaced)) {
    return false;
  } else {
    return true;
  }
};
const re0 = /[^A-Z]/;