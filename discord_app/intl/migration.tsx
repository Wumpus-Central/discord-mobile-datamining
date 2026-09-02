// discord_app/intl/migration.tsx
import set from "../../_runtime/00002_set.js";
import getSystemLocale from "index.native.tsx";
import _mod1273 from "../../_runtime/metro/01273__.js";

const result = set.fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  ({ intl, t } = getSystemLocale);
  const obj = _mod1273;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};
