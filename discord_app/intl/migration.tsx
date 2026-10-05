// discord_app/intl/migration.tsx
import intl from "index.native.tsx";
import _mod1165 from "../../_runtime/metro/01165__.js";
import size from "../../_runtime/metro/00002__.js";

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
