// === Module 13497: PremiumManagePlan ===

// Module 13497 (PremiumManagePlan)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 576 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import useNavigation from "useNavigation" /* 1483 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import Text_Text from "Text/Text" /* 4556 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 4884 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import Pressables from "Pressables" /* 5123 */;
import Card from "Card" /* 5607 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 5628 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6990 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7393 */;
import PremiumManagementUtils from "PremiumManagementUtils" /* 7404 */;
import _modDef8051 from "module_8051" /* 8051 */;
import PremiumFeaturesCardDefault from "PremiumFeaturesCard" /* 9363 */;
import PremiumSubscriptionDetails from "PremiumSubscriptionDetails" /* 13309 */;
import PremiumNitroHomeUtils from "PremiumNitroHomeUtils" /* 13438 */;
import useFPDurationLeftDefault from "useFPDurationLeft" /* 13461 */;
import PremiumFeaturesTableDefault from "PremiumFeaturesTable" /* 13476 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import BillingInfoStore from "BillingInfoStore" /* 4220 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4223 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import EntitlementStore from "EntitlementStore" /* 7394 */;
import AppStateStore from "AppStateStore" /* 1895 */;
import IAPStore from "IAPStore" /* 7237 */;

require = fn;
function ManagePlanHeader() {
  const tmp = closure_33();
  let obj = useNavigation;
  closure_0 = obj.useNavigation();
  obj = { style: tmp.headerContainer, children: null };
  obj = {
    style: tmp.backButtonWrapper,
    onPress() {
      return closure_0.pop();
    },
    children: __initData7(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" })
  };
  const items = [__initData7(Pressables.PressableOpacity, obj), , ];
  const obj1 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t["1bX7Tx"]);
  items[1] = __initData7(Text_Text.Text, obj1);
  items[2] = __initData7(React6, { style: tmp.backButtonWrapper });
  obj.children = items;
  return __initData8(React6, obj);
}
function SubscriptionAndBillingInfo(subscription) {
  subscription = subscription.subscription;
  ({ fractionalPremiumInfo, isPremiumGroup, premiumGroupRole } = subscription);
  let analyticsLocations;
  let stateFromStores2;
  let first2;
  noop = undefined;
  c8 = undefined;
  const tmp = closure_35();
  let tmp3 = stateFromStores2;
  analyticsLocations = analyticsLocations(stateFromStores2[25])().analyticsLocations;
  const tmp4 = subscription;
  subscription(stateFromStores2[26]);
  let obj = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations, analyticsLocation: analyticsLocations(stateFromStores2[27]).PREMIUM_SUBSCRIPTION_DETAILS };
  const first = first2(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  let obj2 = subscription(stateFromStores2[26]);
  obj = { subscriptionId: subscription.id, preventFetch: subscription.status !== constants2.PAST_DUE };
  const first1 = first2(obj2.useGetSubscriptionInvoice(obj), 1)[0];
  let obj4 = subscription(stateFromStores2[28]);
  let items = [IAPStore];
  const stateFromStores = obj4.useStateFromStores(items, () => {
    if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
      if (null != subscription.paymentGatewayPlanId) {
        if ("" !== subscription.paymentGatewayPlanId) {
          return IAPStore.getProduct(subscription.paymentGatewayPlanId);
        }
      }
      const _Error = Error;
      const error = new Error("Subscription missing plan ID");
      throw error;
    } else {
      return null;
    }
  });
  let obj5 = subscription(stateFromStores2[28]);
  const items1 = [SubscriptionStore];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj6 = subscription(stateFromStores2[28]);
  const items2 = [BillingInfoStore];
  stateFromStores2 = obj6.useStateFromStores(items2, () => BillingInfoStore.isSubscriptionFetching);
  let tmp12 = null !== stateFromStores1 && stateFromStores1.hasActiveTrial;
  let tmp4Result = tmp4(tmp3[20]);
  asyncGeneratorStep = tmp4Result.useNavigation();
  tmp4Result = tmp4(tmp3[29]);
  const isThemeLightResult = tmp4(tmp3[30]).isThemeLight(tmp4Result.useThemeContext().theme);
  let tmp5Result = tmp5(noop.useState(null), 2);
  first2 = tmp5Result[0];
  noop = tmp5Result[1];
  const tmp4Result1 = tmp4(tmp3[30]);
  const items3 = [AppStateStore];
  const stateFromStores3 = tmp4(tmp3[28]).useStateFromStores(items3, () => state.getState());
  const items4 = [first2, stateFromStores2, stateFromStores3];
  const effect = noop.useEffect(() => {
    let tmp2 = "opening_mobile_web" === first2;
    if (tmp2) {
      tmp2 = stateFromStores3 !== ConstantsIOS.AppStates.ACTIVE;
    }
    if (tmp2) {
      closure_5("in_mobile_web");
    }
    let tmp8 = "in_mobile_web" === first2;
    if (tmp8) {
      tmp8 = stateFromStores3 === ConstantsIOS.AppStates.ACTIVE;
    }
    if (tmp8) {
      const subscriptions = actions_BillingActionCreators.fetchSubscriptions();
      closure_5("start_fetching_update");
    }
    if (tmp17) {
      closure_5("fetching_update");
    }
    if (!tmp20) {
      closure_5(null);
    }
    tmp17 = "start_fetching_update" === first2 && stateFromStores2;
    tmp20 = "fetching_update" !== first2 || stateFromStores2;
  }, items4);
  const tmp18 = analyticsLocations(tmp3[33])(() => subscription(stateFromStores2[34]).getNewAnalyticsLoadId());
  const loadId = tmp18;
  const items5 = [subscription, first2, analyticsLocations, tmp18];
  const memo = noop.useMemo(() => {
    if ("start_fetching_update" !== first2) {
      if ("fetching_update" !== tmp) {
        let obj = {
          returnCtaAsComponent: true,
          loadId,
          shouldAllowExternalManagement: true,
          onSuccessCallback() {
                logger.log("Successfully opened mobile web Nitro Management page");
                analyticsLocations(stateFromStores2[36]);
                const obj = { load_id, location_stack: null, custom_checkout_flow: null };
                const items = [...closure_1_1, analyticsLocations(stateFromStores2[27]).MOBILE_APP_MANAGE_PREMIUM_SUBSCRIPTION_CTA];
                obj.location_stack = items;
                obj.custom_checkout_flow = constants2.MOBILE_WEB_REDIRECT_CHECKOUT;
                obj.track(constants.MOBILE_OPEN_STANDALONE_MANAGE_SUBSCRIPTION_PAGE, obj);
                closure_1_5("opening_mobile_web");
              }
        };
        const externalManagementMessage = PremiumManagementUtils.getExternalManagementMessage(subscription, obj);
        let tmp5 = null;
        if (null != externalManagementMessage) {
          let tmp3 = externalManagementMessage;
          if (!noop.isValidElement(externalManagementMessage)) {
            obj = { variant: "text-sm/medium", color: "text-default", children: externalManagementMessage };
            tmp3 = __initData7(Text_Text.Text, obj);
          }
          tmp5 = tmp3;
        }
        return tmp5;
      }
    }
    return __initData7(closure_2_10, { size: "small" });
  }, items5);
  tmp5Result = tmp5(noop.useState(false), 2);
  [tmp21, c8] = tmp5Result;
  if (null == first) {
    return null;
  } else {
    let tmp2Result = tmp2(tmp3[37]);
    const planIdFromInvoice = tmp2Result.getPlanIdFromInvoice(subscription, first);
    tmp2Result = tmp2(tmp3[37]);
    const statusFromInvoice = tmp2Result.getStatusFromInvoice(subscription, first);
    tmp2(tmp3[38])(null != closure_28[planIdFromInvoice], "missing subscription planInfo");
    let obj1 = { subscription, planId: planIdFromInvoice, price: null, includePremiumGuilds: true };
    let formatRateResult = null;
    if (null != stateFromStores) {
      formatRateResult = tmp4(tmp3[39]).formatRate(stateFromStores.priceString, tmp56.interval, tmp56.intervalCount);
      const tmp4Result3 = tmp4(tmp3[39]);
    }
    obj1.price = formatRateResult;
    const planDescription = tmp2(tmp3[37]).getPlanDescription(obj1);
    if (statusFromInvoice !== constants2.CANCELED) {
      if (statusFromInvoice !== constants2.PAUSE_PENDING) {
        if (statusFromInvoice !== constants2.PAST_DUE) {
          if (null != subscription.renewalMutations) {
            const _Date = Date;
            const date = new Date(subscription.currentPeriodEnd);
            let result = date;
            if (!subscription.isPurchasedExternally) {
              result = tmp4(tmp3[37]).extendDateWithUnconsumedFractionalPremium(date, fractionalPremiumInfo.unactivatedUnits);
              const tmp4Result4 = tmp4(tmp3[37]);
            }
            obj2 = { style: tmp.container, children: null };
            const obj3 = { style: tmp.mutationWarningContainer, children: null };
            const items6 = [closure_29(tmp4(tmp3[49]).AnnouncementsWarningIcon, { size: "md" }), ];
            obj4 = { style: tmp.mutationText, variant: "heading-sm/medium", color: "text-default", children: null };
            const intl6 = tmp4(tmp3[24]).intl;
            if (!subscription.hasExternalPlanChange) {
              if (!isNoneSubscription(subscription.renewalMutations.planId)) {
                let displayName = tmp2(tmp3[37]).getDisplayName(subscription.renewalMutations.planId);
                const tmp2Result2 = tmp2(tmp3[37]);
              }
              obj5 = { planName: displayName, date: result };
              obj4.children = intl6.format(tmp43, obj5);
              items6[1] = closure_29(tmp4(tmp3[23]).Text, obj4);
              obj3.children = items6;
              const items7 = [closure_30(tmp41, obj3), , ];
              obj6 = { premiumType: closure_27.TIER_2, hideButton: true, isPremiumGroup, premiumGroupRole };
              items7[1] = closure_29(tmp2(tmp3[50]), obj6);
              const obj7 = { style: tmp.extraInfoContainer, children: null };
              const obj8 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
              const intl7 = tmp4(tmp3[24]).intl;
              obj8.children = intl7.string(tmp4(tmp3[24]).t.YCrcPL);
              const items8 = [closure_29(tmp4(tmp3[23]).Text, obj8), ];
              const obj9 = { style: tmp.extraInfoTextContainer, children: null };
              const obj10 = { variant: "text-sm/medium", color: "text-default", children: null };
              const intl8 = tmp4(tmp3[24]).intl;
              obj10.children = intl8.string(tmp4(tmp3[24]).t["MTG+3O"]);
              const items9 = [closure_29(tmp4(tmp3[23]).Text, obj10), , ];
              const obj11 = { variant: "text-sm/medium", color: "text-default", children: tmp4(tmp3[47]).getBillingInformationStringNative(subscription, first, first1) };
              items9[1] = closure_29(tmp4(tmp3[23]).Text, obj11);
              items9[2] = null != memo && memo;
              obj9.children = items9;
              items8[1] = closure_30(tmp41, obj9);
              obj7.children = items8;
              items7[2] = closure_30(tmp41, obj7);
              obj2.children = items7;
              return closure_30(tmp41, obj2);
            }
            displayName = tmp4(tmp3[37]).getExternalPlanDisplayName(subscription.renewalMutations);
            const tmp4Result6 = tmp4(tmp3[37]);
          } else {
            const obj12 = { style: tmp.container, children: null };
            const obj13 = { style: tmp.pillAndCardContainer, children: null };
            if (tmp12) {
              const obj14 = { style: tmp.pillPosition, children: closure_29(tmp4(tmp3[51]).PremiumReferralTrialPill, {}) };
              tmp12 = closure_29(tmp59, obj14);
            }
            const items10 = [tmp12, ];
            const obj15 = { premiumType: closure_27.TIER_2, forFractionalPremium: fractionalPremiumInfo.fractionalState !== constants4.NONE, hideButton: true, isPremiumGroup, premiumGroupRole };
            items10[1] = closure_29(tmp2(tmp3[50]), obj15);
            obj13.children = items10;
            const items11 = [closure_30(c8, obj13), ];
            const obj16 = { style: tmp.extraInfoContainer, children: null };
            const obj17 = { variant: "eyebrow", color: "text-default", children: null };
            const intl = tmp4(tmp3[24]).intl;
            obj17.children = intl.string(tmp4(tmp3[24]).t.YCrcPL);
            const items12 = [closure_29(tmp4(tmp3[23]).Text, obj17), , , ];
            const obj18 = { style: tmp.extraInfoTextContainer, children: null };
            if (null != memo) {
              const intl3 = tmp4(tmp3[24]).intl;
              let stringResult = intl3.string(tmp4(tmp3[24]).t["MTG+3O"]);
            } else {
              const intl2 = tmp4(tmp3[24]).intl;
              const obj19 = {
                onSwitchPlans() {
                              return PremiumSubscriptionDetails.handleManageSubscription(subscription, closure_3, analyticsLocations);
                            },
                onCancel() {
                              return PremiumSubscriptionDetails.onCancelClick(subscription, analyticsLocations);
                            }
              };
              stringResult = intl2.format(tmp4(tmp3[24]).t.fvk30i, obj19);
            }
            const obj20 = { variant: "text-sm/medium", color: "text-default", children: stringResult };
            const items13 = [closure_29(tmp4(tmp3[23]).Text, obj20), , ];
            const obj21 = { subscription };
            items13[1] = closure_29(tmp4(tmp3[48]).GoogleManagementLink, obj21);
            items13[2] = null != memo && memo;
            obj18.children = items13;
            items12[1] = closure_30(c8, obj18);
            const obj22 = { variant: "eyebrow", color: "text-default", children: null };
            const intl4 = tmp4(tmp3[24]).intl;
            obj22.children = intl4.string(tmp4(tmp3[24]).t.Sb6wI1);
            items12[2] = closure_29(tmp4(tmp3[23]).Text, obj22);
            const obj23 = { style: null, children: null };
            const items14 = [tmp.extraInfoTextContainer, { gap: 4 }];
            obj23.style = items14;
            const obj24 = { variant: "text-md/semibold", color: "text-default", children: null };
            const intl5 = tmp4(tmp3[24]).intl;
            obj24.children = intl5.string(tmp4(tmp3[24]).t.KXQjfc);
            const items15 = [closure_29(tmp4(tmp3[23]).Text, obj24), ];
            const obj25 = { variant: "text-sm/medium", color: "text-default", children: null };
            const tmp4Result7 = tmp4(tmp3[47]);
            obj25.children = tmp4Result7.getBillingInformationStringNative(subscription, first, first1, false, fractionalPremiumInfo);
            items15[1] = closure_29(tmp4(tmp3[23]).Text, obj25);
            obj23.children = items15;
            items12[3] = closure_30(c8, obj23);
            obj16.children = items12;
            items11[1] = closure_30(c8, obj16);
            obj12.children = items11;
            return closure_30(c8, obj12);
          }
        }
      }
    }
    const obj26 = { style: tmp.container, children: null };
    const obj27 = { style: tmp.errorHeader, children: null };
    const obj28 = { source: tmp2(isThemeLightResult ? tmp3[40] : tmp3[41]), style: tmp.headerBackground, children: null };
    const obj29 = { style: tmp.logoContainer, children: null };
    const obj30 = { source: tmp2(tmp3[42]), style: tmp.wumpusImg };
    const items16 = [closure_29(stateFromStores3, obj30), ];
    const obj31 = { source: tmp2(isThemeLightResult ? tmp3[43] : tmp3[44]), style: tmp.logoStyle };
    items16[1] = closure_29(stateFromStores3, obj31);
    obj29.children = items16;
    const items17 = [closure_30(c8, obj29), ];
    const obj32 = { variant: "heading-sm/medium", color: "text-default", children: planDescription };
    items17[1] = closure_29(tmp4(tmp3[23]).Text, obj32);
    obj28.children = items17;
    const items18 = [closure_30(loadId, obj28), ];
    let isOnPlatformMatchingExternalPaymentGateway = subscription.isOnPlatformMatchingExternalPaymentGateway;
    if (isOnPlatformMatchingExternalPaymentGateway) {
      const obj33 = { style: tmp.errorHeaderPrimaryButton, children: null };
      const obj34 = { size: "sm", variant: "secondary", text: null, onPress: null, loading: null, disabled: null };
      const intl9 = tmp4(tmp3[24]).intl;
      obj34.text = intl9.string(tmp4(tmp3[24]).t.lTCb0c);
      obj34.onPress = asyncGeneratorStep(async () => {
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
                _undefined(true);
                c3 = 1;
                let obj1 = tmp3(tmp24[46]);
                c1 = 2;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.onResubscribeClick(subscription);
                return obj1;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              closure_128_8(false);
              throw tmp24;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_8(false);
              c4 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
              closure_128_8(false);
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp24) {
            if (tmp4 === c3) {
              c4 = tmp2;
              throw tmp24;
            } else {
              c1 = tmp;
            }
          }
        }
      });
      obj34.loading = tmp21;
      obj34.disabled = tmp21;
      obj33.children = closure_29(tmp4(tmp3[45]).Button, obj34);
      isOnPlatformMatchingExternalPaymentGateway = closure_29(tmp48, obj33);
    }
    items18[1] = isOnPlatformMatchingExternalPaymentGateway;
    obj27.children = items18;
    const items19 = [closure_30(c8, obj27), ];
    const obj35 = { style: tmp.extraInfoContainer, children: null };
    const obj36 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
    const intl10 = tmp4(tmp3[24]).intl;
    obj36.children = intl10.string(tmp4(tmp3[24]).t.YCrcPL);
    const items20 = [closure_29(tmp4(tmp3[23]).Text, obj36), ];
    const obj37 = { style: tmp.extraInfoTextContainer, children: null };
    const obj38 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl11 = tmp4(tmp3[24]).intl;
    obj38.children = intl11.string(tmp4(tmp3[24]).t["MTG+3O"]);
    const items21 = [closure_29(tmp4(tmp3[23]).Text, obj38), , , ];
    const obj39 = { variant: "text-sm/medium", color: "text-default", children: null };
    const tmp2Result1 = tmp2(tmp3[37]);
    obj39.children = tmp4(tmp3[47]).getBillingInformationStringNative(subscription, first, first1);
    items21[1] = closure_29(tmp4(tmp3[23]).Text, obj39);
    const obj40 = { subscription };
    items21[2] = closure_29(tmp4(tmp3[48]).GoogleManagementLink, obj40);
    items21[3] = null != memo && memo;
    obj37.children = items21;
    items20[1] = closure_30(c8, obj37);
    obj35.children = items20;
    items19[1] = closure_30(c8, obj35);
    obj26.children = items19;
    return closure_30(c8, obj26);
  }
  const tmp4Result2 = tmp4(tmp3[28]);
}
function FractionalPremiumCredits(durationText) {
  ({ fractionalPremiumInfo, showPremiumFeaturesCard, hasUnactivatedUnits, unactivatedHoursString, activationDate } = durationText);
  const tmp = closure_35();
  let obj = { style: tmp.container, children: null };
  if (showPremiumFeaturesCard) {
    obj = { premiumType: __initData5.TIER_2, forFractionalPremium: true, hideButton: true };
    showPremiumFeaturesCard = __initData7(PremiumFeaturesCardDefault, obj);
  }
  const items = [showPremiumFeaturesCard, ];
  obj = { style: tmp.extraInfoContainer, children: null };
  const obj1 = { variant: "eyebrow", color: "text-default", children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t.Obre8v);
  const items1 = [__initData7(Text_Text.Text, obj1), , ];
  const obj2 = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl2 = util.intl;
  const obj3 = { helpCenterLink: null };
  let obj6 = HelpdeskUtilsDefault;
  obj3.helpCenterLink = obj6.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
  obj2.children = intl2.format(util.t.AYGoBn, obj3);
  items1[1] = __initData7(Text_Text.Text, obj2);
  const obj4 = { style: tmp.fpRowStart, start: true, end: false, variant: "primary", children: null };
  const obj5 = { style: tmp.fpRowIcon, children: null };
  obj6 = { style: null, start: null, end: null, colors: null, children: null };
  const obj7 = { padding: 6, borderRadius: nativeDefault.radii.sm };
  obj6.style = obj7;
  obj6.start = { x: 0, y: 0 };
  obj6.end = { x: 0, y: 1 };
  const items2 = [nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE, nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj6.colors = items2;
  const obj8 = { children: null };
  const tmp11 = LinearGradientDefault;
  obj8.children = __initData7(native.Icon, { color: nativeDefault.unsafe_rawColors.WHITE, source: _modDef8051, size: native.IconSizes.LARGE });
  obj6.children = __initData7(React6, obj8);
  obj5.children = __initData7(tmp11, obj6);
  const items3 = [__initData7(React6, obj5), ];
  const obj10 = { style: tmp.fpRowContent, children: null };
  const obj11 = { variant: "text-sm/semibold", style: tmp.fpUnitsTitle, children: null };
  const intl3 = util.intl;
  obj11.children = intl3.string(util.t.DFMPWS);
  const items4 = [__initData7(Text_Text.Text, obj11), ];
  if (hasUnactivatedUnits) {
    if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
      const obj12 = { variant: "text-sm/medium", children: unactivatedHoursString };
      let tmp8Result = __initData7(Text_Text.Text, obj12);
    }
    items4[1] = tmp8Result;
    obj10.children = items4;
    items3[1] = __initData8(React6, obj10);
    obj4.children = items3;
    const items5 = [__initData8(Card.Card, obj4), , ];
    const obj13 = { style: tmp.dividerContainer, children: null };
    const obj14 = { style: tmp.divider };
    obj13.children = __initData7(React6, obj14);
    items5[1] = __initData7(React6, obj13);
    const obj15 = { start: false, end: true, style: tmp.fpRowEnd, variant: "secondary", children: null };
    const obj16 = { style: tmp.fpRowContent, children: null };
    if (hasUnactivatedUnits) {
      if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
        const obj17 = { variant: "text-md/semibold", children: null };
        const intl6 = util.intl;
        obj17.children = intl6.string(util.t["hT6i/0"]);
        const items6 = [__initData7(Text_Text.Text, obj17), ];
        tmp8Result = undefined !== activationDate;
        if (tmp8Result) {
          const obj18 = { variant: "text-xs/medium", color: "text-subtle", children: null };
          const intl7 = util.intl;
          const obj19 = { activateDate: activationDate };
          obj18.children = intl7.format(util.t["0Vwb/l"], obj19);
          tmp8Result = __initData7(Text_Text.Text, obj18);
        }
        const obj20 = { children: null };
        items6[1] = tmp8Result;
        obj20.children = items6;
        let tmp8Result2 = __initData8(React6, obj20);
      }
      const items7 = [tmp8Result2, ];
      if (hasUnactivatedUnits) {
        if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
          const obj21 = { style: tmp.fpUnactivatedHoursPill, children: null };
          const obj22 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: unactivatedHoursString };
          obj21.children = __initData7(Text_Text.Text, obj22);
          let tmp8Result1 = __initData7(React6, obj21);
        }
        const obj23 = { children: null };
        items7[1] = tmp8Result1;
        obj16.children = items7;
        obj15.children = __initData8(React6, obj16);
        items5[2] = __initData7(tmp14, obj15);
        obj23.children = items5;
        items1[2] = __initData8(React6, obj23);
        obj.children = items1;
        items[1] = __initData8(React6, obj);
        obj.children = items;
        return __initData8(React6, obj);
      }
      const obj24 = { style: tmp.fpTimeRemainingPill, children: null };
      const obj25 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: durationText.durationText };
      obj24.children = __initData7(Text_Text.Text, obj25);
      tmp8Result1 = __initData7(React6, obj24);
    }
    const obj26 = { variant: "text-md/semibold", style: tmp.fpTimeRemaining, children: null };
    const intl5 = util.intl;
    obj26.children = intl5.string(util.t["3G0CTC"]);
    tmp8Result2 = __initData7(Text_Text.Text, obj26);
  }
  const obj27 = { variant: "text-sm/medium", style: tmp.fpUnitsStatusText, children: null };
  const intl4 = util.intl;
  obj27.children = intl4.string(util.t["B66Z+f"]);
  tmp8Result = __initData7(Text_Text.Text, obj27);
  const obj9 = { color: nativeDefault.unsafe_rawColors.WHITE, source: _modDef8051, size: native.IconSizes.LARGE };
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, ImageBackground: closure_7, View: closure_8, ScrollView: closure_9, ActivityIndicator: c10 } = get_ActivityIndicator);
const isNoneSubscription = fn(4219).isNoneSubscription;
const Constants = fn(1074);
({ AnalyticEvents: closure_19, HelpdeskArticles: closure_20, SubscriptionStatusTypes: closure_21, UserSettingsSections: closure_22 } = Constants);
const TABLE_DIVIDER_WIDTH = fn(5603).TABLE_DIVIDER_WIDTH;
const CustomCheckoutFlow = fn(4542).CustomCheckoutFlow;
const PremiumConstants = fn(1373);
({ FractionalPremiumStates: closure_25, PREMIUM_SUBSCRIPTION_APPLICATION: closure_26, PremiumTypes: closure_27, SubscriptionPlanInfo: closure_28 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_29, jsxs: closure_30 } = jsxProd);
let closure_31 = new LoggerDefault("PremiumManagePlan");
fn(4560);
let createStyles = { background: null, container: null, contentContainer: null, topBlur: null, accountCredit: null, accountCreditList: null, featuresTable: null, subscriptionHeader: null, billingInfo: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" };
createStyles.background = createStyles;
const tmp6 = new LoggerDefault("PremiumManagePlan");
createStyles.container = { display: "flex", paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles.contentContainer = { marginTop: 24, display: "flex", gap: 12 };
createStyles.topBlur = { position: "absolute", zIndex: 5, top: 0, left: 0, right: 0 };
createStyles.accountCredit = { paddingHorizontal: 16 };
let obj1 = { display: "flex", paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
createStyles.accountCreditList = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.featuresTable = { paddingTop: 16 };
createStyles.subscriptionHeader = { marginTop: 20, width: "100%" };
createStyles.billingInfo = { marginTop: 20, width: "100%" };
let closure_32 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let obj3 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between" }, backButtonWrapper: null };
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
obj3.backButtonWrapper = size;
let closure_33 = createStyles.createStyles(obj3);
createStyles = fn(4560);
let closure_35 = createStyles.createStyles(() => {
  let obj = { container: { display: "flex", flexDirection: "column", gap: 12 }, errorHeader: null, headerBackground: null, logoContainer: null, wumpusImg: null, logoStyle: null, errorHeaderPrimaryButton: null, extraInfoContainer: null, extraInfoTextContainer: null, mutationWarningContainer: null, mutationText: null, fpTimeRemaining: null, fpTimeRemainingPill: null, fpUnactivatedHoursPill: null, fpTimeRemainingText: null, fpUnitsTitle: null, fpUnitsStatusText: null, fpRowStart: null, fpRowIcon: null, fpRowContent: null, fpRowEnd: null, dividerContainer: null, divider: null, pillAndCardContainer: null, pillPosition: null };
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
  obj.errorHeader = obj;
  obj.headerBackground = { padding: 16 };
  obj.logoContainer = { flexDirection: "row", alignItems: "center", marginBottom: 12 };
  obj.wumpusImg = { marginRight: 10, height: 36, width: 51 };
  obj.logoStyle = { height: 32, width: 78 };
  obj.errorHeaderPrimaryButton = { marginBottom: 16, marginHorizontal: 16 };
  obj.extraInfoContainer = { paddingTop: 16, paddingHorizontal: 16, display: "flex", gap: 8 };
  obj = { padding: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", gap: 18 };
  obj.extraInfoTextContainer = obj;
  obj.mutationWarningContainer = { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.mutationText = { flex: 1 };
  const obj1 = { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.fpTimeRemaining = { color: nativeDefault.colors.TEXT_BRAND };
  const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
  obj.fpTimeRemainingPill = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 };
  const obj3 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 };
  obj.fpUnactivatedHoursPill = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 };
  const obj4 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 };
  obj.fpTimeRemainingText = { color: nativeDefault.colors.WHITE };
  const obj5 = { color: nativeDefault.colors.WHITE };
  obj.fpUnitsTitle = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
  const obj6 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
  obj.fpUnitsStatusText = { color: nativeDefault.colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 };
  const obj7 = { color: nativeDefault.colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 };
  obj.fpRowStart = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  const obj8 = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.fpRowIcon = { marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
  obj.fpRowContent = { flexShrink: 1, flexGrow: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  const obj9 = { marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
  obj.fpRowEnd = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.dividerContainer = { height: TABLE_DIVIDER_WIDTH };
  const obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.divider = { height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.pillAndCardContainer = { position: "relative" };
  obj.pillPosition = { position: "absolute", top: -18, left: 5, zIndex: 99 };
  return obj;
});
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumManagePlan.tsx");

export default function PremiumManagePlan() {
  const tmp = closure_32();
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  let obj = navigation(13350);
  const youBarSettingsOutsideSafeAreaTop = obj.useYouBarSettingsOutsideSafeAreaTop();
  let obj1 = navigation(1483);
  navigation = obj1.useNavigation();
  let obj2 = noop;
  let items = [navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  let obj3 = navigation(504);
  const items1 = [SubscriptionPlanStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => SubscriptionPlanStore.isLoadedForPremiumSKUs());
  let obj4 = navigation(504);
  const items2 = [SubscriptionStore];
  [tmp10, tmp11] = _slicedToArray(obj4.useStateFromStoresArray(items2, () => {
    const items = [SubscriptionStore.getPremiumTypeSubscription(), SubscriptionStore.hasFetchedSubscriptions()];
    return items;
  }), 2);
  let obj5 = navigation(504);
  const items3 = [UserStore];
  const stateFromStores1 = obj5.useStateFromStores(items3, () => currentUser.getCurrentUser());
  const tmp12 = useFractionalPremiumInfoDefault({ forceFetch: true });
  useMountEffectDefault(() => {
    let isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions();
    if (!isSubscriptionFetching) {
      isSubscriptionFetching = BillingInfoStore.isSubscriptionFetching;
    }
    if (!isSubscriptionFetching) {
      const subscriptions = navigation(4884).fetchSubscriptions();
      const obj = navigation(4884);
    }
    if (!tmp5) {
      const premiumSubscriptionPlans = navigation(7257).fetchPremiumSubscriptionPlans();
      const obj3 = navigation(7257);
    }
    tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
  });
  let obj7 = navigation(8065);
  let isInReverseTrial = obj7.useIsInReverseTrial();
  const tmp9 = _slicedToArray(obj4.useStateFromStoresArray(items2, () => {
    const items = [SubscriptionStore.getPremiumTypeSubscription(), SubscriptionStore.hasFetchedSubscriptions()];
    return items;
  }), 2);
  let obj8 = navigation(4218);
  const unactivatedFractionalPremiumDurationString = obj8.getUnactivatedFractionalPremiumDurationString(tmp12);
  if (null !== tmp10) {
    if (!tmp10.isPurchasedExternally) {
      const currentPeriodEnd = tmp10.currentPeriodEnd;
    }
  }
  let tmp29Result1 = tmp12.fractionalState !== constants4.NONE;
  if (tmp29Result1) {
    let tmp20 = isInReverseTrial;
    if (isInReverseTrial) {
      tmp20 = tmp12.unactivatedUnits.length <= 0;
    }
    tmp29Result1 = !tmp20;
  }
  if (!tmp29Result1) {
    tmp29Result1 = tmp17;
  }
  tmp4(4271);
  importDefault = obj2.useRef(false);
  const callback = obj2.useCallback((nativeEvent) => {
    const obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
    return obj.trackIfScrolledToBottom(obj);
  }, []);
  const tmp4Result = tmp4(504);
  const items4 = [EntitlementStore];
  let tmp23 = null != tmp10;
  const stateFromStores2 = tmp4Result.useStateFromStores(items4, () => {
    forApplication = forApplication.getForApplication(closure_1_26);
    if (forApplication == null) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], tmp4(1974).areSetsEqual);
  if (tmp23) {
    tmp23 = !tmp10.isBoostOnly;
  }
  if (tmp23) {
    tmp23 = stateFromStores;
  }
  if (tmp23) {
    tmp23 = tmp11;
  }
  let tmp27Result = null != tmp10 && tmp10.isBoostOnly && stateFromStores && tmp11;
  let premiumGroupRole;
  if (stateFromStores1 != null) {
    premiumGroupRole = stateFromStores1.premiumGroupRole;
  }
  let result;
  if (stateFromStores1 != null) {
    result = stateFromStores1.isPremiumWithPremiumGroup();
  }
  obj = { style: tmp.background, children: null };
  const items5 = [tmp.topBlur, ];
  let num = 0;
  let tmp2Result = tmp2(4964);
  if (!youBarSettingsOutsideSafeAreaTop) {
    num = top;
  }
  items5[1] = { height: num };
  const items6 = [closure_29(tmp2Result, { blurAmount: 0.2, style: items5, blurTheme: tmp4Result.useThemeContext().theme }), ];
  const items7 = [tmp.container, ];
  let num2 = 16;
  if (!youBarSettingsOutsideSafeAreaTop) {
    num2 = top;
  }
  obj = { contentContainerStyle: items7, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: null };
  items7[1] = { paddingTop: num2, paddingBottom: rect.bottom };
  const items8 = [closure_29(ManagePlanHeader, {}), ];
  obj1 = { style: tmp.contentContainer, children: null };
  let tmp29Result = tmp23;
  if (tmp23) {
    obj2 = { subscription: tmp10, fractionalPremiumInfo: tmp12, isPremiumGroup: result, premiumGroupRole };
    tmp29Result = closure_29(SubscriptionAndBillingInfo, obj2);
  }
  const items9 = [tmp29Result, , , , , , ];
  if (isInReverseTrial) {
    obj3 = { premiumType: closure_27.TIER_2, forFractionalPremium: true, hideButton: true };
    isInReverseTrial = closure_29(tmp2(9363), obj3);
  }
  items9[1] = isInReverseTrial;
  tmp29Result = result;
  if (result) {
    tmp29Result = !tmp23;
  }
  if (tmp29Result) {
    obj4 = { premiumType: closure_27.TIER_2, hideButton: true, hidePrice: true, isPremiumGroup: true, premiumGroupRole };
    tmp29Result = closure_29(tmp2(9363), obj4);
  }
  items9[2] = tmp29Result;
  if (tmp29Result1) {
    obj5 = { fractionalPremiumInfo: tmp12, showPremiumFeaturesCard: tmp12.fractionalState === constants4.FP_ONLY, hasUnactivatedUnits: tmp17, unactivatedHoursString: unactivatedFractionalPremiumDurationString, activationDate: currentPeriodEnd, durationText: tmp15Result };
    tmp29Result1 = closure_29(FractionalPremiumCredits, obj5);
  }
  items9[3] = tmp29Result1;
  if (tmp27Result) {
    const obj6 = { children: null };
    obj7 = {
      style: tmp.subscriptionHeader,
      onClickManagePremiumGuild() {
          let arr = navigation;
          const routes = navigation.getState().routes;
          const found = routes.find((name) => name.name === constants.GUILD_BOOSTING);
          let obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(constants3.GUILD_BOOSTING);
          obj = { destinationPane: constants3.GUILD_BOOSTING };
          const result = UserSettingsUtils.trackUserSettingsPaneViewed(obj);
          if (null != found) {
            arr.navigate(constants3.GUILD_BOOSTING, undefined, { pop: true });
          } else {
            arr = arr.push(constants3.GUILD_BOOSTING);
          }
        },
      subscription: tmp10
    };
    const items10 = [closure_29(tmp2(13309), obj7), ];
    obj8 = { style: tmp.billingInfo, subscription: tmp10 };
    items10[1] = closure_29(tmp2(13346), obj8);
    obj6.children = items10;
    tmp27Result = closure_30(closure_8, obj6);
  }
  items9[4] = tmp27Result;
  const obj9 = { style: tmp.accountCredit, creditListContainerStyle: tmp.accountCreditList, currentSubscription: tmp10, entitlements: stateFromStores2, hasPremiumGroup: null };
  let flag = result;
  tmp2Result = tmp2(13348);
  if (result == null) {
    flag = false;
  }
  obj9.hasPremiumGroup = flag;
  items9[5] = closure_29(tmp2Result, obj9);
  const obj10 = { style: tmp.featuresTable, variant: "nitro_home", titleOverride: null, isFractionalOnly: null, isPremiumGroup: null, premiumGroupRole: null };
  tmp15Result = useFPDurationLeftDefault(tmp12.endsAt, navigation(13461).CountDownMessageTypes.SHORT_TIME);
  const intl = tmp4(1114).intl;
  obj10.titleOverride = intl.string(navigation(1114).t.QXx2gs);
  obj10.isFractionalOnly = tmp12.fractionalState === constants4.FP_ONLY;
  obj10.isPremiumGroup = result;
  obj10.premiumGroupRole = premiumGroupRole;
  items9[6] = closure_29(PremiumFeaturesTableDefault, obj10);
  obj1.children = items9;
  items8[1] = closure_30(closure_8, obj1);
  obj.children = items8;
  items6[1] = closure_30(closure_9, obj);
  obj.children = items6;
  return closure_30(closure_8, obj);
};
export const BACK_BUTTON_SIZE = 24;