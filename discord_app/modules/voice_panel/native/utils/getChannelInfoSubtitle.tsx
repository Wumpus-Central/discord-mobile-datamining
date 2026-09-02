// === Module 16928: getChannelInfoSubtitle ===

// Module 16928 (getChannelInfoSubtitle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import getNicknameDefault from "getNickname" /* 4673 */;

const result = set.fileFinishedImporting("modules/voice_panel/native/utils/getChannelInfoSubtitle.tsx");

export default function getChannelInfoSubtitle(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  if (0 === arg2.length) {
    return null;
  } else if (1 === length) {
    return getNicknameDefault.getName(arg0, arg1, arg2[0]);
  } else if (2 === length) {
    const intl = getSystemLocale.intl;
    let obj = { user1: null, user2: null };
    obj[0] = getNicknameDefault.getName(arg0, arg1, arg2[0]);
    const obj2 = getNicknameDefault;
    obj[1] = getNicknameDefault.getName(arg0, arg1, arg2[1]);
    return intl.formatToPlainString(getSystemLocale.t["lRD/ru"], obj);
  } else {
    const intl2 = getSystemLocale.intl;
    obj = { user1: null, user2: null, numPeople: null };
    obj[0] = getNicknameDefault.getName(arg0, arg1, arg2[0]);
    const obj6 = getNicknameDefault;
    obj[1] = getNicknameDefault.getName(arg0, arg1, arg2[1]);
    obj[2] = arg2.length - 2 + num;
    return intl2.formatToPlainString(getSystemLocale.t.RFCI3S, obj);
  }
};