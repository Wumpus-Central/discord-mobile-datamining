// discord_app/modules/voice_panel/native/utils/getChannelInfoSubtitle.tsx
const result = require("set").fileFinishedImporting("modules/voice_panel/native/utils/getChannelInfoSubtitle.tsx");

export default function getChannelInfoSubtitle(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  if (0 === arg2.length) {
    return null;
  } else if (1 === length) {
    return require("../../../../utils/NicknameUtils.tsx").getName(arg0, arg1, arg2[0]);
  } else if (2 === length) {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let obj = { user1: null, user2: null };
    obj[0] = require("../../../../utils/NicknameUtils.tsx").getName(arg0, arg1, arg2[0]);
    const obj2 = require("../../../../utils/NicknameUtils.tsx");
    obj[1] = require("../../../../utils/NicknameUtils.tsx").getName(arg0, arg1, arg2[1]);
    return intl.formatToPlainString(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["lRD/ru"], obj);
  } else {
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj = { user1: null, user2: null, numPeople: null };
    obj[0] = require("../../../../utils/NicknameUtils.tsx").getName(arg0, arg1, arg2[0]);
    const obj6 = require("../../../../utils/NicknameUtils.tsx");
    obj[1] = require("../../../../utils/NicknameUtils.tsx").getName(arg0, arg1, arg2[1]);
    obj[2] = arg2.length - 2 + num;
    return intl2.formatToPlainString(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.RFCI3S, obj);
  }
};