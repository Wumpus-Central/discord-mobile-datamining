// === Module 13198: BillingInformation ===

// Module 13198 (BillingInformation)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1;

const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((isPurchasedViaApple, subscriptionPeriodStart, arg2, arg3, arg4) => {
  let closure_0;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(11);
  let tmp4 = null;
  if (undefined !== arg2) {
    tmp4 = arg2;
  }
  if (cResult[0] !== arg4) {
    let obj2 = arg4;
    if (undefined === arg4) {
      obj2 = {};
    }
    cResult[0] = arg4;
    cResult[1] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[1];
  }
  const fractionalPremiumInfo = tmp6.fractionalPremiumInfo;
  const tmpResult = require("useAppleSubscriptionOwnership");
  const appleSubscriptionOwnership = tmpResult.useAppleSubscriptionOwnership(isPurchasedViaApple);
  if (null == subscriptionPeriodStart) {
    return null;
  } else {
    if (cResult[2] === fractionalPremiumInfo) {
      if (cResult[3] === tmp4) {
        if (cResult[4] === (undefined !== arg3 && arg3)) {
          if (cResult[5] === subscriptionPeriodStart) {
            let tmp7;
            if (cResult[6] === isPurchasedViaApple) {
              tmp7 = cResult[7];
            }
            const tmpResult3 = require("utils/PlatformUtils");
            if (tmpResult3.isIOS()) {
              if (isPurchasedViaApple.isPurchasedViaApple) {
                if (isPurchasedViaApple.status === SubscriptionStatusTypes.ACTIVE) {
                  if (!appleSubscriptionOwnership.isMismatch()) {
                    let tmp16;
                    if (cResult[8] !== subscriptionPeriodStart.subscriptionPeriodStart) {
                      let tmp18;
                      const _Symbol = Symbol;
                      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                        _require = _asyncToGenerator(async () => {
                          let v3;
                          if (v3 === 2) {
                            v3 = 3;
                            throw new TypeError("Generator functions may not be called on executing generators");
                          } else if (tmp2 === 3) {
                            if (arg0 === 1) {
                              throw value;
                            } else if (arg0 === 2) {
                              const obj3 = { value, done: true };
                              return obj3;
                            } else {
                              return { value: "IconComponent", done: null };
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
                                  const obj2 = v3(c1[7]);
                                  c1 = 1;
                                  v3 = 1;
                                  const obj5 = { value: obj2.manageSubscription(), done: false };
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
                                return { value: "IconComponent", done: null };
                              }
                            } catch (tmp6) {
                              v3 = 3;
                              throw tmp6;
                            }
                          }
                        });
                        const fn = function() {
                          return closure_0(...arguments);
                        };
                        cResult[10] = fn;
                        tmp18 = fn;
                      } else {
                        tmp18 = cResult[10];
                      }
                      const intl = tmp(1126).intl;
                      let obj3 = { renewalDate: subscriptionPeriodStart.subscriptionPeriodStart, onSubscriptionManagementClick: tmp18 };
                      const formatResult = intl.format(require("intl").t.gknRR3, obj3);
                      cResult[8] = subscriptionPeriodStart.subscriptionPeriodStart;
                      cResult[9] = formatResult;
                      tmp16 = formatResult;
                    } else {
                      tmp16 = cResult[9];
                    }
                    return tmp16;
                  }
                }
              }
            }
            return tmp7;
          }
        }
      }
    }
    const tmpResult4 = require("PremiumUtils");
    const billingInformationString = tmpResult4.getBillingInformationString(isPurchasedViaApple, subscriptionPeriodStart, tmp4, tmp5, fractionalPremiumInfo);
    cResult[2] = fractionalPremiumInfo;
    cResult[3] = tmp4;
    cResult[4] = undefined !== arg3 && arg3;
    cResult[5] = subscriptionPeriodStart;
    cResult[6] = isPurchasedViaApple;
    cResult[7] = billingInformationString;
    tmp7 = billingInformationString;
  }
}) : ((isPurchasedViaApple, subscriptionPeriodStart, arg2) => {
  let closure_0;
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  let obj = arg4;
  if (arg4 === undefined) {
    obj = {};
  }
  const fractionalPremiumInfo = obj.fractionalPremiumInfo;
  _require = undefined;
  const tmp2 = _require;
  let obj2 = require("useAppleSubscriptionOwnership");
  const appleSubscriptionOwnership = obj2.useAppleSubscriptionOwnership(isPurchasedViaApple);
  if (null == subscriptionPeriodStart) {
    return null;
  } else {
    const tmp2Result = tmp2(4528);
    const billingInformationString = tmp2Result.getBillingInformationString(isPurchasedViaApple, subscriptionPeriodStart, tmp, flag, fractionalPremiumInfo);
    let formatResult = billingInformationString;
    const tmp2Result2 = tmp2(1370);
    if (tmp2Result2.isIOS()) {
      formatResult = billingInformationString;
      if (isPurchasedViaApple.isPurchasedViaApple) {
        formatResult = billingInformationString;
        if (isPurchasedViaApple.status === SubscriptionStatusTypes.ACTIVE) {
          formatResult = billingInformationString;
          if (!appleSubscriptionOwnership.isMismatch()) {
            const intl = tmp2(1126).intl;
            const format = intl.format;
            let obj3 = {
              renewalDate: subscriptionPeriodStart.subscriptionPeriodStart,
              onSubscriptionManagementClick: function() {
                          return closure_0(...arguments);
                        }
            };
            const gknRR3 = tmp2(1126).t.gknRR3;
            _require = _asyncToGenerator(async () => {
              let v3;
              if (v3 === 2) {
                v3 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp2 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
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
                      const obj2 = v3(c1[7]);
                      c1 = 1;
                      v3 = 1;
                      const obj5 = { value: obj2.manageSubscription(), done: false };
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
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp6) {
                  v3 = 3;
                  throw tmp6;
                }
              }
            });
            formatResult = format(gknRR3, obj3);
          }
        }
      }
    }
    return formatResult;
  }
});
const result = size.fileFinishedImporting("modules/billing/native/subscription/BillingInformation.tsx");

export const useBillingInformationNative = tmp2;