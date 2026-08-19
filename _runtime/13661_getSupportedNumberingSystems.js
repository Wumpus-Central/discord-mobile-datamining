// === Module 13661: getSupportedNumberingSystems ===

// Module 13661 (getSupportedNumberingSystems)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedNumberingSystems = function getSupportedNumberingSystems(locale) {
  const _require = locale;
  const numberingSystemNames = _require(13662).numberingSystemNames;
  return numberingSystemNames.filter((item, index) => (function isSupportedNumberingSystem(item, closure_0) {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    try {
      const concat = "".concat;
      const combined = "".concat(str, "-u-nu-");
      const memoizedNumberFormat = callback(table[0]).createMemoizedNumberFormat(combined.concat(item));
      if (memoizedNumberFormat.resolvedOptions().numberingSystem !== item) {
        if ("123" === memoizedNumberFormat.format(123)) {
          return false;
        }
      }
      return true;
    } catch (err) {
    }
  })(item, closure_0));
};