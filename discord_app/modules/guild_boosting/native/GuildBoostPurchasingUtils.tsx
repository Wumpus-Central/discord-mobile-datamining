// === Module 7403: GuildBoostPurchasingUtils ===

// Module 7403 (GuildBoostPurchasingUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;

const require = fn;
let closure_10 = async function _launchGuildBoostFlowOrAlert(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
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
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp6) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else if (closure_131_4.hasFetchedSubscriptions()) {
            premiumTypeSubscription = closure_131_4.getPremiumTypeSubscription();
            let obj3 = closure_131_0(closure_131_2[8]);
            externalManagementMessage = obj3.getExternalManagementMessage(premiumTypeSubscription);
            if (null != externalManagementMessage) {
              (function alertUnableToManageSub(body, source) {
                closure_1_1(4905);
                let obj = { title: null, body: null };
                const intl = closure_1_0(1114).intl;
                obj.title = intl.string(closure_1_0(1114).t["8P7MX0"]);
                obj.body = body;
                obj.show(obj);
                obj = { type: closure_1_6.IOS_CANNOT_MANAGE_SUBSCRIPTION, source };
                closure_1_1(1242).track(constants.OPEN_MODAL, obj);
              })(externalManagementMessage, closure_130_0);
            } else {
              closure_130_8 = null;
              if (null != premiumTypeSubscription) {
                c4 = 1;
                productIdFromSubscription = closure_131_0(closure_131_2[9]).getProductIdFromSubscription(premiumTypeSubscription, true);
                const tmp64 = closure_131_0(closure_131_2[10]).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
                let interval;
                if (tmp64 != null) {
                  interval = tmp64.interval;
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
            c6 = 3;
          } else {
            obj1 = closure_131_0(closure_131_2[7]);
            c5 = 2;
            c6 = 1;
            let obj2 = { value: obj1.fetchSubscriptions(), done: false };
            return obj2;
          }
        } else if (2 === tmp6) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          }
        } else {
          c4 = 0;
          closure_130_8 = null;
        }
        let mobileBoostingEnabled = closure_131_0(closure_131_2[11]).getMobileBoostingEnabled("GuildBoostPurchasing");
        if (mobileBoostingEnabled) {
          mobileBoostingEnabled = closure_130_8 === closure_131_9.YEAR;
        }
        closure_130_10 = mobileBoostingEnabled;
        const obj5 = closure_131_0(closure_131_2[11]);
        obj3 = {
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
                      num2 = closure_2_7;
                    }
                    let num3 = 0;
                    const sum = interval.numPremiumGuild + num2;
                    if (null != closure_1_6) {
                      const numPremiumGuildSubscriptions = closure_0(4218).getNumPremiumGuildSubscriptions(closure_1_6.additionalPlans);
                      const obj = closure_0(4218);
                      num3 = numPremiumGuildSubscriptions + c1(4218).getNumIncludedPremiumGuildSubscriptionSlots(closure_1_6.planId);
                      const obj2 = c1(4218);
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
        const result = closure_131_0(closure_131_2[12]).launchPremiumPlanSelect(obj3);
        const obj6 = closure_131_0(closure_131_2[12]);
      }
    } catch (tmp45) {
      if (tmp3 === c4) {
        c6 = tmp;
        throw tmp45;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, AnalyticsSections: metroRequire } = Constants);
const PremiumConstants = fn(1373);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_7, PremiumTypes: closure_8, SubscriptionIntervalTypes: closure_9 } = PremiumConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx");

export const launchGuildBoostFlowOrAlert = function launchGuildBoostFlowOrAlert() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};