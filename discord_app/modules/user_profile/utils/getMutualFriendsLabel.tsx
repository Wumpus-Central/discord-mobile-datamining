// discord_app/modules/user_profile/utils/getMutualFriendsLabel.tsx
const result = require("set").fileFinishedImporting("modules/user_profile/utils/getMutualFriendsLabel.tsx");

export default function getMutualFriendsLabel(arg0) {
  let str = arg0;
  if (undefined === arg0) {
    const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let stringResult = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["0mTJ3j"]);
  } else if (0 === str) {
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    stringResult = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.n9g3ay);
  } else {
    const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    if (str == null) {
      str = "";
    }
    const obj = { count: null };
    obj[0] = str;
    stringResult = intl.formatToPlainString(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["5s9jl+"], obj);
  }
  return stringResult;
};