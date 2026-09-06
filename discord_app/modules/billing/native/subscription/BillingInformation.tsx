// discord_app/modules/billing/native/subscription/BillingInformation.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/BillingInformation.tsx");

export const getBillingInformationStringNative = function getBillingInformationStringNative(
  subscription,
  subscriptionPeriodStart,
  first1,
  flag,
  fractionalPremiumInfo,
) {
  let tmp = first1;
  if (first1 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = false;
  }
  _require = undefined;
  let obj = require("PremiumUtils");
  let billingInformationString = obj.getBillingInformationString(
    subscription,
    subscriptionPeriodStart,
    tmp,
    flag,
    fractionalPremiumInfo,
  );
  let tmp5 = require("utils/PlatformUtils").isIOS() && subscription.isPurchasedViaApple;
  if (tmp5) {
    tmp5 = subscription.status === SubscriptionStatusTypes.ACTIVE;
  }
  if (tmp5) {
    const intl = tmp2(1114).intl;
    obj = { renewalDate: subscriptionPeriodStart.subscriptionPeriodStart, onSubscriptionManagementClick: null };
    _require = asyncGeneratorStep(async (arg0, value) => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let obj1 = v3(c1[5]);
              c1 = 1;
              v3 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.manageSubscription();
              return obj1;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
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
    obj.onSubscriptionManagementClick = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    billingInformationString = intl.format(tmp2(1114).t.gknRR3, obj);
  }
  return billingInformationString;
};
