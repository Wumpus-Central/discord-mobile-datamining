// === Module 13494: BillingInformation ===

// Module 13494 (BillingInformation)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

const require = fn;
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/BillingInformation.tsx");

export const getBillingInformationStringNative = function getBillingInformationStringNative(subscription, subscriptionPeriodStart) {
  let tmp = first1;
  if (first1 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = false;
  }
  _require = undefined;
  let billingInformationString = require("PremiumUtils").getBillingInformationString(subscription, subscriptionPeriodStart, tmp, flag, fractionalPremiumInfo);
  let obj = require("PremiumUtils");
  let tmp5 = require("utils/PlatformUtils").isIOS() && subscription.isPurchasedViaApple;
  if (tmp5) {
    tmp5 = subscription.status === SubscriptionStatusTypes.ACTIVE;
  }
  if (tmp5) {
    const intl = tmp2(1115).intl;
    let obj3 = { renewalDate: subscriptionPeriodStart.subscriptionPeriodStart, onSubscriptionManagementClick: null };
    _require = asyncGeneratorStep(async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c1 = 1;
              v3 = 1;
              const obj5 = { value: v3(c1[5]).manageSubscription(), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp7) {
          v3 = tmp;
          throw tmp7;
        }
      }
    });
    obj3.onSubscriptionManagementClick = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    billingInformationString = intl.format(tmp2(1115).t.gknRR3, obj3);
  }
  return billingInformationString;
};