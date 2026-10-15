// === Module 18387: improperGetEnglishIntlMessageText ===

// Module 18387 (improperGetEnglishIntlMessageText)
import util from "util" /* 1126 */;
import _mod1165 from "module_1165" /* 1165 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/improperGetEnglishIntlMessageText.tsx");

export const improperGetEnglishIntlMessageText = function improperGetEnglishIntlMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  ({ intl, t } = util);
  const obj = _mod1165;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
};