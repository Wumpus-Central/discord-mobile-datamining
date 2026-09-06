// discord_app/intl/migration.tsx
import util from "index.native.tsx";
import _mod1155 from "../../_runtime/metro/01155__.js";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  ({ intl, t } = util);
  const obj = _mod1155;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
};
