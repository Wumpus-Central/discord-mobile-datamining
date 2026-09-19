// discord_app/modules/user_settings/premium/native/PremiumManagePlan.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import actions_BillingActionCreators from "../../../billing/actions/BillingActionCreators.tsx";
import VisualEffectViewAnimatedDefault from "../../../visual_effect_view/native/VisualEffectViewAnimated.tsx";
import LinearGradientDefault from "../../../../../_runtime/05198_LinearGradient.js";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import ArrowLargeLeftIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import UserSettingsModalActionCreatorsDefault from "../../../../actions/UserSettingsModalActionCreators.tsx";
import UserSettingsUtils from "../../../../utils/UserSettingsUtils.tsx";
import useFractionalPremiumInfoDefault from "../../../billing/hooks/useFractionalPremiumInfo.tsx";
import PremiumManagementUtils from "../../../premium/native/utils/PremiumManagementUtils.tsx";
import _modDef8309 from "../../../../../_runtime/metro/08309__.js";
import PremiumFeaturesCardDefault from "PremiumFeaturesCard.tsx";
import PremiumSubscriptionDetails from "../../../../components_native/premium/PremiumSubscriptionDetails.tsx";
import PremiumAccountCreditDefault from "../../../premium/native/PremiumAccountCredit.tsx";
import PremiumNitroHomeUtils from "utils/PremiumNitroHomeUtils.tsx";
import useFPDurationLeftDefault from "../../../billing/hooks/useFPDurationLeft.tsx";
import PremiumFeaturesTableDefault from "PremiumFeaturesTable.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import BillingInfoStore from "../../../../stores/billing/BillingInfoStore.tsx";
import SubscriptionPlanStore from "../../../../stores/billing/SubscriptionPlanStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import EntitlementStore from "../../../../stores/game_store/EntitlementStore.tsx";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";
import IAPStore from "../../../../stores/native/IAPStore.android.tsx";

