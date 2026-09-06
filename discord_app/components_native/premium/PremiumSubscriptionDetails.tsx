// === Module 13309: PremiumSubscriptionDetails ===

// Module 13309 (PremiumSubscriptionDetails)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import Text_Text from "Text/Text" /* 4556 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7409 */;
import _modDef8068 from "module_8068" /* 8068 */;
import _modDef9385 from "module_9385" /* 9385 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10663 */;
import _modDef10710 from "module_10710" /* 10710 */;
import _modDef10711 from "module_10711" /* 10711 */;
import _modDef10712 from "module_10712" /* 10712 */;
import _modDef10713 from "module_10713" /* 10713 */;
import _modDef10714 from "module_10714" /* 10714 */;
import _modDef10716 from "module_10716" /* 10716 */;
import _modDef10719 from "module_10719" /* 10719 */;
import _modDef13310 from "module_13310" /* 13310 */;
import _modDef13311 from "module_13311" /* 13311 */;
import _modDef13312 from "module_13312" /* 13312 */;
import _modDef13313 from "module_13313" /* 13313 */;
import _modDef13314 from "module_13314" /* 13314 */;
import _modDef13315 from "module_13315" /* 13315 */;
import _modDef13316 from "module_13316" /* 13316 */;
import _modDef13317 from "module_13317" /* 13317 */;
import _modDef13318 from "module_13318" /* 13318 */;
import _modDef13319 from "module_13319" /* 13319 */;
import _modDef13320 from "module_13320" /* 13320 */;
import _modDef13321 from "module_13321" /* 13321 */;
import _modDef13322 from "module_13322" /* 13322 */;
import _modDef13323 from "module_13323" /* 13323 */;
import _modDef13324 from "module_13324" /* 13324 */;
import _modDef13325 from "module_13325" /* 13325 */;
import _modDef13326 from "module_13326" /* 13326 */;
import _modDef13327 from "module_13327" /* 13327 */;
import _modDef13328 from "module_13328" /* 13328 */;
import _modDef13329 from "module_13329" /* 13329 */;
import _modDef13330 from "module_13330" /* 13330 */;
import _modDef13331 from "module_13331" /* 13331 */;
import _modDef13332 from "module_13332" /* 13332 */;
import openPremiumPlanWhatYouLoseActionSheetDefault from "openPremiumPlanWhatYouLoseActionSheet" /* 13333 */;
import PremiumPlanWhatYouLoseActionSheet from "PremiumPlanWhatYouLoseActionSheet" /* 13334 */;
import PremiumSubscriptionInvoice from "PremiumSubscriptionInvoice" /* 13343 */;
import SubscriptionRenewalMutationsNoticeDefault from "SubscriptionRenewalMutationsNotice" /* 13344 */;
import SubscriptionAccountHoldNoticeDefault from "SubscriptionAccountHoldNotice" /* 13345 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import IAPStore from "IAPStore" /* 7237 */;

