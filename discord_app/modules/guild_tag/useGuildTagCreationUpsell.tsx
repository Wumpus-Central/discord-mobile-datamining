// === Module 14108: useGuildTagCreationUpsell ===

// Module 14108 (useGuildTagCreationUpsell)
import _modDef12 from "module_12" /* 12 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1991 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 6449 */;
import ServerTagUpsellOnProfileExperimentDefault from "ServerTagUpsellOnProfileExperiment" /* 14109 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4843 */;
import PermissionStore from "PermissionStore" /* 4901 */;
import UserStore from "UserStore" /* 1392 */;
import BillingInfoStore from "BillingInfoStore" /* 2054 */;
import SubscriptionStore from "SubscriptionStore" /* 2058 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_tag/useGuildTagCreationUpsell.tsx");

export const useGuildTagCreationUpsell = ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildTagCreationUpsell(arg0, arg1) {
  let obj = arg1;
  const cResult = c.c(11);
  if (undefined === arg1) {
    obj = ServerTagUpsellOnProfileExperimentDefault;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, PermissionStore];
    const fn = function b() {
      guildsArray = guildsArray.getGuildsArray();
      return _modDef12.sortBy(guildsArray.filter((item) => {
        const guildSupportsTagsResult = closure_1_0(dependencyMap[10]).guildSupportsTags(item);
        let tmp4 = !guildSupportsTagsResult;
        if (!guildSupportsTagsResult) {
          tmp4 = true === closure_1_0(dependencyMap[11]).getHasAllocateBoostPermission(closure_1_5, item);
          const tmpResult = closure_1_0(dependencyMap[11]);
        }
        return tmp4;
      }), (name) => name.name.toLowerCase());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStoresArray = initialize.useStateFromStoresArray(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore, SubscriptionStore];
    const fn2 = function y() {
      const isPremiumResult = PremiumTypeUtils.isPremium(authStore.getCurrentUser());
      let tmp2 = !isPremiumResult;
      if (isPremiumResult) {
        let result = SubscriptionStore.hasFetchedSubscriptions();
        if (result) {
          const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
          result = null == premiumTypeSubscription || premiumTypeSubscription.isOnPlatformMatchingExternalPaymentGateway;
          const tmp6 = null == premiumTypeSubscription || premiumTypeSubscription.isOnPlatformMatchingExternalPaymentGateway;
        }
        tmp2 = result;
      }
      return tmp2;
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp10 = fn2;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  let tmpResult = initialize;
  let stateFromStores = initialize.useStateFromStores(tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function v() {
      const isPremiumResult = PremiumTypeUtils.isPremium(authStore.getCurrentUser());
      let isSubscriptionFetching = !isPremiumResult;
      if (isPremiumResult) {
        isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions();
      }
      if (!isSubscriptionFetching) {
        isSubscriptionFetching = BillingInfoStore.isSubscriptionFetching;
      }
      if (!isSubscriptionFetching) {
        const subscriptions = actions_BillingActionCreators.fetchSubscriptions();
        subscriptions.catch(() => {

        });
        const tmpResult = actions_BillingActionCreators;
      }
    };
    const items2 = [];
    cResult[4] = fn3;
    cResult[5] = items2;
    let tmp15 = items2;
    let tmp14 = fn3;
  } else {
    tmp14 = cResult[4];
    tmp15 = cResult[5];
  }
  const effect = noop.useEffect(tmp14, tmp15);
  if (stateFromStoresArray.length <= 0) {
    const _HermesInternal = HermesInternal;
    let combined = "" + arg0 + "-Disabled";
  } else {
    combined = arg0;
  }
  if (cResult[6] !== combined) {
    const obj3 = { location: combined };
    cResult[6] = combined;
    cResult[7] = obj3;
    let tmp19 = obj3;
  } else {
    tmp19 = cResult[7];
  }
  const config = obj.useConfig(tmp19);
  ({ enabled, ignoreSubscriptionPlatform } = config);
  if (enabled) {
    enabled = tmp17;
  }
  if (enabled) {
    if (!stateFromStores) {
      stateFromStores = ignoreSubscriptionPlatform;
    }
    enabled = stateFromStores;
  }
  if (cResult[8] === stateFromStoresArray) {
    if (cResult[9] === enabled) {
      let tmp21 = cResult[10];
    }
    return tmp21;
  }
  const obj4 = { creatableGuilds: stateFromStoresArray, isUpsellVisible: enabled };
  cResult[8] = stateFromStoresArray;
  cResult[9] = enabled;
  cResult[10] = obj4;
  tmp21 = obj4;
  const tmpResult2 = initialize;
}) : (function useGuildTagCreationUpsell(arg0) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = ServerTagUpsellOnProfileExperimentDefault;
  }
  const items = [GuildStore, PermissionStore];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => {
    guildsArray = guildsArray.getGuildsArray();
    return _modDef12.sortBy(guildsArray.filter((item) => {
      const guildSupportsTagsResult = closure_1_0(dependencyMap[10]).guildSupportsTags(item);
      let tmp4 = !guildSupportsTagsResult;
      if (!guildSupportsTagsResult) {
        tmp4 = true === closure_1_0(dependencyMap[11]).getHasAllocateBoostPermission(closure_1_5, item);
        const tmpResult = closure_1_0(dependencyMap[11]);
      }
      return tmp4;
    }), (name) => name.name.toLowerCase());
  });
  const items1 = [UserStore, SubscriptionStore];
  let ignoreSubscriptionPlatform = initialize.useStateFromStores(items1, () => {
    const isPremiumResult = PremiumTypeUtils.isPremium(authStore.getCurrentUser());
    let tmp2 = !isPremiumResult;
    if (isPremiumResult) {
      let result = SubscriptionStore.hasFetchedSubscriptions();
      if (result) {
        const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
        result = null == premiumTypeSubscription || premiumTypeSubscription.isOnPlatformMatchingExternalPaymentGateway;
        const tmp6 = null == premiumTypeSubscription || premiumTypeSubscription.isOnPlatformMatchingExternalPaymentGateway;
      }
      tmp2 = result;
    }
    return tmp2;
  });
  const effect = noop.useEffect(() => {
    const isPremiumResult = PremiumTypeUtils.isPremium(authStore.getCurrentUser());
    let isSubscriptionFetching = !isPremiumResult;
    if (isPremiumResult) {
      isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions();
    }
    if (!isSubscriptionFetching) {
      isSubscriptionFetching = BillingInfoStore.isSubscriptionFetching;
    }
    if (!isSubscriptionFetching) {
      const subscriptions = actions_BillingActionCreators.fetchSubscriptions();
      subscriptions.catch(() => {

      });
      const tmpResult = actions_BillingActionCreators;
    }
  }, []);
  if (stateFromStoresArray.length <= 0) {
    const _HermesInternal = HermesInternal;
    let combined = "" + arg0 + "-Disabled";
  } else {
    combined = arg0;
  }
  const config = obj.useConfig({ location: combined });
  let enabled = config.enabled;
  const obj4 = { creatableGuilds: stateFromStoresArray, isUpsellVisible: null };
  if (enabled) {
    enabled = tmp4;
  }
  if (enabled) {
    if (!ignoreSubscriptionPlatform) {
      ignoreSubscriptionPlatform = config.ignoreSubscriptionPlatform;
    }
    enabled = ignoreSubscriptionPlatform;
  }
  obj4.isUpsellVisible = enabled;
  return obj4;
});