// === Module 11390: DoubleTapReminderToast ===

// Module 11390 (DoubleTapReminderToast)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4454 */;
import Text_Text from "Text/Text" /* 4752 */;
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast" /* 11391 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function DoubleTapReminderContent(emoji) {
  const obj = { variant: "text-sm/normal", style: closure_5().toastText, children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.C2tQIV, {
    protipHook(children) {
      return jsx(require("Text/Text").Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  });
  return jsx(Text_Text.Text, { variant: "text-sm/normal", style: closure_5().toastText, children: null });
}
const ContentDismissActionType = fn(2038).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let obj2 = { toastText: { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(emoji) {
  _require = emoji;
  if (!obj.UNSAFE_isDismissibleContentDismissed(require("dismissible_content").DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(2019).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    const result = tmp(8226).disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag;
    if (!flag) {
      areEmojisEqualResult = null != result;
    }
    if (areEmojisEqualResult) {
      areEmojisEqualResult = tmp(8226).areEmojisEqual(result, emoji);
      const tmpResult3 = tmp(8226);
    }
    if (areEmojisEqualResult) {
      const obj2 = {
        key: "DOUBLE_TAP_TO_REACT_REMINDER",
        icon() {
              return jsx(DoubleTapEmojiUpdatedToast.ToastEmoji, { emoji });
            },
        content() {
              return <DoubleTapReminderContent emoji={emoji} />;
            },
        toastDurationMs: 4000
      };
      ToastActionCreatorsDefault.open(obj2);
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const result1 = tmp(4576).UNSAFE_markDismissibleContentAsDismissed(tmp(2027).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj3);
      const tmpResult4 = tmp(4576);
    }
    const tmpResult = tmp(8226);
  }
  obj = require("DismissibleContentUnsafeUtils");
};