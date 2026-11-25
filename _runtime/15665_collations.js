// === Module 15665: collations ===

// Module 15665 (collations)
import _mod15666 from "module_15666" /* 15666 */;

require = arg1;
const dependencyMap = arg6;

export function getSupportedCollations(locale) {
  closure_0 = locale;
  const collations = _mod15666.collations;
  return collations.filter((item) => (function isSupported(item, arg1) {
    let str = arg1;
    if (undefined === arg1) {
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
}