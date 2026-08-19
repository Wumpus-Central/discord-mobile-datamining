// === Module 7921: getBillingInformationStringNative ===

// Module 7921 (getBillingInformationStringNative)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { SubscriptionStatusTypes } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/billing/native/subscription/BillingInformation.tsx");

export const getBillingInformationStringNative = function getBillingInformationStringNative(subscription, subscriptionPeriodStart, first1, flag, fractionalPremiumInfo) {
  let tmp = first1;
  if (first1 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = false;
  }
  let _require;
  let obj = _require(4039);
  let billingInformationString = obj.getBillingInformationString(subscription, subscriptionPeriodStart, tmp, flag, fractionalPremiumInfo);
  let tmp5 = _require(501).isIOS() && subscription.isPurchasedViaApple;
  if (tmp5) {
    tmp5 = subscription.status === SubscriptionStatusTypes.ACTIVE;
  }
  if (tmp5) {
    const intl = tmp2(1236).intl;
    obj = { renewalDate: null, onSubscriptionManagementClick: null };
    obj[0] = subscriptionPeriodStart.subscriptionPeriodStart;
    _require = callback(function*() {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          v0 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = v0(table[5]);
              table = 1;
              v0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.manageSubscription();
              return obj1;
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp7) {
          v0 = tmp;
          throw tmp7;
        }
      }
    });
    obj[1] = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    billingInformationString = intl.format(tmp2(1236).t.gknRR3, obj);
  }
  return billingInformationString;
};