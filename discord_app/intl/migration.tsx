// === Module 16873: newGetEnglishMessageText ===

// Module 16873 (newGetEnglishMessageText)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _mod1274 from "module_1274" /* 1274 */;

const result = set.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  ({ intl, t } = getSystemLocale);
  const obj = _mod1274;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};