// === Module 12037: DiceRollUtils ===

// Module 12037 (DiceRollUtils)
import intl3 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/dice_roll/DiceRollUtils.tsx");

export const getBarText = function getBarText(flag, results) {
  let str;
  const tmp = flag;
  if (tmp) {
    const intl2 = intl3.intl;
    str = intl2.string(intl3.t["x/FIRX"]);
  } else {
    str = "";
    if (null != results) {
      const intl = intl3.intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj = { total: results.reduce((acc, item) => acc + item, 0) };
      const xU4pF1 = intl3.t.xU4pF1;
      str = formatToPlainString(xU4pF1, obj);
    }
  }
  return str;
};