// === Module 13721: PremiumSubscriptionDetails ===

// Module 13721 (PremiumSubscriptionDetails)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4483 */;
import Text_Text from "Text/Text" /* 4825 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7495 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7515 */;
import PremiumBundledPlansUtils from "PremiumBundledPlansUtils" /* 7739 */;
import _modDef8416 from "module_8416" /* 8416 */;
import _modDef9582 from "module_9582" /* 9582 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 11011 */;
import _modDef11058 from "module_11058" /* 11058 */;
import _modDef11059 from "module_11059" /* 11059 */;
import _modDef11060 from "module_11060" /* 11060 */;
import _modDef11061 from "module_11061" /* 11061 */;
import _modDef11062 from "module_11062" /* 11062 */;
import _modDef11064 from "module_11064" /* 11064 */;
import _modDef11067 from "module_11067" /* 11067 */;
import _modDef13722 from "module_13722" /* 13722 */;
import _modDef13723 from "module_13723" /* 13723 */;
import _modDef13724 from "module_13724" /* 13724 */;
import _modDef13725 from "module_13725" /* 13725 */;
import _modDef13726 from "module_13726" /* 13726 */;
import _modDef13727 from "module_13727" /* 13727 */;
import _modDef13728 from "module_13728" /* 13728 */;
import _modDef13729 from "module_13729" /* 13729 */;
import _modDef13730 from "module_13730" /* 13730 */;
import _modDef13731 from "module_13731" /* 13731 */;
import _modDef13732 from "module_13732" /* 13732 */;
import _modDef13733 from "module_13733" /* 13733 */;
import _modDef13734 from "module_13734" /* 13734 */;
import _modDef13735 from "module_13735" /* 13735 */;
import _modDef13736 from "module_13736" /* 13736 */;
import _modDef13737 from "module_13737" /* 13737 */;
import _modDef13738 from "module_13738" /* 13738 */;
import _modDef13739 from "module_13739" /* 13739 */;
import _modDef13740 from "module_13740" /* 13740 */;
import _modDef13741 from "module_13741" /* 13741 */;
import _modDef13742 from "module_13742" /* 13742 */;
import _modDef13743 from "module_13743" /* 13743 */;
import _modDef13744 from "module_13744" /* 13744 */;
import PremiumPlanWhatYouLoseActionSheet from "PremiumPlanWhatYouLoseActionSheet" /* 13746 */;
import PremiumSubscriptionInvoice from "PremiumSubscriptionInvoice" /* 13758 */;
import SubscriptionRenewalMutationsNoticeDefault from "SubscriptionRenewalMutationsNotice" /* 13759 */;
import SubscriptionAccountHoldNoticeDefault from "SubscriptionAccountHoldNotice" /* 13760 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import IAPStore from "IAPStore" /* 7570 */;

const require = globalThis.__r;

