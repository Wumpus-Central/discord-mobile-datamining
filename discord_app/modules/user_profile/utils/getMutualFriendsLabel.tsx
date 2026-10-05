// === Module 12280: getMutualFriendsLabel ===

// Module 12280 (getMutualFriendsLabel)
import intl4 from "intl" /* 1126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/utils/getMutualFriendsLabel.tsx");

export default function getMutualFriendsLabel(length) {
  let stringResult;
  let str = length;
  if (undefined === length) {
    const intl3 = intl4.intl;
    stringResult = intl3.string(intl4.t["0mTJ3j"]);
  } else if (0 === str) {
    const intl2 = intl4.intl;
    stringResult = intl2.string(intl4.t.n9g3ay);
  } else {
    const intl = intl4.intl;
    const formatToPlainString = intl.formatToPlainString;
    const prop = intl4.t["5s9jl+"];
    if (str == null) {
      str = "";
    }
    const obj = { count: str };
    stringResult = formatToPlainString(prop, obj);
  }
  return stringResult;
};