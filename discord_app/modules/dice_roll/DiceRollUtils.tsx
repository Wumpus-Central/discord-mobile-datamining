// discord_app/modules/dice_roll/DiceRollUtils.tsx
import intl3 from "../../intl/index.native.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
