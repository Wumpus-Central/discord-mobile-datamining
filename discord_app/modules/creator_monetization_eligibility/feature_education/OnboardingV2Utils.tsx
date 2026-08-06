// discord_app/modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx
import { isGuildOwner } from "GuildNSFWContentLevel";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";

let items = [, , , , ];
({ CREATOR_MONETIZABLE_PROVISIONAL: arr[0], CREATOR_MONETIZABLE: arr[1], CREATOR_MONETIZABLE_WHITEGLOVE: arr[2], CREATOR_MONETIZABLE_DISABLED: arr[3], CREATOR_MONETIZABLE_RESTRICTED: arr[4] } = require("ME").GuildFeatures);
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx");

export const useCanSeeCreatorMonetizationOnboardingV2Upsell = function useCanSeeCreatorMonetizationOnboardingV2Upsell(id) {
  const _require = id;
  const items = [createGuildRecordFromRust];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => outer1_3.getGuild(closure_0));
  const obj = _require(stateFromStores[4]);
  const items1 = [mergeGuildAvatar];
  const stateFromStores1 = _require(stateFromStores[4]).useStateFromStores(items1, () => currentUser.getCurrentUser());
  const obj2 = _require(stateFromStores[4]);
  const guildRoleSubscriptionSettingsVisibility = _require(stateFromStores[5]).useGuildRoleSubscriptionSettingsVisibility(stateFromStores);
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
  const obj3 = _require(stateFromStores[5]);
};
export const canSeeCreatorMonetizationOnboardingV2Upsell = function canSeeCreatorMonetizationOnboardingV2Upsell(arg0) {
  guild = guild.getGuild(arg0);
  if (null == guild) {
    return false;
  } else {
    currentUser = currentUser.getCurrentUser();
    if (null == currentUser) {
      return false;
    } else {
      const guildRoleSubscriptionSettingsVisibility = guild(5801).getGuildRoleSubscriptionSettingsVisibility(guild);
      let tmp5 = guildRoleSubscriptionSettingsVisibility === guild(5801).GuildRoleSubscriptionSettingsVisibility.VISIBLE;
      const obj = guild(5801);
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