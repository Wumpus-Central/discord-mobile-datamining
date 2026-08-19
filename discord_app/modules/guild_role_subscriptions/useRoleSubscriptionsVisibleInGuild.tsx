// discord_app/modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx
import useIsCreatorMonetizationEnabledGuild from "../creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx";
import computeHasRoleSubscriptionsInGuild from "useHasRoleSubscriptionInGuild.tsx";
import computeHasRoleSubscriptionsInGuildDefault from "useHasRoleSubscriptionInGuild.tsx";
import initialize from "../impersonate/ImpersonateStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import { GuildFeatures } from "../../Constants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useShouldHideGuildPurchaseEntryPoints } from "../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";

require = fn;
function computeCanEveryoneInGuildSeeRoleSubscriptions(c0, items) {
  let tmp = items;
  if (items === undefined) {
    items = [closure_4, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guild = obj.getGuild(c0);
  if (null == guild) {
    return false;
  } else {
    const result = useIsCreatorMonetizationEnabledGuild.isCreatorMonetizationEnabledGuild(guild);
    const features = guild.features;
    let tmp9 = !result;
    if (result) {
      tmp9 = !features.has(GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
    }
    let isViewingServerShopResult = !tmp9;
    if (tmp9) {
      isViewingServerShopResult = obj2.isViewingServerShop(c0);
    }
    return isViewingServerShopResult;
  }
}
let result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx");

export const areRoleSubscriptionsVisibleInGuild = function areRoleSubscriptionsVisibleInGuild(c0, closure_3) {
  let hasRoleSubscriptionsInGuild = computeCanEveryoneInGuildSeeRoleSubscriptions(c0);
  if (!hasRoleSubscriptionsInGuild) {
    hasRoleSubscriptionsInGuild = computeHasRoleSubscriptionsInGuild.computeHasRoleSubscriptionsInGuild(c0, closure_3);
  }
  return hasRoleSubscriptionsInGuild;
};
export const useRoleSubscriptionsVisibleInGuild = function useRoleSubscriptionsVisibleInGuild(id1) {
  const _require = id1;
  const tmp = computeHasRoleSubscriptionsInGuildDefault(id1);
  const items = [closure_4, closure_3];
  const items1 = [id1];
  let stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const items = [closure_1_4, closure_1_3];
    return computeCanEveryoneInGuildSeeRoleSubscriptions(closure_0, items);
  }, items1);
  const obj = initialize;
  const shouldHideGuildPurchaseEntryPoints = require("../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx").useShouldHideGuildPurchaseEntryPoints(id1).shouldHideGuildPurchaseEntryPoints;
  let tmp3 = !shouldHideGuildPurchaseEntryPoints;
  if (!shouldHideGuildPurchaseEntryPoints) {
    if (!stateFromStores) {
      stateFromStores = tmp;
    }
    tmp3 = stateFromStores;
  }
  return tmp3;
};
export const useShowRoleSubscriptionsInChannelList = function useShowRoleSubscriptionsInChannelList(id) {
  const _require = id;
  const tmp2 = computeHasRoleSubscriptionsInGuildDefault(id);
  const tmp3 = _require;
  let items = [closure_4, closure_3];
  const items1 = [id];
  let stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    const items = [closure_1_4, closure_1_3];
    return computeCanEveryoneInGuildSeeRoleSubscriptions(closure_0, items);
  }, items1);
  const obj = initialize;
  const shouldHideGuildPurchaseEntryPoints = require("../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx").useShouldHideGuildPurchaseEntryPoints(id).shouldHideGuildPurchaseEntryPoints;
  let tmp5 = !shouldHideGuildPurchaseEntryPoints;
  if (!shouldHideGuildPurchaseEntryPoints) {
    if (!stateFromStores) {
      stateFromStores = tmp2;
    }
    tmp5 = stateFromStores;
  }
  const obj2 = useShouldHideGuildPurchaseEntryPoints;
  const guildEligibleForGuildProducts = tmp3(7224).useGuildEligibleForGuildProducts(id);
  if (tmp5) {
    let flag = !guildEligibleForGuildProducts;
    if (guildEligibleForGuildProducts) {
      flag = true;
    }
    tmp5 = flag;
  }
  return tmp5;
};