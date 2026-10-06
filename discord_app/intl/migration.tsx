// === Module 17541: intl/migration ===

// Module 17541 (intl/migration)
import intl from "intl" /* 1126 */;
import _mod1165 from "module_1165" /* 1165 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  let intl;
  let t;
  ({ intl, t } = intl);
  intl;
  const obj = _mod1165;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
};