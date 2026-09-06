// discord_app/modules/dismissible_content/NewUserDismissibleContentRegistry.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DcfNewUserCooldownExperiment from "DcfNewUserCooldownExperiment.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import DismissibleContentFrameworkStore from "DismissibleContentFrameworkStore.tsx";

require = fn;
const dependencyMap = {
  [fn(1943).DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0,
  [fn(1943).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER]: 0,
  [fn(1943).DismissibleContent.SEEN_LAUNCH_WELCOME]: 0,
  [fn(1943).DismissibleContent.SEEN_OLD_DESIGN]: 0,
  [fn(1943).DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0,
  [fn(1943).DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0,
  [fn(1943).DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0,
  [fn(1943).DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0,
  [fn(1943).DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0,
  [fn(1943).DismissibleContent.WHATS_NEW_SERVER_PROFILE_FLIP]: 0,
  [fn(1943).DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE]: 0,
  [fn(1943).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD]: 0,
  [fn(1943).DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0,
  [fn(1943).DismissibleContent.TRIAL_NUX_EMOJI_BUTTON]: 0,
  [fn(1943).DismissibleContent.TRIAL_NUX_EMOJI_PICKER]: 0,
  [fn(1943).DismissibleContent.TRIAL_NUX_STREAM_COACH_MARK]: 0,
  [fn(1943).DismissibleContent.OVERLAY_OOP_SETTINGS_NUX]: 0,
  [fn(1943).DismissibleContent.OVERLAY_OOP_WELCOME_NUX]: 0,
  [fn(1943).DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0,
  [fn(1943).DismissibleContent.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0,
  [fn(1943).DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0,
  [fn(1943).DismissibleContent.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0,
  [fn(1943).DismissibleContent.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0,
  [fn(1943).DismissibleContent.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0,
  [fn(1943).DismissibleContent.BOGO_2025_ANNOUNCEMENT_MODAL]: 0,
  [fn(1943).DismissibleContent.NITRO_DROP_REWARD]: 0,
  [fn(1943).DismissibleContent.BOUNTIES_SWIPE_UP_NUX]: 0,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/dismissible_content/NewUserDismissibleContentRegistry.tsx");

export const useNewUserDismissibleContent = function useNewUserDismissibleContent(arr) {
  _require = require("DcfNewUserCooldownExperiment").useDcfNewUserCooldown();
  let obj = require("DcfNewUserCooldownExperiment");
  const items = [AuthenticationStore, DismissibleContentFrameworkStore];
  const stateFromStoresObject = require("useStateFromStores").useStateFromStoresObject(items, () => ({
    userId: id.getId(),
    newUserMinAgeRequiredOverridden: DismissibleContentFrameworkStore.newUserMinAgeRequiredOverridden,
  }));
  const userId = stateFromStoresObject.userId;
  let found = arr;
  if (!stateFromStoresObject.newUserMinAgeRequiredOverridden) {
    found = arr.filter((item) => {
      let tmp3 = null != userId;
      if (tmp3) {
        let tmp9 = closure_5[item];
        if (tmp9 == null) {
          tmp9 = tmp2;
        }
        tmp3 = SnowflakeUtilsDefault.age(tmp) >= tmp9;
        const ageResult = SnowflakeUtilsDefault.age(tmp);
      }
      return tmp3;
    });
  }
  return found;
};
export const disableNewUserDismissibleContent = function disableNewUserDismissibleContent(prop) {
  const newUserMinAgeRequiredOverridden = DismissibleContentFrameworkStore.newUserMinAgeRequiredOverridden;
  let tmp = !newUserMinAgeRequiredOverridden;
  if (!newUserMinAgeRequiredOverridden) {
    const id = AuthenticationStore.getId();
    DcfNewUserCooldownExperiment;
    let tmp9 = null != id;
    if (tmp9) {
      let tmp14 = dependencyMap[prop];
      if (tmp14 == null) {
        tmp14 = tmp7;
      }
      tmp9 = SnowflakeUtilsDefault.age(id) >= tmp14;
      const ageResult = SnowflakeUtilsDefault.age(id);
    }
    tmp = !tmp9;
  }
  return tmp;
};
export const isUserAccountOldEnough = function isUserAccountOldEnough(arg0, arg1, arg2) {
  let tmp = null != arg0;
  if (tmp) {
    let tmp7 = dependencyMap[arg1];
    if (tmp7 == null) {
      tmp7 = arg2;
    }
    tmp = SnowflakeUtilsDefault.age(arg0) >= tmp7;
    const ageResult = SnowflakeUtilsDefault.age(arg0);
  }
  return tmp;
};
