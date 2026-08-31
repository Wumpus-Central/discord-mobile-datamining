// === Module 12937: handleCancelSubscription ===

// Module 12937 (handleCancelSubscription)
import ThemesDefault from "Themes" /* 712 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4109 */;
import contextDefault from "context" /* 5921 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5941 */;
import registerAssetDefault from "registerAsset" /* 7945 */;
import registerAssetDefault2 from "registerAsset" /* 8324 */;
import registerAssetDefault3 from "registerAsset" /* 10449 */;
import registerAssetDefault4 from "registerAsset" /* 10450 */;
import registerAssetDefault5 from "registerAsset" /* 10451 */;
import registerAssetDefault6 from "registerAsset" /* 10452 */;
import registerAssetDefault7 from "registerAsset" /* 10453 */;
import registerAssetDefault8 from "registerAsset" /* 10455 */;
import registerAssetDefault9 from "registerAsset" /* 10458 */;
import registerAssetDefault10 from "registerAsset" /* 12938 */;
import registerAssetDefault11 from "registerAsset" /* 12939 */;
import registerAssetDefault12 from "registerAsset" /* 12940 */;
import registerAssetDefault13 from "registerAsset" /* 12941 */;
import registerAssetDefault14 from "registerAsset" /* 12942 */;
import registerAssetDefault15 from "registerAsset" /* 12943 */;
import registerAssetDefault16 from "registerAsset" /* 12944 */;
import registerAssetDefault17 from "registerAsset" /* 12945 */;
import registerAssetDefault18 from "registerAsset" /* 12946 */;
import registerAssetDefault19 from "registerAsset" /* 12947 */;
import registerAssetDefault20 from "registerAsset" /* 12948 */;
import registerAssetDefault21 from "registerAsset" /* 12949 */;
import registerAssetDefault22 from "registerAsset" /* 12950 */;
import registerAssetDefault23 from "registerAsset" /* 12951 */;
import registerAssetDefault24 from "registerAsset" /* 12952 */;
import registerAssetDefault25 from "registerAsset" /* 12953 */;
import registerAssetDefault26 from "registerAsset" /* 12954 */;
import registerAssetDefault27 from "registerAsset" /* 12955 */;
import registerAssetDefault28 from "registerAsset" /* 12956 */;
import registerAssetDefault29 from "registerAsset" /* 12957 */;
import registerAssetDefault30 from "registerAsset" /* 12958 */;
import registerAssetDefault31 from "registerAsset" /* 12959 */;
import registerAssetDefault32 from "registerAsset" /* 12960 */;
import openPremiumPlanWhatYouLoseActionSheetDefault from "openPremiumPlanWhatYouLoseActionSheet" /* 12961 */;
import createSubscriptionInvoicePreview from "createSubscriptionInvoicePreview" /* 12971 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import closure_11 from "updateProduct" /* 6052 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
function handleCancelSubscription() {
  const self = this;
  const apply = _handleCancelSubscription.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleCancelSubscription() {
  const self = this;
  const tmp = callback2((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c3 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = { subscription: null, analyticsLocations: null, fromStep: null, toStep: null };
              obj1[0] = callback;
              obj1[1] = closure_1;
              obj1[2] = dependencyMap;
              obj1[3] = callback(10417).STEP_ANALYTICS_NAMES[callback(undefined, 10417).CancellationFlowSteps.MOBILE_SUBSCRIPTION_MANAGE];
              const result = callback(10417).trackPremiumSubscriptionCancellationFlowStep(obj1);
              let isPurchasedViaApple;
              if (callback != null) {
                isPurchasedViaApple = tmp15.isPurchasedViaApple;
              }
              if (isPurchasedViaApple) {
                let tmp18Result = tmp18(10756);
                c4 = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = tmp18Result.manageSubscription();
                return obj2;
              } else {
                let isPurchasedViaGoogle;
                if (tmp15 != null) {
                  isPurchasedViaGoogle = tmp15.isPurchasedViaGoogle;
                }
                if (isPurchasedViaGoogle) {
                  tmp18Result = tmp18(4109);
                  closure_1_8.openURL(tmp18Result.getExternalSubscriptionMethodUrl(tmp15.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
                }
              }
              const obj7 = callback(10417);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp9) {
          c3 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  closure_29 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleManageSubscription(subscription, closure_3, analyticsLocations) {
  const _require = subscription;
  if (subscription.status === constants4.ACCOUNT_HOLD) {
    closure_8.openURL(_require(4109).getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
    obj6 = _require(4109);
  } else {
    const hasActiveTrial = subscription.hasActiveTrial;
    dependencyMap = false;
    try {
      let obj = _require(7120);
      const productIdFromSubscription = obj.getProductIdFromSubscription(subscription, false);
      let tmp4 = _require(6055).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
      let interval;
      if (tmp4 != null) {
        interval = tmp4.interval;
      }
      dependencyMap = interval === constants5.YEAR;
      let flag = false;
      if (subscription.paymentGateway === constants3.APPLE_ADVANCED_COMMERCE) {
        try {
          const productIdFromSubscription1 = _require(7120).getProductIdFromSubscription(subscription, true);
          const tmp12 = _require(6055).AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription1];
          let interval1;
          if (tmp12 != null) {
            interval1 = tmp12.interval;
          }
          flag = interval1 === constants5.YEAR;
          const obj2 = _require(7120);
        } catch (err) {
        }
      }
      obj = { navigation: null, analyticsLocation: null, analyticsLocations: null, showCurrentPlan: null, allowYearlyBundles: null, predicate: null };
      obj[0] = closure_3;
      obj = { page: null, section: null };
      obj[0] = constants.USER_SETTINGS;
      obj[1] = constants2.SETTINGS_PREMIUM;
      obj[1] = obj;
      obj[2] = analyticsLocations;
      obj[3] = !hasActiveTrial;
      obj[4] = flag;
      obj[5] = function predicate(interval) {
        let tmp = hasActiveTrial;
        if (hasActiveTrial) {
          tmp = !subscription(table[48]).excludeNitroOnlyPlansForActiveTrial(interval);
          const obj = subscription(table[48]);
        }
        let tmp4 = !tmp;
        if (!tmp) {
          let tmp5 = table;
          if (table) {
            tmp5 = subscription.paymentGateway === closure_1_14.APPLE_ADVANCED_COMMERCE;
          }
          if (tmp5) {
            tmp5 = interval.interval === closure_1_16.MONTH;
          }
          if (tmp5) {
            tmp5 = null != interval.premiumTier;
          }
          if (tmp5) {
            tmp5 = interval.numPremiumGuild > 0;
          }
          tmp4 = !tmp5;
        }
        return tmp4;
      };
      const result = _require(7122).launchPremiumPlanSelect(obj);
      const obj3 = _require(7122);
    } catch (err) {
    }
  }
}
function onResubscribeClick(closure_1_0) {
  const self = this;
  const apply = _onResubscribeClick.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _onResubscribeClick() {
  const self = this;
  const tmp = callback2((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp2;
              if (lib.isACOM) {
                obj1 = { requestIdentifier: null, subscriptionId: null };
                const obj9 = lib(7132);
                obj1[0] = lib(514).v4();
                obj1[1] = tmp25.id;
                dependencyMap = 1;
                c3 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = obj9.resubscribeGenericSubscription(obj1, true);
                return obj2;
              } else if (tmp25.isPurchasedViaApple) {
                obj6 = lib(10756);
                dependencyMap = 3;
                c3 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj6.manageSubscription();
                return obj3;
              } else if (tmp25.isPurchasedViaGoogle) {
                let obj5 = lib(4109);
                closure_1_8.openURL(obj5.getExternalSubscriptionMethodUrl(tmp25.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              obj2 = lib(4805);
              dependencyMap = 2;
              c3 = 1;
              obj5 = { value: null, done: false };
              obj5[0] = obj2.fetchSubscriptions();
              return obj5;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp19) {
          c3 = tmp;
          throw tmp19;
        }
      }
    })();
  });
  closure_32 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
class PremiumSubscriptionHeader {
  constructor(arg0) {
    subscription = global.subscription;
    ({ renewalInvoicePreview, onClickManagePremiumGuild } = global);
    closure_1 = undefined;
    closure_2 = undefined;
    analyticsLocations = undefined;
    tmp = closure_20();
    tmp2 = subscription;
    tmp3 = closure_2;
    obj = require("useNavigation");
    closure_1 = obj.useNavigation();
    obj2 = require("initialize");
    items = [];
    items[0] = closure_10;
    stateFromStores = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      callback(_undefined[56])(null != currentUser, "PremiumSubscriptionHeader: currentUser cannot be undefined");
      return currentUser;
    });
    obj3 = require("initialize");
    items1 = [];
    items1[0] = closure_11;
    stateFromStores1 = obj3.useStateFromStores(items1, () => {
      if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
        if (tmp.isACOM) {
          return null;
        } else {
          if (null != tmp.paymentGatewayPlanId) {
            if ("" !== tmp.paymentGatewayPlanId) {
              return closure_1_11.getProduct(tmp.paymentGatewayPlanId);
            }
          }
          const _Error = Error;
          error = new Error("Subscription missing plan ID");
          throw error;
        }
      } else {
        return null;
      }
    });
    tmp6 = closure_1;
    obj4 = require("getPremiumPlanItem");
    planIdFromInvoice = obj4.getPlanIdFromInvoice(subscription, renewalInvoicePreview);
    tmp8 = analyticsLocations(closure_5.useState(false), 2);
    [tmp9, closure_2] = tmp8;
    obj5 = require("getPremiumPlanItem");
    premiumBranding = obj5.getPremiumBranding(subscription);
    analyticsLocations = require("context")().analyticsLocations;
    if (premiumBranding === require("getPremiumPlanItem").Branding.PREMIUM_GUILD) {
      tmp2Result = require("getPremiumPlanItem");
      coercedPremiumGuildSubscriptionStatus = tmp2Result.getCoercedPremiumGuildSubscriptionStatus(subscription);
      tmp2Result1 = require("getPremiumPlanItem");
      obj = { subscription: null, user: null, price: null, renewalInvoicePreview: null };
      obj[0] = subscription;
      obj[1] = stateFromStores;
      tmp15 = null;
      priceString = undefined;
      if (stateFromStores1 != null) {
        priceString = stateFromStores1.priceString;
      }
      obj[2] = priceString;
      obj[3] = renewalInvoicePreview;
      premiumGuildHeaderDescription = tmp2Result1.getPremiumGuildHeaderDescription(obj);
      tmp13 = coercedPremiumGuildSubscriptionStatus;
    } else {
      tmp6Result = require("getPremiumPlanItem");
      tmp38 = SubscriptionPlanInfo;
      tmp39 = SubscriptionPlanInfo[planIdFromInvoice];
      statusFromInvoice = tmp6Result.getStatusFromInvoice(subscription, renewalInvoicePreview);
      formatRateResult = null;
      str = "missing subscription planInfo";
      tmp40 = require("module_38")(null != tmp39, "missing subscription planInfo");
      tmp6Result1 = require("getPremiumPlanItem");
      obj1 = { subscription: null, planId: null, price: null, includePremiumGuilds: true };
      obj1[0] = subscription;
      obj1[1] = planIdFromInvoice;
      if (null != stateFromStores1) {
        tmp2Result2 = require("formatSingleCurrencyPrice");
        formatRateResult = tmp2Result2.formatRate(stateFromStores1.priceString, tmp39.interval, tmp39.intervalCount);
      }
      obj1[2] = formatRateResult;
      premiumGuildHeaderDescription = tmp6Result1.getPlanDescription(obj1);
      tmp13 = statusFromInvoice;
    }
    tmp18 = tmp13 === SubscriptionStatusTypes.CANCELED;
    tmp17 = SubscriptionStatusTypes;
    if (tmp13 === SubscriptionStatusTypes.ACTIVE) {
      tmp20 = closure_21;
      ACTIVE = closure_21.ACTIVE;
    } else {
      tmp19 = closure_21;
      ACTIVE = tmp18 ? tmp19.RESUB : tmp19.ERROR;
    }
    tmp21 = tmp18;
    if (!tmp18) {
      tmp21 = !subscription.isOnPlatformMatchingExternalPaymentGateway;
    }
    tmp22 = !tmp21;
    if (!tmp21) {
      tmp2Result3 = require("set");
      isAndroidResult = tmp2Result3.isAndroid();
      tmp24 = !isAndroidResult;
      if (isAndroidResult) {
        tmp25 = null;
        tmp24 = null == subscription.renewalMutations;
      }
      tmp22 = tmp24;
    }
    isOnPlatformMatchingExternalPaymentGateway = !tmp18;
    if (!tmp18) {
      isOnPlatformMatchingExternalPaymentGateway = subscription.isOnPlatformMatchingExternalPaymentGateway;
    }
    tmp26 = jsx;
    tmp27 = View;
    obj2 = { style: items2, children: null };
    items2 = [, ];
    items2[0] = tmp.container;
    items2[1] = global.style;
    tmp28 = jsxs;
    obj3 = { source: closure_22[premiumBranding][ACTIVE], style: tmp.header, children: null };
    obj4 = { style: tmp.logoContainer, children: null };
    obj5 = { source: closure_23[premiumBranding][ACTIVE], style: items3 };
    items3 = [, ];
    items3[0] = closure_24[premiumBranding][ACTIVE];
    items3[1] = tmp.wumpusImg;
    tmp29 = ImageBackground;
    items4 = [, ];
    items4[0] = jsx(Image, obj5);
    obj6 = { source: closure_25[premiumBranding][ACTIVE], style: closure_26[premiumBranding] };
    items4[1] = jsx(Image, obj6);
    obj4[1] = items4;
    items5 = [, , ];
    items5[0] = jsxs(View, obj4);
    obj7 = { style: closure_27[ACTIVE], children: premiumGuildHeaderDescription };
    items5[1] = jsx(require("Button").LegacyText, obj7);
    obj8 = { style: tmp.buttonContainer, children: null };
    tmp26Result = null;
    if (tmp18) {
      prop = undefined;
      if (subscription != null) {
        prop = subscription.isOnPlatformMatchingExternalPaymentGateway;
      }
      tmp26Result = null;
      if (prop) {
        obj9 = { style: null, children: null };
        obj9[0] = tmp.buttonWrapper;
        obj10 = { onPress: null, variant: "primary-overlay", text: null, size: "sm", disabled: null, loading: null };
        tmp32 = closure_4;
        obj10[0] = closure_4(function*() {
          if (c4 === 2) {
            c4 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp6 === 3) {
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
              c4 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  closure_0 = tmp3;
                  closure_1_2(true);
                  c3 = 1;
                  c1 = 2;
                  c4 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = closure_1_31(closure_1_0);
                  return obj1;
                }
              } else if (1 === tmp7) {
                c3 = 0;
                callback(false);
                throw callback;
              } else if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                callback(false);
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c3 = 0;
                callback(false);
                c4 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } catch (tmp23) {
              callback = tmp23;
              if (tmp4 === c3) {
                c4 = tmp2;
                throw tmp23;
              } else {
                c1 = tmp;
              }
            }
          }
        });
        intl = require("getSystemLocale").intl;
        obj10[2] = intl.string(require("getSystemLocale").t.lTCb0c);
        obj10[4] = tmp9;
        obj10[5] = tmp9;
        obj9[1] = tmp26(require("Button").Button, obj10);
        tmp26Result = tmp26(tmp27, obj9);
      }
    }
    items6 = [, , , ];
    items6[0] = tmp26Result;
    if (!tmp22) {
      items6[1] = null;
      tmp2Result4 = require("getPremiumPlanItem");
      tmp26Result1 = null;
      if (tmp2Result4.subscriptionHasPremiumGuildPlan(subscription)) {
        tmp26Result1 = null;
        if (null != onClickManagePremiumGuild) {
          obj11 = { style: null, children: null };
          obj11[0] = tmp.buttonWrapper;
          obj12 = { onPress: null, variant: "primary-overlay", text: null, size: "sm" };
          obj12[0] = onClickManagePremiumGuild;
          intl4 = require("getSystemLocale").intl;
          obj12[2] = intl4.string(require("getSystemLocale").t.gIVkjm);
          obj11[1] = tmp26(require("Button").Button, obj12);
          tmp26Result1 = tmp26(tmp27, obj11);
        }
      }
      items6[2] = tmp26Result1;
      tmp26Result2 = null;
      if (isOnPlatformMatchingExternalPaymentGateway) {
        obj13 = { accessibilityRole: "link", style: null, onPress: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
        obj13[1] = tmp.cancelLink;
        obj13[2] = function onPress() {
          const callback = analyticsLocations;
          let obj = subscription(_undefined[44]);
          const result = obj.trackPremiumSubscriptionCancellationStarted(closure_0, analyticsLocations);
          if (obj2.isBoostOnlySubscription(closure_0)) {
            let tmp6ResultResult = closure_1_28(tmp, analyticsLocations);
          } else {
            obj = { subscription: null, mode: null, onContinue: null };
            obj[0] = tmp;
            obj[1] = subscription(tmp4[47]).WhatYouLoseMode.CANCEL;
            obj[2] = function onContinue(arg0) {
              return closure_1_28(closure_0, closure_1, arg0);
            };
            tmp6ResultResult = callback(tmp4[46])(obj);
            const tmp6Result = callback(tmp4[46]);
          }
          return tmp6ResultResult;
        };
        intl5 = require("getSystemLocale").intl;
        obj13[5] = intl5.string(require("getSystemLocale").t["ETE/oC"]);
        tmp26Result2 = tmp26(require("Text").Text, obj13);
      }
      items6[3] = tmp26Result2;
      obj8[1] = items6;
      items5[2] = tmp28(tmp27, obj8);
      obj3[2] = items5;
      obj2[1] = tmp28(tmp29, obj3);
      return tmp26(tmp27, obj2);
    } else {
      obj14 = { style: null, children: null };
      obj14[0] = tmp.buttonWrapper;
      obj15 = { onPress: null, variant: "primary-overlay", text: null, size: "sm" };
      obj15[0] = function onPress() {
        closure_1_30(subscription, closure_1, analyticsLocations);
      };
      if (subscription.status === tmp17.ACCOUNT_HOLD) {
        intl3 = require("getSystemLocale").intl;
        stringResult = intl3.string(require("getSystemLocale").t.SgX7Ra);
      } else {
        intl2 = require("getSystemLocale").intl;
        stringResult = intl2.string(require("getSystemLocale").t.gmVtgF);
      }
      obj15[2] = stringResult;
      obj15 = tmp26(require("Button").Button, obj15);
      obj14[1] = obj15;
      tmp26Result3 = tmp26(tmp27, obj14);
    }
    return;
  }
}
({ Image: closure_6, ImageBackground: error, Linking: closure_8, View: c9 } = get_ActivityIndicator);
({ AnalyticsPages: closure_12, AnalyticsSections: map1, PaymentGateways: closure_14, SubscriptionStatusTypes: closure_15, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ SubscriptionIntervalTypes: closure_16, SubscriptionPlanInfo: closure_17 } = GuildFeatures);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let obj = { height: 35, width: 49 };
obj = { height: 36, width: 51 };
obj = { width: 51, height: 36 };
let obj1 = { fontSize: 14, marginTop: 10, color: ThemesDefault.unsafe_rawColors.WHITE };
let obj3 = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, header: { padding: 16 }, wumpusImg: { marginRight: 10 }, logoContainer: { flexDirection: "row", alignItems: "center" }, container: null, buttonContainer: null, buttonWrapper: null, cancelLink: null, desktopSubtext: null };
let obj2 = { fontSize: 14, marginTop: 10, color: ThemesDefault.unsafe_rawColors.BLACK };
obj3[4] = { marginTop: 8, overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
obj3[5] = { marginTop: 8, flexDirection: "row" };
obj3[6] = { alignSelf: "flex-start", flexGrow: 0, flexShrink: 0, marginRight: 8 };
obj3[7] = { alignSelf: "center", flexGrow: 0, flexShrink: 0, marginLeft: 16 };
obj3[8] = { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
let closure_20 = createCacheKey.createStyles(obj3);
createCacheKey = { ACTIVE: "active", RESUB: "resub", ERROR: "error" };
let obj6 = {};
let obj7 = {};
obj7[createCacheKey.ACTIVE] = registerAssetDefault6;
obj7[createCacheKey.ERROR] = registerAssetDefault10;
obj7[createCacheKey.RESUB] = registerAssetDefault11;
obj6[require("getPremiumPlanItem").Branding.BUNDLE] = obj7;
let obj8 = {};
obj8[createCacheKey.ACTIVE] = registerAssetDefault3;
obj8[createCacheKey.ERROR] = registerAssetDefault10;
obj8[createCacheKey.RESUB] = registerAssetDefault11;
obj6[require("getPremiumPlanItem").Branding.TIER_0] = obj8;
let obj9 = {};
obj9[createCacheKey.ACTIVE] = registerAssetDefault4;
obj9[createCacheKey.ERROR] = registerAssetDefault10;
obj9[createCacheKey.RESUB] = registerAssetDefault11;
obj6[require("getPremiumPlanItem").Branding.TIER_1] = obj9;
let obj10 = {};
obj10[createCacheKey.ACTIVE] = registerAssetDefault5;
obj10[createCacheKey.ERROR] = registerAssetDefault10;
obj10[createCacheKey.RESUB] = registerAssetDefault11;
obj6[require("getPremiumPlanItem").Branding.TIER_2] = obj10;
let obj11 = {};
obj11[createCacheKey.ACTIVE] = registerAssetDefault7;
obj11[createCacheKey.ERROR] = registerAssetDefault12;
obj11[createCacheKey.RESUB] = registerAssetDefault13;
obj6[require("getPremiumPlanItem").Branding.PREMIUM_GUILD] = obj11;
let obj12 = {};
let obj13 = {};
obj13[createCacheKey.ACTIVE] = registerAssetDefault14;
obj13[createCacheKey.ERROR] = registerAssetDefault14;
obj13[createCacheKey.RESUB] = registerAssetDefault14;
obj12[require("getPremiumPlanItem").Branding.BUNDLE] = obj13;
let obj14 = {};
obj14[createCacheKey.ACTIVE] = registerAssetDefault2;
obj14[createCacheKey.ERROR] = registerAssetDefault15;
obj14[createCacheKey.RESUB] = registerAssetDefault16;
obj12[require("getPremiumPlanItem").Branding.TIER_0] = obj14;
const obj15 = {};
obj15[createCacheKey.ACTIVE] = registerAssetDefault17;
obj15[createCacheKey.ERROR] = registerAssetDefault18;
obj15[createCacheKey.RESUB] = registerAssetDefault19;
obj12[require("getPremiumPlanItem").Branding.TIER_1] = obj15;
const obj16 = {};
obj16[createCacheKey.ACTIVE] = registerAssetDefault8;
obj16[createCacheKey.ERROR] = registerAssetDefault20;
obj16[createCacheKey.RESUB] = registerAssetDefault21;
obj12[require("getPremiumPlanItem").Branding.TIER_2] = obj16;
const obj17 = {};
obj17[createCacheKey.ACTIVE] = registerAssetDefault22;
obj17[createCacheKey.ERROR] = registerAssetDefault23;
obj17[createCacheKey.RESUB] = registerAssetDefault24;
obj12[require("getPremiumPlanItem").Branding.PREMIUM_GUILD] = obj17;
let closure_24 = { [arg1(4109).Branding.BUNDLE]: { [createCacheKey.ACTIVE]: obj, [createCacheKey.ERROR]: obj, [createCacheKey.RESUB]: obj }, [arg1(4109).Branding.TIER_0]: { [createCacheKey.ACTIVE]: { height: 35, width: 29 }, [createCacheKey.ERROR]: obj, [createCacheKey.RESUB]: obj }, [arg1(4109).Branding.TIER_1]: { [createCacheKey.ACTIVE]: { height: 35, width: 49 }, [createCacheKey.ERROR]: obj, [createCacheKey.RESUB]: obj }, [arg1(4109).Branding.TIER_2]: { [createCacheKey.ACTIVE]: { height: 37, width: 49 }, [createCacheKey.ERROR]: obj, [createCacheKey.RESUB]: obj }, [arg1(4109).Branding.PREMIUM_GUILD]: { [createCacheKey.ACTIVE]: { width: 51, height: 36 }, [createCacheKey.ERROR]: obj, [createCacheKey.RESUB]: obj } };
const obj18 = {};
const obj19 = {};
obj19[createCacheKey.ACTIVE] = registerAssetDefault25;
obj19[createCacheKey.ERROR] = registerAssetDefault25;
obj19[createCacheKey.RESUB] = registerAssetDefault26;
obj18[require("getPremiumPlanItem").Branding.BUNDLE] = obj19;
const obj20 = {};
obj20[createCacheKey.ACTIVE] = registerAssetDefault9;
obj20[createCacheKey.ERROR] = registerAssetDefault9;
obj20[createCacheKey.RESUB] = registerAssetDefault27;
obj18[require("getPremiumPlanItem").Branding.TIER_0] = obj20;
const obj21 = {};
obj21[createCacheKey.ACTIVE] = registerAssetDefault28;
obj21[createCacheKey.ERROR] = registerAssetDefault28;
obj21[createCacheKey.RESUB] = registerAssetDefault29;
obj18[require("getPremiumPlanItem").Branding.TIER_1] = obj21;
const obj22 = {};
obj22[createCacheKey.ACTIVE] = registerAssetDefault;
obj22[createCacheKey.ERROR] = registerAssetDefault;
obj22[createCacheKey.RESUB] = registerAssetDefault30;
obj18[require("getPremiumPlanItem").Branding.TIER_2] = obj22;
const obj23 = {};
obj23[createCacheKey.ACTIVE] = registerAssetDefault31;
obj23[createCacheKey.ERROR] = registerAssetDefault31;
obj23[createCacheKey.RESUB] = registerAssetDefault32;
obj18[require("getPremiumPlanItem").Branding.PREMIUM_GUILD] = obj23;
let closure_26 = { [arg1(4109).Branding.BUNDLE]: { height: 33, width: 205 }, [arg1(4109).Branding.TIER_0]: { height: 32, width: 59 }, [arg1(4109).Branding.TIER_1]: { height: 16, width: 156 }, [arg1(4109).Branding.TIER_2]: { height: 32, width: 78 }, [arg1(4109).Branding.PREMIUM_GUILD]: { height: 17, width: 184 } };
let closure_27 = { [createCacheKey.ACTIVE]: obj1, [createCacheKey.ERROR]: obj1, [createCacheKey.RESUB]: obj2 };
let obj4 = { marginTop: 8, overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST };
let result = require("set").fileFinishedImporting("components_native/premium/PremiumSubscriptionDetails.tsx");

export default function PremiumSubscriptionDetails(subscription) {
  subscription = subscription.subscription;
  ({ style, onClickManagePremiumGuild } = subscription);
  const tmp = callback5();
  let obj = createSubscriptionInvoicePreview;
  obj = { subscriptionId: subscription.id, renewal: true, analyticsLocations: contextDefault().analyticsLocations, analyticsLocation: QUICK_SWITCHERDefault.PREMIUM_SUBSCRIPTION_DETAILS };
  const first = callback(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  let tmp7Result = null;
  if (null != first) {
    obj = { style: null, children: null };
    obj[0] = style;
    obj1 = { style: null, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    obj1[0] = tmp.title;
    const intl = tmp4(1236).intl;
    obj1[4] = intl.string(tmp4(1236).t.ITurwY);
    const items = [callback3(tmp4(4444).Text, obj1), , , , ];
    let tmp9Result = null != subscription.renewalMutations;
    if (tmp9Result) {
      tmp9Result = subscription.status !== constants4.CANCELED;
    }
    if (tmp9Result) {
      const obj2 = { subscription: null, renewalMutations: null };
      obj2[0] = subscription;
      obj2[1] = subscription.renewalMutations;
      tmp9Result = tmp9(tmp2(12972), obj2);
    }
    items[1] = tmp9Result;
    tmp9Result = subscription.status === constants4.ACCOUNT_HOLD;
    if (tmp9Result) {
      const obj3 = { subscription: null };
      obj3[0] = subscription;
      tmp9Result = tmp9(tmp2(12973), obj3);
    }
    items[2] = tmp9Result;
    const obj4 = { subscription: null, renewalInvoicePreview: null, onClickManagePremiumGuild: null };
    obj4[0] = subscription;
    obj4[1] = first;
    obj4[2] = onClickManagePremiumGuild;
    items[3] = callback3(PremiumSubscriptionHeader, obj4);
    const obj5 = { style: null, variant: "text-sm/medium", children: null };
    obj5[0] = tmp.desktopSubtext;
    const intl2 = tmp4(1236).intl;
    obj5[2] = intl2.string(tmp4(1236).t["MTG+3O"]);
    items[4] = callback3(tmp4(4444).Text, obj5);
    obj[1] = items;
    tmp7Result = closure_19(closure_9, obj);
    const tmp7 = closure_19;
    const tmp8 = closure_9;
  }
  return tmp7Result;
};
export const onCancelClick = function onCancelClick(subscription, analyticsLocations) {
  const _require = subscription;
  importDefault = analyticsLocations;
  let obj = _require(10417);
  const result = obj.trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations);
  if (obj2.isBoostOnlySubscription(subscription)) {
    let tmp4ResultResult = handleCancelSubscription(subscription, analyticsLocations);
  } else {
    obj = { subscription: null, mode: null, onContinue: null };
    obj[0] = subscription;
    obj[1] = _require(12962).WhatYouLoseMode.CANCEL;
    obj[2] = function onContinue(arg0) {
      return closure_1_28(closure_0, closure_1, arg0);
    };
    tmp4ResultResult = openPremiumPlanWhatYouLoseActionSheetDefault(obj);
    const tmp4Result = openPremiumPlanWhatYouLoseActionSheetDefault;
  }
  return tmp4ResultResult;
};
export { handleManageSubscription };
export { onResubscribeClick };
export { PremiumSubscriptionHeader };