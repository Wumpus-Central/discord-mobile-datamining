// === Module 9409: DoubleTapReminderToast ===

// Module 9409 (DoubleTapReminderToast)
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2041 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4899 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 7968 */;
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast" /* 9410 */;
import size from "module_2" /* 2 */;

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
        emojiName: name.name
      };
      obj2.text = intl.formatToPlainString(util.t.C2tQIV, obj3);
      const obj4 = ToastActionCreatorsDefault;
      obj2.icon = DoubleTapEmojiUpdatedToast.getToastEmojiEntity(name);
      obj4.openMana("DOUBLE_TAP_TO_REACT_REMINDER", obj2);
      const tmpResult5 = DoubleTapEmojiUpdatedToast;
      const obj5 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj5);
      const tmpResult6 = DismissibleContentUnsafeUtils;
    }
    const tmpResult = DoubleTapToReactUtils;
  }
  obj = DismissibleContentUnsafeUtils;
};