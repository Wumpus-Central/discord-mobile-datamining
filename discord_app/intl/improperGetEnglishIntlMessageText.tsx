// === Module 19510: improperGetEnglishIntlMessageText ===

// Module 19510 (improperGetEnglishIntlMessageText)
import util from "util" /* 1112 */;
import _mod1151 from "module_1151" /* 1151 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/improperGetEnglishIntlMessageText.tsx");

export function improperGetEnglishIntlMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  ({ intl, t } = util);
  const obj = _mod1151;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
}