require = fn;
function handleCancelSubscription() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_29 = async function _handleCancelSubscription() {
  c4 = 0;
  c3 = 0;
  return (async (arg0, value, arg2) => {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj1 = { subscription, analyticsLocations, fromStep, toStep: require("PremiumAnalyticsUtils").STEP_ANALYTICS_NAMES[require("PremiumAnalyticsUtils").CancellationFlowSteps.MOBILE_SUBSCRIPTION_MANAGE] };
            const result = require("PremiumAnalyticsUtils").trackPremiumSubscriptionCancellationFlowStep(obj1);
            let isPurchasedViaApple;
            if (subscription != null) {
              isPurchasedViaApple = subscription.isPurchasedViaApple;
            }
            if (isPurchasedViaApple) {
              let tmp17Result = require("IAPUtils");
              c4 = 1;
              c3 = 1;
              const obj2 = { value: tmp17Result.manageSubscription(), done: false };
              return obj2;
            } else {
              let isPurchasedViaGoogle;
              if (subscription != null) {
                isPurchasedViaGoogle = subscription.isPurchasedViaGoogle;
              }
              if (isPurchasedViaGoogle) {
                tmp17Result = require("PremiumUtils");
                closure_2_8.openURL(tmp17Result.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
              }
            }
            const obj7 = require("PremiumAnalyticsUtils");
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp9) {
        c3 = tmp;
        throw tmp9;
      }
    }
  })();
};
function handleManageSubscription(subscription, navigation, analyticsLocations) {
  _require = subscription;
  if (subscription.status === constants4.ACCOUNT_HOLD) {
    closure_8.openURL(require("PremiumUtils").getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
    const obj6 = require("PremiumUtils");
  } else {
    const hasActiveTrial = subscription.hasActiveTrial;
    dependencyMap = false;
    try {
      let obj = require("PremiumBundledPlansUtils");
      const productIdFromSubscription = obj.getProductIdFromSubscription(subscription, false);
      let tmp4 = require("ProductIds").AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
      let interval;
      if (tmp4 != null) {
        interval = tmp4.interval;
      }
      dependencyMap = interval === constants5.YEAR;
      let flag = false;
      if (subscription.paymentGateway === constants3.APPLE_ADVANCED_COMMERCE) {
        try {
          const productIdFromSubscription1 = require("PremiumBundledPlansUtils").getProductIdFromSubscription(subscription, true);
          const tmp12 = require("ProductIds").AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription1];
          let interval1;
          if (tmp12 != null) {
            interval1 = tmp12.interval;
          }
          flag = interval1 === constants5.YEAR;
          const obj2 = require("PremiumBundledPlansUtils");
        } catch (err) {
        }
      }
      obj = { navigation, analyticsLocation: null, analyticsLocations: null, showCurrentPlan: null, allowYearlyBundles: null, predicate: null };
      obj = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_PREMIUM };
      obj.analyticsLocation = obj;
      obj.analyticsLocations = analyticsLocations;
      obj.showCurrentPlan = !hasActiveTrial;
      obj.allowYearlyBundles = flag;
      obj.predicate = function predicate(interval) {
        let tmp = hasActiveTrial;
        if (hasActiveTrial) {
          tmp = !PremiumBundledPlansUtils.excludeNitroOnlyPlansForActiveTrial(interval);
        }
        let tmp4 = !tmp;
        if (!tmp) {
          let tmp5 = closure_2;
          if (closure_2) {
            tmp5 = subscription.paymentGateway === constants3.APPLE_ADVANCED_COMMERCE;
          }
          if (tmp5) {
            tmp5 = interval.interval === constants5.MONTH;
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
      const result = require("launchPremiumPlanSelect").launchPremiumPlanSelect(obj);
      obj3 = require("launchPremiumPlanSelect");
    } catch (err) {
    }
  }
}
function onResubscribeClick() {
  const self = this;
  const apply = closure_32.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_32 = async function _onResubscribeClick(arg0) {
  let isACOM = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            if (isACOM.isACOM) {
              const obj1 = { requestIdentifier: null, subscriptionId: null };
              const obj9 = require("BillingActionCreators");
              obj1.requestIdentifier = require("v1").v4();
              obj1.subscriptionId = isACOM.id;
              c2 = 1;
              c3 = 1;
              let obj2 = { value: obj9.resubscribeGenericSubscription(obj1, true), done: false };
              return obj2;
            } else if (isACOM.isPurchasedViaApple) {
              let obj6 = require("IAPUtils");
              c2 = 3;
              c3 = 1;
              obj3 = { value: obj6.manageSubscription(), done: false };
              return obj3;
            } else if (isACOM.isPurchasedViaGoogle) {
              let obj5 = require("PremiumUtils");
              closure_2_8.openURL(obj5.getExternalSubscriptionMethodUrl(isACOM.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj4 = { value, done: true };
            return obj4;
          } else {
            obj2 = closure_129_0(closure_129_2[53]);
            c2 = 2;
            c3 = 1;
            obj5 = { value: obj2.fetchSubscriptions(), done: false };
            return obj5;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj6 = { value, done: true };
            return obj6;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp19) {
        c3 = tmp;
        throw tmp19;
      }
    }
  })();
};
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
    obj = subscription(closure_2[54]);
    closure_1 = obj.useNavigation();
    obj2 = subscription(closure_2[55]);
    items = [];
    items[0] = closure_10;
    stateFromStores = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      closure_1(_undefined[56])(null != currentUser, "PremiumSubscriptionHeader: currentUser cannot be undefined");
      return currentUser;
    });
    obj3 = subscription(closure_2[55]);
    items1 = [];
    items1[0] = closure_11;
    stateFromStores1 = obj3.useStateFromStores(items1, () => {
      if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
        if (subscription.isACOM) {
          return null;
        } else {
          if (null != subscription.paymentGatewayPlanId) {
            if ("" !== subscription.paymentGatewayPlanId) {
              return IAPStore.getProduct(subscription.paymentGatewayPlanId);
            }
          }
          const _Error = Error;
          const error = new Error("Subscription missing plan ID");
          throw error;
        }
      } else {
        return null;
      }
    });
    tmp6 = closure_1;
    obj4 = closure_1(closure_2[11]);
    planIdFromInvoice = obj4.getPlanIdFromInvoice(subscription, renewalInvoicePreview);
    tmp8 = analyticsLocations(closure_5.useState(false), 2);
    [tmp9, closure_2] = tmp8;
    obj5 = subscription(closure_2[11]);
    premiumBranding = obj5.getPremiumBranding(subscription);
    analyticsLocations = closure_1(closure_2[57])().analyticsLocations;
    if (premiumBranding === subscription(closure_2[11]).Branding.PREMIUM_GUILD) {
      tmp2Result = tmp2(tmp3[11]);
      coercedPremiumGuildSubscriptionStatus = tmp2Result.getCoercedPremiumGuildSubscriptionStatus(subscription);
      tmp2Result1 = tmp2(tmp3[11]);
      obj = { subscription: null, user: null, price: null, renewalInvoicePreview: null };
      obj.subscription = subscription;
      obj.user = stateFromStores;
      tmp15 = null;
      priceString = undefined;
      if (stateFromStores1 != null) {
        priceString = stateFromStores1.priceString;
      }
      obj.price = priceString;
      obj.renewalInvoicePreview = renewalInvoicePreview;
      premiumGuildHeaderDescription = tmp2Result1.getPremiumGuildHeaderDescription(obj);
      tmp13 = coercedPremiumGuildSubscriptionStatus;
    } else {
      tmp6Result = tmp6(tmp3[11]);
      tmp38 = SubscriptionPlanInfo;
      tmp39 = SubscriptionPlanInfo[planIdFromInvoice];
      statusFromInvoice = tmp6Result.getStatusFromInvoice(subscription, renewalInvoicePreview);
      formatRateResult = null;
      str = "missing subscription planInfo";
      tmp40 = tmp6(tmp3[56])(null != tmp39, "missing subscription planInfo");
      tmp6Result1 = tmp6(tmp3[11]);
      obj1 = { subscription: null, planId: null, price: null, includePremiumGuilds: true };
      obj1.subscription = subscription;
      obj1.planId = planIdFromInvoice;
      if (null != stateFromStores1) {
        tmp2Result2 = tmp2(tmp3[58]);
        formatRateResult = tmp2Result2.formatRate(stateFromStores1.priceString, tmp39.interval, tmp39.intervalCount);
      }
      obj1.price = formatRateResult;
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
      tmp2Result3 = tmp2(tmp3[59]);
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
    obj2 = { style: null, children: null };
    items2 = [, ];
    items2[0] = tmp.container;
    items2[1] = global.style;
    obj2.style = items2;
    tmp28 = jsxs;
    obj3 = { source: closure_22[premiumBranding][ACTIVE], style: tmp.header, children: null };
    obj4 = { style: tmp.logoContainer, children: null };
    obj5 = { source: closure_23[premiumBranding][ACTIVE], style: null };
    items3 = [, ];
    items3[0] = closure_24[premiumBranding][ACTIVE];
    items3[1] = tmp.wumpusImg;
    obj5.style = items3;
    tmp29 = ImageBackground;
    items4 = [, ];
    items4[0] = jsx(Image, obj5);
    obj6 = { source: closure_25[premiumBranding][ACTIVE], style: closure_26[premiumBranding] };
    items4[1] = jsx(Image, obj6);
    obj4.children = items4;
    items5 = [, , ];
    items5[0] = jsxs(View, obj4);
    obj7 = { style: closure_27[ACTIVE], children: premiumGuildHeaderDescription };
    items5[1] = jsx(tmp2(tmp3[60]).LegacyText, obj7);
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
        obj9.style = tmp.buttonWrapper;
        obj10 = { onPress: null, variant: "primary-overlay", text: null, size: "sm", disabled: null, loading: null };
        tmp32 = closure_4;
        obj10.onPress = closure_4(async () => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
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
              c4 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_0 = tmp3;
                  tmp23(true);
                  c3 = 1;
                  c1 = 2;
                  c4 = 1;
                  const obj1 = { value: onResubscribeClick(subscription), done: false };
                  return obj1;
                }
              } else if (1 === tmp7) {
                c3 = 0;
                closure_128_2(false);
                throw closure_2;
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_128_2(false);
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
                closure_128_2(false);
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp23) {
              closure_2 = tmp23;
              if (tmp4 === c3) {
                c4 = tmp2;
                throw tmp23;
              } else {
                c1 = tmp;
              }
            }
          }
        });
        intl = tmp2(tmp3[62]).intl;
        obj10.text = intl.string(tmp2(tmp3[62]).t.lTCb0c);
        obj10.disabled = tmp9;
        obj10.loading = tmp9;
        obj9.children = tmp26(tmp2(tmp3[61]).Button, obj10);
        tmp26Result = tmp26(tmp27, obj9);
      }
    }
    items6 = [, , , ];
    items6[0] = tmp26Result;
    if (!tmp22) {
      items6[1] = null;
      tmp2Result4 = tmp2(tmp3[11]);
      tmp26Result1 = null;
      if (tmp2Result4.subscriptionHasPremiumGuildPlan(subscription)) {
        tmp26Result1 = null;
        if (null != onClickManagePremiumGuild) {
          obj11 = { style: null, children: null };
          obj11.style = tmp.buttonWrapper;
          obj12 = { onPress: null, variant: "primary-overlay", text: null, size: "sm" };
          obj12.onPress = onClickManagePremiumGuild;
          intl4 = tmp2(tmp3[62]).intl;
          obj12.text = intl4.string(tmp2(tmp3[62]).t.gIVkjm);
          obj11.children = tmp26(tmp2(tmp3[61]).Button, obj12);
          tmp26Result1 = tmp26(tmp27, obj11);
        }
      }
      items6[2] = tmp26Result1;
      tmp26Result2 = null;
      if (isOnPlatformMatchingExternalPaymentGateway) {
        obj13 = { accessibilityRole: "link", style: null, onPress: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
        obj13.style = tmp.cancelLink;
        obj13.onPress = function onPress() {
          closure_0 = subscription;
          closure_1 = analyticsLocations;
          let obj = PremiumAnalyticsUtils;
          const result = obj.trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations);
          if (obj2.isBoostOnlySubscription(subscription)) {
            let tmp6ResultResult = handleCancelSubscription(subscription, analyticsLocations);
          } else {
            obj = {
              subscription,
              mode: PremiumPlanWhatYouLoseActionSheet.WhatYouLoseMode.CANCEL,
              onContinue(arg0) {
                  return handleCancelSubscription(closure_0, closure_1, arg0);
                }
            };
            tmp6ResultResult = openPremiumPlanWhatYouLoseActionSheetDefault(obj);
            const tmp6Result = openPremiumPlanWhatYouLoseActionSheetDefault;
          }
          return tmp6ResultResult;
        };
        intl5 = tmp2(tmp3[62]).intl;
        obj13.children = intl5.string(tmp2(tmp3[62]).t["ETE/oC"]);
        tmp26Result2 = tmp26(tmp2(tmp3[63]).Text, obj13);
      }
      items6[3] = tmp26Result2;
      obj8.children = items6;
      items5[2] = tmp28(tmp27, obj8);
      obj3.children = items5;
      obj2.children = tmp28(tmp29, obj3);
      return tmp26(tmp27, obj2);
    } else {
      obj14 = { style: null, children: null };
      obj14.style = tmp.buttonWrapper;
      obj15 = { onPress: null, variant: "primary-overlay", text: null, size: "sm" };
      obj15.onPress = function onPress() {
        handleManageSubscription(subscription, closure_1, analyticsLocations);
      };
      if (subscription.status === tmp17.ACCOUNT_HOLD) {
        intl3 = tmp2(tmp3[62]).intl;
        stringResult = intl3.string(tmp2(tmp3[62]).t.SgX7Ra);
      } else {
        intl2 = tmp2(tmp3[62]).intl;
        stringResult = intl2.string(tmp2(tmp3[62]).t.gmVtgF);
      }
      obj15.text = stringResult;
      obj15 = tmp26(tmp2(tmp3[61]).Button, obj15);
      obj14.children = obj15;
      tmp26Result3 = tmp26(tmp27, obj14);
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, ImageBackground: closure_7, Linking: closure_8, View: closure_9 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticsPages: closure_12, AnalyticsSections: map1, PaymentGateways: closure_14, SubscriptionStatusTypes: closure_15, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const PremiumConstants = fn(1373);
({ SubscriptionIntervalTypes: closure_16, SubscriptionPlanInfo: closure_17 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let size = { height: 35, width: 49 };
const size1 = { height: 36, width: 51 };
const size2 = { width: 51, height: 36 };
let obj = { fontSize: 14, marginTop: 10, color: nativeDefault.unsafe_rawColors.WHITE };
obj = { fontSize: 14, marginTop: 10, color: nativeDefault.unsafe_rawColors.BLACK };
let createStyles = fn(4560);
let obj1 = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, header: { padding: 16 }, wumpusImg: { marginRight: 10 }, logoContainer: { flexDirection: "row", alignItems: "center" }, container: { marginTop: 8, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, buttonContainer: { marginTop: 8, flexDirection: "row" }, buttonWrapper: { alignSelf: "flex-start", flexGrow: 0, flexShrink: 0, marginRight: 8 }, cancelLink: { alignSelf: "center", flexGrow: 0, flexShrink: 0, marginLeft: 16 }, desktopSubtext: { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } };
let closure_20 = createStyles.createStyles(obj1);
let obj3 = { ACTIVE: "active", RESUB: "resub", ERROR: "error" };
let obj4 = {};
createStyles = {};
createStyles[obj3.ACTIVE] = _modDef10713;
createStyles[obj3.ERROR] = _modDef13310;
createStyles[obj3.RESUB] = _modDef13311;
obj4[fn(4218).Branding.BUNDLE] = createStyles;
let obj6 = {};
obj6[obj3.ACTIVE] = _modDef10710;
obj6[obj3.ERROR] = _modDef13310;
obj6[obj3.RESUB] = _modDef13311;
obj4[fn(4218).Branding.TIER_0] = obj6;
let obj7 = {};
obj7[obj3.ACTIVE] = _modDef10711;
obj7[obj3.ERROR] = _modDef13310;
obj7[obj3.RESUB] = _modDef13311;
obj4[fn(4218).Branding.TIER_1] = obj7;
let obj8 = {};
obj8[obj3.ACTIVE] = _modDef10712;
obj8[obj3.ERROR] = _modDef13310;
obj8[obj3.RESUB] = _modDef13311;
obj4[fn(4218).Branding.TIER_2] = obj8;
let obj9 = {};
obj9[obj3.ACTIVE] = _modDef10714;
obj9[obj3.ERROR] = _modDef13312;
obj9[obj3.RESUB] = _modDef13313;
obj4[fn(4218).Branding.PREMIUM_GUILD] = obj9;
let obj10 = {};
let obj11 = {};
obj11[obj3.ACTIVE] = _modDef13314;
obj11[obj3.ERROR] = _modDef13314;
obj11[obj3.RESUB] = _modDef13314;
obj10[fn(4218).Branding.BUNDLE] = obj11;
let obj12 = {};
obj12[obj3.ACTIVE] = _modDef9385;
obj12[obj3.ERROR] = _modDef13315;
obj12[obj3.RESUB] = _modDef13316;
obj10[fn(4218).Branding.TIER_0] = obj12;
let obj13 = {};
obj13[obj3.ACTIVE] = _modDef13317;
obj13[obj3.ERROR] = _modDef13318;
obj13[obj3.RESUB] = _modDef13319;
obj10[fn(4218).Branding.TIER_1] = obj13;
let obj14 = {};
obj14[obj3.ACTIVE] = _modDef10716;
obj14[obj3.ERROR] = _modDef13320;
obj14[obj3.RESUB] = _modDef13321;
obj10[fn(4218).Branding.TIER_2] = obj14;
const obj15 = {};
obj15[obj3.ACTIVE] = _modDef13322;
obj15[obj3.ERROR] = _modDef13323;
obj15[obj3.RESUB] = _modDef13324;
obj10[fn(4218).Branding.PREMIUM_GUILD] = obj15;
const __initData4 = { [fn(4218).Branding.BUNDLE]: { [obj3.ACTIVE]: size, [obj3.ERROR]: size, [obj3.RESUB]: size }, [fn(4218).Branding.TIER_0]: { [obj3.ACTIVE]: { height: 35, width: 29 }, [obj3.ERROR]: size1, [obj3.RESUB]: size1 }, [fn(4218).Branding.TIER_1]: { [obj3.ACTIVE]: { height: 35, width: 49 }, [obj3.ERROR]: size1, [obj3.RESUB]: size1 }, [fn(4218).Branding.TIER_2]: { [obj3.ACTIVE]: { height: 37, width: 49 }, [obj3.ERROR]: size1, [obj3.RESUB]: size1 }, [fn(4218).Branding.PREMIUM_GUILD]: { [obj3.ACTIVE]: { width: 51, height: 36 }, [obj3.ERROR]: size2, [obj3.RESUB]: size2 } };
const obj16 = {};
const obj17 = {};
obj17[obj3.ACTIVE] = _modDef13325;
obj17[obj3.ERROR] = _modDef13325;
obj17[obj3.RESUB] = _modDef13326;
obj16[fn(4218).Branding.BUNDLE] = obj17;
const obj18 = {};
obj18[obj3.ACTIVE] = _modDef10719;
obj18[obj3.ERROR] = _modDef10719;
obj18[obj3.RESUB] = _modDef13327;
obj16[fn(4218).Branding.TIER_0] = obj18;
const obj19 = {};
obj19[obj3.ACTIVE] = _modDef13328;
obj19[obj3.ERROR] = _modDef13328;
obj19[obj3.RESUB] = _modDef13329;
obj16[fn(4218).Branding.TIER_1] = obj19;
const obj20 = {};
obj20[obj3.ACTIVE] = _modDef8068;
obj20[obj3.ERROR] = _modDef8068;
obj20[obj3.RESUB] = _modDef13330;
obj16[fn(4218).Branding.TIER_2] = obj20;
const obj21 = {};
obj21[obj3.ACTIVE] = _modDef13331;
obj21[obj3.ERROR] = _modDef13331;
obj21[obj3.RESUB] = _modDef13332;
obj16[fn(4218).Branding.PREMIUM_GUILD] = obj21;
let dependencyMap = { [fn(4218).Branding.BUNDLE]: { height: 33, width: 205 }, [fn(4218).Branding.TIER_0]: { height: 32, width: 59 }, [fn(4218).Branding.TIER_1]: { height: 16, width: 156 }, [fn(4218).Branding.TIER_2]: { height: 32, width: 78 }, [fn(4218).Branding.PREMIUM_GUILD]: { height: 17, width: 184 } };
const __initData5 = { [obj3.ACTIVE]: obj, [obj3.ERROR]: obj, [obj3.RESUB]: obj };
size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionDetails.tsx");

export default function PremiumSubscriptionDetails(subscription) {
  subscription = subscription.subscription;
  ({ style, onClickManagePremiumGuild } = subscription);
  const tmp = closure_20();
  let obj = { subscriptionId: subscription.id, renewal: true, analyticsLocations: useAnalyticsLocationsDefault().analyticsLocations, analyticsLocation: AnalyticsLocationDefault.PREMIUM_SUBSCRIPTION_DETAILS };
  const first = _slicedToArray(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  let tmp7Result = null;
  if (null != first) {
    obj = { style, children: null };
    const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    const intl = util.intl;
    obj1.children = intl.string(util.t.ITurwY);
    const items = [collapsedCategories(Text_Text.Text, obj1), , , , ];
    let tmp9Result = null != subscription.renewalMutations;
    if (tmp9Result) {
      tmp9Result = subscription.status !== constants4.CANCELED;
    }
    if (tmp9Result) {
      const obj2 = { subscription, renewalMutations: subscription.renewalMutations };
      tmp9Result = collapsedCategories(SubscriptionRenewalMutationsNoticeDefault, obj2);
    }
    items[1] = tmp9Result;
    tmp9Result = subscription.status === constants4.ACCOUNT_HOLD;
    if (tmp9Result) {
      obj3 = { subscription };
      tmp9Result = collapsedCategories(SubscriptionAccountHoldNoticeDefault, obj3);
    }
    items[2] = tmp9Result;
    obj4 = { subscription, renewalInvoicePreview: first, onClickManagePremiumGuild };
    items[3] = collapsedCategories(PremiumSubscriptionHeader, obj4);
    const obj5 = { style: tmp.desktopSubtext, variant: "text-sm/medium", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t["MTG+3O"]);
    items[4] = collapsedCategories(Text_Text.Text, obj5);
    obj.children = items;
    tmp7Result = closure_1_19(React7, obj);
  }
  return tmp7Result;
};
export const onCancelClick = function onCancelClick(subscription, analyticsLocations) {
  _require = subscription;
  importDefault = analyticsLocations;
  let obj = require("PremiumAnalyticsUtils");
  const result = obj.trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations);
  if (obj2.isBoostOnlySubscription(subscription)) {
    let tmp4ResultResult = handleCancelSubscription(subscription, analyticsLocations);
  } else {
    obj = {
      subscription,
      mode: require("PremiumPlanWhatYouLoseActionSheet").WhatYouLoseMode.CANCEL,
      onContinue(arg0) {
          return handleCancelSubscription(closure_0, closure_1, arg0);
        }
    };
    tmp4ResultResult = openPremiumPlanWhatYouLoseActionSheetDefault(obj);
    const tmp4Result = openPremiumPlanWhatYouLoseActionSheetDefault;
  }
  return tmp4ResultResult;
};
export { handleManageSubscription };
export { onResubscribeClick };
export { PremiumSubscriptionHeader };