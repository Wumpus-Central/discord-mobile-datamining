// === Module 11558: getBarText ===

// Module 11558 (getBarText)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = obj132.fileFinishedImporting("modules/dice_roll/DiceRollUtils.tsx");

export const getBarText = function getBarText(flag, results) {
  if (flag) {
    const intl2 = getSystemLocale.intl;
    let str = intl2.string(getSystemLocale.t["x/FIRX"]);
  } else {
    str = "";
    if (null != results) {
      const intl = getSystemLocale.intl;
      const obj = { total: null };
      obj[0] = results.reduce((acc, item, index) => acc + item, 0);
      str = intl.formatToPlainString(getSystemLocale.t.xU4pF1, obj);
    }
  }
  return str;
};