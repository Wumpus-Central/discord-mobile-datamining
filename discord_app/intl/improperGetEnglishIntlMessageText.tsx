// === Module 18857: improperGetEnglishIntlMessageText ===

// Module 18857 (improperGetEnglishIntlMessageText)
import util from "util" /* 1125 */;
import _mod1164 from "module_1164" /* 1164 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("intl/improperGetEnglishIntlMessageText.tsx");

export const improperGetEnglishIntlMessageText = function improperGetEnglishIntlMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  ({ intl, t } = util);
  const obj = _mod1164;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
};