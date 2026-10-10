// discord_app/modules/double_tap_to_react/native/DoubleTapErrorToast.tsx
import util from "../../../intl/index.native.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const EmojiDisabledReasons = EmojiConstants.EmojiDisabledReasons;
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(emojiName) {
  emojiName = emojiName.emojiName;
  if (null == emojiName) {
    const intl3 = util.intl;
    let stringResult = intl3.string(util.t.CL5mWi);
  } else if (emojiName.reason === EmojiDisabledReasons.DISALLOW_EXTERNAL) {
    const intl2 = util.intl;
    const obj2 = { emojiName };
    stringResult = intl2.formatToPlainString(util.t.Dz4vkv, obj2);
  } else {
    const intl = util.intl;
    const obj3 = { emojiName };
    stringResult = intl.formatToPlainString(util.t.WZGLFq, obj3);
  }
  ToastActionCreatorsDefault.open("EMOJI_DOUBLE_TAP_ERROR", { text: stringResult, variant: "critical" });
};
