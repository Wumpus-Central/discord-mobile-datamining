// discord_app/modules/dismissible_content/NewUserDismissibleContentRegistry.tsx
import fetchFingerprint from "fetchFingerprint";
import set from "set";

const require = arg1;
let closure_5 = { [arg1(1358).DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0, [arg1(1358).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER]: 0, [arg1(1358).DismissibleContent.SEEN_LAUNCH_WELCOME]: 0, [arg1(1358).DismissibleContent.SEEN_OLD_DESIGN]: 0, [arg1(1358).DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0, [arg1(1358).DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0, [arg1(1358).DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0, [arg1(1358).DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0, [arg1(1358).DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0, [arg1(1358).DismissibleContent.WHATS_NEW_SERVER_PROFILE_FLIP]: 0, [arg1(1358).DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE]: 0, [arg1(1358).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD]: 0, [arg1(1358).DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0, [arg1(1358).DismissibleContent.TRIAL_NUX_EMOJI_BUTTON]: 0, [arg1(1358).DismissibleContent.TRIAL_NUX_EMOJI_PICKER]: 0, [arg1(1358).DismissibleContent.TRIAL_NUX_STREAM_COACH_MARK]: 0, [arg1(1358).DismissibleContent.OVERLAY_OOP_SETTINGS_NUX]: 0, [arg1(1358).DismissibleContent.OVERLAY_OOP_WELCOME_NUX]: 0, [arg1(1358).DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0, [arg1(1358).DismissibleContent.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0, [arg1(1358).DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0, [arg1(1358).DismissibleContent.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0, [arg1(1358).DismissibleContent.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0, [arg1(1358).DismissibleContent.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0, [arg1(1358).DismissibleContent.PROFILE_FRAMES_NITRO_TAB_NEW_BADGE]: 0, [arg1(1358).DismissibleContent.BOGO_2025_ANNOUNCEMENT_MODAL]: 0, [arg1(1358).DismissibleContent.NITRO_DROP_REWARD]: 0, [arg1(1358).DismissibleContent.BOUNTIES_SWIPE_UP_NUX]: 0 };
const DAY = require("set").Millis.DAY;
const result = require("DismissibleContent").fileFinishedImporting("modules/dismissible_content/NewUserDismissibleContentRegistry.tsx");

export const useNewUserDismissibleContent = function useNewUserDismissibleContent(arr) {
  const items = [fetchFingerprint, set];
  const stateFromStoresObject = userId(647).useStateFromStoresObject(items, () => {
    obj = { userId: id.getId(), newUserMinAgeRequiredOverridden: obj.newUserMinAgeRequiredOverridden };
    return obj;
  });
  userId = stateFromStoresObject.userId;
  let found = arr;
  if (!stateFromStoresObject.newUserMinAgeRequiredOverridden) {
    found = arr.filter((arg0) => {
      let tmp2 = null != userId;
      if (tmp2) {
        let tmp8 = outer1_5[arg0];
        const obj = outer1_1(outer1_2[5]);
        if (tmp8 == null) {
          tmp8 = outer1_6;
        }
        tmp2 = outer1_1(outer1_2[5]).age(tmp) >= tmp8;
        const ageResult = outer1_1(outer1_2[5]).age(tmp);
      }
      return tmp2;
    });
  }
  return found;
};
export const disableNewUserDismissibleContent = function disableNewUserDismissibleContent(prop) {
  const newUserMinAgeRequiredOverridden = obj.newUserMinAgeRequiredOverridden;
  let tmp = !newUserMinAgeRequiredOverridden;
  if (!newUserMinAgeRequiredOverridden) {
    id = id.getId();
    let tmp5 = null != id;
    if (tmp5) {
      obj = require("../../utils/SnowflakeUtils.tsx");
      let tmp11 = dependencyMap[prop];
      if (tmp11 == null) {
        tmp11 = DAY;
      }
      tmp5 = obj.age(id) >= tmp11;
      const ageResult = obj.age(id);
    }
    tmp = !tmp5;
  }
  return tmp;
};
export const isUserAccountOldEnough = function isUserAccountOldEnough(arg0, arg1) {
  let tmp = null != arg0;
  if (tmp) {
    let tmp7 = dependencyMap[arg1];
    const obj = require("../../utils/SnowflakeUtils.tsx");
    if (tmp7 == null) {
      tmp7 = DAY;
    }
    tmp = require("../../utils/SnowflakeUtils.tsx").age(arg0) >= tmp7;
    const ageResult = require("../../utils/SnowflakeUtils.tsx").age(arg0);
  }
  return tmp;
};