require = fn;
function ManagePlanHeader() {
  const tmp = closure_33();
  closure_0 = useNavigation.useNavigation();
  const obj2 = { style: tmp.headerContainer, children: null };
  const items = [
    __initData7(Pressables.PressableOpacity, {
      style: tmp.backButtonWrapper,
      onPress() {
        return closure_0.pop();
      },
      children: __initData7(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" }),
    }),
    ,
  ];
  const obj4 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["1bX7Tx"]);
  items[1] = __initData7(Text_Text.Text, obj4);
  items[2] = __initData7(React6, { style: tmp.backButtonWrapper });
  obj2.children = items;
  return __initData8(React6, obj2);
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
  let obj = subscription(stateFromStores2[26]);
  const first = first2(
    obj.useFetchSubscriptionInvoicePreview({
      subscriptionId: subscription.id,
      renewal: true,
      applyEntitlements: true,
      analyticsLocations,
      analyticsLocation: analyticsLocations(stateFromStores2[27]).PREMIUM_SUBSCRIPTION_DETAILS,
    }),
    1,
  )[0];
  let obj2 = {
    subscriptionId: subscription.id,
    renewal: true,
    applyEntitlements: true,
    analyticsLocations,
    analyticsLocation: analyticsLocations(stateFromStores2[27]).PREMIUM_SUBSCRIPTION_DETAILS,
  };
  const first1 = first2(
    subscription(stateFromStores2[26]).useGetSubscriptionInvoice({
      subscriptionId: subscription.id,
      preventFetch: subscription.status !== constants2.PAST_DUE,
    }),
    1,
  )[0];
  let obj3 = subscription(stateFromStores2[26]);
  let obj4 = { subscriptionId: subscription.id, preventFetch: subscription.status !== constants2.PAST_DUE };
  let items = [IAPStore];
  const stateFromStores = subscription(stateFromStores2[28]).useStateFromStores(items, () => {
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
  const stateFromStores1 = subscription(stateFromStores2[28]).useStateFromStores(items1, () =>
    premiumTypeSubscription.getPremiumTypeSubscription(),
  );
  const obj6 = subscription(stateFromStores2[28]);
  const items2 = [BillingInfoStore];
  stateFromStores2 = subscription(stateFromStores2[28]).useStateFromStores(
    items2,
    () => BillingInfoStore.isSubscriptionFetching,
  );
  let tmp12 = null !== stateFromStores1 && stateFromStores1.hasActiveTrial;
  const obj7 = subscription(stateFromStores2[28]);
  asyncGeneratorStep = tmp4(tmp3[20]).useNavigation();
  const tmp4Result = tmp4(tmp3[20]);
  const tmp4Result10 = tmp4(tmp3[29]);
  const isThemeLightResult = tmp4(tmp3[30]).isThemeLight(tmp4Result10.useThemeContext().theme);
  const tmp5Result = first2(noop.useState(null), 2);
  first2 = tmp5Result[0];
  noop = tmp5Result[1];
  const tmp4Result11 = tmp4(tmp3[30]);
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
        const obj3 = {
          returnCtaAsComponent: true,
          loadId,
          shouldAllowExternalManagement: true,
          onSuccessCallback() {
            logger.log("Successfully opened mobile web Nitro Management page");
            const obj2 = { load_id, location_stack: null, custom_checkout_flow: null };
            const items = [
              ...closure_1_1,
              analyticsLocations(stateFromStores2[27]).MOBILE_APP_MANAGE_PREMIUM_SUBSCRIPTION_CTA,
            ];
            obj2.location_stack = items;
            obj2.custom_checkout_flow = constants2.MOBILE_WEB_REDIRECT_CHECKOUT;
            analyticsLocations(stateFromStores2[36]).track(
              constants.MOBILE_OPEN_STANDALONE_MANAGE_SUBSCRIPTION_PAGE,
              obj2,
            );
            closure_1_5("opening_mobile_web");
          },
        };
        const externalManagementMessage = PremiumManagementUtils.getExternalManagementMessage(subscription, obj3);
        let tmp5 = null;
        if (null != externalManagementMessage) {
          let tmp3 = externalManagementMessage;
          if (!noop.isValidElement(externalManagementMessage)) {
            const obj = { variant: "text-sm/medium", color: "text-default", children: externalManagementMessage };
            tmp3 = __initData7(Text_Text.Text, obj);
          }
          tmp5 = tmp3;
        }
        return tmp5;
      }
    }
    return __initData7(closure_2_10, { size: "small" });
  }, items5);
  const tmp4Result12 = tmp4(tmp3[28]);
  [tmp21, c8] = first2(noop.useState(false), 2);
  if (null == first) {
    return null;
  } else {
    const planIdFromInvoice = tmp2(tmp3[37]).getPlanIdFromInvoice(subscription, first);
    const tmp2Result = tmp2(tmp3[37]);
    const statusFromInvoice = tmp2(tmp3[37]).getStatusFromInvoice(subscription, first);
    tmp2(tmp3[38])(null != closure_28[planIdFromInvoice], "missing subscription planInfo");
    const tmp2Result4 = tmp2(tmp3[37]);
    const obj8 = { subscription, planId: planIdFromInvoice, price: null, includePremiumGuilds: true };
    let formatRateResult = null;
    if (null != stateFromStores) {
      formatRateResult = tmp4(tmp3[39]).formatRate(stateFromStores.priceString, tmp56.interval, tmp56.intervalCount);
      const tmp4Result13 = tmp4(tmp3[39]);
    }
    obj8.price = formatRateResult;
    const planDescription = tmp2(tmp3[37]).getPlanDescription(obj8);
    if (statusFromInvoice !== constants2.CANCELED) {
      if (statusFromInvoice !== constants2.PAUSE_PENDING) {
        if (statusFromInvoice !== constants2.PAST_DUE) {
          if (null != subscription.renewalMutations) {
            const _Date = Date;
            const date = new Date(subscription.currentPeriodEnd);
            let result = date;
            if (!subscription.isPurchasedExternally) {
              result = tmp4(tmp3[37]).extendDateWithUnconsumedFractionalPremium(
                date,
                fractionalPremiumInfo.unactivatedUnits,
              );
              const tmp4Result14 = tmp4(tmp3[37]);
            }
            const obj9 = { style: tmp.container, children: null };
            const obj10 = { style: tmp.mutationWarningContainer, children: null };
            const items6 = [closure_29(tmp4(tmp3[49]).AnnouncementsWarningIcon, { size: "md" })];
            const obj11 = {
              style: tmp.mutationText,
              variant: "heading-sm/medium",
              color: "text-default",
              children: null,
            };
            const intl6 = tmp4(tmp3[24]).intl;
            if (!subscription.hasExternalPlanChange) {
              if (!isNoneSubscription(subscription.renewalMutations.planId)) {
                let displayName = tmp2(tmp3[37]).getDisplayName(subscription.renewalMutations.planId);
                const tmp2Result6 = tmp2(tmp3[37]);
              }
              const obj12 = { planName: displayName, date: result };
              obj11.children = intl6.format(tmp43, obj12);
              items6[1] = closure_29(tmp4(tmp3[23]).Text, obj11);
              obj10.children = items6;
              const items7 = [closure_30(tmp41, obj10), ,];
              const obj13 = { premiumType: closure_27.TIER_2, hideButton: true, isPremiumGroup, premiumGroupRole };
              items7[1] = closure_29(tmp2(tmp3[50]), obj13);
              const obj14 = { style: tmp.extraInfoContainer, children: null };
              const obj15 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
              const intl7 = tmp4(tmp3[24]).intl;
              obj15.children = intl7.string(tmp4(tmp3[24]).t.YCrcPL);
              const items8 = [closure_29(tmp4(tmp3[23]).Text, obj15)];
              const obj16 = { style: tmp.extraInfoTextContainer, children: null };
              const obj17 = { variant: "text-sm/medium", color: "text-default", children: null };
              const intl8 = tmp4(tmp3[24]).intl;
              obj17.children = intl8.string(tmp4(tmp3[24]).t["MTG+3O"]);
              const items9 = [closure_29(tmp4(tmp3[23]).Text, obj17), ,];
              const obj18 = {
                variant: "text-sm/medium",
                color: "text-default",
                children: tmp4(tmp3[47]).getBillingInformationStringNative(subscription, first, first1),
              };
              items9[1] = closure_29(tmp4(tmp3[23]).Text, obj18);
              items9[2] = null != memo && memo;
              obj16.children = items9;
              items8[1] = closure_30(tmp41, obj16);
              obj14.children = items8;
              items7[2] = closure_30(tmp41, obj14);
              obj9.children = items7;
              return closure_30(tmp41, obj9);
            }
            displayName = tmp4(tmp3[37]).getExternalPlanDisplayName(subscription.renewalMutations);
            const tmp4Result16 = tmp4(tmp3[37]);
          } else {
            const obj19 = { style: tmp.container, children: null };
            const obj20 = { style: tmp.pillAndCardContainer, children: null };
            if (tmp12) {
              const obj21 = {
                style: tmp.pillPosition,
                children: closure_29(tmp4(tmp3[51]).PremiumReferralTrialPill, {}),
              };
              tmp12 = closure_29(tmp59, obj21);
            }
            const items10 = [tmp12];
            const obj22 = {
              premiumType: closure_27.TIER_2,
              forFractionalPremium: fractionalPremiumInfo.fractionalState !== constants4.NONE,
              hideButton: true,
              isPremiumGroup,
              premiumGroupRole,
            };
            items10[1] = closure_29(tmp2(tmp3[50]), obj22);
            obj20.children = items10;
            const items11 = [closure_30(c8, obj20)];
            const obj23 = { style: tmp.extraInfoContainer, children: null };
            const obj24 = { variant: "eyebrow", color: "text-default", children: null };
            const intl = tmp4(tmp3[24]).intl;
            obj24.children = intl.string(tmp4(tmp3[24]).t.YCrcPL);
            const items12 = [closure_29(tmp4(tmp3[23]).Text, obj24), , ,];
            const obj25 = { style: tmp.extraInfoTextContainer, children: null };
            if (null != memo) {
              const intl3 = tmp4(tmp3[24]).intl;
              let stringResult = intl3.string(tmp4(tmp3[24]).t["MTG+3O"]);
            } else {
              const intl2 = tmp4(tmp3[24]).intl;
              const obj26 = {
                onSwitchPlans() {
                  return PremiumSubscriptionDetails.handleManageSubscription(
                    subscription,
                    closure_3,
                    analyticsLocations,
                  );
                },
                onCancel() {
                  return PremiumSubscriptionDetails.onCancelClick(subscription, analyticsLocations);
                },
              };
              stringResult = intl2.format(tmp4(tmp3[24]).t.fvk30i, obj26);
            }
            const obj27 = { variant: "text-sm/medium", color: "text-default", children: stringResult };
            const items13 = [closure_29(tmp4(tmp3[23]).Text, obj27), ,];
            const obj28 = { subscription };
            items13[1] = closure_29(tmp4(tmp3[48]).GoogleManagementLink, obj28);
            items13[2] = null != memo && memo;
            obj25.children = items13;
            items12[1] = closure_30(c8, obj25);
            const obj29 = { variant: "eyebrow", color: "text-default", children: null };
            const intl4 = tmp4(tmp3[24]).intl;
            obj29.children = intl4.string(tmp4(tmp3[24]).t.Sb6wI1);
            items12[2] = closure_29(tmp4(tmp3[23]).Text, obj29);
            const obj30 = { style: null, children: null };
            const items14 = [tmp.extraInfoTextContainer, { gap: 4 }];
            obj30.style = items14;
            const obj31 = { variant: "text-md/semibold", color: "text-default", children: null };
            const intl5 = tmp4(tmp3[24]).intl;
            obj31.children = intl5.string(tmp4(tmp3[24]).t.KXQjfc);
            const items15 = [closure_29(tmp4(tmp3[23]).Text, obj31)];
            const obj32 = { variant: "text-sm/medium", color: "text-default", children: null };
            const tmp4Result17 = tmp4(tmp3[47]);
            obj32.children = tmp4Result17.getBillingInformationStringNative(
              subscription,
              first,
              first1,
              false,
              fractionalPremiumInfo,
            );
            items15[1] = closure_29(tmp4(tmp3[23]).Text, obj32);
            obj30.children = items15;
            items12[3] = closure_30(c8, obj30);
            obj23.children = items12;
            items11[1] = closure_30(c8, obj23);
            obj19.children = items11;
            return closure_30(c8, obj19);
          }
        }
      }
    }
    const obj33 = { style: tmp.container, children: null };
    const obj34 = { style: tmp.errorHeader, children: null };
    const obj35 = {
      source: tmp2(isThemeLightResult ? tmp3[40] : tmp3[41]),
      style: tmp.headerBackground,
      children: null,
    };
    const obj36 = { style: tmp.logoContainer, children: null };
    const obj37 = { source: tmp2(tmp3[42]), style: tmp.wumpusImg };
    const items16 = [closure_29(stateFromStores3, obj37)];
    const obj38 = { source: tmp2(isThemeLightResult ? tmp3[43] : tmp3[44]), style: tmp.logoStyle };
    items16[1] = closure_29(stateFromStores3, obj38);
    obj36.children = items16;
    const items17 = [closure_30(c8, obj36)];
    const obj39 = { variant: "heading-sm/medium", color: "text-default", children: planDescription };
    items17[1] = closure_29(tmp4(tmp3[23]).Text, obj39);
    obj35.children = items17;
    const items18 = [closure_30(loadId, obj35)];
    let isOnPlatformMatchingExternalPaymentGateway = subscription.isOnPlatformMatchingExternalPaymentGateway;
    if (isOnPlatformMatchingExternalPaymentGateway) {
      const obj40 = { style: tmp.errorHeaderPrimaryButton, children: null };
      const obj41 = { size: "sm", variant: "secondary", text: null, onPress: null, loading: null, disabled: null };
      const intl9 = tmp4(tmp3[24]).intl;
      obj41.text = intl9.string(tmp4(tmp3[24]).t.lTCb0c);
      obj41.onPress = asyncGeneratorStep(async () => {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
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
            c4 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                _undefined(true);
                c3 = 1;
                c1 = 2;
                c4 = 1;
                const obj5 = { value: tmp3(tmp24[46]).onResubscribeClick(subscription), done: false };
                return obj5;
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
              const obj = { value, done: true };
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
      obj41.loading = tmp21;
      obj41.disabled = tmp21;
      obj40.children = closure_29(tmp4(tmp3[45]).Button, obj41);
      isOnPlatformMatchingExternalPaymentGateway = closure_29(tmp48, obj40);
    }
    items18[1] = isOnPlatformMatchingExternalPaymentGateway;
    obj34.children = items18;
    const items19 = [closure_30(c8, obj34)];
    const obj42 = { style: tmp.extraInfoContainer, children: null };
    const obj43 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
    const intl10 = tmp4(tmp3[24]).intl;
    obj43.children = intl10.string(tmp4(tmp3[24]).t.YCrcPL);
    const items20 = [closure_29(tmp4(tmp3[23]).Text, obj43)];
    const obj44 = { style: tmp.extraInfoTextContainer, children: null };
    const obj45 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl11 = tmp4(tmp3[24]).intl;
    obj45.children = intl11.string(tmp4(tmp3[24]).t["MTG+3O"]);
    const items21 = [closure_29(tmp4(tmp3[23]).Text, obj45), , ,];
    const obj46 = { variant: "text-sm/medium", color: "text-default", children: null };
    const tmp2Result5 = tmp2(tmp3[37]);
    obj46.children = tmp4(tmp3[47]).getBillingInformationStringNative(subscription, first, first1);
    items21[1] = closure_29(tmp4(tmp3[23]).Text, obj46);
    const obj47 = { subscription };
    items21[2] = closure_29(tmp4(tmp3[48]).GoogleManagementLink, obj47);
    items21[3] = null != memo && memo;
    obj44.children = items21;
    items20[1] = closure_30(c8, obj44);
    obj42.children = items20;
    items19[1] = closure_30(c8, obj42);
    obj33.children = items19;
    return closure_30(c8, obj33);
  }
  const tmp5Result2 = first2(noop.useState(false), 2);
}
function FractionalPremiumCredits(durationText) {
  ({ fractionalPremiumInfo, showPremiumFeaturesCard, hasUnactivatedUnits, unactivatedHoursString, activationDate } =
    durationText);
  const tmp = closure_35();
  const obj = { style: tmp.container, children: null };
  if (showPremiumFeaturesCard) {
    const obj2 = { premiumType: __initData5.TIER_2, forFractionalPremium: true, hideButton: true };
    showPremiumFeaturesCard = __initData7(PremiumFeaturesCardDefault, obj2);
  }
  const items = [showPremiumFeaturesCard];
  const obj3 = { style: tmp.extraInfoContainer, children: null };
  const obj4 = { variant: "eyebrow", color: "text-default", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.Obre8v);
  const items1 = [__initData7(Text_Text.Text, obj4), ,];
  const obj5 = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl2 = util.intl;
  const obj6 = { helpCenterLink: HelpdeskUtilsDefault.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT) };
  obj5.children = intl2.format(util.t.AYGoBn, obj6);
  items1[1] = __initData7(Text_Text.Text, obj5);
  const obj8 = { style: tmp.fpRowStart, start: true, end: false, variant: "primary", children: null };
  const obj9 = { style: tmp.fpRowIcon, children: null };
  const obj10 = { style: null, start: null, end: null, colors: null, children: null };
  const obj11 = { padding: 6, borderRadius: null };
  obj11.borderRadius = nativeDefault.radii.sm;
  obj10.style = obj11;
  obj10.start = { x: 0, y: 0 };
  obj10.end = { x: 0, y: 1 };
  const items2 = [
    nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE,
    nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE,
  ];
  obj10.colors = items2;
  const obj12 = { children: null };
  const tmp11 = LinearGradientDefault;
  obj12.children = __initData7(native.Icon, {
    color: nativeDefault.unsafe_rawColors.WHITE,
    source: _modDef8309,
    size: native.IconSizes.LARGE,
  });
  obj10.children = __initData7(React6, obj12);
  obj9.children = __initData7(tmp11, obj10);
  const items3 = [__initData7(React6, obj9)];
  const obj14 = { style: tmp.fpRowContent, children: null };
  const obj15 = { variant: "text-sm/semibold", style: tmp.fpUnitsTitle, children: null };
  const intl3 = util.intl;
  obj15.children = intl3.string(util.t.DFMPWS);
  const items4 = [__initData7(Text_Text.Text, obj15)];
  if (hasUnactivatedUnits) {
    if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
      const obj16 = { variant: "text-sm/medium", children: unactivatedHoursString };
      let tmp8Result = __initData7(Text_Text.Text, obj16);
    }
    items4[1] = tmp8Result;
    obj14.children = items4;
    items3[1] = __initData8(React6, obj14);
    obj8.children = items3;
    const items5 = [__initData8(Card.Card, obj8), ,];
    const obj17 = { style: tmp.dividerContainer, children: null };
    const obj18 = { style: tmp.divider };
    obj17.children = __initData7(React6, obj18);
    items5[1] = __initData7(React6, obj17);
    const obj19 = { start: false, end: true, style: tmp.fpRowEnd, variant: "secondary", children: null };
    const obj20 = { style: tmp.fpRowContent, children: null };
    if (hasUnactivatedUnits) {
      if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
        const obj21 = { variant: "text-md/semibold", children: null };
        const intl6 = util.intl;
        obj21.children = intl6.string(util.t["hT6i/0"]);
        const items6 = [__initData7(Text_Text.Text, obj21)];
        let tmp8Result3 = undefined !== activationDate;
        if (tmp8Result3) {
          const obj22 = { variant: "text-xs/medium", color: "text-subtle", children: null };
          const intl7 = util.intl;
          const obj23 = { activateDate: activationDate };
          obj22.children = intl7.format(util.t["0Vwb/l"], obj23);
          tmp8Result3 = __initData7(Text_Text.Text, obj22);
        }
        const obj24 = { children: null };
        items6[1] = tmp8Result3;
        obj24.children = items6;
        let tmp8Result5 = __initData8(React6, obj24);
      }
      const items7 = [tmp8Result5];
      if (hasUnactivatedUnits) {
        if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
          const obj25 = { style: tmp.fpUnactivatedHoursPill, children: null };
          const obj26 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: unactivatedHoursString };
          obj25.children = __initData7(Text_Text.Text, obj26);
          let tmp8Result4 = __initData7(React6, obj25);
        }
        const obj27 = { children: null };
        items7[1] = tmp8Result4;
        obj20.children = items7;
        obj19.children = __initData8(React6, obj20);
        items5[2] = __initData7(tmp14, obj19);
        obj27.children = items5;
        items1[2] = __initData8(React6, obj27);
        obj3.children = items1;
        items[1] = __initData8(React6, obj3);
        obj.children = items;
        return __initData8(React6, obj);
      }
      const obj28 = { style: tmp.fpTimeRemainingPill, children: null };
      const obj29 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: durationText.durationText };
      obj28.children = __initData7(Text_Text.Text, obj29);
      tmp8Result4 = __initData7(React6, obj28);
    }
    const obj30 = { variant: "text-md/semibold", style: tmp.fpTimeRemaining, children: null };
    const intl5 = util.intl;
    obj30.children = intl5.string(util.t["3G0CTC"]);
    tmp8Result5 = __initData7(Text_Text.Text, obj30);
  }
  const obj31 = { variant: "text-sm/medium", style: tmp.fpUnitsStatusText, children: null };
  const intl4 = util.intl;
  obj31.children = intl4.string(util.t["B66Z+f"]);
  tmp8Result = __initData7(Text_Text.Text, obj31);
  const obj13 = { color: nativeDefault.unsafe_rawColors.WHITE, source: _modDef8309, size: native.IconSizes.LARGE };
}
get_ActivityIndicator = fn(17);
({
  Image: metroRequire,
  ImageBackground: closure_7,
  View: closure_8,
  ScrollView: closure_9,
  ActivityIndicator: c10,
} = get_ActivityIndicator);
const isNoneSubscription = fn(4415).isNoneSubscription;
const Constants = fn(1074);
({
  AnalyticEvents: closure_19,
  HelpdeskArticles: closure_20,
  SubscriptionStatusTypes: closure_21,
  UserSettingsSections: closure_22,
} = Constants);
const TABLE_DIVIDER_WIDTH = fn(5815).TABLE_DIVIDER_WIDTH;
const CustomCheckoutFlow = fn(4738).CustomCheckoutFlow;
const PremiumConstants = fn(1374);
({
  FractionalPremiumStates: closure_25,
  PREMIUM_SUBSCRIPTION_APPLICATION: closure_26,
  PremiumTypes: closure_27,
  SubscriptionPlanInfo: closure_28,
} = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_29, jsxs: closure_30 } = jsxProd);
let closure_31 = new LoggerDefault("PremiumManagePlan");
let createStyles = fn(4756);
let obj2 = {
  background: null,
  container: null,
  contentContainer: null,
  topBlur: null,
  accountCredit: null,
  accountCreditList: null,
  featuresTable: null,
  subscriptionHeader: null,
  billingInfo: null,
};
const tmp6 = new LoggerDefault("PremiumManagePlan");
obj2.background = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" };
obj2.container = { display: "flex", paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.contentContainer = { marginTop: 24, display: "flex", gap: 12 };
obj2.topBlur = { position: "absolute", zIndex: 5, top: 0, left: 0, right: 0 };
obj2.accountCredit = { paddingHorizontal: 16 };
let obj4 = { display: "flex", paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.accountCreditList = {
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.featuresTable = { paddingTop: 16 };
obj2.subscriptionHeader = { marginTop: 20, width: "100%" };
obj2.billingInfo = { marginTop: 20, width: "100%" };
let closure_32 = createStyles.createStyles(obj2);
createStyles = fn(4756);
let obj7 = {
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
  },
  backButtonWrapper: null,
};
let size = {
  width: 24,
  height: 24,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
};
obj7.backButtonWrapper = size;
let closure_33 = createStyles.createStyles(obj7);
createStyles = fn(4756);
let closure_35 = createStyles.createStyles(() => {
  const obj = {
    container: { display: "flex", flexDirection: "column", gap: 12 },
    errorHeader: {
      backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
      borderRadius: nativeDefault.radii.lg,
      overflow: "hidden",
    },
    headerBackground: { padding: 16 },
    logoContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
    wumpusImg: { marginRight: 10, height: 36, width: 51 },
    logoStyle: { height: 32, width: 78 },
    errorHeaderPrimaryButton: { marginBottom: 16, marginHorizontal: 16 },
    extraInfoContainer: { paddingTop: 16, paddingHorizontal: 16, display: "flex", gap: 8 },
    extraInfoTextContainer: null,
    mutationWarningContainer: null,
    mutationText: null,
    fpTimeRemaining: null,
    fpTimeRemainingPill: null,
    fpUnactivatedHoursPill: null,
    fpTimeRemainingText: null,
    fpUnitsTitle: null,
    fpUnitsStatusText: null,
    fpRowStart: null,
    fpRowIcon: null,
    fpRowContent: null,
    fpRowEnd: null,
    dividerContainer: null,
    divider: null,
    pillAndCardContainer: null,
    pillPosition: null,
  };
  const obj2 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.lg,
    overflow: "hidden",
  };
  obj.extraInfoTextContainer = {
    padding: 16,
    borderRadius: nativeDefault.radii.sm,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    display: "flex",
    gap: 18,
  };
  const obj3 = {
    padding: 16,
    borderRadius: nativeDefault.radii.sm,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    display: "flex",
    gap: 18,
  };
  obj.mutationWarningContainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    padding: 16,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  obj.mutationText = { flex: 1 };
  const obj4 = {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
    padding: 16,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  obj.fpTimeRemaining = { color: nativeDefault.colors.TEXT_BRAND };
  const obj5 = { color: nativeDefault.colors.TEXT_BRAND };
  obj.fpTimeRemainingPill = {
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE,
    paddingVertical: 4,
    paddingHorizontal: 8,
  };
  const obj6 = {
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE,
    paddingVertical: 4,
    paddingHorizontal: 8,
  };
  obj.fpUnactivatedHoursPill = {
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    paddingVertical: 4,
    paddingHorizontal: 8,
  };
  const obj7 = {
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    paddingVertical: 4,
    paddingHorizontal: 8,
  };
  obj.fpTimeRemainingText = { color: nativeDefault.colors.WHITE };
  const obj8 = { color: nativeDefault.colors.WHITE };
  obj.fpUnitsTitle = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
  const obj9 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
  obj.fpUnitsStatusText = { color: nativeDefault.colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 };
  const obj10 = { color: nativeDefault.colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 };
  obj.fpRowStart = {
    padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
    minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  const obj11 = {
    padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING,
    minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  obj.fpRowIcon = { marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
  obj.fpRowContent = {
    flexShrink: 1,
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const obj12 = { marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
  obj.fpRowEnd = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.dividerContainer = { height: TABLE_DIVIDER_WIDTH };
  const obj13 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
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
  const youBarSettingsOutsideSafeAreaTop = navigation(13718).useYouBarSettingsOutsideSafeAreaTop();
  let obj = navigation(13718);
  navigation = navigation(1484).useNavigation();
  let items = [navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  let obj2 = navigation(1484);
  const items1 = [SubscriptionPlanStore];
  const stateFromStores = navigation(504).useStateFromStores(items1, () =>
    SubscriptionPlanStore.isLoadedForPremiumSKUs(),
  );
  const obj4 = navigation(504);
  const items2 = [SubscriptionStore];
  const obj5 = navigation(504);
  [tmp10, tmp11] = navigation(504).useStateFromStoresArray(items2, () => {
    const items = [SubscriptionStore.getPremiumTypeSubscription(), SubscriptionStore.hasFetchedSubscriptions()];
    return items;
  });
  const tmp9 = _slicedToArray(
    navigation(504).useStateFromStoresArray(items2, () => {
      const items = [SubscriptionStore.getPremiumTypeSubscription(), SubscriptionStore.hasFetchedSubscriptions()];
      return items;
    }),
    2,
  );
  const items3 = [UserStore];
  const stateFromStores1 = navigation(504).useStateFromStores(items3, () => currentUser.getCurrentUser());
  const tmp12 = useFractionalPremiumInfoDefault({ forceFetch: true });
  useMountEffectDefault(() => {
    let isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions();
    if (!isSubscriptionFetching) {
      isSubscriptionFetching = BillingInfoStore.isSubscriptionFetching;
    }
    if (!isSubscriptionFetching) {
      const subscriptions = navigation(5079).fetchSubscriptions();
      const obj = navigation(5079);
    }
    if (!tmp5) {
      const premiumSubscriptionPlans = navigation(7497).fetchPremiumSubscriptionPlans();
      const obj3 = navigation(7497);
    }
    tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
  });
  const obj6 = navigation(504);
  let isInReverseTrial = navigation(8323).useIsInReverseTrial();
  const obj8 = navigation(8323);
  const tmp15Result = useFPDurationLeftDefault(tmp12.endsAt, navigation(13720).CountDownMessageTypes.SHORT_TIME);
  const unactivatedFractionalPremiumDurationString =
    navigation(4414).getUnactivatedFractionalPremiumDurationString(tmp12);
  if (null !== tmp10) {
    if (!tmp10.isPurchasedExternally) {
      const currentPeriodEnd = tmp10.currentPeriodEnd;
    }
  }
  let tmp29Result4 = tmp12.fractionalState !== constants4.NONE;
  if (tmp29Result4) {
    let tmp20 = isInReverseTrial;
    if (isInReverseTrial) {
      tmp20 = tmp12.unactivatedUnits.length <= 0;
    }
    tmp29Result4 = !tmp20;
  }
  if (!tmp29Result4) {
    tmp29Result4 = tmp17;
  }
  const obj9 = navigation(4414);
  importDefault = noop.useRef(false);
  const callback = noop.useCallback(
    (nativeEvent) =>
      PremiumNitroHomeUtils.trackIfScrolledToBottom({
        nativeEvent: nativeEvent.nativeEvent,
        trackedType: "your_nitro_plan",
        hasTrackedScrolledToBottom,
      }),
    [],
  );
  const tmp4Result = navigation(4466);
  const items4 = [EntitlementStore];
  let tmp23 = null != tmp10;
  const stateFromStores2 = navigation(504).useStateFromStores(
    items4,
    () => {
      forApplication = forApplication.getForApplication(closure_1_26);
      if (forApplication == null) {
        const _Set = Set;
        forApplication = new Set();
      }
      return forApplication;
    },
    [],
    tmp4(2058).areSetsEqual,
  );
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
  const obj7 = { style: tmp.background, children: null };
  const items5 = [tmp.topBlur];
  let num = 0;
  const tmp4Result2 = navigation(504);
  if (!youBarSettingsOutsideSafeAreaTop) {
    num = top;
  }
  items5[1] = { height: num };
  const items6 = [
    closure_29(VisualEffectViewAnimatedDefault, {
      blurAmount: 0.2,
      style: items5,
      blurTheme: tmp4Result.useThemeContext().theme,
    }),
  ];
  const items7 = [tmp.container];
  let num2 = 16;
  if (!youBarSettingsOutsideSafeAreaTop) {
    num2 = top;
  }
  const obj10 = {
    contentContainerStyle: items7,
    onScrollEndDrag: callback,
    onMomentumScrollEnd: callback,
    scrollEventThrottle: 0,
    children: null,
  };
  items7[1] = { paddingTop: num2, paddingBottom: rect.bottom };
  const items8 = [closure_29(ManagePlanHeader, {})];
  const obj11 = { style: tmp.contentContainer, children: null };
  let tmp29Result = tmp23;
  if (tmp23) {
    const obj12 = { subscription: tmp10, fractionalPremiumInfo: tmp12, isPremiumGroup: result, premiumGroupRole };
    tmp29Result = closure_29(SubscriptionAndBillingInfo, obj12);
  }
  const items9 = [tmp29Result, , , , , ,];
  if (isInReverseTrial) {
    const obj13 = { premiumType: closure_27.TIER_2, forFractionalPremium: true, hideButton: true };
    isInReverseTrial = closure_29(tmp2(9476), obj13);
  }
  items9[1] = isInReverseTrial;
  let tmp29Result3 = result;
  if (result) {
    tmp29Result3 = !tmp23;
  }
  if (tmp29Result3) {
    const obj14 = {
      premiumType: closure_27.TIER_2,
      hideButton: true,
      hidePrice: true,
      isPremiumGroup: true,
      premiumGroupRole,
    };
    tmp29Result3 = closure_29(tmp2(9476), obj14);
  }
  items9[2] = tmp29Result3;
  if (tmp29Result4) {
    const obj15 = {
      fractionalPremiumInfo: tmp12,
      showPremiumFeaturesCard: tmp12.fractionalState === constants4.FP_ONLY,
      hasUnactivatedUnits: tmp17,
      unactivatedHoursString: unactivatedFractionalPremiumDurationString,
      activationDate: currentPeriodEnd,
      durationText: tmp15Result,
    };
    tmp29Result4 = closure_29(FractionalPremiumCredits, obj15);
  }
  items9[3] = tmp29Result4;
  if (tmp27Result) {
    const obj16 = { children: null };
    const obj17 = {
      style: tmp.subscriptionHeader,
      onClickManagePremiumGuild() {
        const routes = navigation.getState().routes;
        const found = routes.find((name) => name.name === constants.GUILD_BOOSTING);
        UserSettingsModalActionCreatorsDefault.setSection(constants3.GUILD_BOOSTING);
        const result = UserSettingsUtils.trackUserSettingsPaneViewed({ destinationPane: constants3.GUILD_BOOSTING });
        if (null != found) {
          navigation.navigate(constants3.GUILD_BOOSTING, undefined, { pop: true });
        } else {
          navigation.push(constants3.GUILD_BOOSTING);
        }
        const obj3 = { destinationPane: constants3.GUILD_BOOSTING };
      },
      subscription: tmp10,
    };
    const items10 = [closure_29(tmp2(13616), obj17)];
    const obj18 = { style: tmp.billingInfo, subscription: tmp10 };
    items10[1] = closure_29(tmp2(13653), obj18);
    obj16.children = items10;
    tmp27Result = closure_30(closure_8, obj16);
  }
  items9[4] = tmp27Result;
  const obj19 = {
    style: tmp.accountCredit,
    creditListContainerStyle: tmp.accountCreditList,
    currentSubscription: tmp10,
    entitlements: stateFromStores2,
    hasPremiumGroup: null,
  };
  let flag = result;
  const tmp2Result = VisualEffectViewAnimatedDefault;
  if (result == null) {
    flag = false;
  }
  obj19.hasPremiumGroup = flag;
  items9[5] = closure_29(PremiumAccountCreditDefault, obj19);
  const obj20 = {
    style: tmp.featuresTable,
    variant: "nitro_home",
    titleOverride: null,
    isFractionalOnly: null,
    isPremiumGroup: null,
    premiumGroupRole: null,
  };
  const tmp2Result3 = PremiumAccountCreditDefault;
  const intl = tmp4(1115).intl;
  obj20.titleOverride = intl.string(navigation(1115).t.QXx2gs);
  obj20.isFractionalOnly = tmp12.fractionalState === constants4.FP_ONLY;
  obj20.isPremiumGroup = result;
  obj20.premiumGroupRole = premiumGroupRole;
  items9[6] = closure_29(PremiumFeaturesTableDefault, obj20);
  obj11.children = items9;
  items8[1] = closure_30(closure_8, obj11);
  obj10.children = items8;
  items6[1] = closure_30(closure_9, obj10);
  obj7.children = items6;
  return closure_30(closure_8, obj7);
}
export const BACK_BUTTON_SIZE = 24;
