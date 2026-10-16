// discord_app/intl/improperGetEnglishIntlMessageText.tsx
import util from "index.native.tsx";
import _mod1167 from "../../_runtime/metro/01167__.js";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("intl/improperGetEnglishIntlMessageText.tsx");

export const improperGetEnglishIntlMessageText = function improperGetEnglishIntlMessageText(
  CALL_FEEDBACK_OPTION_OTHER,
) {
  ({ intl, t } = util);
  const obj = _mod1167;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
};
