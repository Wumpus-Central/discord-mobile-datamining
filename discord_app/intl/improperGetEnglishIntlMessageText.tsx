// === Module 19464: improperGetEnglishIntlMessageText ===

// Module 19464 (improperGetEnglishIntlMessageText)
import util from "util" /* 1113 */;
import _mod1152 from "module_1152" /* 1152 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/improperGetEnglishIntlMessageText.tsx");

export function improperGetEnglishIntlMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  ({ intl, t } = util);
  const obj = _mod1152;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
}