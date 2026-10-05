// discord_app/modules/billing/native/subscription/BillingInformation.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = globalThis.__r;

const require = fn;
const SubscriptionStatusTypes = fn(1085).SubscriptionStatusTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/subscription/BillingInformation.tsx");

export const useBillingInformationNative = ReactCompilerGating.isReactCompilerEnabled()
  ? (isPurchasedViaApple, subscriptionPeriodStart, arg2, arg3, arg4) => {
      let gknRR3 = _require;
      let formatResult = dependencyMap;
      const cResult = require("c").c(11);
      let tmp3 = null;
      if (undefined !== arg2) {
        tmp3 = arg2;
      }
      if (cResult[0] !== arg4) {
        let obj2 = arg4;
        if (undefined === arg4) {
          obj2 = {};
        }
        cResult[0] = arg4;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      const fractionalPremiumInfo = tmp5.fractionalPremiumInfo;
      let obj = require("c");
      const appleSubscriptionOwnership = gknRR3(13191).useAppleSubscriptionOwnership(isPurchasedViaApple);
      if (null == subscriptionPeriodStart) {
        return null;
      } else {
        if (cResult[2] === fractionalPremiumInfo) {
          if (cResult[3] === tmp3) {
            if (cResult[4] === tmp4) {
              if (cResult[5] === subscriptionPeriodStart) {
                if (cResult[6] === isPurchasedViaApple) {
                  let tmp6 = cResult[7];
                }
                if (gknRR3Result1.isIOS()) {
                  if (isPurchasedViaApple.isPurchasedViaApple) {
                    if (isPurchasedViaApple.status === SubscriptionStatusTypes.ACTIVE) {
                      if (!appleSubscriptionOwnership.isMismatch()) {
                        if (cResult[8] !== subscriptionPeriodStart.subscriptionPeriodStart) {
                          const _Symbol = Symbol;
                          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
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
                                      c1 = 1;
                                      v3 = 1;
                                      const obj5 = { value: v3(c1[7]).manageSubscription(), done: false };
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
                                } catch (tmp7) {
                                  v3 = tmp;
                                  throw tmp7;
                                }
                              }
                            });
                            const fn = function () {
                              const self = this;
                              const apply = closure_0.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            };
                            cResult[10] = fn;
                            let tmp16 = fn;
                          } else {
                            tmp16 = cResult[10];
                          }
                          const intl = gknRR3(1126).intl;
                          gknRR3 = gknRR3(1126).t.gknRR3;
                          let obj3 = {
                            renewalDate: subscriptionPeriodStart.subscriptionPeriodStart,
                            onSubscriptionManagementClick: tmp16,
                          };
                          formatResult = intl.format(gknRR3, obj3);
                          subscriptionPeriodStart = subscriptionPeriodStart.subscriptionPeriodStart;
                          cResult[8] = subscriptionPeriodStart;
                          cResult[9] = formatResult;
                        } else {
                          return cResult[9];
                        }
                      }
                    }
                  }
                }
                return tmp6;
              }
            }
          }
        }
        const gknRR3Result2 = gknRR3(4528);
        const billingInformationString = gknRR3Result2.getBillingInformationString(
          isPurchasedViaApple,
          subscriptionPeriodStart,
          tmp3,
          tmp4,
          fractionalPremiumInfo,
        );
        cResult[2] = fractionalPremiumInfo;
        cResult[3] = tmp3;
        cResult[4] = tmp4;
        cResult[5] = subscriptionPeriodStart;
        cResult[6] = isPurchasedViaApple;
        cResult[7] = billingInformationString;
        tmp6 = billingInformationString;
      }
      const gknRR3Result = gknRR3(13191);
    }
  : (isPurchasedViaApple, subscriptionPeriodStart, arg2) => {
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
        isPurchasedViaApple,
      );
      if (null == subscriptionPeriodStart) {
        return null;
      } else {
        const tmp2Result = tmp2(4528);
        const billingInformationString = tmp2Result.getBillingInformationString(
          isPurchasedViaApple,
          subscriptionPeriodStart,
          tmp,
          flag,
          fractionalPremiumInfo,
        );
        let formatResult = billingInformationString;
        if (tmp2Result2.isIOS()) {
          formatResult = billingInformationString;
          if (isPurchasedViaApple.isPurchasedViaApple) {
            formatResult = billingInformationString;
            if (isPurchasedViaApple.status === SubscriptionStatusTypes.ACTIVE) {
              formatResult = billingInformationString;
              if (!appleSubscriptionOwnership.isMismatch()) {
                const intl = tmp2(1126).intl;
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
                          c1 = 1;
                          v3 = 1;
                          const obj5 = { value: v3(c1[7]).manageSubscription(), done: false };
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
                formatResult = intl.format(tmp2(1126).t.gknRR3, obj3);
              }
            }
          }
        }
        return formatResult;
      }
      const obj2 = require("useAppleSubscriptionOwnership");
    };
