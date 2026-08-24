// discord_app/modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import GuildNSFWContentLevel from "../../../records/GuildRecord.tsx";
import closure_3 from "../../../stores/GuildStore.tsx";
import closure_4 from "../../../stores/UserStore.tsx";

const isGuildOwner = GuildNSFWContentLevel.isGuildOwner;
let items = [, , , , ];
({ CREATOR_MONETIZABLE_PROVISIONAL: arr[0], CREATOR_MONETIZABLE: arr[1], CREATOR_MONETIZABLE_WHITEGLOVE: arr[2], CREATOR_MONETIZABLE_DISABLED: arr[3], CREATOR_MONETIZABLE_RESTRICTED: arr[4] } = ME.GuildFeatures);
const result = set.fileFinishedImporting("modules/creator_monetization_eligibility/feature_education/OnboardingV2Utils.tsx");

export const useCanSeeCreatorMonetizationOnboardingV2Upsell = function useCanSeeCreatorMonetizationOnboardingV2Upsell(id) {
  const _require = id;
  items = [closure_3];
  stateFromStores = _require(stateFromStores[4]).useStateFromStores(items, () => closure_1_3.getGuild(closure_0));
  const obj = _require(stateFromStores[4]);
  const items1 = [closure_4];
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
      const guildRoleSubscriptionSettingsVisibility = guild(7226).getGuildRoleSubscriptionSettingsVisibility(guild);
      let tmp5 = guildRoleSubscriptionSettingsVisibility === guild(7226).GuildRoleSubscriptionSettingsVisibility.VISIBLE;
      const obj = guild(7226);
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