// discord_app/modules/dice_roll/DiceRollUtils.tsx
const result = require("set").fileFinishedImporting("modules/dice_roll/DiceRollUtils.tsx");

export const getBarText = function getBarText(flag, results) {
  if (flag) {
    const intl2 = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let str = intl2.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["x/FIRX"]);
  } else {
    str = "";
    if (null != results) {
      const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
      const obj = { total: null };
      obj[0] = results.reduce((arg0, arg1) => arg0 + arg1, 0);
      str = intl.formatToPlainString(require("../../intl/index.native.tsx") /* getSystemLocale */.t.xU4pF1, obj);
    }
  }
  return str;
};