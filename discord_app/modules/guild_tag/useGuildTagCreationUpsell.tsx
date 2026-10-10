// discord_app/modules/guild_tag/useGuildTagCreationUpsell.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import PremiumTypeUtils from "../../utils/PremiumTypeUtils.tsx";
import actions_BillingActionCreators from "../billing/actions/BillingActionCreators.tsx";
import ServerTagUpsellOnProfileExperiment from "experiments/ServerTagUpsellOnProfileExperiment.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import BillingInfoStore from "../../stores/billing/BillingInfoStore.tsx";
import SubscriptionStore from "../../stores/billing/SubscriptionStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_tag/useGuildTagCreationUpsell.tsx");

export const useGuildTagCreationUpsell = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildTagCreationUpsell(arg0) {
      const cResult = c.c(11);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, PermissionStore];
        const fn = function h() {
          guildsArray = guildsArray.getGuildsArray();
          return _modDef12.sortBy(
            guildsArray.filter((item) => {
              const guildSupportsTagsResult = closure_1_0(dependencyMap[9]).guildSupportsTags(item);
              let tmp4 = !guildSupportsTagsResult;
              if (!guildSupportsTagsResult) {
                tmp4 = true === closure_1_0(dependencyMap[10]).getHasAllocateBoostPermission(closure_1_5, item);
                const tmpResult = closure_1_0(dependencyMap[10]);
              }
              return tmp4;
            }),
            (name) => name.name.toLowerCase(),
          );
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStoresArray = initialize.useStateFromStoresArray(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore, SubscriptionStore];
        const fn2 = function f() {
          const isPremiumResult = PremiumTypeUtils.isPremium(authStore.getCurrentUser());
          let tmp2 = !isPremiumResult;
          if (isPremiumResult) {
            let result = SubscriptionStore.hasFetchedSubscriptions();
            if (result) {
              const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
              result =
                null == premiumTypeSubscription || premiumTypeSubscription.isOnPlatformMatchingExternalPaymentGateway;
              const tmp6 =
                null == premiumTypeSubscription || premiumTypeSubscription.isOnPlatformMatchingExternalPaymentGateway;
            }
            tmp2 = result;
          }
          return tmp2;
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp9 = fn2;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      let tmpResult = initialize;
      let stateFromStores = initialize.useStateFromStores(tmp8, tmp9);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function y() {
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
            subscriptions.catch(() => {});
            const tmpResult = actions_BillingActionCreators;
          }
        };
        const items2 = [];
        cResult[4] = fn3;
        cResult[5] = items2;
        let tmp14 = items2;
        let tmp13 = fn3;
      } else {
        tmp13 = cResult[4];
        tmp14 = cResult[5];
      }
      const effect = noop.useEffect(tmp13, tmp14);
      if (stateFromStoresArray.length <= 0) {
        const _HermesInternal = HermesInternal;
        let combined = "" + arg0 + "-Disabled";
      } else {
        combined = arg0;
      }
      if (cResult[6] !== combined) {
        const obj2 = { location: combined };
        cResult[6] = combined;
        cResult[7] = obj2;
        let tmp18 = obj2;
      } else {
        tmp18 = cResult[7];
      }
      const tmpResult3 = initialize;
      const serverTagUpsellOnProfileConfig =
        ServerTagUpsellOnProfileExperiment.useServerTagUpsellOnProfileConfig(tmp18);
      ({ enabled, ignoreSubscriptionPlatform } = serverTagUpsellOnProfileConfig);
      if (enabled) {
        enabled = tmp16;
      }
      if (enabled) {
        if (!stateFromStores) {
          stateFromStores = ignoreSubscriptionPlatform;
        }
        enabled = stateFromStores;
      }
      if (cResult[8] === stateFromStoresArray) {
        if (cResult[9] === enabled) {
          let tmp20 = cResult[10];
        }
        return tmp20;
      }
      const obj3 = { creatableGuilds: stateFromStoresArray, isUpsellVisible: enabled };
      cResult[8] = stateFromStoresArray;
      cResult[9] = enabled;
      cResult[10] = obj3;
      tmp20 = obj3;
      const tmpResult4 = ServerTagUpsellOnProfileExperiment;
    }
  : function useGuildTagCreationUpsell(arg0) {
      const items = [GuildStore, PermissionStore];
      const stateFromStoresArray = initialize.useStateFromStoresArray(items, () => {
        guildsArray = guildsArray.getGuildsArray();
        return _modDef12.sortBy(
          guildsArray.filter((item) => {
            const guildSupportsTagsResult = closure_1_0(dependencyMap[9]).guildSupportsTags(item);
            let tmp4 = !guildSupportsTagsResult;
            if (!guildSupportsTagsResult) {
              tmp4 = true === closure_1_0(dependencyMap[10]).getHasAllocateBoostPermission(closure_1_5, item);
              const tmpResult = closure_1_0(dependencyMap[10]);
            }
            return tmp4;
          }),
          (name) => name.name.toLowerCase(),
        );
      });
      const items1 = [UserStore, SubscriptionStore];
      let ignoreSubscriptionPlatform = initialize.useStateFromStores(items1, () => {
        const isPremiumResult = PremiumTypeUtils.isPremium(authStore.getCurrentUser());
        let tmp2 = !isPremiumResult;
        if (isPremiumResult) {
          let result = SubscriptionStore.hasFetchedSubscriptions();
          if (result) {
            const premiumTypeSubscription = SubscriptionStore.getPremiumTypeSubscription();
            result =
              null == premiumTypeSubscription || premiumTypeSubscription.isOnPlatformMatchingExternalPaymentGateway;
            const tmp6 =
              null == premiumTypeSubscription || premiumTypeSubscription.isOnPlatformMatchingExternalPaymentGateway;
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
          subscriptions.catch(() => {});
          const tmpResult = actions_BillingActionCreators;
        }
      }, []);
      if (stateFromStoresArray.length <= 0) {
        const _HermesInternal = HermesInternal;
        let combined = "" + arg0 + "-Disabled";
      } else {
        combined = arg0;
      }
      const serverTagUpsellOnProfileConfig = ServerTagUpsellOnProfileExperiment.useServerTagUpsellOnProfileConfig({
        location: combined,
      });
      let enabled = serverTagUpsellOnProfileConfig.enabled;
      const obj4 = { creatableGuilds: stateFromStoresArray, isUpsellVisible: null };
      if (enabled) {
        enabled = tmp2;
      }
      if (enabled) {
        if (!ignoreSubscriptionPlatform) {
          ignoreSubscriptionPlatform = serverTagUpsellOnProfileConfig.ignoreSubscriptionPlatform;
        }
        enabled = ignoreSubscriptionPlatform;
      }
      obj4.isUpsellVisible = enabled;
      return obj4;
    };
