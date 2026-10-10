// === Module 7990: DoubleTapErrorToast ===

// Module 7990 (DoubleTapErrorToast)
import util from "util" /* 1126 */;
import EmojiConstants from "EmojiConstants" /* 1393 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

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