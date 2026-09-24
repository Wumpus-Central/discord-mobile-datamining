// discord_app/modules/billing/native/subscription/BillingInformation.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = globalThis.__r;

const require = fn;
const SubscriptionStatusTypes = fn(1074).SubscriptionStatusTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/BillingInformation.tsx");

export const useBillingInformationNative = function useBillingInformationNative(
  subscription,
  subscriptionPeriodStart,
  arg2,
) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  if (flag === undefined) {
    flag = false;
  }
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  const fractionalPremiumInfo = obj.fractionalPremiumInfo;
  _require = undefined;
  const appleSubscriptionOwnership = require("useAppleSubscriptionOwnership").useAppleSubscriptionOwnership(
    subscription,
  );
  if (null == subscriptionPeriodStart) {
    return null;
  } else {
    const tmp2Result = tmp2(4483);
    const billingInformationString = tmp2Result.getBillingInformationString(
      subscription,
      subscriptionPeriodStart,
      tmp,
      flag,
      fractionalPremiumInfo,
    );
    let formatResult = billingInformationString;
    if (tmp2Result2.isIOS()) {
      formatResult = billingInformationString;
      if (subscription.isPurchasedViaApple) {
        formatResult = billingInformationString;
        if (subscription.status === SubscriptionStatusTypes.ACTIVE) {
          formatResult = billingInformationString;
          if (!appleSubscriptionOwnership.isMismatch()) {
            const intl = tmp2(1115).intl;
            let obj3 = {
              renewalDate: subscriptionPeriodStart.subscriptionPeriodStart,
              onSubscriptionManagementClick: null,
            };
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
                      const obj5 = { value: v3(c1[6]).manageSubscription(), done: false };
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
            obj3.onSubscriptionManagementClick = function () {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            };
            formatResult = intl.format(tmp2(1115).t.gknRR3, obj3);
          }
        }
      }
    }
    return formatResult;
  }
  const obj2 = require("useAppleSubscriptionOwnership");
};
