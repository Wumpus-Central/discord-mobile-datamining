// === Module 16251: OnboardingV2Utils ===

// Module 16251 (OnboardingV2Utils)
import Constants from "Constants" /* 1074 */;
import GuildRecord from "GuildRecord" /* 1975 */;
import GuildRoleSubscriptionSettingUtils from "GuildRoleSubscriptionSettingUtils" /* 7260 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;
import size from "module_2" /* 2 */;

const isGuildOwner = GuildRecord.isGuildOwner;
let items = [, , , , ];
({ CREATOR_MONETIZABLE_PROVISIONAL: arr[0], CREATOR_MONETIZABLE: arr[1], CREATOR_MONETIZABLE_WHITEGLOVE: arr[2], CREATOR_MONETIZABLE_DISABLED: arr[3], CREATOR_MONETIZABLE_RESTRICTED: arr[4] } = Constants.GuildFeatures);
const result = size.fileFinishedImporting("modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx");

export const useCanSeeCreatorMonetizationOnboardingV2Upsell = function useCanSeeCreatorMonetizationOnboardingV2Upsell(id) {
  _require = id;
  items = [GuildStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  const obj = require("initialize");
  const items1 = [UserStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj2 = require("initialize");
  const guildRoleSubscriptionSettingsVisibility = require("GuildRoleSubscriptionSettingUtils").useGuildRoleSubscriptionSettingsVisibility(stateFromStores);
  if (null == stateFromStores) {
    return false;
  } else {
    let tmp5 = guildRoleSubscriptionSettingsVisibility === tmp4;
    const tmp7 = isGuildOwner(stateFromStores, stateFromStores1);
    if (tmp5) {
      tmp5 = tmp7;
    }
    if (tmp5) {
      tmp5 = everyResult;
    }
    return tmp5;
  }
  const obj3 = require("GuildRoleSubscriptionSettingUtils");
};
export const canSeeCreatorMonetizationOnboardingV2Upsell = function canSeeCreatorMonetizationOnboardingV2Upsell(arg0) {
  const guild = GuildStore.getGuild(arg0);
  if (null == guild) {
    return false;
  } else {
    const currentUser = UserStore.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else {
      const guildRoleSubscriptionSettingsVisibility = GuildRoleSubscriptionSettingUtils.getGuildRoleSubscriptionSettingsVisibility(guild);
      let tmp5 = guildRoleSubscriptionSettingsVisibility === GuildRoleSubscriptionSettingUtils.GuildRoleSubscriptionSettingsVisibility.VISIBLE;
      const tmp7 = isGuildOwner(guild, currentUser);
      if (tmp5) {
        tmp5 = tmp7;
      }
      if (tmp5) {
        tmp5 = everyResult;
      }
      return tmp5;
    }
  }
};