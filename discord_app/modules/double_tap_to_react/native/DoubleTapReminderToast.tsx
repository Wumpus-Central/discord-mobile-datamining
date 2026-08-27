// discord_app/modules/double_tap_to_react/native/DoubleTapReminderToast.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import dispatcherDefault from "../../toast/native/ToastActionCreators.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { UNSAFE_isDismissibleContentDismissed } from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";

require = arg1;
function DoubleTapReminderContent(emoji) {
  let obj = { variant: "text-sm/normal", style: callback().toastText, children: null };
  const intl = getSystemLocale.intl;
  obj = {
    protipHook(children) {
      return callback2(callback(table[5]).Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  };
  obj[2] = intl.format(getSystemLocale.t.C2tQIV, obj);
  return jsx(Text.Text, {
    protipHook(children) {
      return callback2(callback(table[5]).Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  });
}
noopAll;
createCacheKey = { toastText: null };
createCacheKey = { marginRight: ThemesDefault.space.PX_12, marginVertical: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(emoji) {
  const _require = emoji;
  let obj = UNSAFE_isDismissibleContentDismissed;
  if (!obj.UNSAFE_isDismissibleContentDismissed(require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx").DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(4134).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    let tmpResult = tmp(7809);
    const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag;
    if (!flag) {
      areEmojisEqualResult = null != result;
    }
    if (areEmojisEqualResult) {
      tmpResult = tmp(7809);
      areEmojisEqualResult = tmpResult.areEmojisEqual(result, emoji);
    }
    if (areEmojisEqualResult) {
      obj = { key: "DOUBLE_TAP_TO_REACT_REMINDER", icon: null, content: null, toastDurationMs: 4000 };
      obj[1] = function icon() {
        return closure_1_4(emoji(closure_1_2[12]).ToastEmoji, { emoji });
      };
      obj[2] = function content() {
        return closure_1_4(closure_1_6, { emoji: closure_0 });
      };
      dispatcherDefault.open(obj);
      const obj4 = dispatcherDefault;
      obj = { dismissAction: null, forceTrack: true };
      obj[0] = ContentDismissActionType.AUTO_DISMISS;
      const result1 = tmp(4266).UNSAFE_markDismissibleContentAsDismissed(tmp(1377).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj);
      const tmpResult1 = tmp(4266);
    }
  }
};