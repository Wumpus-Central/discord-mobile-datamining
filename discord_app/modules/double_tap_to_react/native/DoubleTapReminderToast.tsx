// discord_app/modules/double_tap_to_react/native/DoubleTapReminderToast.tsx
import util from "../../../intl/index.native.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import DoubleTapToReactUtils from "DoubleTapToReactUtils.tsx";
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(name) {
  if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = UserSettings.DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    const result = DoubleTapToReactUtils.disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag;
    if (!flag) {
      areEmojisEqualResult = null != result;
    }
    if (areEmojisEqualResult) {
      areEmojisEqualResult = DoubleTapToReactUtils.areEmojisEqual(result, name);
      const tmpResult4 = DoubleTapToReactUtils;
    }
    if (areEmojisEqualResult) {
      const obj2 = { text: null, icon: null };
      const intl = util.intl;
      const obj3 = {
        protipHook(arg0) {
          return arg0;
        },
        emojiName: name.name,
      };
      obj2.text = intl.formatToPlainString(util.t.C2tQIV, obj3);
      const obj4 = ToastActionCreatorsDefault;
      obj2.icon = DoubleTapEmojiUpdatedToast.getToastEmojiEntity(name);
      obj4.open("DOUBLE_TAP_TO_REACT_REMINDER", obj2);
      const tmpResult5 = DoubleTapEmojiUpdatedToast;
      const obj5 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER,
        obj5,
      );
      const tmpResult6 = DismissibleContentUnsafeUtils;
    }
    const tmpResult = DoubleTapToReactUtils;
  }
  obj = DismissibleContentUnsafeUtils;
};
