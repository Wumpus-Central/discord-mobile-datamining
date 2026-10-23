// === Module 18729: improperGetEnglishIntlMessageText ===

// Module 18729 (improperGetEnglishIntlMessageText)
import util from "util" /* 1128 */;
import _mod1167 from "module_1167" /* 1167 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/improperGetEnglishIntlMessageText.tsx");

export const improperGetEnglishIntlMessageText = function improperGetEnglishIntlMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  ({ intl, t } = util);
  const obj = _mod1167;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
};