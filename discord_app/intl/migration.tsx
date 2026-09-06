// === Module 17364: intl/migration ===

// Module 17364 (intl/migration)
import util from "util" /* 1114 */;
import _mod1155 from "module_1155" /* 1155 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  ({ intl, t } = util);
  const obj = _mod1155;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
};