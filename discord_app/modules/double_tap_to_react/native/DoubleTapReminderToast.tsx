// discord_app/modules/double_tap_to_react/native/DoubleTapReminderToast.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import dispatcherDefault from "../../toast/native/ToastActionCreators.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";
import { UNSAFE_isDismissibleContentDismissed } from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";

require = fn;
function DoubleTapReminderContent(emoji) {
  { variant: "text-sm/normal", style: callback().toastText, children: null };
  const intl = getSystemLocale.intl;
  const obj = {
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
const createCacheKey = { marginRight: ThemesDefault.space.PX_12, marginVertical: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(closure_0) {
  const _require = closure_0;
  let obj = UNSAFE_isDismissibleContentDismissed;
  if (!obj.UNSAFE_isDismissibleContentDismissed(require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx").DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(4066).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    let tmpResult = tmp(8192);
    const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag;
    if (!flag) {
      areEmojisEqualResult = null != result;
    }
    if (areEmojisEqualResult) {
      tmpResult = tmp(8192);
      areEmojisEqualResult = tmpResult.areEmojisEqual(result, closure_0);
    }
    if (areEmojisEqualResult) {
      obj = { key: "DOUBLE_TAP_TO_REACT_REMINDER", icon: null, content: null, toastDurationMs: 4000 };
      obj[1] = function icon() {
        return jsx(callback(dependencyMap[12]).ToastEmoji, { emoji: callback });
      };
      obj[2] = function content() {
        return <DoubleTapReminderContent emoji={closure_0} />;
      };
      dispatcherDefault.open(obj);
      obj = { dismissAction: null, forceTrack: true };
      obj[0] = ContentDismissActionType.AUTO_DISMISS;
      const result1 = tmp(4196).UNSAFE_markDismissibleContentAsDismissed(tmp(1377).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj);
      const tmpResult1 = tmp(4196);
    }
  }
};