// === Module 19407: improperGetEnglishIntlMessageText ===

// Module 19407 (improperGetEnglishIntlMessageText)
import util from "util" /* 1114 */;
import _mod1153 from "module_1153" /* 1153 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/improperGetEnglishIntlMessageText.tsx");

export function improperGetEnglishIntlMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  ({ intl, t } = util);
  const obj = _mod1153;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
}