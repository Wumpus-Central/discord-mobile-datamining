// discord_app/modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";
import Constants from "../../../Constants.tsx";
import PremiumConstants from "../../premium/PremiumConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let analyticsLocation, c6;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _launchGuildBoostFlowOrAlert() {
  obj = _asyncToGenerator(async (analyticsLocation) => {
    let TIER_2;
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let onPaymentDismiss;
    let tmp;
    let tmp3;
    function alertUnableToManageSub(body, c0) {
      let intl;
      obj = { title: intl.string(analyticsLocation(guildId[5]).t["8P7MX0"]), body };
      const show = analyticsLocations(guildId[4]).show;
      analyticsLocations(guildId[4]);
      intl = analyticsLocation(guildId[5]).intl;
      show(obj);
      const obj2 = analyticsLocations(guildId[6]);
      const obj3 = { type: closure_1_6.IOS_CANNOT_MANAGE_SUBSCRIPTION, source };
      obj2.track(constants.OPEN_MODAL, obj3);
    }
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (analyticsLocation === 1) {
        throw value;
      } else if (analyticsLocation === 2) {
        let obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let onPaymentSuccess;
      try {
        let analyticsLocations;
        let guildId;
        let onBack;
        let premiumTypeSubscription;
        let externalManagementMessage;
        let c8;
        let productIdFromSubscription;
        let mobileBoostingEnabled;
        c6 = 2;
        if (0 === onPaymentDismiss) {
          if (analyticsLocation === 1) {
            c6 = 3;
            throw value;
          } else if (analyticsLocation === 2) {
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            analyticsLocation = undefined;
            analyticsLocations = undefined;
            guildId = undefined;
            onBack = undefined;
            onPaymentSuccess = undefined;
            ({
              source: c0,
              analyticsLocations: c1,
              guildId: c2,
              onBack: c3,
              onPaymentSuccess: c4,
              onPaymentDismiss: c5,
            } = source);
            premiumTypeSubscription = undefined;
            externalManagementMessage = undefined;
            c8 = undefined;
            productIdFromSubscription = undefined;
            mobileBoostingEnabled = undefined;
            onPaymentDismiss = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else {
          if (1 === onPaymentDismiss) {
            if (analyticsLocation === 1) {
              c6 = 3;
              throw value;
            } else if (analyticsLocation === 2) {
              c6 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else if (closure_131_4.hasFetchedSubscriptions()) {
              premiumTypeSubscription = closure_131_4.getPremiumTypeSubscription();
              const obj4 = closure_131_0(closure_131_2[8]);
              externalManagementMessage = obj4.getExternalManagementMessage(premiumTypeSubscription);
              if (null != externalManagementMessage) {
                alertUnableToManageSub(externalManagementMessage, analyticsLocation);
              } else {
                c8 = null;
                if (null != premiumTypeSubscription) {
                  onPaymentSuccess = 1;
                  const obj11 = closure_131_0(closure_131_2[9]);
                  productIdFromSubscription = obj11.getProductIdFromSubscription(premiumTypeSubscription, true);
                  const tmp61 = closure_131_0(closure_131_2[10]).AppStorePremiumProductIdsToPremiumBundledItems[
                    productIdFromSubscription
                  ];
                  let interval;
                  if (tmp61 != null) {
                    interval = tmp61.interval;
                  }
                  analyticsLocations = interval;
                  if (interval == null) {
                    analyticsLocations = null;
                  }
                  c8 = analyticsLocations;
                  onPaymentSuccess = 0;
                }
              }
              c6 = 3;
              return { value: "IconComponent", done: null };
            } else {
              let obj2 = closure_131_0(closure_131_2[7]);
              onPaymentDismiss = 2;
              let num3 = 1;
              c6 = 1;
              const obj9 = { value: obj2.fetchSubscriptions(), done: false };
              return obj9;
            }
          } else if (2 === onPaymentDismiss) {
            if (analyticsLocation === 1) {
              let num2 = 3;
              c6 = 3;
              throw value;
            } else if (analyticsLocation === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            }
          } else {
            onPaymentSuccess = 0;
            c8 = null;
          }
          const obj5 = closure_131_0(closure_131_2[11]);
          mobileBoostingEnabled = obj5.getMobileBoostingEnabled("GuildBoostPurchasing") && c8 === closure_131_9.YEAR;
          const obj10 = {
            showCurrentPlan: false,
            isBoostPurchaseFlow: true,
            allowYearlyBundles: mobileBoostingEnabled,
            predicate(interval) {
              let tmp = !closure_1_10;
              if (closure_1_10) {
                tmp = !(interval.interval !== constants.YEAR || interval.numPremiumGuild > 5);
                const tmp3 = interval.interval !== constants.YEAR || interval.numPremiumGuild > 5;
              }
              if (tmp) {
                let num2 = 0;
                const numPremiumGuild = interval.numPremiumGuild;
                if (interval.premiumTier === TIER_2.TIER_2) {
                  num2 = closure_2_7;
                }
                let num3 = 0;
                const sum = numPremiumGuild + num2;
                if (null != closure_1_6) {
                  obj = analyticsLocation(guildId[13]);
                  const numPremiumGuildSubscriptions = obj.getNumPremiumGuildSubscriptions(closure_1_6.additionalPlans);
                  const obj2 = c1(guildId[13]);
                  num3 =
                    numPremiumGuildSubscriptions + obj2.getNumIncludedPremiumGuildSubscriptionSlots(closure_1_6.planId);
                }
                tmp = sum > num3;
              }
              return tmp;
            },
            analyticsLocation,
            analyticsLocations,
            guildId,
            onBack,
            onPaymentSuccess,
            onPaymentDismiss,
          };
          const obj6 = closure_131_0(closure_131_2[12]);
          const result = obj6.launchPremiumPlanSelect(obj10);
        }
      } catch (tmp43) {
        if (0 === onPaymentSuccess) {
          c6 = 3;
          throw tmp43;
        } else {
          onPaymentDismiss = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
({
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: metroImportDefault,
  PremiumTypes: metroImportAll,
  SubscriptionIntervalTypes: c9,
} = PremiumConstants);
let result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx");

export const launchGuildBoostFlowOrAlert = function launchGuildBoostFlowOrAlert() {
  return obj(...arguments);
};
