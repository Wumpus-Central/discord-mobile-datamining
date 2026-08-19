// discord_app/intl/migration.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import getSystemLocale from "index.native.tsx";
import _mod1274 from "../../_runtime/metro/01274__.js";

const result = obj132.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(CALL_FEEDBACK_OPTION_OTHER) {
  ({ intl, t } = getSystemLocale);
  const obj = _mod1274;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, CALL_FEEDBACK_OPTION_OTHER)]);
};