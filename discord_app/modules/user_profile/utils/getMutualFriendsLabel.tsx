// === Module 12240: getMutualFriendsLabel ===

// Module 12240 (getMutualFriendsLabel)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;

const result = set.fileFinishedImporting("modules/user_profile/utils/getMutualFriendsLabel.tsx");

export default function getMutualFriendsLabel(arg0) {
  let str = arg0;
  if (undefined === arg0) {
    const intl3 = getSystemLocale.intl;
    let stringResult = intl3.string(getSystemLocale.t["0mTJ3j"]);
  } else if (0 === str) {
    const intl2 = getSystemLocale.intl;
    stringResult = intl2.string(getSystemLocale.t.n9g3ay);
  } else {
    const intl = getSystemLocale.intl;
    if (str == null) {
      str = "";
    }
    const obj = { count: null };
    obj[0] = str;
    stringResult = intl.formatToPlainString(getSystemLocale.t["5s9jl+"], obj);
  }
  return stringResult;
};