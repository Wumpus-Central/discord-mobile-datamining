// discord_app/modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx
import util from "../../../intl/index.native.tsx";
import PremiumManagementUtils from "../../premium/native/utils/PremiumManagementUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";

require = fn;
function getMobileBoostPurchaseBlockedMessage(premiumSubscription) {
  let renewalMutations;
  if (premiumSubscription != null) {
    renewalMutations = premiumSubscription.renewalMutations;
  }
  if (null != renewalMutations) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.npfhh0);
  } else {
    let status;
    if (premiumSubscription != null) {
      status = premiumSubscription.status;
    }
    if (status === constants.BILLING_RETRY) {
      const intl = util.intl;
      stringResult = intl.string(util.t.JakNQ8);
    } else {
      stringResult = PremiumManagementUtils.getExternalManagementMessage(premiumSubscription);
    }
  }
  return stringResult;
}
let closure_12 = async function _launchGuildBoostFlowOrAlert(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_3 = tmp2;
          dependencyMap = tmp6;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          ({
            source: closure_130_0,
            analyticsLocations: closure_130_1,
            guildId: closure_130_2,
            onBack: closure_130_3,
            onPaymentSuccess: closure_130_4,
            onPaymentDismiss: closure_130_5,
          } = closure_0);
          let premiumTypeSubscription;
          closure_130_7 = undefined;
          closure_130_8 = undefined;
          let productIdFromSubscription;
          closure_130_10 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "flexDirection", done: true };
        }
      } else {
        if (1 === tmp6) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else if (closure_131_4.hasFetchedSubscriptions()) {
            premiumTypeSubscription = closure_131_4.getPremiumTypeSubscription();
            closure_130_7 = closure_131_11(premiumTypeSubscription);
            if (null != closure_130_7) {
              (function alertUnableToManageSub(body, source) {
                const obj2 = { title: null, body: null };
                const intl = closure_1_0(1113).intl;
                obj2.title = intl.string(closure_1_0(1113).t["8P7MX0"]);
                obj2.body = body;
                closure_1_1(6091).show(obj2);
                const obj = closure_1_1(6091);
                closure_1_1(1252).track(constants.OPEN_MODAL, {
                  type: closure_1_6.IOS_CANNOT_MANAGE_SUBSCRIPTION,
                  source,
                });
              })(closure_130_7, closure_130_0);
            } else {
              closure_130_8 = null;
              if (null != premiumTypeSubscription) {
                c4 = 1;
                productIdFromSubscription = closure_131_0(closure_131_2[9]).getProductIdFromSubscription(
                  premiumTypeSubscription,
                  true,
                );
                const tmp57 = closure_131_0(closure_131_2[10]).AppStorePremiumProductIdsToPremiumBundledItems[
                  productIdFromSubscription
                ];
                let interval;
                if (tmp57 != null) {
                  interval = tmp57.interval;
                }
                c1 = interval;
                if (interval == null) {
                  c1 = null;
                }
                closure_130_8 = c1;
                c4 = 0;
                const obj9 = closure_131_0(closure_131_2[9]);
              }
            }
            c6 = 3;
          } else {
            c5 = 2;
            c6 = 1;
            const obj7 = { value: closure_131_0(closure_131_2[8]).fetchSubscriptions(), done: false };
            return obj7;
          }
        } else if (2 === tmp6) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj = { value, done: true };
            return obj;
          }
        } else {
          c4 = 0;
          closure_130_8 = null;
        }
        closure_130_10 = closure_130_8 === closure_131_10.YEAR;
        const obj8 = {
          showCurrentPlan: false,
          isBoostPurchaseFlow: true,
          allowYearlyBundles: closure_130_10,
          predicate(interval) {
            let tmp = !closure_1_10;
            if (closure_1_10) {
              let tmp3 = interval.interval !== constants.YEAR;
              if (!tmp3) {
                tmp3 = interval.numPremiumGuild > 5;
              }
              tmp = !tmp3;
            }
            if (tmp) {
              let num2 = 0;
              if (interval.premiumTier === TIER_2.TIER_2) {
                num2 = closure_2_8;
              }
              let num3 = 0;
              const sum = interval.numPremiumGuild + num2;
              if (null != closure_1_6) {
                const numPremiumGuildSubscriptions = closure_0(2171).getNumPremiumGuildSubscriptions(
                  closure_1_6.additionalPlans,
                );
                const obj = closure_0(2171);
                num3 =
                  numPremiumGuildSubscriptions +
                  c1(2171).getNumIncludedPremiumGuildSubscriptionSlots(closure_1_6.planId);
                const obj2 = c1(2171);
              }
              tmp = sum > num3;
            }
            return tmp;
          },
          analyticsLocation: closure_130_0,
          analyticsLocations: closure_130_1,
          guildId: closure_130_2,
          onBack: closure_130_3,
          onPaymentSuccess: closure_130_4,
          onPaymentDismiss: closure_130_5,
        };
        const result = closure_131_0(closure_131_2[11]).launchPremiumPlanSelect(obj8);
        const obj4 = closure_131_0(closure_131_2[11]);
      }
    } catch (tmp38) {
      if (tmp3 === c4) {
        c6 = tmp;
        throw tmp38;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Constants = fn(1072);
({
  AnalyticEvents: hasOwnProperty,
  AnalyticsSections: closure_6,
  SubscriptionStatusTypes: metroImportDefault,
} = Constants);
const PremiumConstants = fn(1387);
({
  NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_8,
  PremiumTypes: closure_9,
  SubscriptionIntervalTypes: closure_10,
} = PremiumConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx");

export { getMobileBoostPurchaseBlockedMessage };
export function launchGuildBoostFlowOrAlert() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
