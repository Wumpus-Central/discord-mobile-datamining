// discord_app/components_native/premium/PremiumSubscriptionDetails.tsx
import c from "../../../_runtime/00576_c.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import Text_Text from "../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../common/FastImage.tsx";
import useAnalyticsLocationsDefault from "../../modules/app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../modules/app_analytics/AnalyticsLocation.tsx";
import PremiumBundledPlansUtils from "../../modules/premium/native/PremiumBundledPlansUtils.tsx";
import _modDef7532 from "../../../_runtime/metro/07532__.js";
import _modDef8423 from "../../../_runtime/metro/08423__.js";
import PremiumAnalyticsUtils from "../../modules/premium/native/PremiumAnalyticsUtils.tsx";
import _modDef10437 from "../../../_runtime/metro/10437__.js";
import _modDef10438 from "../../../_runtime/metro/10438__.js";
import _modDef10439 from "../../../_runtime/metro/10439__.js";
import _modDef10440 from "../../../_runtime/metro/10440__.js";
import _modDef10441 from "../../../_runtime/metro/10441__.js";
import _modDef10442 from "../../../_runtime/metro/10442__.js";
import _modDef10445 from "../../../_runtime/metro/10445__.js";
import _modDef14597 from "../../../_runtime/metro/14597__.js";
import _modDef14598 from "../../../_runtime/metro/14598__.js";
import _modDef14599 from "../../../_runtime/metro/14599__.js";
import _modDef14600 from "../../../_runtime/metro/14600__.js";
import _modDef14601 from "../../../_runtime/metro/14601__.js";
import _modDef14602 from "../../../_runtime/metro/14602__.js";
import _modDef14603 from "../../../_runtime/metro/14603__.js";
import _modDef14604 from "../../../_runtime/metro/14604__.js";
import _modDef14605 from "../../../_runtime/metro/14605__.js";
import _modDef14606 from "../../../_runtime/metro/14606__.js";
import _modDef14607 from "../../../_runtime/metro/14607__.js";
import _modDef14608 from "../../../_runtime/metro/14608__.js";
import _modDef14609 from "../../../_runtime/metro/14609__.js";
import _modDef14610 from "../../../_runtime/metro/14610__.js";
import _modDef14611 from "../../../_runtime/metro/14611__.js";
import _modDef14612 from "../../../_runtime/metro/14612__.js";
import _modDef14613 from "../../../_runtime/metro/14613__.js";
import _modDef14614 from "../../../_runtime/metro/14614__.js";
import _modDef14615 from "../../../_runtime/metro/14615__.js";
import _modDef14616 from "../../../_runtime/metro/14616__.js";
import _modDef14617 from "../../../_runtime/metro/14617__.js";
import _modDef14618 from "../../../_runtime/metro/14618__.js";
import _modDef14619 from "../../../_runtime/metro/14619__.js";
import PremiumPlanWhatYouLoseActionSheet from "../../modules/premium/native/PremiumPlanWhatYouLoseActionSheet.tsx";
import PremiumSubscriptionInvoice from "../../modules/premium/PremiumSubscriptionInvoice.tsx";
import SubscriptionRenewalMutationsNoticeDefault from "../../modules/premium/native/SubscriptionRenewalMutationsNotice.tsx";
import SubscriptionAccountHoldNoticeDefault from "../../modules/premium/native/SubscriptionAccountHoldNotice.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import UserStore from "../../stores/UserStore.tsx";
import IAPStore from "../../stores/native/IAPStore.android.tsx";

