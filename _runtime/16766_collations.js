// === Module 16766: collations ===

// Module 16766 (collations)
import _mod16767 from "module_16767" /* 16767 */;

require = arg1;
const dependencyMap = arg6;

export function getSupportedCollations(locale) {
  closure_0 = locale;
  const collations = _mod16767.collations;
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