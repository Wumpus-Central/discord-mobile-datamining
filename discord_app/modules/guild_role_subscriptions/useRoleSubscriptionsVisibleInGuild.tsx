// discord_app/modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx
import useIsCreatorMonetizationEnabledGuild from "../creator_monetization_eligibility/useIsCreatorMonetizationEnabledGuild.tsx";
import useHasRoleSubscriptionInGuild from "useHasRoleSubscriptionInGuild.tsx";
import GuildProductsEligibility from "../guild_products/GuildProductsEligibility.tsx";
import ImpersonateStore from "../impersonate/ImpersonateStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

const useHasRoleSubscriptionInGuildDefault = useHasRoleSubscriptionInGuild;

require = fn;
function computeCanEveryoneInGuildSeeRoleSubscriptions(id1) {
  let tmp = items;
  if (items === undefined) {
    items = [GuildStore, ImpersonateStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  guild = obj.getGuild(id1);
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
      isViewingServerShopResult = obj2.isViewingServerShop(id1);
    }
    return isViewingServerShopResult;
  }
}
const GuildFeatures = fn(1085).GuildFeatures;
let ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useRoleSubscriptionsVisibleInGuild(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      const obj = require("c");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [GuildStore, ImpersonateStore];
        cResult[0] = items;
        let first = items;
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
        let tmp9 = items1;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmp4 = useHasRoleSubscriptionInGuildDefault(arg0);
      let stateFromStores = require("initialize").useStateFromStores(first, tmp8, tmp9);
      const tmpResult = require("initialize");
      const shouldHideGuildPurchaseEntryPoints =
        require("CreatorMonetizationRestrictionsHooks").useShouldHideGuildPurchaseEntryPoints(
          arg0,
        ).shouldHideGuildPurchaseEntryPoints;
      let tmp11 = !shouldHideGuildPurchaseEntryPoints;
      if (!shouldHideGuildPurchaseEntryPoints) {
        if (!stateFromStores) {
          stateFromStores = tmp4;
        }
        tmp11 = stateFromStores;
      }
      return tmp11;
    }
  : function useRoleSubscriptionsVisibleInGuild(arg0) {
      _require = arg0;
      const tmp = useHasRoleSubscriptionInGuildDefault(arg0);
      let items = [GuildStore, ImpersonateStore];
      const items1 = [arg0];
      let stateFromStores = require("initialize").useStateFromStores(
        items,
        () => {
          const items = [GuildStore, ImpersonateStore];
          return computeCanEveryoneInGuildSeeRoleSubscriptions(closure_0, items);
        },
        items1,
      );
      const obj = require("initialize");
      const shouldHideGuildPurchaseEntryPoints =
        require("CreatorMonetizationRestrictionsHooks").useShouldHideGuildPurchaseEntryPoints(
          arg0,
        ).shouldHideGuildPurchaseEntryPoints;
      let tmp3 = !shouldHideGuildPurchaseEntryPoints;
      if (!shouldHideGuildPurchaseEntryPoints) {
        if (!stateFromStores) {
          stateFromStores = tmp;
        }
        tmp3 = stateFromStores;
      }
      return tmp3;
    };
let closure_7 = tmp2;
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/useRoleSubscriptionsVisibleInGuild.tsx");

export const areRoleSubscriptionsVisibleInGuild = function areRoleSubscriptionsVisibleInGuild(id1, unsafeMutableRoles) {
  let hasRoleSubscriptionsInGuild = computeCanEveryoneInGuildSeeRoleSubscriptions(id1);
  if (!hasRoleSubscriptionsInGuild) {
    hasRoleSubscriptionsInGuild = useHasRoleSubscriptionInGuild.computeHasRoleSubscriptionsInGuild(
      id1,
      unsafeMutableRoles,
    );
  }
  return hasRoleSubscriptionsInGuild;
};
export const useRoleSubscriptionsVisibleInGuild = tmp2;
export const useShowRoleSubscriptionsInChannelList = ReactCompilerGating.isReactCompilerEnabled()
  ? function useShowRoleSubscriptionsInChannelList(arg0) {
      let tmp = closure_7(arg0);
      const guildEligibleForGuildProducts = GuildProductsEligibility.useGuildEligibleForGuildProducts(arg0);
      if (tmp) {
        let flag = !guildEligibleForGuildProducts;
        if (guildEligibleForGuildProducts) {
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    }
  : function useShowRoleSubscriptionsInChannelList(arg0) {
      let tmp = closure_7(arg0);
      const guildEligibleForGuildProducts = GuildProductsEligibility.useGuildEligibleForGuildProducts(arg0);
      if (tmp) {
        let flag = !guildEligibleForGuildProducts;
        if (guildEligibleForGuildProducts) {
          flag = true;
        }
        tmp = flag;
      }
      return tmp;
    };
