// === Module 17364: newGetEnglishMessageText ===

// Module 17364 (newGetEnglishMessageText)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import _mod1155 from "module_1155" /* 1155 */;

const result = set.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  ({ intl, t } = getSystemLocale);
  const obj = _mod1155;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};