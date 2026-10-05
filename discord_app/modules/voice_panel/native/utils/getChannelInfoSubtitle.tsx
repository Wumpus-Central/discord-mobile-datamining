// discord_app/modules/voice_panel/native/utils/getChannelInfoSubtitle.tsx
import intl3 from "../../../../intl/index.native.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/voice_panel/native/utils/getChannelInfoSubtitle.tsx");

export default function getChannelInfoSubtitle(arg0, arg1, arg2) {
  let obj2;
  let obj3;
  let obj6;
  let obj7;
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  if (0 === arg2.length) {
    return null;
  } else if (1 === arg2.length) {
    const obj4 = NicknameUtilsDefault;
    return obj4.getName(arg0, arg1, arg2[0]);
  } else if (2 === arg2.length) {
    const intl = intl3.intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj = { user1: obj2.getName(arg0, arg1, arg2[0]), user2: obj3.getName(arg0, arg1, arg2[1]) };
    const prop = intl3.t["lRD/ru"];
    obj2 = NicknameUtilsDefault;
    obj3 = NicknameUtilsDefault;
    return formatToPlainString(prop, obj);
  } else {
    const intl2 = intl3.intl;
    const formatToPlainString2 = intl2.formatToPlainString;
    const obj5 = {
      user1: obj6.getName(arg0, arg1, arg2[0]),
      user2: obj7.getName(arg0, arg1, arg2[1]),
      numPeople: arg2.length - 2 + num,
    };
    const RFCI3S = intl3.t.RFCI3S;
    obj6 = NicknameUtilsDefault;
    obj7 = NicknameUtilsDefault;
    return formatToPlainString2(RFCI3S, obj5);
  }
}
