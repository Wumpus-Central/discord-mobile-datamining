// === Module 16576: newGetEnglishMessageText ===

// Module 16576 (newGetEnglishMessageText)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _mod1274 from "module_1274" /* 1274 */;

const result = obj132.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  ({ intl, t } = getSystemLocale);
  const obj = _mod1274;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
};