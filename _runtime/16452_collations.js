// === Module 16452: collations ===

// Module 16452 (collations)
import _mod16453 from "module_16453" /* 16453 */;

require = arg1;
const dependencyMap = arg6;

export function getSupportedCollations(locale) {
  closure_0 = locale;
  const collations = _mod16453.collations;
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