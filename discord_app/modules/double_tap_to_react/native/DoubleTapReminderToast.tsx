// === Module 11123: DoubleTapReminderToast ===

// Module 11123 (DoubleTapReminderToast)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4259 */;
import Text_Text from "Text/Text" /* 4556 */;
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast" /* 11124 */;
import noop from "module_19" /* 19 */;

require = fn;
function DoubleTapReminderContent(emoji) {
  let obj = { variant: "text-sm/normal", style: closure_5().toastText, children: null };
  const intl = util.intl;
  obj = {
    protipHook(children) {
      return jsx(require("Text/Text").Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  };
  obj.children = intl.format(util.t.C2tQIV, obj);
  return jsx(Text_Text.Text, {
    protipHook(children) {
      return jsx(require("Text/Text").Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  });
}
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { toastText: null };
createStyles = { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 };
createStyles.toastText = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(emoji) {
  _require = emoji;
  let obj = require("DismissibleContentUnsafeUtils");
  if (!obj.UNSAFE_isDismissibleContentDismissed(require("dismissible_content").DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(1935).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    let tmpResult = tmp(7968);
    const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag;
    if (!flag) {
      areEmojisEqualResult = null != result;
    }
    if (areEmojisEqualResult) {
      tmpResult = tmp(7968);
      areEmojisEqualResult = tmpResult.areEmojisEqual(result, emoji);
    }
    if (areEmojisEqualResult) {
      obj = {
        key: "DOUBLE_TAP_TO_REACT_REMINDER",
        icon() {
              return jsx(DoubleTapEmojiUpdatedToast.ToastEmoji, { emoji });
            },
        content() {
              return <DoubleTapReminderContent emoji={emoji} />;
            },
        toastDurationMs: 4000
      };
      ToastActionCreatorsDefault.open(obj);
      obj = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const result1 = tmp(4380).UNSAFE_markDismissibleContentAsDismissed(tmp(1943).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj);
      const tmpResult1 = tmp(4380);
    }
  }
};