// discord_app/intl/migration.tsx
const result = require("set").fileFinishedImporting("intl/migration.tsx");

export const improperGetEnglishIntlMessageText = function newGetEnglishMessageText(code) {
  let intl;
  let t;
  ({ intl, t } = require("index.native.tsx") /* getSystemLocale */);
  const obj = require("../../_runtime/metro/01274__.js");
  intl.currentLocale = intl.currentLocale;
  return intl.string(t[obj.runtimeHashMessageKey(obj, code)]);
};