const openPremiumPlanWhatYouLoseActionSheetDefault = tmp4(13745);
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const obj4 = { subscription, analyticsLocations, fromStep, toStep: require("PremiumAnalyticsUtils").STEP_ANALYTICS_NAMES[require("PremiumAnalyticsUtils").CancellationFlowSteps.MOBILE_SUBSCRIPTION_MANAGE] };
            const result = require("PremiumAnalyticsUtils").trackPremiumSubscriptionCancellationFlowStep(obj4);
            let isPurchasedViaApple;
            if (subscription != null) {
              isPurchasedViaApple = subscription.isPurchasedViaApple;
            }
            if (isPurchasedViaApple) {
              c4 = 1;
              c3 = 1;
              const obj5 = { value: require("IAPUtils").manageSubscription(), done: false };
              return obj5;
            } else {
              let isPurchasedViaGoogle;
              if (subscription != null) {
                isPurchasedViaGoogle = subscription.isPurchasedViaGoogle;
              }
              if (isPurchasedViaGoogle) {
                closure_2_8.openURL(require("PremiumUtils").getExternalSubscriptionMethodUrl(subscription.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
                const tmp17Result2 = require("PremiumUtils");
              }
            }
            obj7 = require("PremiumAnalyticsUtils");
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
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
      const productIdFromSubscription = require("PremiumBundledPlansUtils").getProductIdFromSubscription(subscription, false);
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
      let obj = require("PremiumBundledPlansUtils");
      const obj4 = { navigation, analyticsLocation: null, analyticsLocations: null, showCurrentPlan: null, allowYearlyBundles: null, predicate: null };
      const obj5 = { page: constants.USER_SETTINGS, section: constants2.SETTINGS_PREMIUM };
      obj4.analyticsLocation = obj5;
      obj4.analyticsLocations = analyticsLocations;
      obj4.showCurrentPlan = !hasActiveTrial;
      obj4.allowYearlyBundles = flag;
      obj4.predicate = function predicate(interval) {
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
      const result = require("launchPremiumPlanSelect").launchPremiumPlanSelect(obj4);
      const obj3 = require("launchPremiumPlanSelect");
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
        const obj2 = { value, done: true };
        return obj2;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp2;
            if (isACOM.isACOM) {
              const obj5 = { requestIdentifier: null, subscriptionId: null };
              const obj9 = require("BillingActionCreators");
              obj5.requestIdentifier = require("v1").v4();
              obj5.subscriptionId = isACOM.id;
              c2 = 1;
              c3 = 1;
              obj8 = { value: obj9.resubscribeGenericSubscription(obj5, true), done: false };
              return obj8;
            } else if (isACOM.isPurchasedViaApple) {
              c2 = 3;
              c3 = 1;
              const obj10 = { value: require("IAPUtils").manageSubscription(), done: false };
              return obj10;
            } else if (isACOM.isPurchasedViaGoogle) {
              closure_2_8.openURL(require("PremiumUtils").getExternalSubscriptionMethodUrl(isACOM.paymentGateway, "SUBSCRIPTION_MANAGEMENT"));
              const obj6 = require("PremiumUtils");
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            c2 = 2;
            c3 = 1;
            const obj13 = { value: closure_129_0(closure_129_2[53]).fetchSubscriptions(), done: false };
            return obj13;
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj14 = { value, done: true };
            return obj14;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
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
    obj5 = subscription(closure_2[57]);
    appleSubscriptionOwnership = obj5.useAppleSubscriptionOwnership(subscription);
    isMismatchResult = appleSubscriptionOwnership.isMismatch();
    obj7 = subscription(closure_2[11]);
    premiumBranding = obj7.getPremiumBranding(subscription);
    analyticsLocations = closure_1(closure_2[58])().analyticsLocations;
    if (premiumBranding === subscription(closure_2[11]).Branding.PREMIUM_GUILD) {
      tmp2Result = tmp2(tmp3[11]);
      coercedPremiumGuildSubscriptionStatus = tmp2Result.getCoercedPremiumGuildSubscriptionStatus(subscription);
      tmp2Result1 = tmp2(tmp3[11]);
      obj1 = { subscription: null, user: null, price: null, renewalInvoicePreview: null };
      obj1.subscription = subscription;
      obj1.user = stateFromStores;
      tmp16 = null;
      priceString = undefined;
      if (stateFromStores1 != null) {
        priceString = stateFromStores1.priceString;
      }
      obj1.price = priceString;
      obj1.renewalInvoicePreview = renewalInvoicePreview;
      premiumGuildHeaderDescription = tmp2Result1.getPremiumGuildHeaderDescription(obj1);
      tmp14 = coercedPremiumGuildSubscriptionStatus;
    } else {
      tmp6Result = tmp6(tmp3[11]);
      tmp39 = SubscriptionPlanInfo;
      tmp40 = SubscriptionPlanInfo[planIdFromInvoice];
      statusFromInvoice = tmp6Result.getStatusFromInvoice(subscription, renewalInvoicePreview);
      formatRateResult = null;
      str = "missing subscription planInfo";
      tmp41 = tmp6(tmp3[56])(null != tmp40, "missing subscription planInfo");
      tmp6Result1 = tmp6(tmp3[11]);
      obj34 = { subscription: null, planId: null, price: null, includePremiumGuilds: true };
      obj34.subscription = subscription;
      obj34.planId = planIdFromInvoice;
      if (null != stateFromStores1) {
        tmp2Result2 = tmp2(tmp3[59]);
        formatRateResult = tmp2Result2.formatRate(stateFromStores1.priceString, tmp40.interval, tmp40.intervalCount);
      }
      obj34.price = formatRateResult;
      premiumGuildHeaderDescription = tmp6Result1.getPlanDescription(obj34);
      tmp14 = statusFromInvoice;
    }
    tmp19 = tmp14 === SubscriptionStatusTypes.CANCELED;
    tmp18 = SubscriptionStatusTypes;
    if (tmp14 === SubscriptionStatusTypes.ACTIVE) {
      tmp21 = closure_21;
      ACTIVE = closure_21.ACTIVE;
    } else {
      tmp20 = closure_21;
      ACTIVE = tmp19 ? tmp20.RESUB : tmp20.ERROR;
    }
    isOnPlatformMatchingExternalPaymentGateway = !isMismatchResult;
    if (!isMismatchResult) {
      isOnPlatformMatchingExternalPaymentGateway = !tmp19;
    }
    if (isOnPlatformMatchingExternalPaymentGateway) {
      isOnPlatformMatchingExternalPaymentGateway = subscription.isOnPlatformMatchingExternalPaymentGateway;
    }
    tmp22 = isOnPlatformMatchingExternalPaymentGateway;
    if (isOnPlatformMatchingExternalPaymentGateway) {
      tmp2Result3 = tmp2(tmp3[60]);
      isAndroidResult = tmp2Result3.isAndroid();
      tmp24 = !isAndroidResult;
      if (isAndroidResult) {
        tmp25 = null;
        tmp24 = null == subscription.renewalMutations;
      }
      tmp22 = tmp24;
    }
    tmp26 = jsxs;
    tmp27 = View;
    obj35 = { style: null, children: null };
    items2 = [, ];
    items2[0] = tmp.container;
    items2[1] = global.style;
    obj35.style = items2;
    obj36 = { source: closure_22[premiumBranding][ACTIVE], style: tmp.header, children: null };
    obj37 = { style: tmp.logoContainer, children: null };
    tmp29 = jsx;
    obj38 = { source: closure_23[premiumBranding][ACTIVE], style: null };
    items3 = [, ];
    items3[0] = closure_24[premiumBranding][ACTIVE];
    items3[1] = tmp.wumpusImg;
    obj38.style = items3;
    tmp28 = ImageBackground;
    items4 = [, ];
    items4[0] = jsx(Image, obj38);
    obj39 = { source: closure_25[premiumBranding][ACTIVE], style: closure_26[premiumBranding] };
    items4[1] = jsx(Image, obj39);
    obj37.children = items4;
    items5 = [, , ];
    items5[0] = jsxs(View, obj37);
    obj40 = { style: closure_27[ACTIVE], children: premiumGuildHeaderDescription };
    items5[1] = jsx(tmp2(tmp3[61]).LegacyText, obj40);
    obj41 = { style: tmp.buttonContainer, children: null };
    tmp29Result = null;
    if (tmp19) {
      prop = undefined;
      if (subscription != null) {
        prop = subscription.isOnPlatformMatchingExternalPaymentGateway;
      }
      tmp29Result = null;
      if (prop) {
        obj42 = { style: null, children: null };
        obj42.style = tmp.buttonWrapper;
        obj43 = { onPress: null, variant: "primary-overlay", text: null, size: "sm", disabled: null, loading: null };
        tmp32 = closure_4;
        obj43.onPress = closure_4(async () => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
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
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_0 = tmp3;
                  tmp23(true);
                  c3 = 1;
                  c1 = 2;
                  c4 = 1;
                  const obj4 = { value: onResubscribeClick(subscription), done: false };
                  return obj4;
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
                const obj = { value, done: true };
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
        intl = tmp2(tmp3[63]).intl;
        obj43.text = intl.string(tmp2(tmp3[63]).t.lTCb0c);
        obj43.disabled = tmp9;
        obj43.loading = tmp9;
        obj42.children = tmp29(tmp2(tmp3[62]).Button, obj43);
        tmp29Result = tmp29(tmp27, obj42);
      }
    }
    items6 = [, , , ];
    items6[0] = tmp29Result;
    if (!tmp22) {
      items6[1] = null;
      tmp2Result4 = tmp2(tmp3[11]);
      tmp29Result1 = null;
      if (tmp2Result4.subscriptionHasPremiumGuildPlan(subscription)) {
        tmp29Result1 = null;
        if (null != onClickManagePremiumGuild) {
          obj44 = { style: null, children: null };
          obj44.style = tmp.buttonWrapper;
          obj45 = { onPress: null, variant: "primary-overlay", text: null, size: "sm" };
          obj45.onPress = onClickManagePremiumGuild;
          intl4 = tmp2(tmp3[63]).intl;
          obj45.text = intl4.string(tmp2(tmp3[63]).t.gIVkjm);
          obj44.children = tmp29(tmp2(tmp3[62]).Button, obj45);
          tmp29Result1 = tmp29(tmp27, obj44);
        }
      }
      items6[2] = tmp29Result1;
      tmp29Result2 = null;
      if (isOnPlatformMatchingExternalPaymentGateway) {
        obj46 = { accessibilityRole: "link", style: null, onPress: null, variant: "text-sm/medium", color: "text-overlay-light", children: null };
        obj46.style = tmp.cancelLink;
        obj46.onPress = function onPress() {
          closure_0 = subscription;
          closure_1 = analyticsLocations;
          const result = PremiumAnalyticsUtils.trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations);
          if (obj2.isBoostOnlySubscription(subscription)) {
            let tmp6ResultResult = handleCancelSubscription(subscription, analyticsLocations);
          } else {
            const obj3 = {
              subscription,
              mode: PremiumPlanWhatYouLoseActionSheet.WhatYouLoseMode.CANCEL,
              onContinue(arg0) {
                  return handleCancelSubscription(closure_0, closure_1, arg0);
                }
            };
            tmp6ResultResult = openPremiumPlanWhatYouLoseActionSheetDefault(obj3);
            const tmp6Result = openPremiumPlanWhatYouLoseActionSheetDefault;
          }
          return tmp6ResultResult;
        };
        intl5 = tmp2(tmp3[63]).intl;
        obj46.children = intl5.string(tmp2(tmp3[63]).t["ETE/oC"]);
        tmp29Result2 = tmp29(tmp2(tmp3[64]).Text, obj46);
      }
      items6[3] = tmp29Result2;
      obj41.children = items6;
      items5[2] = tmp26(tmp27, obj41);
      obj36.children = items5;
      items7 = [, ];
      items7[0] = tmp26(tmp28, obj36);
      tmp26Result = null;
      if (isMismatchResult) {
        obj47 = { accessibilityRole: "alert", style: null, children: null };
        obj47.style = tmp.appleAccountMismatchNotice;
        obj48 = { size: "sm", color: null };
        obj48.color = tmp6(tmp3[9]).colors.ICON_FEEDBACK_WARNING;
        items8 = [, ];
        items8[0] = tmp29(tmp2(tmp3[65]).WarningIcon, obj48);
        obj49 = { variant: "text-sm/medium", color: "text-strong", style: null, children: null };
        obj49.style = tmp.appleAccountMismatchNoticeText;
        intl6 = tmp2(tmp3[63]).intl;
        obj49.children = intl6.string(tmp2(tmp3[63]).t.meauFg);
        items8[1] = tmp29(tmp2(tmp3[64]).Text, obj49);
        obj47.children = items8;
        tmp26Result = tmp26(tmp27, obj47);
      }
      items7[1] = tmp26Result;
      obj35.children = items7;
      return tmp26(tmp27, obj35);
    } else {
      obj50 = { style: null, children: null };
      obj50.style = tmp.buttonWrapper;
      obj51 = { onPress: null, variant: "primary-overlay", text: null, size: "sm" };
      obj51.onPress = function onPress() {
        handleManageSubscription(subscription, closure_1, analyticsLocations);
      };
      if (subscription.status === tmp18.ACCOUNT_HOLD) {
        intl3 = tmp2(tmp3[63]).intl;
        stringResult = intl3.string(tmp2(tmp3[63]).t.SgX7Ra);
      } else {
        intl2 = tmp2(tmp3[63]).intl;
        stringResult = intl2.string(tmp2(tmp3[63]).t.gmVtgF);
      }
      obj51.text = stringResult;
      obj51 = tmp29(tmp2(tmp3[62]).Button, obj51);
      obj50.children = obj51;
      tmp29Result3 = tmp29(tmp27, obj50);
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, ImageBackground: closure_7, Linking: closure_8, View: closure_9 } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticsPages: closure_12, AnalyticsSections: map1, PaymentGateways: closure_14, SubscriptionStatusTypes: closure_15, USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING } = Constants);
const PremiumConstants = fn(1374);
({ SubscriptionIntervalTypes: closure_16, SubscriptionPlanInfo: closure_17 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let size = { height: 35, width: 49 };
const size1 = { height: 36, width: 51 };
const size2 = { width: 51, height: 36 };
let obj = { fontSize: 14, marginTop: 10, color: nativeDefault.unsafe_rawColors.WHITE };
const createStyles = fn(4829);
let obj3 = { title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING }, header: { padding: 16 }, wumpusImg: { marginRight: 10 }, logoContainer: { flexDirection: "row", alignItems: "center" }, container: null, buttonContainer: null, buttonWrapper: null, cancelLink: null, appleAccountMismatchNotice: null, appleAccountMismatchNoticeText: null, desktopSubtext: null };
let obj2 = { fontSize: 14, marginTop: 10, color: nativeDefault.unsafe_rawColors.BLACK };
obj3.container = { marginTop: 8, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.buttonContainer = { marginTop: 8, flexDirection: "row" };
obj3.buttonWrapper = { alignSelf: "flex-start", flexGrow: 0, flexShrink: 0, marginRight: 8 };
obj3.cancelLink = { alignSelf: "center", flexGrow: 0, flexShrink: 0, marginLeft: 16 };
let obj4 = { marginTop: 8, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.appleAccountMismatchNotice = { alignSelf: "stretch", flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, margin: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg };
obj3.appleAccountMismatchNoticeText = { flex: 1 };
obj3.desktopSubtext = { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
let closure_20 = createStyles.createStyles(obj3);
let obj7 = { ACTIVE: "active", RESUB: "resub", ERROR: "error" };
let obj8 = {};
let obj9 = {};
obj9[obj7.ACTIVE] = _modDef11061;
obj9[obj7.ERROR] = _modDef13722;
obj9[obj7.RESUB] = _modDef13723;
obj8[fn(4483).Branding.BUNDLE] = obj9;
let obj10 = {};
obj10[obj7.ACTIVE] = _modDef11058;
obj10[obj7.ERROR] = _modDef13722;
obj10[obj7.RESUB] = _modDef13723;
obj8[fn(4483).Branding.TIER_0] = obj10;
let obj11 = {};
obj11[obj7.ACTIVE] = _modDef11059;
obj11[obj7.ERROR] = _modDef13722;
obj11[obj7.RESUB] = _modDef13723;
obj8[fn(4483).Branding.TIER_1] = obj11;
let obj12 = {};
obj12[obj7.ACTIVE] = _modDef11060;
obj12[obj7.ERROR] = _modDef13722;
obj12[obj7.RESUB] = _modDef13723;
obj8[fn(4483).Branding.TIER_2] = obj12;
let obj13 = {};
obj13[obj7.ACTIVE] = _modDef11062;
obj13[obj7.ERROR] = _modDef13724;
obj13[obj7.RESUB] = _modDef13725;
obj8[fn(4483).Branding.PREMIUM_GUILD] = obj13;
let obj14 = {};
let obj15 = {};
obj15[obj7.ACTIVE] = _modDef13726;
obj15[obj7.ERROR] = _modDef13726;
obj15[obj7.RESUB] = _modDef13726;
obj14[fn(4483).Branding.BUNDLE] = obj15;
let obj16 = {};
obj16[obj7.ACTIVE] = _modDef9582;
obj16[obj7.ERROR] = _modDef13727;
obj16[obj7.RESUB] = _modDef13728;
obj14[fn(4483).Branding.TIER_0] = obj16;
let obj17 = {};
obj17[obj7.ACTIVE] = _modDef13729;
obj17[obj7.ERROR] = _modDef13730;
obj17[obj7.RESUB] = _modDef13731;
obj14[fn(4483).Branding.TIER_1] = obj17;
let obj18 = {};
obj18[obj7.ACTIVE] = _modDef11064;
obj18[obj7.ERROR] = _modDef13732;
obj18[obj7.RESUB] = _modDef13733;
obj14[fn(4483).Branding.TIER_2] = obj18;
let obj19 = {};
obj19[obj7.ACTIVE] = _modDef13734;
obj19[obj7.ERROR] = _modDef13735;
obj19[obj7.RESUB] = _modDef13736;
obj14[fn(4483).Branding.PREMIUM_GUILD] = obj19;
const __initData4 = { [fn(4483).Branding.BUNDLE]: { [obj7.ACTIVE]: size, [obj7.ERROR]: size, [obj7.RESUB]: size }, [fn(4483).Branding.TIER_0]: { [obj7.ACTIVE]: { height: 35, width: 29 }, [obj7.ERROR]: size1, [obj7.RESUB]: size1 }, [fn(4483).Branding.TIER_1]: { [obj7.ACTIVE]: { height: 35, width: 49 }, [obj7.ERROR]: size1, [obj7.RESUB]: size1 }, [fn(4483).Branding.TIER_2]: { [obj7.ACTIVE]: { height: 37, width: 49 }, [obj7.ERROR]: size1, [obj7.RESUB]: size1 }, [fn(4483).Branding.PREMIUM_GUILD]: { [obj7.ACTIVE]: { width: 51, height: 36 }, [obj7.ERROR]: size2, [obj7.RESUB]: size2 } };
let obj20 = {};
let obj21 = {};
obj21[obj7.ACTIVE] = _modDef13737;
obj21[obj7.ERROR] = _modDef13737;
obj21[obj7.RESUB] = _modDef13738;
obj20[fn(4483).Branding.BUNDLE] = obj21;
let obj22 = {};
obj22[obj7.ACTIVE] = _modDef11067;
obj22[obj7.ERROR] = _modDef11067;
obj22[obj7.RESUB] = _modDef13739;
obj20[fn(4483).Branding.TIER_0] = obj22;
let obj23 = {};
obj23[obj7.ACTIVE] = _modDef13740;
obj23[obj7.ERROR] = _modDef13740;
obj23[obj7.RESUB] = _modDef13741;
obj20[fn(4483).Branding.TIER_1] = obj23;
let obj24 = {};
obj24[obj7.ACTIVE] = _modDef8416;
obj24[obj7.ERROR] = _modDef8416;
obj24[obj7.RESUB] = _modDef13742;
obj20[fn(4483).Branding.TIER_2] = obj24;
let obj25 = {};
obj25[obj7.ACTIVE] = _modDef13743;
obj25[obj7.ERROR] = _modDef13743;
obj25[obj7.RESUB] = _modDef13744;
obj20[fn(4483).Branding.PREMIUM_GUILD] = obj25;
let dependencyMap = { [fn(4483).Branding.BUNDLE]: { height: 33, width: 205 }, [fn(4483).Branding.TIER_0]: { height: 32, width: 59 }, [fn(4483).Branding.TIER_1]: { height: 16, width: 156 }, [fn(4483).Branding.TIER_2]: { height: 32, width: 78 }, [fn(4483).Branding.PREMIUM_GUILD]: { height: 17, width: 184 } };
const __initData5 = { [obj7.ACTIVE]: obj, [obj7.ERROR]: obj, [obj7.RESUB]: obj2 };
size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionDetails.tsx");

export default function PremiumSubscriptionDetails(subscription) {
  subscription = subscription.subscription;
  ({ style, onClickManagePremiumGuild } = subscription);
  const tmp = closure_20();
  const obj = PremiumSubscriptionInvoice;
  const first = _slicedToArray(obj.useFetchSubscriptionInvoicePreview({ subscriptionId: subscription.id, renewal: true, analyticsLocations: useAnalyticsLocationsDefault().analyticsLocations, analyticsLocation: AnalyticsLocationDefault.PREMIUM_SUBSCRIPTION_DETAILS }), 1)[0];
  let tmp7Result = null;
  if (null != first) {
    const obj3 = { style, children: null };
    const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: null };
    const intl = util.intl;
    obj4.children = intl.string(util.t.ITurwY);
    const items = [collapsedCategories(Text_Text.Text, obj4), , , , ];
    let tmp9Result = null != subscription.renewalMutations;
    if (tmp9Result) {
      tmp9Result = subscription.status !== constants4.CANCELED;
    }
    if (tmp9Result) {
      const obj5 = { subscription, renewalMutations: subscription.renewalMutations };
      tmp9Result = collapsedCategories(SubscriptionRenewalMutationsNoticeDefault, obj5);
    }
    items[1] = tmp9Result;
    let tmp9Result2 = subscription.status === constants4.ACCOUNT_HOLD;
    if (tmp9Result2) {
      const obj6 = { subscription };
      tmp9Result2 = collapsedCategories(SubscriptionAccountHoldNoticeDefault, obj6);
    }
    items[2] = tmp9Result2;
    obj7 = { subscription, renewalInvoicePreview: first, onClickManagePremiumGuild };
    items[3] = collapsedCategories(PremiumSubscriptionHeader, obj7);
    obj8 = { style: tmp.desktopSubtext, variant: "text-sm/medium", children: null };
    const intl2 = util.intl;
    obj8.children = intl2.string(util.t["MTG+3O"]);
    items[4] = collapsedCategories(Text_Text.Text, obj8);
    obj3.children = items;
    tmp7Result = closure_1_19(React7, obj3);
  }
  return tmp7Result;
};
export const onCancelClick = function onCancelClick(subscription, analyticsLocations) {
  _require = subscription;
  importDefault = analyticsLocations;
  const result = require("PremiumAnalyticsUtils").trackPremiumSubscriptionCancellationStarted(subscription, analyticsLocations);
  const obj = require("PremiumAnalyticsUtils");
  const tmp = _require;
  if (obj2.isBoostOnlySubscription(subscription)) {
    let tmp4ResultResult = handleCancelSubscription(subscription, analyticsLocations);
  } else {
    const obj3 = {
      subscription,
      mode: tmp(13746).WhatYouLoseMode.CANCEL,
      onContinue(arg0) {
          return handleCancelSubscription(closure_0, closure_1, arg0);
        }
    };
    tmp4ResultResult = openPremiumPlanWhatYouLoseActionSheetDefault(obj3);
    const tmp4Result = openPremiumPlanWhatYouLoseActionSheetDefault;
  }
  return tmp4ResultResult;
};
export { handleManageSubscription };
export { onResubscribeClick };
export { PremiumSubscriptionHeader };