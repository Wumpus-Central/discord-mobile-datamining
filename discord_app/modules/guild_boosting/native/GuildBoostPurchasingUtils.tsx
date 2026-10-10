// === Module 7119: GuildBoostPurchasingUtils ===

// Module 7119 (GuildBoostPurchasingUtils)
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5300 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SubscriptionStore from "SubscriptionStore" /* 4775 */;

require = fn;
function alertUnableToManageSub(body, source) {
  const obj2 = { title: null, body: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["8P7MX0"]);
  obj2.body = body;
  actions_AlertActionCreatorsDefault.show(obj2);
  AnalyticsUtilsDefault.track(constants.OPEN_MODAL, { type: constants2.IOS_CANNOT_MANAGE_SUBSCRIPTION, source });
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
      return { value: "IconComponent", done: "+51" };
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
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_3 = tmp2;
          dependencyMap = tmp6;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          ({ source: closure_130_0, analyticsLocations: closure_130_1, guildId: closure_130_2, onBack: closure_130_3, onPaymentSuccess: closure_130_4, onPaymentDismiss: closure_130_5 } = closure_0);
          let premiumTypeSubscription;
          let externalManagementMessage;
          closure_130_8 = undefined;
          let productIdFromSubscription;
          closure_130_10 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Set", done: true };
        }
      } else {
        if (1 === tmp6) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else if (closure_131_4.hasFetchedSubscriptions()) {
            premiumTypeSubscription = closure_131_4.getPremiumTypeSubscription();
            let renewalMutations;
            if (premiumTypeSubscription != null) {
              renewalMutations = premiumTypeSubscription.renewalMutations;
            }
            if (null == renewalMutations) {
              let status;
              if (premiumTypeSubscription != null) {
                status = premiumTypeSubscription.status;
              }
              if (status !== closure_131_7.BILLING_RETRY) {
                externalManagementMessage = closure_131_0(closure_131_2[8]).getExternalManagementMessage(premiumTypeSubscription);
                if (null != externalManagementMessage) {
                  closure_131_11(externalManagementMessage, closure_130_0);
                } else {
                  closure_130_8 = null;
                  if (null != premiumTypeSubscription) {
                    c4 = 1;
                    productIdFromSubscription = closure_131_0(closure_131_2[9]).getProductIdFromSubscription(premiumTypeSubscription, true);
                    const tmp91 = closure_131_0(closure_131_2[10]).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
                    let interval;
                    if (tmp91 != null) {
                      interval = tmp91.interval;
                    }
                    c1 = interval;
                    if (interval == null) {
                      c1 = null;
                    }
                    closure_130_8 = c1;
                    c4 = 0;
                    const obj11 = closure_131_0(closure_131_2[9]);
                  }
                }
                const obj4 = closure_131_0(closure_131_2[8]);
              } else {
                const intl2 = closure_131_0(closure_131_2[5]).intl;
                closure_131_11(intl2.string(closure_131_0(closure_131_2[5]).t.JakNQ8), closure_130_0);
              }
            } else {
              const intl = closure_131_0(closure_131_2[5]).intl;
              closure_131_11(intl.string(closure_131_0(closure_131_2[5]).t.npfhh0), closure_130_0);
            }
            c6 = 3;
          } else {
            c5 = 2;
            c6 = 1;
            const obj9 = { value: closure_131_0(closure_131_2[7]).fetchSubscriptions(), done: false };
            return obj9;
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
        let mobileBoostingEnabled = closure_131_0(closure_131_2[11]).getMobileBoostingEnabled("GuildBoostPurchasing");
        if (mobileBoostingEnabled) {
          mobileBoostingEnabled = closure_130_8 === closure_131_10.YEAR;
        }
        closure_130_10 = mobileBoostingEnabled;
        const obj5 = closure_131_0(closure_131_2[11]);
        const obj10 = {
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
                      const numPremiumGuildSubscriptions = closure_0(4769).getNumPremiumGuildSubscriptions(closure_1_6.additionalPlans);
                      const obj = closure_0(4769);
                      num3 = numPremiumGuildSubscriptions + c1(4769).getNumIncludedPremiumGuildSubscriptionSlots(closure_1_6.planId);
                      const obj2 = c1(4769);
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
          onPaymentDismiss: closure_130_5
        };
        const result = closure_131_0(closure_131_2[12]).launchPremiumPlanSelect(obj10);
        const obj6 = closure_131_0(closure_131_2[12]);
      }
    } catch (tmp72) {
      if (tmp3 === c4) {
        c6 = tmp;
        throw tmp72;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Constants = fn(1085);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire, SubscriptionStatusTypes: closure_7 } = Constants);
const PremiumConstants = fn(1392);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_8, PremiumTypes: closure_9, SubscriptionIntervalTypes: c10 } = PremiumConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx");

export const launchGuildBoostFlowOrAlert = function launchGuildBoostFlowOrAlert() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};