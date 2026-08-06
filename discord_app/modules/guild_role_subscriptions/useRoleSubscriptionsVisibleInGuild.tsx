// discord_app/modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx
import initialize from "initialize";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildFeatures } from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useIsCreatorMonetizationEnabledGuild } from "../creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx";
import { useShouldHideGuildPurchaseEntryPoints } from "../creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx";
import { computeHasRoleSubscriptionsInGuild } from "useHasRoleSubscriptionInGuild.tsx";

const require = arg1;
function computeCanEveryoneInGuildSeeRoleSubscriptions(c0) {
  let obj;
  let obj2;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [createGuildRecordFromRust, initialize];
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
let result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx");

export const areRoleSubscriptionsVisibleInGuild = function areRoleSubscriptionsVisibleInGuild(c0, initialize) {
  let hasRoleSubscriptionsInGuild = computeCanEveryoneInGuildSeeRoleSubscriptions(c0);
  if (!hasRoleSubscriptionsInGuild) {
    hasRoleSubscriptionsInGuild = computeHasRoleSubscriptionsInGuild.computeHasRoleSubscriptionsInGuild(c0, initialize);
    const obj = computeHasRoleSubscriptionsInGuild;
  }
  return hasRoleSubscriptionsInGuild;
};
export const useRoleSubscriptionsVisibleInGuild = function useRoleSubscriptionsVisibleInGuild(id1) {
  const _require = id1;
  const tmp = computeHasRoleSubscriptionsInGuild(id1);
  const items = [createGuildRecordFromRust, initialize];
  const items1 = [id1];
  let stateFromStores = _initialize.useStateFromStores(items, () => {
    const items = [outer1_4, outer1_3];
    return outer1_6(closure_0, items);
  }, items1);
  const obj = _initialize;
  const shouldHideGuildPurchaseEntryPoints = _useShouldHideGuildPurchaseEntryPoints.useShouldHideGuildPurchaseEntryPoints(id1).shouldHideGuildPurchaseEntryPoints;
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
  const tmp2 = computeHasRoleSubscriptionsInGuild(id);
  const tmp3 = _require;
  let items = [createGuildRecordFromRust, initialize];
  const items1 = [id];
  let stateFromStores = _initialize.useStateFromStores(items, () => {
    const items = [outer1_4, outer1_3];
    return outer1_6(closure_0, items);
  }, items1);
  const obj = _initialize;
  const shouldHideGuildPurchaseEntryPoints = _useShouldHideGuildPurchaseEntryPoints.useShouldHideGuildPurchaseEntryPoints(id).shouldHideGuildPurchaseEntryPoints;
  let tmp5 = !shouldHideGuildPurchaseEntryPoints;
  if (!shouldHideGuildPurchaseEntryPoints) {
    if (!stateFromStores) {
      stateFromStores = tmp2;
    }
    tmp5 = stateFromStores;
  }
  const obj2 = _useShouldHideGuildPurchaseEntryPoints;
  const guildEligibleForGuildProducts = tmp3(5799).useGuildEligibleForGuildProducts(id);
  if (tmp5) {
    let flag = !guildEligibleForGuildProducts;
    if (guildEligibleForGuildProducts) {
      flag = true;
    }
    tmp5 = flag;
  }
  return tmp5;
};