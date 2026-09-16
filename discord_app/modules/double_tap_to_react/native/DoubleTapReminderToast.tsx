// discord_app/modules/double_tap_to_react/native/DoubleTapReminderToast.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function DoubleTapReminderContent(emoji) {
  const obj = { variant: "text-sm/normal", style: closure_5().toastText, children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.C2tQIV, {
    protipHook(children) {
      return jsx(
        require("Text/Text").Text,
        { variant: "text-sm/bold", color: "text-feedback-info", children },
        "doubleTapReminder",
      );
    },
    emojiName: emoji.emoji.name,
  });
  return jsx(Text_Text.Text, { variant: "text-sm/normal", style: closure_5().toastText, children: null });
}
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let obj2 = { toastText: { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(emoji) {
  _require = emoji;
  if (
    !obj.UNSAFE_isDismissibleContentDismissed(
      require("dismissible_content").DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER,
    )
  ) {
    const DoubleTapReactionEmoji = tmp(1936).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    const result = tmp(8084).disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag;
    if (!flag) {
      areEmojisEqualResult = null != result;
    }
    if (areEmojisEqualResult) {
      areEmojisEqualResult = tmp(8084).areEmojisEqual(result, emoji);
      const tmpResult3 = tmp(8084);
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
        toastDurationMs: 4000,
      };
      ToastActionCreatorsDefault.open(obj2);
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const result1 = tmp(4458).UNSAFE_markDismissibleContentAsDismissed(
        tmp(1944).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER,
        obj3,
      );
      const tmpResult4 = tmp(4458);
    }
    const tmpResult = tmp(8084);
  }
  obj = require("DismissibleContentUnsafeUtils");
};
