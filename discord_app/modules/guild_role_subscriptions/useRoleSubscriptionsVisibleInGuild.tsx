// === Module 6753: useRoleSubscriptionsVisibleInGuild ===

// Module 6753 (useRoleSubscriptionsVisibleInGuild)
import Constants from "Constants" /* 1085 */;
import useIsCreatorMonetizationEnabledGuild from "useIsCreatorMonetizationEnabledGuild" /* 6754 */;
import useHasRoleSubscriptionInGuild from "useHasRoleSubscriptionInGuild" /* 6755 */;
import GuildProductsEligibility from "GuildProductsEligibility" /* 6761 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useHasRoleSubscriptionInGuildDefault = useHasRoleSubscriptionInGuild;
let _require;

function computeCanEveryoneInGuildSeeRoleSubscriptions(c0) {
  let items;
  let obj;
  let obj2;
  let tmp = items;
  if (items === undefined) {
    items = [GuildStore, ImpersonateStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guild = obj.getGuild(c0);
  if (null == guild) {
    return false;
  } else {
    const obj3 = useIsCreatorMonetizationEnabledGuild;
    const result = obj3.isCreatorMonetizationEnabledGuild(guild);
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
const GuildFeatures = Constants.GuildFeatures;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp8;
  let tmp9;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp4 = useHasRoleSubscriptionInGuildDefault(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore, ImpersonateStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function t() {
      const items = [GuildStore, ImpersonateStore];
      return computeCanEveryoneInGuildSeeRoleSubscriptions(closure_0, items);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = require("get initialized");
  let stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  const tmpResult2 = require("CreatorMonetizationRestrictionsHooks");
  let tmp11 = !tmpResult2.useShouldHideGuildPurchaseEntryPoints(arg0).shouldHideGuildPurchaseEntryPoints;
  if (tmp11) {
    if (!stateFromStores) {
      stateFromStores = tmp4;
    }
    tmp11 = stateFromStores;
  }
  return tmp11;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let items = [GuildStore, ImpersonateStore];
  const items1 = [arg0];
  const tmp = useHasRoleSubscriptionInGuildDefault(arg0);
  const obj = require("get initialized");
  let stateFromStores = obj.useStateFromStores(items, () => {
    const items = [GuildStore, ImpersonateStore];
    return computeCanEveryoneInGuildSeeRoleSubscriptions(closure_0, items);
  }, items1);
  const obj2 = require("CreatorMonetizationRestrictionsHooks");
  let tmp3 = !obj2.useShouldHideGuildPurchaseEntryPoints(arg0).shouldHideGuildPurchaseEntryPoints;
  if (tmp3) {
    if (!stateFromStores) {
      stateFromStores = tmp;
    }
    tmp3 = stateFromStores;
  }
  return tmp3;
});
let closure_7 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let tmp = closure_7(arg0);
  const obj = GuildProductsEligibility;
  const guildEligibleForGuildProducts = obj.useGuildEligibleForGuildProducts(arg0);
  if (tmp) {
    let flag = !guildEligibleForGuildProducts;
    if (guildEligibleForGuildProducts) {
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
}) : ((arg0) => {
  let tmp = closure_7(arg0);
  const obj = GuildProductsEligibility;
  const guildEligibleForGuildProducts = obj.useGuildEligibleForGuildProducts(arg0);
  if (tmp) {
    let flag = !guildEligibleForGuildProducts;
    if (guildEligibleForGuildProducts) {
      flag = true;
    }
    tmp = flag;
  }
  return tmp;
});
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx");

export const areRoleSubscriptionsVisibleInGuild = function areRoleSubscriptionsVisibleInGuild(c0, unsafeMutableRoles) {
  let hasRoleSubscriptionsInGuild = computeCanEveryoneInGuildSeeRoleSubscriptions(c0);
  if (!hasRoleSubscriptionsInGuild) {
    const obj = useHasRoleSubscriptionInGuild;
    hasRoleSubscriptionsInGuild = obj.computeHasRoleSubscriptionsInGuild(c0, unsafeMutableRoles);
  }
  return hasRoleSubscriptionsInGuild;
};
export const useRoleSubscriptionsVisibleInGuild = tmp2;
export const useShowRoleSubscriptionsInChannelList = tmp3;