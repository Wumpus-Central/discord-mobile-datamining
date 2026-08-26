// === Module 7074: _launchGuildBoostFlowOrAlert ===

// Module 7074 (_launchGuildBoostFlowOrAlert)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "reset" /* 4113 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

const require = arg1;
function _launchGuildBoostFlowOrAlert() {
  const self = this;
  let tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (premiumTypeSubscription === 2) {
        premiumTypeSubscription = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          premiumTypeSubscription = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              premiumTypeSubscription = 3;
              throw arg1;
            } else if (arg0 === 2) {
              premiumTypeSubscription = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c3 = tmp2;
              dependencyMap = tmp6;
              let callback;
              c1 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ source: c0, analyticsLocations: c1, guildId: c2, onBack: c3, onPaymentSuccess: c4, onPaymentDismiss: c5 } = callback);
              premiumTypeSubscription = undefined;
              let externalManagementMessage;
              c8 = undefined;
              let constants;
              let mobileBoostingEnabled;
              c5 = 1;
              premiumTypeSubscription = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp6) {
              if (arg0 === 1) {
                premiumTypeSubscription = 3;
                throw arg1;
              } else if (arg0 === 2) {
                premiumTypeSubscription = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else if (c4.hasFetchedSubscriptions()) {
                premiumTypeSubscription = c4.getPremiumTypeSubscription();
                let obj3 = callback(7075);
                externalManagementMessage = obj3.getExternalManagementMessage(premiumTypeSubscription);
                if (null != externalManagementMessage) {
                  (function alertUnableToManageSub(closure_7, c0) {
                    let obj = _null(_undefined2[4]);
                    obj = { title: null, body: null };
                    const intl = _undefined(_undefined2[5]).intl;
                    obj[0] = intl.string(_undefined(_undefined2[5]).t["8P7MX0"]);
                    obj[1] = closure_7;
                    obj.show(obj);
                    obj = { type: c6.IOS_CANNOT_MANAGE_SUBSCRIPTION, source: c0 };
                    _null(_undefined2[6]).track(constants.OPEN_MODAL, obj);
                  })(externalManagementMessage, callback);
                } else {
                  c8 = null;
                  if (null != premiumTypeSubscription) {
                    c4 = 1;
                    constants = callback(7080).getProductIdFromSubscription(premiumTypeSubscription, true);
                    const tmp65 = callback(6034).AppStorePremiumProductIdsToPremiumBundledItems[constants];
                    let interval;
                    if (tmp65 != null) {
                      interval = tmp65.interval;
                    }
                    c1 = interval;
                    if (interval == null) {
                      c1 = null;
                    }
                    c8 = c1;
                    c4 = 0;
                    const obj11 = callback(7080);
                  }
                }
                premiumTypeSubscription = 3;
              } else {
                obj1 = callback(4789);
                c5 = 2;
                premiumTypeSubscription = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = obj1.fetchSubscriptions();
                return obj2;
              }
            } else if (2 === tmp6) {
              if (arg0 === 1) {
                premiumTypeSubscription = 3;
                throw arg1;
              } else if (arg0 === 2) {
                premiumTypeSubscription = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
            } else {
              c4 = 0;
              c8 = null;
            }
            mobileBoostingEnabled = callback(7081).getMobileBoostingEnabled("GuildBoostPurchasing");
            if (mobileBoostingEnabled) {
              mobileBoostingEnabled = c8 === constants.YEAR;
            }
            const obj5 = callback(7081);
            obj3 = { showCurrentPlan: false, isBoostPurchaseFlow: true, allowYearlyBundles: null, predicate: null, analyticsLocation: null, analyticsLocations: null, guildId: null, onBack: null, onPaymentSuccess: null, onPaymentDismiss: null };
            obj3[2] = mobileBoostingEnabled;
            obj3[3] = function predicate(interval) {
              let tmp = !mobileBoostingEnabled;
              if (mobileBoostingEnabled) {
                let tmp3 = interval.interval !== constants2.YEAR;
                if (!tmp3) {
                  tmp3 = interval.numPremiumGuild > 5;
                }
                tmp = !tmp3;
              }
              if (tmp) {
                let num2 = 0;
                if (interval.premiumTier === _null2.TIER_2) {
                  num2 = closure_7;
                }
                let num3 = 0;
                const sum = interval.numPremiumGuild + num2;
                if (null != c6) {
                  const numPremiumGuildSubscriptions = _undefined(_undefined2[13]).getNumPremiumGuildSubscriptions(c6.additionalPlans);
                  const obj = _undefined(_undefined2[13]);
                  num3 = numPremiumGuildSubscriptions + _null(_undefined2[13]).getNumIncludedPremiumGuildSubscriptionSlots(c6.planId);
                  const obj2 = _null(_undefined2[13]);
                }
                tmp = sum > num3;
              }
              return tmp;
            };
            obj3[4] = callback;
            obj3[5] = c1;
            obj3[6] = dependencyMap;
            obj3[7] = c3;
            obj3[8] = c4;
            obj3[9] = c5;
            const result = callback(7082).launchPremiumPlanSelect(obj3);
            const obj6 = callback(7082);
          }
        } catch (tmp45) {
          if (tmp3 === c4) {
            premiumTypeSubscription = tmp;
            throw tmp45;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: c5, AnalyticsSections: closure_6 } = ME);
({ NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: error, PremiumTypes: closure_8, SubscriptionIntervalTypes: c9 } = GuildFeatures);
let result = require("set").fileFinishedImporting("modules/guild_boosting/native/GuildBoostPurchasingUtils.tsx");

export const launchGuildBoostFlowOrAlert = function launchGuildBoostFlowOrAlert(arg0) {
  const self = this;
  const apply = _launchGuildBoostFlowOrAlert.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};