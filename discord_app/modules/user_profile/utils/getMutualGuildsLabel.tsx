// === Module 12603: getMutualGuildsLabel ===

// Module 12603 (getMutualGuildsLabel)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/getMutualGuildsLabel.tsx");

export default function getMutualGuildsLabel(count) {
  if (undefined === count) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t["4lTDZq"]);
  } else if (0 === count) {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.jpY0X5);
  } else {
    const intl = util.intl;
    const obj = { count };
    stringResult = intl.formatToPlainString(util.t.eE3oep, obj);
  }
  return stringResult;
};