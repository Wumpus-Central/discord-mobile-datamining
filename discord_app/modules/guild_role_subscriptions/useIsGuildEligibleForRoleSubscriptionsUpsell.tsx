// discord_app/modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx
import set from "../../../_runtime/00002_set.js";
import ME from "../../Constants.tsx";
import GuildNSFWContentLevel from "../../records/GuildRecord.tsx";
import closure_3 from "../../stores/GuildStore.tsx";
import closure_4 from "../../stores/UserStore.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { set } from "../creator_monetization_eligibility/CreatorMonetizationEligibilityExperimentUtils.tsx";

const isGuildOwner = GuildNSFWContentLevel.isGuildOwner;
const GuildFeatures = ME.GuildFeatures;
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx");

export default function useIsGuildEligibleForRoleSubscriptionsUpsell(arg0) {
  const _require = arg0;
  const items = [closure_3];
  const stateFromStores = _initialize.useStateFromStores(items, () => closure_1_3.getGuild(closure_0));
  _initialize;
  [][0] = closure_4;
  let tmp6 = null != stateFromStores;
  if (tmp6) {
    tmp6 = isGuildOwner(stateFromStores, tmp5);
  }
  const obj = _initialize;
  const tmp = _require;
  const isUserInCreatorMonetizationEligibleCountry = _set.useIsUserInCreatorMonetizationEligibleCountry();
  if (tmp6) {
    let flag;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      flag = features.has(GuildFeatures.COMMUNITY);
    }
    if (flag == null) {
      flag = false;
    }
    tmp6 = flag;
  }
  if (tmp6) {
    tmp6 = isUserInCreatorMonetizationEligibleCountry;
  }
  if (tmp6) {
    let hasItem;
    if (stateFromStores != null) {
      const features2 = stateFromStores.features;
      hasItem = features2.has(GuildFeatures.CREATOR_MONETIZABLE);
    }
    if (!hasItem) {
      let hasItem1;
      if (stateFromStores != null) {
        const features3 = stateFromStores.features;
        hasItem1 = features3.has(GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
      }
      hasItem = hasItem1;
    }
    if (!hasItem) {
      let hasItem2;
      if (stateFromStores != null) {
        const features4 = stateFromStores.features;
        hasItem2 = features4.has(GuildFeatures.CREATOR_MONETIZABLE_DISABLED);
      }
      hasItem = hasItem2;
    }
    tmp6 = !hasItem;
  }
  return tmp6;
};