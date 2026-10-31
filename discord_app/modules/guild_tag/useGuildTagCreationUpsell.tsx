// === Module 14727: useGuildTagCreationUpsell ===

// Module 14727 (useGuildTagCreationUpsell)
import _modDef12 from "module_12" /* 12 */;
import initialize from "initialize" /* 504 */;
import PremiumTypeUtils from "PremiumTypeUtils" /* 1983 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 6535 */;
import ServerTagUpsellOnProfileExperimentDefault from "ServerTagUpsellOnProfileExperiment" /* 14728 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import UserStore from "UserStore" /* 1383 */;
import BillingInfoStore from "BillingInfoStore" /* 2048 */;
import SubscriptionStore from "SubscriptionStore" /* 2052 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_tag/useGuildTagCreationUpsell.tsx");

export function useGuildTagCreationUpsell(GuildProfileCreateTagUpsell, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = ServerTagUpsellOnProfileExperimentDefault;
  }
  const items = [GuildStore, PermissionStore];
  const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => {
    guildsArray = guildsArray.getGuildsArray();
    return _modDef12.sortBy(guildsArray.filter((item) => {
      const guildSupportsTagsResult = closure_1_0(dependencyMap[9]).guildSupportsTags(item);
      let tmp4 = !guildSupportsTagsResult;
      if (!guildSupportsTagsResult) {
        tmp4 = true === closure_1_0(dependencyMap[10]).getHasAllocateBoostPermission(closure_1_5, item);
        const tmpResult = closure_1_0(dependencyMap[10]);
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
    let combined = "" + GuildProfileCreateTagUpsell + "-Disabled";
  } else {
    combined = GuildProfileCreateTagUpsell;
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
}