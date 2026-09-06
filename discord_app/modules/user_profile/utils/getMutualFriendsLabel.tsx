// === Module 12609: getMutualFriendsLabel ===

// Module 12609 (getMutualFriendsLabel)
import util from "util" /* 1114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/getMutualFriendsLabel.tsx");

export default function getMutualFriendsLabel(arg0) {
  let str = arg0;
  if (undefined === arg0) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t["0mTJ3j"]);
  } else if (0 === str) {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.n9g3ay);
  } else {
    const intl = util.intl;
    if (str == null) {
      str = "";
    }
    const obj = { count: str };
    stringResult = intl.formatToPlainString(util.t["5s9jl+"], obj);
  }
  return stringResult;
};