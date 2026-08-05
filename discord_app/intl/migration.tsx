// discord_app/intl/migration.tsx
import { 01274__ } from "../../_runtime/metro/01274__.js";
import { getSystemLocale } from "index.native.tsx";
const result = require("set").fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  let intl;
  let t;
  ({ intl, t } = getSystemLocale /* getSystemLocale */);
  const obj = 01274__;
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};