const openPremiumPlanWhatYouLoseActionSheetDefault = tmp4(14620);
require = fn;
function handleCancelSubscription() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_27 = async function _handleCancelSubscription() {
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
        return { value: "IconComponent", done: null };
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
            const obj4 = {
              subscription,
              analyticsLocations,
              fromStep,
              toStep:
                require("PremiumAnalyticsUtils").STEP_ANALYTICS_NAMES[
                  require("PremiumAnalyticsUtils").CancellationFlowSteps.MOBILE_SUBSCRIPTION_MANAGE
                ],
            };
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
                closure_2_6.openURL(
                  require("PremiumUtils").getExternalSubscriptionMethodUrl(
                    subscription.paymentGateway,
                    "SUBSCRIPTION_MANAGEMENT",
                  ),
                );
                const tmp17Result2 = require("PremiumUtils");
              }
            }
            const obj7 = require("PremiumAnalyticsUtils");
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
        return { value: "IconComponent", done: null };
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
    closure_6.openURL(
      require("PremiumUtils").getExternalSubscriptionMethodUrl(
        subscription.paymentGateway,
        "PAYMENT_SOURCE_MANAGEMENT",
      ),
    );
    const obj6 = require("PremiumUtils");
  } else {
    const hasActiveTrial = subscription.hasActiveTrial;
    dependencyMap = false;
    try {
      const productIdFromSubscription = require("PremiumBundledPlansUtils").getProductIdFromSubscription(
        subscription,
        false,
      );
      let tmp4 = require("ProductIds").AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription];
      let interval;
      if (tmp4 != null) {
        interval = tmp4.interval;
      }
      dependencyMap = interval === constants5.YEAR;
      let flag = false;
      if (subscription.paymentGateway === constants3.APPLE_ADVANCED_COMMERCE) {
        try {
          const productIdFromSubscription1 = require("PremiumBundledPlansUtils").getProductIdFromSubscription(
            subscription,
            true,
          );
          const tmp12 =
            require("ProductIds").AppStorePremiumProductIdsToPremiumBundledItems[productIdFromSubscription1];
          let interval1;
          if (tmp12 != null) {
            interval1 = tmp12.interval;
          }
          flag = interval1 === constants5.YEAR;
          const obj2 = require("PremiumBundledPlansUtils");
        } catch (err) {}
      }
      let obj = require("PremiumBundledPlansUtils");
      const obj4 = {
        navigation,
        analyticsLocation: null,
        analyticsLocations: null,
        showCurrentPlan: null,
        allowYearlyBundles: null,
        predicate: null,
      };
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
    } catch (err) {}
  }
}
function onResubscribeClick() {
  const self = this;
  const apply = closure_30.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_30 = async function _onResubscribeClick(arg0) {
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
        return { value: "IconComponent", done: null };
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
              obj9 = require("BillingActionCreators");
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
              closure_2_6.openURL(
                require("PremiumUtils").getExternalSubscriptionMethodUrl(
                  isACOM.paymentGateway,
                  "SUBSCRIPTION_MANAGEMENT",
                ),
              );
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
            const obj14 = { value, done: true };
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
        return { value: "IconComponent", done: null };
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
    tmp = closure_18();
    tmp2 = subscription;
    tmp3 = closure_2;
    obj = subscription(closure_2[54]);
    closure_1 = obj.useNavigation();
    obj2 = subscription(closure_2[55]);
    items = [];
    items[0] = closure_8;
    stateFromStores = obj2.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      closure_1(_undefined[56])(null != currentUser, "PremiumSubscriptionHeader: currentUser cannot be undefined");
      return currentUser;
    });
    obj3 = subscription(closure_2[55]);
    items1 = [];
    items1[0] = closure_9;
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
      tmp35 = SubscriptionPlanInfo;
      tmp36 = SubscriptionPlanInfo[planIdFromInvoice];
      statusFromInvoice = tmp6Result.getStatusFromInvoice(subscription, renewalInvoicePreview);
      formatRateResult = null;
      str = "missing subscription planInfo";
      tmp37 = tmp6(tmp3[56])(null != tmp36, "missing subscription planInfo");
      tmp6Result1 = tmp6(tmp3[11]);
      obj34 = { subscription: null, planId: null, price: null, includePremiumGuilds: true };
      obj34.subscription = subscription;
      obj34.planId = planIdFromInvoice;
      if (null != stateFromStores1) {
        tmp2Result2 = tmp2(tmp3[59]);
        formatRateResult = tmp2Result2.formatRate(stateFromStores1.priceString, tmp36.interval, tmp36.intervalCount);
      }
      obj34.price = formatRateResult;
      premiumGuildHeaderDescription = tmp6Result1.getPlanDescription(obj34);
      tmp14 = statusFromInvoice;
    }
    tmp18 = SubscriptionStatusTypes;
    tmp19 = tmp14 === SubscriptionStatusTypes.CANCELED;
    if (tmp14 === SubscriptionStatusTypes.ACTIVE) {
      tmp21 = closure_19;
      ACTIVE = closure_19.ACTIVE;
    } else {
      tmp20 = closure_19;
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
      tmp22 = null == subscription.renewalMutations;
    }
    if (tmp22) {
      tmp22 = subscription.status !== tmp18.BILLING_RETRY;
    }
    tmp23 = jsxs;
    tmp24 = View;
    obj35 = { style: null, children: null };
    items2 = [,];
    items2[0] = tmp.container;
    items2[1] = global.style;
    obj35.style = items2;
    obj36 = { style: tmp.header, children: null };
    tmp25 = jsx;
    obj37 = { source: closure_20[premiumBranding][ACTIVE], style: tmp.headerBackground };
    items3 = [, , ,];
    items3[0] = jsx(tmp6(tmp3[60]), obj37);
    obj38 = { style: tmp.logoContainer, children: null };
    obj39 = { source: closure_21[premiumBranding][ACTIVE], style: null };
    items4 = [,];
    items4[0] = closure_22[premiumBranding][ACTIVE];
    items4[1] = tmp.wumpusImg;
    obj39.style = items4;
    items5 = [,];
    items5[0] = jsx(tmp6(tmp3[60]), obj39);
    obj40 = { source: closure_23[premiumBranding][ACTIVE], style: closure_24[premiumBranding] };
    items5[1] = jsx(tmp6(tmp3[60]), obj40);
    obj38.children = items5;
    items3[1] = jsxs(View, obj38);
    obj41 = { style: closure_25[ACTIVE], children: premiumGuildHeaderDescription };
    items3[2] = jsx(tmp2(tmp3[61]).LegacyText, obj41);
    obj42 = { style: tmp.buttonContainer, children: null };
    tmp25Result = null;
    if (tmp19) {
      prop = undefined;
      if (subscription != null) {
        prop = subscription.isOnPlatformMatchingExternalPaymentGateway;
      }
      tmp25Result = null;
      if (prop) {
        obj43 = { style: null, children: null };
        obj43.style = tmp.buttonWrapper;
        obj44 = { onPress: null, variant: "primary-overlay", text: null, size: "sm", disabled: null, loading: null };
        tmp28 = closure_4;
        obj44.onPress = closure_4(async () => {
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
              return { value: "IconComponent", done: null };
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
                return { value: "IconComponent", done: null };
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
        obj44.text = intl.string(tmp2(tmp3[63]).t.lTCb0c);
        obj44.disabled = tmp9;
        obj44.loading = tmp9;
        obj43.children = tmp25(tmp2(tmp3[62]).Button, obj44);
        tmp25Result = tmp25(tmp24, obj43);
      }
    }
    items6 = [, , ,];
    items6[0] = tmp25Result;
    if (!tmp22) {
      items6[1] = null;
      tmp2Result3 = tmp2(tmp3[11]);
      tmp25Result1 = null;
      if (tmp2Result3.subscriptionHasPremiumGuildPlan(subscription)) {
        tmp25Result1 = null;
        if (null != onClickManagePremiumGuild) {
          obj45 = { style: null, children: null };
          obj45.style = tmp.buttonWrapper;
          obj46 = { onPress: null, variant: "primary-overlay", text: null, size: "sm" };
          obj46.onPress = onClickManagePremiumGuild;
          intl4 = tmp2(tmp3[63]).intl;
          obj46.text = intl4.string(tmp2(tmp3[63]).t.gIVkjm);
          obj45.children = tmp25(tmp2(tmp3[62]).Button, obj46);
          tmp25Result1 = tmp25(tmp24, obj45);
        }
      }
      items6[2] = tmp25Result1;
      tmp25Result2 = null;
      if (isOnPlatformMatchingExternalPaymentGateway) {
        obj47 = {
          accessibilityRole: "link",
          style: null,
          onPress: null,
          variant: "text-sm/medium",
          color: "text-overlay-light",
          children: null,
        };
        obj47.style = tmp.cancelLink;
        obj47.onPress = function onPress() {
          closure_0 = subscription;
          closure_1 = analyticsLocations;
          const result = PremiumAnalyticsUtils.trackPremiumSubscriptionCancellationStarted(
            subscription,
            analyticsLocations,
          );
          if (obj2.isBoostOnlySubscription(subscription)) {
            let tmp6ResultResult = handleCancelSubscription(subscription, analyticsLocations);
          } else {
            const obj3 = {
              subscription,
              mode: PremiumPlanWhatYouLoseActionSheet.WhatYouLoseMode.CANCEL,
              onContinue(arg0) {
                return handleCancelSubscription(closure_0, closure_1, arg0);
              },
            };
            tmp6ResultResult = openPremiumPlanWhatYouLoseActionSheetDefault(obj3);
            const tmp6Result = openPremiumPlanWhatYouLoseActionSheetDefault;
          }
          return tmp6ResultResult;
        };
        intl5 = tmp2(tmp3[63]).intl;
        obj47.children = intl5.string(tmp2(tmp3[63]).t["ETE/oC"]);
        tmp25Result2 = tmp25(tmp2(tmp3[64]).Text, obj47);
      }
      items6[3] = tmp25Result2;
      obj42.children = items6;
      items3[3] = tmp23(tmp24, obj42);
      obj36.children = items3;
      items7 = [,];
      items7[0] = tmp23(tmp24, obj36);
      tmp23Result = null;
      if (isMismatchResult) {
        obj48 = { accessibilityRole: "alert", style: null, children: null };
        obj48.style = tmp.appleAccountMismatchNotice;
        obj49 = { size: "sm", color: null };
        obj49.color = tmp6(tmp3[9]).colors.ICON_FEEDBACK_WARNING;
        items8 = [,];
        items8[0] = tmp25(tmp2(tmp3[65]).WarningIcon, obj49);
        obj50 = { variant: "text-sm/medium", color: "text-strong", style: null, children: null };
        obj50.style = tmp.appleAccountMismatchNoticeText;
        intl6 = tmp2(tmp3[63]).intl;
        obj50.children = intl6.string(tmp2(tmp3[63]).t.meauFg);
        items8[1] = tmp25(tmp2(tmp3[64]).Text, obj50);
        obj48.children = items8;
        tmp23Result = tmp23(tmp24, obj48);
      }
      items7[1] = tmp23Result;
      obj35.children = items7;
      return tmp23(tmp24, obj35);
    } else {
      obj51 = { style: null, children: null };
      obj51.style = tmp.buttonWrapper;
      obj52 = { onPress: null, variant: "primary-overlay", text: null, size: "sm" };
      obj52.onPress = function onPress() {
        handleManageSubscription(subscription, closure_1, analyticsLocations);
      };
      if (subscription.status === tmp18.ACCOUNT_HOLD) {
        intl3 = tmp2(tmp3[63]).intl;
        stringResult = intl3.string(tmp2(tmp3[63]).t.SgX7Ra);
      } else {
        intl2 = tmp2(tmp3[63]).intl;
        stringResult = intl2.string(tmp2(tmp3[63]).t.gmVtgF);
      }
      obj52.text = stringResult;
      obj52 = tmp25(tmp2(tmp3[62]).Button, obj52);
      obj51.children = obj52;
      tmp25Result3 = tmp25(tmp24, obj51);
    }
    return;
  }
}
get_ActivityIndicator = fn(17);
({ Linking: metroRequire, View: closure_7, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1087);
({
  AnalyticsPages: c10,
  AnalyticsSections: closure_11,
  PaymentGateways: closure_12,
  SubscriptionStatusTypes: map1,
  USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING,
} = Constants);
const PremiumConstants = fn(1394);
({ SubscriptionIntervalTypes: closure_14, SubscriptionPlanInfo: closure_15 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
let size = { height: 35, width: 49 };
const size1 = { height: 36, width: 51 };
const size2 = { width: 51, height: 36 };
let obj = { fontSize: 14, marginTop: 10, color: nativeDefault.unsafe_rawColors.WHITE };
const createStyles = fn(4969);
let obj3 = {
  title: { paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING },
  header: { padding: 16 },
  headerBackground: null,
  wumpusImg: null,
  logoContainer: null,
  container: null,
  buttonContainer: null,
  buttonWrapper: null,
  cancelLink: null,
  appleAccountMismatchNotice: null,
  appleAccountMismatchNoticeText: null,
  desktopSubtext: null,
};
let obj4 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.width = undefined;
obj4.height = undefined;
obj3.headerBackground = obj4;
obj3.wumpusImg = { marginRight: 10 };
obj3.logoContainer = { flexDirection: "row", alignItems: "center" };
let obj2 = { fontSize: 14, marginTop: 10, color: nativeDefault.unsafe_rawColors.BLACK };
obj3.container = { marginTop: 8, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.buttonContainer = { marginTop: 8, flexDirection: "row" };
obj3.buttonWrapper = { alignSelf: "flex-start", flexGrow: 0, flexShrink: 0, marginRight: 8 };
obj3.cancelLink = { alignSelf: "center", flexGrow: 0, flexShrink: 0, marginLeft: 16 };
let obj5 = { marginTop: 8, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj3.appleAccountMismatchNotice = {
  alignSelf: "stretch",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  margin: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_12,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING,
  borderRadius: nativeDefault.radii.lg,
};
obj3.appleAccountMismatchNoticeText = { flex: 1 };
obj3.desktopSubtext = { marginTop: 8, paddingHorizontal: USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING };
const collapsedCategories = createStyles.createStyles(obj3);
let obj8 = { ACTIVE: "active", RESUB: "resub", ERROR: "error" };
let obj9 = {};
let obj10 = {};
obj10[obj8.ACTIVE] = _modDef10440;
obj10[obj8.ERROR] = _modDef14597;
obj10[obj8.RESUB] = _modDef14598;
obj9[fn(2053).Branding.BUNDLE] = obj10;
let obj11 = {};
obj11[obj8.ACTIVE] = _modDef10437;
obj11[obj8.ERROR] = _modDef14597;
obj11[obj8.RESUB] = _modDef14598;
obj9[fn(2053).Branding.TIER_0] = obj11;
let obj12 = {};
obj12[obj8.ACTIVE] = _modDef10438;
obj12[obj8.ERROR] = _modDef14597;
obj12[obj8.RESUB] = _modDef14598;
obj9[fn(2053).Branding.TIER_1] = obj12;
let obj13 = {};
obj13[obj8.ACTIVE] = _modDef10439;
obj13[obj8.ERROR] = _modDef14597;
obj13[obj8.RESUB] = _modDef14598;
obj9[fn(2053).Branding.TIER_2] = obj13;
let obj14 = {};
obj14[obj8.ACTIVE] = _modDef10441;
obj14[obj8.ERROR] = _modDef14599;
obj14[obj8.RESUB] = _modDef14600;
obj9[fn(2053).Branding.PREMIUM_GUILD] = obj14;
let obj15 = {};
let obj16 = {};
obj16[obj8.ACTIVE] = _modDef14601;
obj16[obj8.ERROR] = _modDef14601;
obj16[obj8.RESUB] = _modDef14601;
obj15[fn(2053).Branding.BUNDLE] = obj16;
let obj17 = {};
obj17[obj8.ACTIVE] = _modDef7532;
obj17[obj8.ERROR] = _modDef14602;
obj17[obj8.RESUB] = _modDef14603;
obj15[fn(2053).Branding.TIER_0] = obj17;
let obj18 = {};
obj18[obj8.ACTIVE] = _modDef14604;
obj18[obj8.ERROR] = _modDef14605;
obj18[obj8.RESUB] = _modDef14606;
obj15[fn(2053).Branding.TIER_1] = obj18;
let obj19 = {};
obj19[obj8.ACTIVE] = _modDef10442;
obj19[obj8.ERROR] = _modDef14607;
obj19[obj8.RESUB] = _modDef14608;
obj15[fn(2053).Branding.TIER_2] = obj19;
let obj20 = {};
obj20[obj8.ACTIVE] = _modDef14609;
obj20[obj8.ERROR] = _modDef14610;
obj20[obj8.RESUB] = _modDef14611;
obj15[fn(2053).Branding.PREMIUM_GUILD] = obj20;
let closure_22 = {
  [fn(2053).Branding.BUNDLE]: { [obj8.ACTIVE]: size, [obj8.ERROR]: size, [obj8.RESUB]: size },
  [fn(2053).Branding.TIER_0]: { [obj8.ACTIVE]: { height: 35, width: 29 }, [obj8.ERROR]: size1, [obj8.RESUB]: size1 },
  [fn(2053).Branding.TIER_1]: { [obj8.ACTIVE]: { height: 35, width: 49 }, [obj8.ERROR]: size1, [obj8.RESUB]: size1 },
  [fn(2053).Branding.TIER_2]: { [obj8.ACTIVE]: { height: 37, width: 49 }, [obj8.ERROR]: size1, [obj8.RESUB]: size1 },
  [fn(2053).Branding.PREMIUM_GUILD]: {
    [obj8.ACTIVE]: { width: 51, height: 36 },
    [obj8.ERROR]: size2,
    [obj8.RESUB]: size2,
  },
};
let obj21 = {};
let obj22 = {};
obj22[obj8.ACTIVE] = _modDef14612;
obj22[obj8.ERROR] = _modDef14612;
obj22[obj8.RESUB] = _modDef14613;
obj21[fn(2053).Branding.BUNDLE] = obj22;
let obj23 = {};
obj23[obj8.ACTIVE] = _modDef10445;
obj23[obj8.ERROR] = _modDef10445;
obj23[obj8.RESUB] = _modDef14614;
obj21[fn(2053).Branding.TIER_0] = obj23;
let obj24 = {};
obj24[obj8.ACTIVE] = _modDef14615;
obj24[obj8.ERROR] = _modDef14615;
obj24[obj8.RESUB] = _modDef14616;
obj21[fn(2053).Branding.TIER_1] = obj24;
let obj25 = {};
obj25[obj8.ACTIVE] = _modDef8423;
obj25[obj8.ERROR] = _modDef8423;
obj25[obj8.RESUB] = _modDef14617;
obj21[fn(2053).Branding.TIER_2] = obj25;
let obj26 = {};
obj26[obj8.ACTIVE] = _modDef14618;
obj26[obj8.ERROR] = _modDef14618;
obj26[obj8.RESUB] = _modDef14619;
obj21[fn(2053).Branding.PREMIUM_GUILD] = obj26;
let dependencyMap = {
  [fn(2053).Branding.BUNDLE]: { height: 33, width: 205 },
  [fn(2053).Branding.TIER_0]: { height: 32, width: 59 },
  [fn(2053).Branding.TIER_1]: { height: 16, width: 156 },
  [fn(2053).Branding.TIER_2]: { height: 32, width: 78 },
  [fn(2053).Branding.PREMIUM_GUILD]: { height: 17, width: 184 },
};
let closure_25 = { [obj8.ACTIVE]: obj, [obj8.ERROR]: obj, [obj8.RESUB]: obj2 };
const ReactCompilerGating = fn(558);
let obj7 = {
  alignSelf: "stretch",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  margin: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_12,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING,
  borderRadius: nativeDefault.radii.lg,
};
function onCancelClick(subscription, analyticsLocations) {
  _require = subscription;
  importDefault = analyticsLocations;
  const result = require("PremiumAnalyticsUtils").trackPremiumSubscriptionCancellationStarted(
    subscription,
    analyticsLocations,
  );
  const obj = require("PremiumAnalyticsUtils");
  const tmp = _require;
  if (obj2.isBoostOnlySubscription(subscription)) {
    let tmp4ResultResult = handleCancelSubscription(subscription, analyticsLocations);
  } else {
    const obj3 = {
      subscription,
      mode: tmp(14621).WhatYouLoseMode.CANCEL,
      onContinue(arg0) {
        return handleCancelSubscription(closure_0, closure_1, arg0);
      },
    };
    tmp4ResultResult = openPremiumPlanWhatYouLoseActionSheetDefault(obj3);
    const tmp4Result = openPremiumPlanWhatYouLoseActionSheetDefault;
  }
  return tmp4ResultResult;
}
size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionDetails.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumSubscriptionDetails(arg0) {
      const cResult = c.c(24);
      ({ style, onClickManagePremiumGuild, subscription } = arg0);
      const tmp4 = closure_18();
      const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === subscription.id) {
          let tmp6 = cResult[2];
        }
        const first = _slicedToArray(PremiumSubscriptionInvoice.useFetchSubscriptionInvoicePreview(tmp6), 1)[0];
        if (null == first) {
          return null;
        } else {
          const _Symbol2 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = util.intl;
            const stringResult = intl.string(util.t.ITurwY);
            cResult[3] = stringResult;
            let tmp10 = stringResult;
          } else {
            tmp10 = cResult[3];
          }
          if (cResult[4] !== tmp4.title) {
            const obj2 = {
              style: tmp4.title,
              accessibilityRole: "header",
              variant: "eyebrow",
              color: "text-default",
              children: tmp10,
            };
            const tmp14 = value3(Text_Text.Text, obj2);
            cResult[4] = tmp4.title;
            cResult[5] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[5];
          }
          if (cResult[6] !== subscription) {
            let tmp16 = null != subscription.renewalMutations;
            if (tmp16) {
              tmp16 = subscription.status !== constants4.CANCELED;
            }
            if (tmp16) {
              const obj3 = { subscription, renewalMutations: subscription.renewalMutations };
              tmp16 = value3(SubscriptionRenewalMutationsNoticeDefault, obj3);
            }
            cResult[6] = subscription;
            cResult[7] = tmp16;
            let tmp15 = tmp16;
          } else {
            tmp15 = cResult[7];
          }
          if (cResult[8] !== subscription) {
            let tmp21 = subscription.status === constants4.ACCOUNT_HOLD;
            if (tmp21) {
              const obj4 = { subscription };
              tmp21 = value3(SubscriptionAccountHoldNoticeDefault, obj4);
            }
            cResult[8] = subscription;
            cResult[9] = tmp21;
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[9];
          }
          if (cResult[10] === onClickManagePremiumGuild) {
            if (cResult[11] === first) {
              if (cResult[12] === subscription) {
                let tmp23 = cResult[13];
              }
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = util.intl;
                const stringResult1 = intl2.string(util.t["MTG+3O"]);
                cResult[14] = stringResult1;
                let tmp27 = stringResult1;
              } else {
                tmp27 = cResult[14];
              }
              if (cResult[15] !== tmp4.desktopSubtext) {
                const obj5 = { style: tmp4.desktopSubtext, variant: "text-sm/medium", children: tmp27 };
                const tmp31 = value3(Text_Text.Text, obj5);
                cResult[15] = tmp4.desktopSubtext;
                cResult[16] = tmp31;
                let tmp29 = tmp31;
              } else {
                tmp29 = cResult[16];
              }
              if (cResult[17] === style) {
                if (cResult[18] === tmp29) {
                  if (cResult[19] === tmp12) {
                    if (cResult[20] === tmp15) {
                      if (cResult[21] === tmp19) {
                        if (cResult[22] === tmp23) {
                          let tmp32 = cResult[23];
                        }
                        return tmp32;
                      }
                    }
                  }
                }
              }
              const obj6 = { style, children: null };
              const items = [tmp12, tmp15, tmp19, tmp23, tmp29];
              obj6.children = items;
              const tmp35 = constants(React5, obj6);
              cResult[17] = style;
              cResult[18] = tmp29;
              cResult[19] = tmp12;
              cResult[20] = tmp15;
              cResult[21] = tmp19;
              cResult[22] = tmp23;
              cResult[23] = tmp35;
              tmp32 = tmp35;
            }
          }
          const obj7 = { subscription, renewalInvoicePreview: first, onClickManagePremiumGuild };
          const tmp26 = value3(PremiumSubscriptionHeader, obj7);
          cResult[10] = onClickManagePremiumGuild;
          cResult[11] = first;
          cResult[12] = subscription;
          cResult[13] = tmp26;
          tmp23 = tmp26;
        }
        const tmpResult = PremiumSubscriptionInvoice;
      }
      obj8 = {
        subscriptionId: subscription.id,
        renewal: true,
        analyticsLocations,
        analyticsLocation: AnalyticsLocationDefault.PREMIUM_SUBSCRIPTION_DETAILS,
      };
      cResult[0] = analyticsLocations;
      cResult[1] = subscription.id;
      cResult[2] = obj8;
      tmp6 = obj8;
    }
  : function PremiumSubscriptionDetails(subscription) {
      subscription = subscription.subscription;
      ({ style, onClickManagePremiumGuild } = subscription);
      const tmp = closure_18();
      const obj = PremiumSubscriptionInvoice;
      const first = _slicedToArray(
        obj.useFetchSubscriptionInvoicePreview({
          subscriptionId: subscription.id,
          renewal: true,
          analyticsLocations: useAnalyticsLocationsDefault().analyticsLocations,
          analyticsLocation: AnalyticsLocationDefault.PREMIUM_SUBSCRIPTION_DETAILS,
        }),
        1,
      )[0];
      let tmp7Result = null;
      if (null != first) {
        const obj3 = { style, children: null };
        const obj4 = {
          style: tmp.title,
          accessibilityRole: "header",
          variant: "eyebrow",
          color: "text-default",
          children: null,
        };
        const intl = util.intl;
        obj4.children = intl.string(util.t.ITurwY);
        const items = [value3(Text_Text.Text, obj4), , , ,];
        let tmp9Result = null != subscription.renewalMutations;
        if (tmp9Result) {
          tmp9Result = subscription.status !== constants4.CANCELED;
        }
        if (tmp9Result) {
          const obj5 = { subscription, renewalMutations: subscription.renewalMutations };
          tmp9Result = value3(SubscriptionRenewalMutationsNoticeDefault, obj5);
        }
        items[1] = tmp9Result;
        let tmp9Result2 = subscription.status === constants4.ACCOUNT_HOLD;
        if (tmp9Result2) {
          const obj6 = { subscription };
          tmp9Result2 = value3(SubscriptionAccountHoldNoticeDefault, obj6);
        }
        items[2] = tmp9Result2;
        const obj7 = { subscription, renewalInvoicePreview: first, onClickManagePremiumGuild };
        items[3] = value3(PremiumSubscriptionHeader, obj7);
        obj8 = { style: tmp.desktopSubtext, variant: "text-sm/medium", children: null };
        const intl2 = util.intl;
        obj8.children = intl2.string(util.t["MTG+3O"]);
        items[4] = value3(Text_Text.Text, obj8);
        obj3.children = items;
        tmp7Result = constants(React5, obj3);
      }
      return tmp7Result;
    };
export { onCancelClick };
export { handleManageSubscription };
export { onResubscribeClick };
export { PremiumSubscriptionHeader };
