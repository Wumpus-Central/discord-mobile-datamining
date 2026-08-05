import { getSystemLocale } from "../../../intl/index.native.tsx";
// discord_app/modules/user_profile/utils/getMutualFriendsLabel.tsx
const result = require("set").fileFinishedImporting("modules/user_profile/utils/getMutualFriendsLabel.tsx");

export default function getMutualFriendsLabel(arg0) {
  let str = arg0;
  if (undefined === arg0) {
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    let stringResult = intl3.string(getSystemLocale /* getSystemLocale */.t["0mTJ3j"]);
  } else if (0 === str) {
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    stringResult = intl2.string(getSystemLocale /* getSystemLocale */.t.n9g3ay);
  } else {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    if (str == null) {
      str = "";
    }
    const obj = { count: null };
    obj[0] = str;
    stringResult = intl.formatToPlainString(getSystemLocale /* getSystemLocale */.t["5s9jl+"], obj);
  }
  return stringResult;
};