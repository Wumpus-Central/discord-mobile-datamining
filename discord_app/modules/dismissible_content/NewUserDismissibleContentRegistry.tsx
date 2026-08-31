// discord_app/modules/dismissible_content/NewUserDismissibleContentRegistry.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import useDcfNewUserCooldown from "DcfNewUserCooldownExperiment.tsx";
import closure_3 from "../../stores/AuthenticationStore.tsx";
import closure_4 from "DismissibleContentFrameworkStore.tsx";
import { useDcfNewUserCooldown } from "DcfNewUserCooldownExperiment.tsx";

require = arg1;
let closure_5 = { [arg1(1373).DismissibleContent.MJ_NEW_USER_CHAT_BAR]: 0, [arg1(1373).DismissibleContent.NUX_GUILD_CHANNEL_EXPLAINER]: 0, [arg1(1373).DismissibleContent.SEEN_LAUNCH_WELCOME]: 0, [arg1(1373).DismissibleContent.SEEN_OLD_DESIGN]: 0, [arg1(1373).DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE]: 0, [arg1(1373).DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_FLIP]: 0, [arg1(1373).DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_FLIP]: 0, [arg1(1373).DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE]: 0, [arg1(1373).DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE]: 0, [arg1(1373).DismissibleContent.WHATS_NEW_SERVER_PROFILE_FLIP]: 0, [arg1(1373).DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE]: 0, [arg1(1373).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD]: 0, [arg1(1373).DismissibleContent.FRACTIONAL_NITRO_DURATION_LEFT_PILL]: 0, [arg1(1373).DismissibleContent.TRIAL_NUX_EMOJI_BUTTON]: 0, [arg1(1373).DismissibleContent.TRIAL_NUX_EMOJI_PICKER]: 0, [arg1(1373).DismissibleContent.TRIAL_NUX_STREAM_COACH_MARK]: 0, [arg1(1373).DismissibleContent.OVERLAY_OOP_SETTINGS_NUX]: 0, [arg1(1373).DismissibleContent.OVERLAY_OOP_WELCOME_NUX]: 0, [arg1(1373).DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_NUX]: 0, [arg1(1373).DismissibleContent.OVERLAY_OOP_WELCOME_SWITCH_FROM_IP_NUX]: 0, [arg1(1373).DismissibleContent.OVERLAY_OOP_WELCOME_BACKGROUND_SWITCH_FROM_IP_NUX]: 0, [arg1(1373).DismissibleContent.REVERSE_TRIAL_NITRO_TAB_BADGE_V2]: 0, [arg1(1373).DismissibleContent.PERMADECOS_NITRO_TAB_NEW_BADGE]: 0, [arg1(1373).DismissibleContent.PERMADECOS_NITRO_HOME_CARD_NEW_BADGE]: 0, [arg1(1373).DismissibleContent.BOGO_2025_ANNOUNCEMENT_MODAL]: 0, [arg1(1373).DismissibleContent.NITRO_DROP_REWARD]: 0, [arg1(1373).DismissibleContent.BOUNTIES_SWIPE_UP_NUX]: 0 };
const result = require("set").fileFinishedImporting("modules/dismissible_content/NewUserDismissibleContentRegistry.tsx");

export const useNewUserDismissibleContent = function useNewUserDismissibleContent(arr) {
  _require = require("DcfNewUserCooldownExperiment.tsx").useDcfNewUserCooldown();
  let obj = useDcfNewUserCooldown;
  const items = [closure_3, closure_4];
  const stateFromStoresObject = require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresObject(items, () => {
    obj = { userId: id.getId(), newUserMinAgeRequiredOverridden: obj.newUserMinAgeRequiredOverridden };
    return obj;
  });
  const userId = stateFromStoresObject.userId;
  let found = arr;
  if (!stateFromStoresObject.newUserMinAgeRequiredOverridden) {
    found = arr.filter((arg0) => {
      let tmp3 = null != userId;
      if (tmp3) {
        let tmp9 = closure_1_5[arg0];
        const obj = userId(closure_1_2[5]);
        if (tmp9 == null) {
          tmp9 = tmp2;
        }
        tmp3 = userId(closure_1_2[5]).age(tmp) >= tmp9;
        const ageResult = userId(closure_1_2[5]).age(tmp);
      }
      return tmp3;
    });
  }
  return found;
};
export const disableNewUserDismissibleContent = function disableNewUserDismissibleContent(prop) {
  const newUserMinAgeRequiredOverridden = obj.newUserMinAgeRequiredOverridden;
  let tmp = !newUserMinAgeRequiredOverridden;
  if (!newUserMinAgeRequiredOverridden) {
    id = id.getId();
    useDcfNewUserCooldown;
    let tmp9 = null != id;
    if (tmp9) {
      obj = DISCORD_EPOCHDefault;
      let tmp14 = dependencyMap[prop];
      if (tmp14 == null) {
        tmp14 = tmp7;
      }
      tmp9 = obj.age(id) >= tmp14;
      const ageResult = obj.age(id);
    }
    tmp = !tmp9;
  }
  return tmp;
};
export const isUserAccountOldEnough = function isUserAccountOldEnough(arg0, arg1, arg2) {
  let tmp = null != arg0;
  if (tmp) {
    let tmp7 = dependencyMap[arg1];
    const obj = DISCORD_EPOCHDefault;
    if (tmp7 == null) {
      tmp7 = arg2;
    }
    tmp = DISCORD_EPOCHDefault.age(arg0) >= tmp7;
    const ageResult = DISCORD_EPOCHDefault.age(arg0);
  }
  return tmp;
};