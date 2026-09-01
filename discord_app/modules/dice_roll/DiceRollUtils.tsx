// discord_app/modules/dice_roll/DiceRollUtils.tsx
import set from "../../../_runtime/00002_set.js";
import getSystemLocale from "../../intl/index.native.tsx";

const result = set.fileFinishedImporting("modules/dice_roll/DiceRollUtils.tsx");

export const getBarText = function getBarText(flag, results) {
  if (flag) {
    const intl2 = getSystemLocale.intl;
    let str = intl2.string(getSystemLocale.t["x/FIRX"]);
  } else {
    str = "";
    if (null != results) {
      const intl = getSystemLocale.intl;
      const obj = { total: null };
      obj[0] = results.reduce((arg0, arg1) => arg0 + arg1, 0);
      str = intl.formatToPlainString(getSystemLocale.t.xU4pF1, obj);
    }
  }
  return str;
};
