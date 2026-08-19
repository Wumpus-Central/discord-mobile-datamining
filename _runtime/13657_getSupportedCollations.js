// === Module 13657: getSupportedCollations ===

// Module 13657 (getSupportedCollations)
const require = arg1;
const dependencyMap = arg6;
arg5.getSupportedCollations = function getSupportedCollations(locale) {
  const _require = locale;
  const collations = _require(13658).collations;
  return collations.filter((item, index) => (function isSupported(item, closure_0) {
    let str = closure_0;
    if (undefined === closure_0) {
      str = "en";
    }
    try {
      const _Intl = Intl;
      const concat = "".concat;
      const combined = "".concat(str, "-u-co-");
      return Intl.Collator(combined.concat(item)).resolvedOptions().collation === item;
    } catch (err) {
      return false;
    }
  })(item, closure_0));
};