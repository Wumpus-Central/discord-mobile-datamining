// discord_app/modules/double_tap_to_react/native/DoubleTapReminderToast.tsx
import "noop";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function DoubleTapReminderContent(emoji) {
  let obj = { variant: "text-sm/normal", style: createCacheKey().toastText, children: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = {
    protipHook(children) {
      return callback2(callback(table[5]).Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  };
  obj[2] = intl.format(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.C2tQIV, obj);
  return jsx(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, {
    protipHook(children) {
      return callback2(callback(table[5]).Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  });
}
createCacheKey = { toastText: null };
createCacheKey = { marginRight: require("Themes").space.PX_12, marginVertical: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("jsxProd").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(emoji) {
  const _require = emoji;
  let obj = _require("../../dismissible_content/DismissibleContentUnsafeUtils.tsx");
  if (!obj.UNSAFE_isDismissibleContentDismissed(_require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx").DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(3958).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    let tmpResult = tmp(7886);
    const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag;
    if (!flag) {
      areEmojisEqualResult = null != result;
    }
    if (areEmojisEqualResult) {
      tmpResult = tmp(7886);
      areEmojisEqualResult = tmpResult.areEmojisEqual(result, emoji);
    }
    if (areEmojisEqualResult) {
      obj = { key: "DOUBLE_TAP_TO_REACT_REMINDER", icon: null, content: null, toastDurationMs: 4000 };
      obj[1] = function icon() {
        return outer1_4(emoji(outer1_2[12]).ToastEmoji, { emoji });
      };
      obj[2] = function content() {
        return outer1_4(outer1_6, { emoji: closure_0 });
      };
      require("../../toast/native/ToastActionCreators.tsx").open(obj);
      const obj4 = require("../../toast/native/ToastActionCreators.tsx");
      obj = { dismissAction: null, forceTrack: true };
      obj[0] = ContentDismissActionType.AUTO_DISMISS;
      const result1 = tmp(4101).UNSAFE_markDismissibleContentAsDismissed(tmp(1358).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj);
      const tmpResult1 = tmp(4101);
    }
  }
};