// discord_app/modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx
import Constants from "../../Constants.tsx";
import GuildRecord from "../../records/GuildRecord.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const isGuildOwner = GuildRecord.isGuildOwner;
const GuildFeatures = Constants.GuildFeatures;
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/useIsGuildEligibleForRoleSubscriptionsUpsell.tsx",
);

export default function useIsGuildEligibleForRoleSubscriptionsUpsell(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  require("initialize");
  [][0] = UserStore;
  let tmp6 = null != stateFromStores;
  if (tmp6) {
    tmp6 = isGuildOwner(stateFromStores, tmp5);
  }
  const obj = require("initialize");
  const isUserInCreatorMonetizationEligibleCountry =
    require("CreatorMonetizationEligibilityExperimentUtils").useIsUserInCreatorMonetizationEligibleCountry();
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
}
