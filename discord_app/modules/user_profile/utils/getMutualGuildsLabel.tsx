// === Module 11772: getMutualGuildsLabel ===

// Module 11772 (getMutualGuildsLabel)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = obj132.fileFinishedImporting("modules/user_profile/utils/getMutualGuildsLabel.tsx");

export default function getMutualGuildsLabel(arg0) {
  if (undefined === arg0) {
    const intl3 = getSystemLocale.intl;
    let stringResult = intl3.string(getSystemLocale.t["4lTDZq"]);
  } else if (0 === arg0) {
    const intl2 = getSystemLocale.intl;
    stringResult = intl2.string(getSystemLocale.t.jpY0X5);
  } else {
    const intl = getSystemLocale.intl;
    const obj = { count: null };
    obj[0] = arg0;
    stringResult = intl.formatToPlainString(getSystemLocale.t.eE3oep, obj);
  }
  return stringResult;
};