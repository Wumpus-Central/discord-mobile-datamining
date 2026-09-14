// discord_app/modules/voice_panel/native/utils/getChannelInfoSubtitle.tsx
import util from "../../../../intl/index.native.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/voice_panel/native/utils/getChannelInfoSubtitle.tsx");

export default function getChannelInfoSubtitle(arg0, arg1, arg2) {
  let num = arg3;
  if (arg3 === undefined) {
    num = 0;
  }
  if (0 === arg2.length) {
    return null;
  } else if (1 === length) {
    return NicknameUtilsDefault.getName(arg0, arg1, arg2[0]);
  } else if (2 === length) {
    const intl = util.intl;
    const obj = { user1: NicknameUtilsDefault.getName(arg0, arg1, arg2[0]), user2: null };
    obj.user2 = NicknameUtilsDefault.getName(arg0, arg1, arg2[1]);
    return intl.formatToPlainString(util.t["lRD/ru"], obj);
  } else {
    const intl2 = util.intl;
    const obj5 = { user1: NicknameUtilsDefault.getName(arg0, arg1, arg2[0]), user2: null, numPeople: null };
    obj5.user2 = NicknameUtilsDefault.getName(arg0, arg1, arg2[1]);
    obj5.numPeople = arg2.length - 2 + num;
    return intl2.formatToPlainString(util.t.RFCI3S, obj5);
  }
}
