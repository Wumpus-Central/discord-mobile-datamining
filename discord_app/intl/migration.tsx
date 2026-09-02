// === Module 17178: newGetEnglishMessageText ===

// Module 17178 (newGetEnglishMessageText)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import _mod1273 from "module_1273" /* 1273 */;

const result = set.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  ({ intl, t } = getSystemLocale);
  const obj = _mod1273;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};