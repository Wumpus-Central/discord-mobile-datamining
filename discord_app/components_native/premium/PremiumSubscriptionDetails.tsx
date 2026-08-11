// discord_app/components_native/premium/PremiumSubscriptionDetails.tsx
import registerAsset from "registerAsset";
import updateProduct from "updateProduct";
import closure_5 from "registerAsset";
import get_ActivityIndicator from "registerAsset";
import mergeGuildAvatar from "mergeGuildAvatar";
import closure_11 from "updateProduct";
import ME from "ME";
import { SubscriptionPlanInfo } from "GuildFeatures";
import jsxProd from "registerAsset";
import createCacheKey from "createCacheKey";
import { QUICK_SWITCHER } from "../../modules/app_analytics/AnalyticsLocation.tsx";
import { context } from "../../modules/app_analytics/useAnalyticsLocations.tsx";
import { launchPremiumPlanSelect } from "../../modules/premium/native/launchPremiumPlanSelect.tsx";
import { openPremiumPlanWhatYouLoseActionSheet } from "../../modules/premium/native/openPremiumPlanWhatYouLoseActionSheet.tsx";
import { PaymentFlowStep } from "../../modules/premium/native/PremiumAnalyticsUtils.tsx";
import { WhatYouLoseItem } from "../../modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx";
import { createSubscriptionInvoicePreview } from "../../modules/premium/PremiumSubscriptionInvoice.tsx";
import { getPremiumPlanItem } from "../../utils/PremiumUtils.tsx";

let USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
let c9;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_6;
let error;
let map1;
let metroImportAll;
const require = arg1;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c3 = 0;
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
          return { value: "HermesInternal", done: null };
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
              const obj1 = { subscription: null, analyticsLocations: null, fromStep: null, toStep: null };
              obj1[0] = callback;
              obj1[1] = closure_1;
              obj1[2] = dependencyMap;
              obj1[3] = callback(7376).STEP_ANALYTICS_NAMES[callback(undefined, 7376).CancellationFlowSteps.MOBILE_SUBSCRIPTION_MANAGE];
              const result = callback(7376).trackPremiumSubscriptionCancellationFlowStep(obj1);
              let isPurchasedViaApple;
              if (callback != null) {
                isPurchasedViaApple = tmp15.isPurchasedViaApple;
              }
              if (isPurchasedViaApple) {
                let tmp18Result = tmp18(7423);
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
                  tmp18Result = tmp18(3966);
                  outer1_8.openURL(tmp18Result.getExternalSubscriptionMethodUrl(tmp15.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
                }
              }
              const obj7 = callback(7376);
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
          return { value: "HermesInternal", done: null };
        } catch (tmp9) {
          c3 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  const _handleCancelSubscription = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function onResubscribeClick(outer1_0) {
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
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let closure_1 = tmp2;
              if (lib.isACOM) {
                const obj1 = { requestIdentifier: null, subscriptionId: null };
                const obj9 = lib(6885);
                obj1[0] = lib(514).v4();
                obj1[1] = tmp25.id;
                dependencyMap = 1;
                c3 = 1;
                let obj2 = { value: null, done: false };
                obj2[0] = obj9.resubscribeGenericSubscription(obj1, true);
                return obj2;
              } else if (tmp25.isPurchasedViaApple) {
                let obj6 = lib(7423);
                dependencyMap = 3;
                c3 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = obj6.manageSubscription();
                return obj3;
              } else if (tmp25.isPurchasedViaGoogle) {
                let obj5 = lib(3966);
                outer1_8.openURL(obj5.getExternalSubscriptionMethodUrl(tmp25.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
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
              obj2 = lib(4623);
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
          return { value: "HermesInternal", done: null };
        } catch (tmp19) {
          c3 = tmp;
          throw tmp19;
        }
      }
    })();
  });
  const _onResubscribeClick = tmp;
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
    useNavigation = undefined;
    useState = undefined;
    analyticsLocations = undefined;
    tmp = BLACK();
    tmp2 = subscription;
    tmp3 = useState;
    obj = require("useNavigation");
    useNavigation = obj.useNavigation();
    obj2 = require("initialize");
    items = [];
    items[0] = View;
    stateFromStores = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      callback(_undefined[55])(null != currentUser, "PremiumSubscriptionHeader: currentUser cannot be undefined");
      return currentUser;
    });
    obj3 = require("initialize");
    items1 = [];
    items1[0] = View;
    stateFromStores1 = obj3.useStateFromStores(items1, () => {
      if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
        if (tmp.isACOM) {
          return null;
        } else {
          if (null != tmp.paymentGatewayPlanId) {
            if ("" !== tmp.paymentGatewayPlanId) {
              return outer1_11.getProduct(tmp.paymentGatewayPlanId);
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
    tmp6 = useNavigation;
    obj4 = require("getPremiumPlanItem");
    planIdFromInvoice = obj4.getPlanIdFromInvoice(subscription, renewalInvoicePreview);
    tmp8 = analyticsLocations(closure_5.useState(false), 2);
    [tmp9, useState] = tmp8;
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
      tmp20 = createStyles;
      ACTIVE = createStyles.ACTIVE;
    } else {
      tmp19 = createStyles;
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
    obj3 = { source: error[premiumBranding][ACTIVE], style: tmp.header, children: null };
    obj4 = { style: tmp.logoContainer, children: null };
    obj5 = { source: error[premiumBranding][ACTIVE], style: items3 };
    items3 = [, ];
    items3[0] = error[premiumBranding][ACTIVE];
    items3[1] = tmp.wumpusImg;
    tmp29 = ImageBackground;
    items4 = [, ];
    items4[0] = jsx(Image, obj5);
    obj6 = { source: error[premiumBranding][ACTIVE], style: error[premiumBranding] };
    items4[1] = jsx(Image, obj6);
    obj4[1] = items4;
    items5 = [, , ];
    items5[0] = jsxs(View, obj4);
    obj7 = { style: error[ACTIVE], children: premiumGuildHeaderDescription };
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
        tmp32 = updateProduct;
        obj10[0] = updateProduct(function*() {
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
              return { value: "HermesInternal", done: null };
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
                  let closure_0 = tmp3;
                  outer1_2(true);
                  let c3 = 1;
                  c1 = 2;
                  c4 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = outer1_28(outer1_0);
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
                return { value: "HermesInternal", done: null };
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
            let tmp6ResultResult = outer1_26(tmp, analyticsLocations);
          } else {
            obj = { subscription: null, mode: null, onContinue: null };
            obj[0] = tmp;
            obj[1] = subscription(tmp4[47]).WhatYouLoseMode.CANCEL;
            obj[2] = function onContinue(arg0) {
              return outer1_26(closure_0, closure_1, arg0);
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
        if (subscription.status === outer1_14.ACCOUNT_HOLD) {
          let obj = subscription(_undefined[11]);
          outer1_8.openURL(obj.getExternalSubscriptionMethodUrl(tmp.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
        } else {
          const hasActiveTrial = tmp.hasActiveTrial;
          obj = { navigation: null, analyticsLocation: null, analyticsLocations: null, showCurrentPlan: null, predicate: null };
          obj[0] = tmp2;
          obj = { page: null, section: null };
          obj[0] = outer1_12.USER_SETTINGS;
          obj[1] = outer1_13.SETTINGS_PREMIUM;
          obj[1] = obj;
          obj[2] = tmp3;
          obj[3] = !hasActiveTrial;
          let prop;
          if (hasActiveTrial) {
            prop = tmp10(tmp11[49]).excludeNitroOnlyPlansForActiveTrial;
          }
          obj[4] = prop;
          const result = subscription(_undefined[48]).launchPremiumPlanSelect(obj);
          const obj2 = subscription(_undefined[48]);
          tmp10 = subscription;
          tmp11 = _undefined;
        }
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
({ Image: closure_6, ImageBackground: error, Linking: metroImportAll, View: c9 } = get_ActivityIndicator);
({ AnalyticsPages: closure_12, AnalyticsSections: map1, SubscriptionStatusTypes: closure_14, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = ME);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let obj = { height: 35, width: 49 };
obj = { height: 36, width: 51 };
obj = { width: 51, height: 36 };
let obj1 = { fontSize: 14, marginTop: 10, color: require("Themes").unsafe_rawColors.WHITE };
let obj3 = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, header: { padding: 16 }, wumpusImg: { marginRight: 10 }, logoContainer: { flexDirection: "row", alignItems: "center" }, container: null, buttonContainer: null, buttonWrapper: null, cancelLink: null, desktopSubtext: null };
let obj2 = { fontSize: 14, marginTop: 10, color: require("Themes").unsafe_rawColors.BLACK };
obj3[4] = { marginTop: 8, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
obj3[5] = { marginTop: 8, flexDirection: "row" };
obj3[6] = { alignSelf: "flex-start", flexGrow: 0, flexShrink: 0, marginRight: 8 };
obj3[7] = { alignSelf: "center", flexGrow: 0, flexShrink: 0, marginLeft: 16 };
obj3[8] = { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
let closure_18 = createCacheKey.createStyles(obj3);
createCacheKey = { ACTIVE: "active", RESUB: "resub", ERROR: "error" };
let obj6 = {};
let obj7 = {};
obj7[createCacheKey.ACTIVE] = require("registerAsset");
obj7[createCacheKey.ERROR] = require("registerAsset");
obj7[createCacheKey.RESUB] = require("registerAsset");
obj6[require("getPremiumPlanItem").Branding.BUNDLE] = obj7;
let obj8 = {};
obj8[createCacheKey.ACTIVE] = require("registerAsset");
obj8[createCacheKey.ERROR] = require("registerAsset");
obj8[createCacheKey.RESUB] = require("registerAsset");
obj6[require("getPremiumPlanItem").Branding.TIER_0] = obj8;
let obj9 = {};
obj9[createCacheKey.ACTIVE] = require("registerAsset");
obj9[createCacheKey.ERROR] = require("registerAsset");
obj9[createCacheKey.RESUB] = require("registerAsset");
obj6[require("getPremiumPlanItem").Branding.TIER_1] = obj9;
let obj10 = {};
obj10[createCacheKey.ACTIVE] = require("registerAsset");
obj10[createCacheKey.ERROR] = require("registerAsset");
obj10[createCacheKey.RESUB] = require("registerAsset");
obj6[require("getPremiumPlanItem").Branding.TIER_2] = obj10;
let obj11 = {};
obj11[createCacheKey.ACTIVE] = require("registerAsset");
obj11[createCacheKey.ERROR] = require("registerAsset");
obj11[createCacheKey.RESUB] = require("registerAsset");
obj6[require("getPremiumPlanItem").Branding.PREMIUM_GUILD] = obj11;
let obj12 = {};
let obj13 = {};
obj13[createCacheKey.ACTIVE] = require("registerAsset");
obj13[createCacheKey.ERROR] = require("registerAsset");
obj13[createCacheKey.RESUB] = require("registerAsset");
obj12[require("getPremiumPlanItem").Branding.BUNDLE] = obj13;
let obj14 = {};
obj14[createCacheKey.ACTIVE] = require("registerAsset");
obj14[createCacheKey.ERROR] = require("registerAsset");
obj14[createCacheKey.RESUB] = require("registerAsset");
obj12[require("getPremiumPlanItem").Branding.TIER_0] = obj14;
const obj15 = {};
obj15[createCacheKey.ACTIVE] = require("registerAsset");
obj15[createCacheKey.ERROR] = require("registerAsset");
obj15[createCacheKey.RESUB] = require("registerAsset");
obj12[require("getPremiumPlanItem").Branding.TIER_1] = obj15;
const obj16 = {};
obj16[createCacheKey.ACTIVE] = require("registerAsset");
obj16[createCacheKey.ERROR] = require("registerAsset");
obj16[createCacheKey.RESUB] = require("registerAsset");
obj12[require("getPremiumPlanItem").Branding.TIER_2] = obj16;
const obj17 = {};
obj17[createCacheKey.ACTIVE] = require("registerAsset");
obj17[createCacheKey.ERROR] = require("registerAsset");
obj17[createCacheKey.RESUB] = require("registerAsset");
obj12[require("getPremiumPlanItem").Branding.PREMIUM_GUILD] = obj17;
let closure_22 = { [arg1(3966).Branding.BUNDLE]: { [createCacheKey.ACTIVE]: obj, [createCacheKey.ERROR]: obj, [createCacheKey.RESUB]: obj }, [arg1(3966).Branding.TIER_0]: { [createCacheKey.ACTIVE]: { height: 35, width: 29 }, [createCacheKey.ERROR]: obj, [createCacheKey.RESUB]: obj }, [arg1(3966).Branding.TIER_1]: { [createCacheKey.ACTIVE]: { height: 35, width: 49 }, [createCacheKey.ERROR]: obj, [createCacheKey.RESUB]: obj }, [arg1(3966).Branding.TIER_2]: { [createCacheKey.ACTIVE]: { height: 37, width: 49 }, [createCacheKey.ERROR]: obj, [createCacheKey.RESUB]: obj }, [arg1(3966).Branding.PREMIUM_GUILD]: { [createCacheKey.ACTIVE]: { width: 51, height: 36 }, [createCacheKey.ERROR]: obj, [createCacheKey.RESUB]: obj } };
const obj18 = {};
const obj19 = {};
obj19[createCacheKey.ACTIVE] = require("registerAsset");
obj19[createCacheKey.ERROR] = require("registerAsset");
obj19[createCacheKey.RESUB] = require("registerAsset");
obj18[require("getPremiumPlanItem").Branding.BUNDLE] = obj19;
const obj20 = {};
obj20[createCacheKey.ACTIVE] = require("registerAsset");
obj20[createCacheKey.ERROR] = require("registerAsset");
obj20[createCacheKey.RESUB] = require("registerAsset");
obj18[require("getPremiumPlanItem").Branding.TIER_0] = obj20;
const obj21 = {};
obj21[createCacheKey.ACTIVE] = require("registerAsset");
obj21[createCacheKey.ERROR] = require("registerAsset");
obj21[createCacheKey.RESUB] = require("registerAsset");
obj18[require("getPremiumPlanItem").Branding.TIER_1] = obj21;
const obj22 = {};
obj22[createCacheKey.ACTIVE] = require("registerAsset");
obj22[createCacheKey.ERROR] = require("registerAsset");
obj22[createCacheKey.RESUB] = require("registerAsset");
obj18[require("getPremiumPlanItem").Branding.TIER_2] = obj22;
const obj23 = {};
obj23[createCacheKey.ACTIVE] = require("registerAsset");
obj23[createCacheKey.ERROR] = require("registerAsset");
obj23[createCacheKey.RESUB] = require("registerAsset");
obj18[require("getPremiumPlanItem").Branding.PREMIUM_GUILD] = obj23;
let closure_24 = { [arg1(3966).Branding.BUNDLE]: { height: 33, width: 205 }, [arg1(3966).Branding.TIER_0]: { height: 32, width: 59 }, [arg1(3966).Branding.TIER_1]: { height: 16, width: 156 }, [arg1(3966).Branding.TIER_2]: { height: 32, width: 78 }, [arg1(3966).Branding.PREMIUM_GUILD]: { height: 17, width: 184 } };
let closure_25 = { [createCacheKey.ACTIVE]: obj1, [createCacheKey.ERROR]: obj1, [createCacheKey.RESUB]: obj2 };
let obj4 = { marginTop: 8, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
let result = require("noop").fileFinishedImporting("components_native/premium/PremiumSubscriptionDetails.tsx");

export default function PremiumSubscriptionDetails(subscription) {
  let onClickManagePremiumGuild;
  let style;
  subscription = subscription.subscription;
  ({ style, onClickManagePremiumGuild } = subscription);
  const tmp = callback5();
  let obj = createSubscriptionInvoicePreview;
  obj = { subscriptionId: subscription.id, renewal: true, analyticsLocations: context().analyticsLocations, analyticsLocation: QUICK_SWITCHER.PREMIUM_SUBSCRIPTION_DETAILS };
  const first = callback(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  let tmp7Result = null;
  if (null != first) {
    obj = { style: null, children: null };
    obj[0] = style;
    const obj1 = { style: null, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    obj1[0] = tmp.title;
    const intl = tmp4(1236).intl;
    obj1[4] = intl.string(tmp4(1236).t.ITurwY);
    const items = [callback3(tmp4(4299).Text, obj1), , , , ];
    let tmp9Result = null != subscription.renewalMutations;
    if (tmp9Result) {
      tmp9Result = subscription.status !== constants3.CANCELED;
    }
    if (tmp9Result) {
      const obj2 = { subscription: null, renewalMutations: null };
      obj2[0] = subscription;
      obj2[1] = subscription.renewalMutations;
      tmp9Result = tmp9(tmp2(7635), obj2);
    }
    items[1] = tmp9Result;
    tmp9Result = subscription.status === constants3.ACCOUNT_HOLD;
    if (tmp9Result) {
      const obj3 = { subscription: null };
      obj3[0] = subscription;
      tmp9Result = tmp9(tmp2(7636), obj3);
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
    items[4] = callback3(tmp4(4299).Text, obj5);
    obj[1] = items;
    tmp7Result = closure_17(closure_9, obj);
    const tmp7 = closure_17;
    const tmp8 = closure_9;
  }
  return tmp7Result;
};
export const onCancelClick = function onCancelClick(subscription, analyticsLocations) {
  const _require = subscription;
  const importDefault = analyticsLocations;
  let obj = _PaymentFlowStep;
  const result = obj.trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations);
  if (obj2.isBoostOnlySubscription(subscription)) {
    let tmp4ResultResult = handleCancelSubscription(subscription, analyticsLocations);
  } else {
    obj = { subscription: null, mode: null, onContinue: null };
    obj[0] = subscription;
    obj[1] = _WhatYouLoseItem.WhatYouLoseMode.CANCEL;
    obj[2] = function onContinue(arg0) {
      return outer1_26(closure_0, closure_1, arg0);
    };
    tmp4ResultResult = openPremiumPlanWhatYouLoseActionSheet(obj);
    const tmp4Result = openPremiumPlanWhatYouLoseActionSheet;
  }
  return tmp4ResultResult;
};
export const handleManageSubscription = function handleManageSubscription(subscription, registerAsset, analyticsLocations) {
  if (subscription.status === constants3.ACCOUNT_HOLD) {
    let obj = getPremiumPlanItem;
    closure_8.openURL(obj.getExternalSubscriptionMethodUrl(subscription.paymentGateway, "PAYMENT_SOURCE_MANAGEMENT"));
  } else {
    const hasActiveTrial = subscription.hasActiveTrial;
    obj = { navigation: null, analyticsLocation: null, analyticsLocations: null, showCurrentPlan: null, predicate: null };
    obj[0] = registerAsset;
    obj = { page: null, section: null };
    obj[0] = constants.USER_SETTINGS;
    obj[1] = constants2.SETTINGS_PREMIUM;
    obj[1] = obj;
    obj[2] = analyticsLocations;
    obj[3] = !hasActiveTrial;
    let prop;
    if (hasActiveTrial) {
      prop = tmp9(6873).excludeNitroOnlyPlansForActiveTrial;
    }
    obj[4] = prop;
    const result = launchPremiumPlanSelect.launchPremiumPlanSelect(obj);
    const obj2 = launchPremiumPlanSelect;
    tmp9 = require;
  }
};
export { onResubscribeClick };
export { PremiumSubscriptionHeader };