// === Module 13621: PremiumManagePlan ===

// Module 13621 (PremiumManagePlan)
import LoggerDefault from "Logger" /* 3 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import useNavigation from "useNavigation" /* 1502 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import Text_Text from "Text/Text" /* 5086 */;
import VisualEffectViewAnimatedDefault from "VisualEffectViewAnimated" /* 5362 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import useMountEffectDefault from "useMountEffect" /* 5392 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5720 */;
import Card from "Card" /* 6186 */;
import Pressables from "Pressables" /* 6189 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 6207 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6671 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6675 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7097 */;
import PremiumManagementUtils from "PremiumManagementUtils" /* 7109 */;
import _modDef8054 from "module_8054" /* 8054 */;
import PremiumFeaturesCardDefault from "PremiumFeaturesCard" /* 9330 */;
import PremiumSubscriptionDetails from "PremiumSubscriptionDetails" /* 13476 */;
import PremiumAccountCreditDefault from "PremiumAccountCredit" /* 13518 */;
import PremiumNitroHomeUtils from "PremiumNitroHomeUtils" /* 13549 */;
import useFPDurationLeftDefault from "useFPDurationLeft" /* 13587 */;
import PremiumFeaturesTableDefault from "PremiumFeaturesTable" /* 13600 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import BillingInfoStore from "BillingInfoStore" /* 4728 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4731 */;
import SubscriptionStore from "SubscriptionStore" /* 4732 */;
import EntitlementStore from "EntitlementStore" /* 7098 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import IAPStore from "IAPStore" /* 7120 */;

require = fn;
function SubscriptionAndBillingInfo(subscription) {
  subscription = subscription.subscription;
  ({ fractionalPremiumInfo, isPremiumGroup, premiumGroupRole } = subscription);
  let analyticsLocations;
  let stateFromStores2;
  let first1;
  noop = undefined;
  c8 = undefined;
  const tmp = closure_35();
  let tmp3 = stateFromStores2;
  analyticsLocations = analyticsLocations(stateFromStores2[27])().analyticsLocations;
  const tmp4 = subscription;
  let obj = subscription(stateFromStores2[28]);
  const first = first1(obj.useFetchSubscriptionInvoicePreview({ subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations, analyticsLocation: analyticsLocations(stateFromStores2[29]).PREMIUM_SUBSCRIPTION_DETAILS }), 1)[0];
  let obj2 = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations, analyticsLocation: analyticsLocations(stateFromStores2[29]).PREMIUM_SUBSCRIPTION_DETAILS };
  let obj3 = subscription(stateFromStores2[28]);
  let obj4 = { subscriptionId: subscription.id, preventFetch: subscription.status !== constants2.PAST_DUE };
  let items = [IAPStore];
  const stateFromStores = subscription(stateFromStores2[30]).useStateFromStores(items, () => {
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
  let obj5 = subscription(stateFromStores2[30]);
  const items1 = [SubscriptionStore];
  const stateFromStores1 = subscription(stateFromStores2[30]).useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj6 = subscription(stateFromStores2[30]);
  const items2 = [BillingInfoStore];
  stateFromStores2 = subscription(stateFromStores2[30]).useStateFromStores(items2, () => BillingInfoStore.isSubscriptionFetching);
  let tmp11 = null !== stateFromStores1 && stateFromStores1.hasActiveTrial;
  const obj7 = subscription(stateFromStores2[30]);
  asyncGeneratorStep = tmp4(tmp3[22]).useNavigation();
  const tmp4Result = tmp4(tmp3[22]);
  const tmp4Result9 = tmp4(tmp3[31]);
  const isThemeLightResult = tmp4(tmp3[32]).isThemeLight(tmp4Result9.useThemeContext().theme);
  const tmp5Result = first1(noop.useState(null), 2);
  first1 = tmp5Result[0];
  noop = tmp5Result[1];
  const tmp4Result10 = tmp4(tmp3[32]);
  const items3 = [AppStateStore];
  const stateFromStores3 = tmp4(tmp3[30]).useStateFromStores(items3, () => state.getState());
  const items4 = [first1, stateFromStores2, stateFromStores3];
  const effect = noop.useEffect(() => {
    let tmp2 = "opening_mobile_web" === first1;
    if (tmp2) {
      tmp2 = stateFromStores3 !== ConstantsIOS.AppStates.ACTIVE;
    }
    if (tmp2) {
      closure_5("in_mobile_web");
    }
    let tmp8 = "in_mobile_web" === first1;
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
    tmp17 = "start_fetching_update" === first1 && stateFromStores2;
    tmp20 = "fetching_update" !== first1 || stateFromStores2;
  }, items4);
  let tmp17 = analyticsLocations(tmp3[35])(() => subscription(stateFromStores2[36]).getNewAnalyticsLoadId());
  const loadId = tmp17;
  const items5 = [subscription, first1, analyticsLocations, tmp17];
  const memo = noop.useMemo(() => {
    if ("start_fetching_update" !== first1) {
      if ("fetching_update" !== tmp) {
        const obj3 = {
          returnCtaAsComponent: true,
          loadId,
          shouldAllowExternalManagement: true,
          onSuccessCallback() {
                logger.log("Successfully opened mobile web Nitro Management page");
                const obj2 = { load_id, location_stack: null, custom_checkout_flow: null };
                const items = [...closure_1_1, analyticsLocations(stateFromStores2[29]).MOBILE_APP_MANAGE_PREMIUM_SUBSCRIPTION_CTA];
                obj2.location_stack = items;
                obj2.custom_checkout_flow = constants2.MOBILE_WEB_REDIRECT_CHECKOUT;
                analyticsLocations(stateFromStores2[38]).track(constants.MOBILE_OPEN_STANDALONE_MANAGE_SUBSCRIPTION_PAGE, obj2);
                closure_1_5("opening_mobile_web");
              }
        };
        const externalManagementMessage = PremiumManagementUtils.getExternalManagementMessage(subscription, obj3);
        let tmp5 = null;
        if (null != externalManagementMessage) {
          let tmp3 = externalManagementMessage;
          if (!noop.isValidElement(externalManagementMessage)) {
            const obj = { variant: "text-sm/medium", color: "text-default", children: externalManagementMessage };
            tmp3 = closure_2_29(Text_Text.Text, obj);
          }
          tmp5 = tmp3;
        }
        return tmp5;
      }
    }
    return closure_2_29(collapsed, { size: "small" });
  }, items5);
  const tmp4Result11 = tmp4(tmp3[30]);
  [tmp20, c8] = first1(noop.useState(false), 2);
  const tmp5Result2 = first1(noop.useState(false), 2);
  const appleSubscriptionOwnership = tmp4(tmp3[39]).useAppleSubscriptionOwnership(subscription);
  const tmp4Result12 = tmp4(tmp3[39]);
  const billingInformationNative = tmp4(tmp3[40]).useBillingInformationNative(subscription, first, first1(obj3.useGetSubscriptionInvoice(obj4), 1)[0], false, { fractionalPremiumInfo });
  if (null == first) {
    return null;
  } else {
    const planIdFromInvoice = tmp2(tmp3[41]).getPlanIdFromInvoice(subscription, first);
    const tmp2Result = tmp2(tmp3[41]);
    const statusFromInvoice = tmp2(tmp3[41]).getStatusFromInvoice(subscription, first);
    tmp2(tmp3[42])(null != closure_28[planIdFromInvoice], "missing subscription planInfo");
    const tmp2Result4 = tmp2(tmp3[41]);
    const obj9 = { subscription, planId: planIdFromInvoice, price: null, includePremiumGuilds: true };
    let formatRateResult = null;
    if (null != stateFromStores) {
      formatRateResult = tmp4(tmp3[43]).formatRate(stateFromStores.priceString, tmp51.interval, tmp51.intervalCount);
      const tmp4Result14 = tmp4(tmp3[43]);
    }
    obj9.price = formatRateResult;
    const planDescription = tmp2(tmp3[41]).getPlanDescription(obj9);
    if (statusFromInvoice !== constants2.CANCELED) {
      if (statusFromInvoice !== constants2.PAUSE_PENDING) {
        if (statusFromInvoice !== constants2.PAST_DUE) {
          if (null != subscription.renewalMutations) {
            const _Date = Date;
            const date = new Date(subscription.currentPeriodEnd);
            let result = date;
            if (!subscription.isPurchasedExternally) {
              result = tmp4(tmp3[41]).extendDateWithUnconsumedFractionalPremium(date, fractionalPremiumInfo.unactivatedUnits);
              const tmp4Result15 = tmp4(tmp3[41]);
            }
            const obj10 = { style: tmp.container, children: null };
            const obj11 = { style: tmp.mutationWarningContainer, children: null };
            const items6 = [closure_29(tmp4(tmp3[52]).AnnouncementsWarningIcon, { size: "md" }), ];
            const obj12 = { style: tmp.mutationText, variant: "heading-sm/medium", color: "text-default", children: null };
            const intl7 = tmp4(tmp3[26]).intl;
            if (!subscription.hasExternalPlanChange) {
              if (!isNoneSubscription(subscription.renewalMutations.planId)) {
                let displayName = tmp2(tmp3[41]).getDisplayName(subscription.renewalMutations.planId);
                const tmp2Result6 = tmp2(tmp3[41]);
              }
              const obj13 = { planName: displayName, date: result };
              obj12.children = intl7.format(tmp39, obj13);
              items6[1] = closure_29(tmp4(tmp3[25]).Text, obj12);
              obj11.children = items6;
              const items7 = [closure_30(tmp37, obj11), , ];
              const obj14 = { premiumType: closure_27.TIER_2, hideButton: true, isPremiumGroup, premiumGroupRole };
              items7[1] = closure_29(tmp2(tmp3[53]), obj14);
              const obj15 = { style: tmp.extraInfoContainer, children: null };
              const obj16 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
              const intl8 = tmp4(tmp3[26]).intl;
              obj16.children = intl8.string(tmp4(tmp3[26]).t.YCrcPL);
              const items8 = [closure_29(tmp4(tmp3[25]).Text, obj16), ];
              const obj17 = { style: tmp.extraInfoTextContainer, children: null };
              const obj18 = { variant: "text-sm/medium", color: "text-default", children: null };
              const intl9 = tmp4(tmp3[26]).intl;
              obj18.children = intl9.string(tmp4(tmp3[26]).t["MTG+3O"]);
              const items9 = [closure_29(tmp4(tmp3[25]).Text, obj18), , ];
              const obj19 = { variant: "text-sm/medium", color: "text-default", children: billingInformationNative };
              items9[1] = closure_29(tmp4(tmp3[25]).Text, obj19);
              items9[2] = null != memo && memo;
              obj17.children = items9;
              items8[1] = closure_30(tmp37, obj17);
              obj15.children = items8;
              items7[2] = closure_30(tmp37, obj15);
              obj10.children = items7;
              return closure_30(tmp37, obj10);
            }
            displayName = tmp4(tmp3[41]).getExternalPlanDisplayName(subscription.renewalMutations);
            const tmp4Result16 = tmp4(tmp3[41]);
          } else {
            const obj20 = { style: tmp.container, children: null };
            const obj21 = { style: tmp.pillAndCardContainer, children: null };
            if (tmp11) {
              const obj22 = { style: tmp.pillPosition, children: closure_29(tmp4(tmp3[54]).PremiumReferralTrialPill, {}) };
              tmp11 = closure_29(tmp54, obj22);
            }
            const items10 = [tmp11, ];
            const obj23 = { premiumType: closure_27.TIER_2, forFractionalPremium: fractionalPremiumInfo.fractionalState !== constants4.NONE, hideButton: true, isPremiumGroup, premiumGroupRole };
            items10[1] = closure_29(tmp2(tmp3[53]), obj23);
            obj21.children = items10;
            const items11 = [closure_30(c8, obj21), ];
            const obj24 = { style: tmp.extraInfoContainer, children: null };
            const obj25 = { variant: "eyebrow", color: "text-default", children: null };
            const intl = tmp4(tmp3[26]).intl;
            obj25.children = intl.string(tmp4(tmp3[26]).t.YCrcPL);
            const items12 = [closure_29(tmp4(tmp3[25]).Text, obj25), , , ];
            if (appleSubscriptionOwnership.isMismatch()) {
              const obj26 = { accessibilityRole: "alert", style: tmp.appleAccountMismatchNotice, children: null };
              const obj27 = { size: "sm", color: tmp2(tmp3[19]).colors.ICON_FEEDBACK_WARNING };
              const items13 = [closure_29(tmp4(tmp3[55]).WarningIcon, obj27), ];
              const obj28 = { variant: "text-sm/medium", color: "text-strong", style: tmp.appleAccountMismatchNoticeText, children: null };
              const intl4 = tmp4(tmp3[26]).intl;
              obj28.children = intl4.string(tmp4(tmp3[26]).t.meauFg);
              items13[1] = closure_29(tmp4(tmp3[25]).Text, obj28);
              obj26.children = items13;
              let tmp53Result = closure_30(tmp54, obj26);
            } else {
              const obj29 = { style: tmp.extraInfoTextContainer, children: null };
              if (null != memo) {
                const intl3 = tmp4(tmp3[26]).intl;
                let stringResult = intl3.string(tmp4(tmp3[26]).t["MTG+3O"]);
              } else {
                const intl2 = tmp4(tmp3[26]).intl;
                const obj30 = {
                  onSwitchPlans() {
                                  return PremiumSubscriptionDetails.handleManageSubscription(subscription, closure_3, analyticsLocations);
                                },
                  onCancel() {
                                  return PremiumSubscriptionDetails.onCancelClick(subscription, analyticsLocations);
                                }
                };
                stringResult = intl2.format(tmp4(tmp3[26]).t.fvk30i, obj30);
              }
              const obj31 = { variant: "text-sm/medium", color: "text-default", children: stringResult };
              const items14 = [closure_29(tmp4(tmp3[25]).Text, obj31), , ];
              const obj32 = { subscription };
              items14[1] = closure_29(tmp4(tmp3[51]).GoogleManagementLink, obj32);
              items14[2] = null != memo && memo;
              obj29.children = items14;
              tmp53Result = closure_30(tmp54, obj29);
            }
            items12[1] = tmp53Result;
            const obj33 = { variant: "eyebrow", color: "text-default", children: null };
            const intl5 = tmp4(tmp3[26]).intl;
            obj33.children = intl5.string(tmp4(tmp3[26]).t.Sb6wI1);
            items12[2] = closure_29(tmp4(tmp3[25]).Text, obj33);
            const obj34 = { style: null, children: null };
            const items15 = [tmp.extraInfoTextContainer, { gap: 4 }];
            obj34.style = items15;
            const obj35 = { variant: "text-md/semibold", color: "text-default", children: null };
            const intl6 = tmp4(tmp3[26]).intl;
            obj35.children = intl6.string(tmp4(tmp3[26]).t.KXQjfc);
            const items16 = [closure_29(tmp4(tmp3[25]).Text, obj35), ];
            const obj36 = { variant: "text-sm/medium", color: "text-default", children: billingInformationNative };
            items16[1] = closure_29(tmp4(tmp3[25]).Text, obj36);
            obj34.children = items16;
            items12[3] = closure_30(c8, obj34);
            obj24.children = items12;
            items11[1] = closure_30(c8, obj24);
            obj20.children = items11;
            return closure_30(c8, obj20);
          }
        }
      }
    }
    const obj37 = { style: tmp.container, children: null };
    const obj38 = { style: tmp.errorHeader, children: null };
    const obj39 = { style: tmp.headerBackground, children: null };
    const obj40 = { source: tmp2(isThemeLightResult ? tmp3[44] : tmp3[45]), style: tmp.headerBackgroundImage };
    const items17 = [closure_29(stateFromStores3, obj40), , ];
    const obj41 = { style: tmp.logoContainer, children: null };
    const obj42 = { source: tmp2(tmp3[46]), style: tmp.wumpusImg };
    const items18 = [closure_29(stateFromStores3, obj42), ];
    const obj43 = { source: tmp2(isThemeLightResult ? tmp3[47] : tmp3[48]), style: tmp.logoStyle };
    items18[1] = closure_29(stateFromStores3, obj43);
    obj41.children = items18;
    items17[1] = closure_30(c8, obj41);
    const obj44 = { variant: "heading-sm/medium", color: "text-default", children: planDescription };
    items17[2] = closure_29(tmp4(tmp3[25]).Text, obj44);
    obj39.children = items17;
    const items19 = [closure_30(c8, obj39), ];
    let isOnPlatformMatchingExternalPaymentGateway = subscription.isOnPlatformMatchingExternalPaymentGateway;
    if (isOnPlatformMatchingExternalPaymentGateway) {
      const obj45 = { style: tmp.errorHeaderPrimaryButton, children: null };
      const obj46 = { size: "sm", variant: "secondary", text: null, onPress: null, loading: null, disabled: null };
      const intl10 = tmp4(tmp3[26]).intl;
      obj46.text = intl10.string(tmp4(tmp3[26]).t.lTCb0c);
      obj46.onPress = asyncGeneratorStep(async () => {
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                _undefined(true);
                c3 = 1;
                c1 = 2;
                c4 = 1;
                const obj5 = { value: tmp3(tmp24[50]).onResubscribeClick(subscription), done: false };
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
              return { value: "IconComponent", done: null };
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
      obj46.loading = tmp20;
      obj46.disabled = tmp20;
      obj45.children = closure_29(tmp4(tmp3[49]).Button, obj46);
      isOnPlatformMatchingExternalPaymentGateway = closure_29(tmp44, obj45);
    }
    items19[1] = isOnPlatformMatchingExternalPaymentGateway;
    obj38.children = items19;
    const items20 = [closure_30(c8, obj38), ];
    const obj47 = { style: tmp.extraInfoContainer, children: null };
    const obj48 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
    const intl11 = tmp4(tmp3[26]).intl;
    obj48.children = intl11.string(tmp4(tmp3[26]).t.YCrcPL);
    const items21 = [closure_29(tmp4(tmp3[25]).Text, obj48), ];
    const obj49 = { style: tmp.extraInfoTextContainer, children: null };
    const obj50 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl12 = tmp4(tmp3[26]).intl;
    obj50.children = intl12.string(tmp4(tmp3[26]).t["MTG+3O"]);
    const items22 = [closure_29(tmp4(tmp3[25]).Text, obj50), , , ];
    const obj51 = { variant: "text-sm/medium", color: "text-default", children: billingInformationNative };
    items22[1] = closure_29(tmp4(tmp3[25]).Text, obj51);
    const obj52 = { subscription };
    items22[2] = closure_29(tmp4(tmp3[51]).GoogleManagementLink, obj52);
    items22[3] = null != memo && memo;
    obj49.children = items22;
    items21[1] = closure_30(c8, obj49);
    obj47.children = items21;
    items20[1] = closure_30(c8, obj47);
    obj37.children = items20;
    return closure_30(c8, obj37);
  }
  const obj8 = { fractionalPremiumInfo };
  const tmp4Result13 = tmp4(tmp3[40]);
}
get_ActivityIndicator = fn(17);
({ Image: metroRequire, StyleSheet: closure_7, View: closure_8, ScrollView: closure_9, ActivityIndicator: c10 } = get_ActivityIndicator);
const TABLE_DIVIDER_WIDTH = fn(6180).TABLE_DIVIDER_WIDTH;
const isNoneSubscription = fn(4727).isNoneSubscription;
const Constants = fn(1085);
({ AnalyticEvents: closure_20, HelpdeskArticles: closure_21, SubscriptionStatusTypes: closure_22, UserSettingsSections: closure_23 } = Constants);
const CustomCheckoutFlow = fn(5069).CustomCheckoutFlow;
const PremiumConstants = fn(1391);
({ FractionalPremiumStates: closure_25, PREMIUM_SUBSCRIPTION_APPLICATION: closure_26, PremiumTypes: closure_27, SubscriptionPlanInfo: closure_28 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_29, jsxs: closure_30 } = jsxProd);
let closure_31 = new LoggerDefault("PremiumManagePlan");
let createStyles = fn(5090);
let obj2 = { background: null, container: null, contentContainer: null, topBlur: null, accountCredit: null, accountCreditList: null, featuresTable: null, subscriptionHeader: null, billingInfo: null };
let tmp6 = new LoggerDefault("PremiumManagePlan");
obj2.background = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" };
obj2.container = { display: "flex", paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.contentContainer = { marginTop: 24, display: "flex", gap: 12 };
obj2.topBlur = { position: "absolute", zIndex: 5, top: 0, left: 0, right: 0 };
obj2.accountCredit = { paddingHorizontal: 16 };
let obj4 = { display: "flex", paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.accountCreditList = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.featuresTable = { paddingTop: 16 };
obj2.subscriptionHeader = { marginTop: 20, width: "100%" };
obj2.billingInfo = { marginTop: 20, width: "100%" };
let closure_32 = createStyles.createStyles(obj2);
createStyles = fn(5090);
let obj7 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between" }, backButtonWrapper: null };
let size = { width: 24, height: 24, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
obj7.backButtonWrapper = size;
let closure_33 = createStyles.createStyles(obj7);
let ReactCompilerGating = fn(558);
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManagePlanHeader() {
  const cResult = c.c(13);
  const tmp4 = closure_33();
  const navigation = useNavigation.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t() {
      return navigation.pop();
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = closure_1_29(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" });
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.backButtonWrapper) {
    if (cResult[4] === tmp6) {
      let tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
      const intl = util.intl;
      obj3.children = intl.string(util.t["1bX7Tx"]);
      const tmp14 = closure_1_29(Text_Text.Text, obj3);
      cResult[6] = tmp14;
      let tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] !== tmp4.backButtonWrapper) {
      const obj4 = { style: tmp4.backButtonWrapper };
      const tmp18 = closure_1_29(closure_1_8, obj4);
      cResult[7] = tmp4.backButtonWrapper;
      cResult[8] = tmp18;
      let tmp15 = tmp18;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp4.headerContainer) {
      if (cResult[10] === tmp10) {
        if (cResult[11] === tmp15) {
          let tmp19 = cResult[12];
        }
        return tmp19;
      }
    }
    const obj5 = { style: tmp4.headerContainer, children: null };
    const items = [tmp10, tmp12, tmp15];
    obj5.children = items;
    const tmp22 = __initData3(closure_1_8, obj5);
    cResult[9] = tmp4.headerContainer;
    cResult[10] = tmp10;
    cResult[11] = tmp15;
    cResult[12] = tmp22;
    tmp19 = tmp22;
  }
  const tmp11 = closure_1_29(Pressables.PressableOpacity, { style: tmp4.backButtonWrapper, onPress: tmp6, children: tmp7 });
  cResult[3] = tmp4.backButtonWrapper;
  cResult[4] = tmp6;
  cResult[5] = tmp11;
  tmp10 = tmp11;
  const obj6 = { style: tmp4.backButtonWrapper, onPress: tmp6, children: tmp7 };
}) : (function ManagePlanHeader() {
  const tmp = closure_33();
  closure_0 = useNavigation.useNavigation();
  const obj2 = { style: tmp.headerContainer, children: null };
  const items = [
    closure_1_29(Pressables.PressableOpacity, {
      style: tmp.backButtonWrapper,
      onPress() {
        return closure_0.pop();
      },
      children: closure_1_29(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" })
    }),
  ,

  ];
  const obj4 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t["1bX7Tx"]);
  items[1] = closure_1_29(Text_Text.Text, obj4);
  items[2] = closure_1_29(closure_1_8, { style: tmp.backButtonWrapper });
  obj2.children = items;
  return __initData3(closure_1_8, obj2);
});
createStyles = fn(5090);
let closure_35 = createStyles.createStyles(() => {
  const obj = { container: { display: "flex", flexDirection: "column", gap: 12 }, errorHeader: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" }, headerBackground: { padding: 16 }, headerBackgroundImage: null, logoContainer: null, wumpusImg: null, logoStyle: null, errorHeaderPrimaryButton: null, extraInfoContainer: null, extraInfoTextContainer: null, mutationWarningContainer: null, mutationText: null, fpTimeRemaining: null, fpTimeRemainingPill: null, fpUnactivatedHoursPill: null, fpTimeRemainingText: null, fpUnitsTitle: null, fpUnitsStatusText: null, fpRowStart: null, fpRowIcon: null, fpRowContent: null, fpRowEnd: null, dividerContainer: null, divider: null, pillAndCardContainer: null, pillPosition: null, appleAccountMismatchNotice: null, appleAccountMismatchNoticeText: null };
  const obj3 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj3.width = undefined;
  obj3.height = undefined;
  obj.headerBackgroundImage = obj3;
  obj.logoContainer = { flexDirection: "row", alignItems: "center", marginBottom: 12 };
  obj.wumpusImg = { marginRight: 10, height: 36, width: 51 };
  obj.logoStyle = { height: 32, width: 78 };
  obj.errorHeaderPrimaryButton = { marginBottom: 16, marginHorizontal: 16 };
  obj.extraInfoContainer = { paddingTop: 16, paddingHorizontal: 16, display: "flex", gap: 8 };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" };
  obj.extraInfoTextContainer = { padding: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", gap: 18 };
  const obj4 = { padding: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", gap: 18 };
  obj.mutationWarningContainer = { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.mutationText = { flex: 1 };
  const obj5 = { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.fpTimeRemaining = { color: nativeDefault.colors.TEXT_BRAND };
  const obj6 = { color: nativeDefault.colors.TEXT_BRAND };
  obj.fpTimeRemainingPill = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 };
  const obj7 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 };
  obj.fpUnactivatedHoursPill = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 };
  const obj8 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 };
  obj.fpTimeRemainingText = { color: nativeDefault.colors.WHITE };
  const obj9 = { color: nativeDefault.colors.WHITE };
  obj.fpUnitsTitle = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
  const obj10 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
  obj.fpUnitsStatusText = { color: nativeDefault.colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 };
  const obj11 = { color: nativeDefault.colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 };
  obj.fpRowStart = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  const obj12 = { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj.fpRowIcon = { marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
  obj.fpRowContent = { flexShrink: 1, flexGrow: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  const obj13 = { marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
  obj.fpRowEnd = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.dividerContainer = { height: TABLE_DIVIDER_WIDTH };
  const obj14 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
  obj.divider = { height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.pillAndCardContainer = { position: "relative" };
  obj.pillPosition = { position: "absolute", top: -18, left: 5, zIndex: 99 };
  const obj15 = { height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.appleAccountMismatchNotice = { alignSelf: "stretch", width: "100%", flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING };
  obj.appleAccountMismatchNoticeText = { flex: 1 };
  return obj;
});
ReactCompilerGating = fn(558);
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? (function FractionalPremiumCredits(arg0) {
  const cResult = c.c(63);
  ({ fractionalPremiumInfo, showPremiumFeaturesCard, durationText, hasUnactivatedUnits: fpUnactivatedHoursPill, unactivatedHoursString, activationDate } = arg0);
  const tmp4 = closure_35();
  if (cResult[0] !== showPremiumFeaturesCard) {
    let tmp6 = showPremiumFeaturesCard;
    if (showPremiumFeaturesCard) {
      const obj2 = { premiumType: closure_1_27.TIER_2, forFractionalPremium: true, hideButton: true };
      tmp6 = closure_1_29(PremiumFeaturesCardDefault, obj2);
    }
    cResult[0] = showPremiumFeaturesCard;
    cResult[1] = tmp6;
    let tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "eyebrow", color: "text-default", children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t.Obre8v);
    const tmp12 = closure_1_29(Text_Text.Text, obj3);
    cResult[2] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "text-md/semibold", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj5 = { helpCenterLink: HelpdeskUtilsDefault.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT) };
    obj4.children = intl2.format(util.t.AYGoBn, obj5);
    const tmp17 = closure_1_29(Text_Text.Text, obj4);
    cResult[3] = tmp17;
    let tmp13 = tmp17;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { padding: 6, borderRadius: nativeDefault.radii.sm };
    const point = { x: 0, y: 0 };
    const point1 = { x: 0, y: 1 };
    const items = [nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE, nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE];
    cResult[4] = items;
    cResult[5] = obj7;
    cResult[6] = point;
    cResult[7] = point1;
    let tmp21 = point1;
    let tmp20 = point;
    let tmp19 = obj7;
    let tmp18 = items;
  } else {
    tmp18 = cResult[4];
    tmp19 = cResult[5];
    tmp20 = cResult[6];
    tmp21 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { style: tmp19, start: tmp20, end: tmp21, colors: tmp18, children: null };
    const obj9 = { children: null };
    const obj10 = { color: nativeDefault.unsafe_rawColors.WHITE, source: _modDef8054, size: native.IconSizes.LARGE };
    obj9.children = closure_1_29(native.Icon, obj10);
    obj8.children = closure_1_29(closure_1_8, obj9);
    const tmp28 = closure_1_29(LinearGradientDefault, obj8);
    cResult[8] = tmp28;
    let tmp23 = tmp28;
  } else {
    tmp23 = cResult[8];
  }
  if (cResult[9] !== tmp4.fpRowIcon) {
    const obj11 = { style: tmp4.fpRowIcon, children: tmp23 };
    const tmp32 = closure_1_29(closure_1_8, obj11);
    cResult[9] = tmp4.fpRowIcon;
    cResult[10] = tmp32;
    let tmp29 = tmp32;
  } else {
    tmp29 = cResult[10];
  }
  ({ fpRowContent, fpUnitsTitle } = tmp4);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const stringResult = intl3.string(util.t.DFMPWS);
    cResult[11] = stringResult;
    let tmp33 = stringResult;
  } else {
    tmp33 = cResult[11];
  }
  if (cResult[12] !== tmp4.fpUnitsTitle) {
    const obj12 = { variant: "text-sm/semibold", style: fpUnitsTitle, children: tmp33 };
    const tmp37 = closure_1_29(Text_Text.Text, obj12);
    cResult[12] = tmp4.fpUnitsTitle;
    cResult[13] = tmp37;
    let tmp35 = tmp37;
  } else {
    tmp35 = cResult[13];
  }
  if (cResult[14] === fractionalPremiumInfo) {
    if (cResult[15] === fpUnactivatedHoursPill) {
      if (cResult[16] === tmp4.fpUnitsStatusText) {
        if (cResult[17] === unactivatedHoursString) {
          if (cResult[19] === tmp4.fpRowContent) {
            if (cResult[20] === tmp35) {
              if (cResult[21] === tmp38) {
                let tmp43 = cResult[22];
              }
              if (cResult[23] === tmp4.fpRowStart) {
                if (cResult[24] === tmp29) {
                  if (cResult[25] === tmp43) {
                    let tmp47 = cResult[26];
                  }
                  if (cResult[27] !== tmp4.divider) {
                    const obj13 = { style: tmp4.divider };
                    const tmp53 = closure_1_29(closure_1_8, obj13);
                    cResult[27] = tmp4.divider;
                    cResult[28] = tmp53;
                    let tmp50 = tmp53;
                  } else {
                    tmp50 = cResult[28];
                  }
                  if (cResult[29] === tmp4.dividerContainer) {
                    if (cResult[30] === tmp50) {
                      let tmp54 = cResult[31];
                    }
                    if (cResult[32] === activationDate) {
                      if (cResult[33] === fractionalPremiumInfo) {
                        if (cResult[34] === fpUnactivatedHoursPill) {
                          if (cResult[35] === tmp4.fpTimeRemaining) {
                            if (cResult[37] === durationText) {
                              if (cResult[38] === fractionalPremiumInfo) {
                                if (cResult[39] === fpUnactivatedHoursPill) {
                                  if (cResult[40] === tmp4.fpTimeRemainingPill) {
                                    if (cResult[41] === tmp4.fpTimeRemainingText) {
                                      if (cResult[42] === tmp4.fpUnactivatedHoursPill) {
                                        if (cResult[43] === unactivatedHoursString) {
                                          if (cResult[45] === tmp4.fpRowContent) {
                                            if (cResult[46] === tmp58) {
                                              if (cResult[47] === tmp67) {
                                                let tmp75 = cResult[48];
                                              }
                                              if (cResult[49] === tmp4.fpRowEnd) {
                                                if (cResult[50] === tmp75) {
                                                  let tmp79 = cResult[51];
                                                }
                                                if (cResult[52] === tmp47) {
                                                  if (cResult[53] === tmp54) {
                                                    if (cResult[54] === tmp79) {
                                                      let tmp82 = cResult[55];
                                                    }
                                                    if (cResult[56] === tmp4.extraInfoContainer) {
                                                      if (cResult[57] === tmp82) {
                                                        let tmp86 = cResult[58];
                                                      }
                                                      if (cResult[59] === tmp4.container) {
                                                        if (cResult[60] === tmp5) {
                                                          if (cResult[61] === tmp86) {
                                                            let tmp90 = cResult[62];
                                                          }
                                                          return tmp90;
                                                        }
                                                      }
                                                      const obj14 = { style: tmp4.container, children: null };
                                                      const items1 = [tmp5, tmp86];
                                                      obj14.children = items1;
                                                      const tmp93 = __initData3(closure_1_8, obj14);
                                                      cResult[59] = tmp4.container;
                                                      cResult[60] = tmp5;
                                                      cResult[61] = tmp86;
                                                      cResult[62] = tmp93;
                                                      tmp90 = tmp93;
                                                    }
                                                    const obj15 = { style: tmp4.extraInfoContainer, children: null };
                                                    const items2 = [tmp10, tmp13, tmp82];
                                                    obj15.children = items2;
                                                    const tmp89 = __initData3(closure_1_8, obj15);
                                                    cResult[56] = tmp4.extraInfoContainer;
                                                    cResult[57] = tmp82;
                                                    cResult[58] = tmp89;
                                                    tmp86 = tmp89;
                                                  }
                                                }
                                                const obj16 = { children: null };
                                                const items3 = [tmp47, tmp54, tmp79];
                                                obj16.children = items3;
                                                const tmp85 = __initData3(closure_1_8, obj16);
                                                cResult[52] = tmp47;
                                                cResult[53] = tmp54;
                                                cResult[54] = tmp79;
                                                cResult[55] = tmp85;
                                                tmp82 = tmp85;
                                              }
                                              const obj17 = { start: false, end: true, style: tmp4.fpRowEnd, variant: "secondary", children: tmp75 };
                                              const tmp81 = closure_1_29(Card.Card, obj17);
                                              cResult[49] = tmp4.fpRowEnd;
                                              cResult[50] = tmp75;
                                              cResult[51] = tmp81;
                                              tmp79 = tmp81;
                                            }
                                          }
                                          const obj18 = { style: tmp4.fpRowContent, children: null };
                                          const items4 = [tmp58, cResult[44]];
                                          obj18.children = items4;
                                          const tmp78 = __initData3(closure_1_8, obj18);
                                          cResult[45] = tmp4.fpRowContent;
                                          cResult[46] = tmp58;
                                          cResult[47] = cResult[44];
                                          cResult[48] = tmp78;
                                          tmp75 = tmp78;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            if (!fpUnactivatedHoursPill) {
                              const obj19 = { style: tmp4.fpTimeRemainingPill, children: null };
                              const obj20 = { variant: "text-sm/medium", style: tmp4.fpTimeRemainingText, children: durationText };
                              obj19.children = closure_1_29(Text_Text.Text, obj20);
                              let tmp71 = closure_1_29(closure_1_8, obj19);
                              cResult[37] = durationText;
                              cResult[38] = fractionalPremiumInfo;
                              cResult[39] = fpUnactivatedHoursPill;
                              cResult[40] = tmp4.fpTimeRemainingPill;
                              ({ fpTimeRemainingText: tmp3[41], fpUnactivatedHoursPill } = tmp4);
                              cResult[42] = fpUnactivatedHoursPill;
                              cResult[43] = unactivatedHoursString;
                              cResult[44] = tmp71;
                            }
                            const obj21 = { style: tmp4.fpUnactivatedHoursPill, children: null };
                            const obj22 = { variant: "text-sm/medium", style: tmp4.fpTimeRemainingText, children: unactivatedHoursString };
                            obj21.children = closure_1_29(Text_Text.Text, obj22);
                            tmp71 = closure_1_29(closure_1_8, obj21);
                          }
                        }
                      }
                    }
                    if (!fpUnactivatedHoursPill) {
                      const obj23 = { variant: "text-md/semibold", style: tmp4.fpTimeRemaining, children: null };
                      const intl5 = util.intl;
                      obj23.children = intl5.string(util.t["3G0CTC"]);
                      let tmp62Result = closure_1_29(Text_Text.Text, obj23);
                      cResult[32] = activationDate;
                      cResult[33] = fractionalPremiumInfo;
                      cResult[34] = fpUnactivatedHoursPill;
                      activationDate = tmp4.fpTimeRemaining;
                      cResult[35] = activationDate;
                      cResult[36] = tmp62Result;
                    }
                    const obj24 = { variant: "text-md/semibold", children: null };
                    const intl6 = util.intl;
                    obj24.children = intl6.string(util.t["hT6i/0"]);
                    const items5 = [closure_1_29(Text_Text.Text, obj24), ];
                    let tmp64Result = undefined !== activationDate;
                    if (tmp64Result) {
                      const obj25 = { variant: "text-xs/medium", color: "text-subtle", children: null };
                      const intl7 = util.intl;
                      const obj26 = { activateDate: activationDate };
                      obj25.children = intl7.format(util.t["0Vwb/l"], obj26);
                      tmp64Result = closure_1_29(Text_Text.Text, obj25);
                    }
                    const obj27 = { children: null };
                    items5[1] = tmp64Result;
                    obj27.children = items5;
                    tmp62Result = __initData3(closure_1_8, obj27);
                  }
                  const obj28 = { style: tmp4.dividerContainer, children: tmp50 };
                  const tmp57 = closure_1_29(closure_1_8, obj28);
                  cResult[29] = tmp4.dividerContainer;
                  cResult[30] = tmp50;
                  cResult[31] = tmp57;
                  tmp54 = tmp57;
                }
              }
              const obj29 = { style: tmp4.fpRowStart, start: true, end: false, variant: "primary", children: null };
              const items6 = [tmp29, tmp43];
              obj29.children = items6;
              const tmp49 = __initData3(Card.Card, obj29);
              cResult[23] = tmp4.fpRowStart;
              cResult[24] = tmp29;
              cResult[25] = tmp43;
              cResult[26] = tmp49;
              tmp47 = tmp49;
            }
          }
          const obj30 = { style: fpRowContent, children: null };
          const items7 = [tmp35, cResult[18]];
          obj30.children = items7;
          const tmp46 = __initData3(closure_1_8, obj30);
          cResult[19] = tmp4.fpRowContent;
          cResult[20] = tmp35;
          cResult[21] = cResult[18];
          cResult[22] = tmp46;
          tmp43 = tmp46;
        }
      }
    }
  }
  if (!fpUnactivatedHoursPill) {
    const obj31 = { variant: "text-sm/medium", style: tmp4.fpUnitsStatusText, children: null };
    const intl4 = util.intl;
    obj31.children = intl4.string(util.t["B66Z+f"]);
    let tmp41 = closure_1_29(Text_Text.Text, obj31);
    cResult[14] = fractionalPremiumInfo;
    cResult[15] = fpUnactivatedHoursPill;
    cResult[16] = tmp4.fpUnitsStatusText;
    cResult[17] = unactivatedHoursString;
    cResult[18] = tmp41;
  }
  tmp41 = closure_1_29(Text_Text.Text, { variant: "text-sm/medium", children: unactivatedHoursString });
}) : (function FractionalPremiumCredits(durationText) {
  ({ fractionalPremiumInfo, showPremiumFeaturesCard, hasUnactivatedUnits, unactivatedHoursString, activationDate } = durationText);
  const tmp = closure_35();
  const obj = { style: tmp.container, children: null };
  if (showPremiumFeaturesCard) {
    const obj2 = { premiumType: closure_1_27.TIER_2, forFractionalPremium: true, hideButton: true };
    showPremiumFeaturesCard = closure_1_29(PremiumFeaturesCardDefault, obj2);
  }
  const items = [showPremiumFeaturesCard, ];
  const obj3 = { style: tmp.extraInfoContainer, children: null };
  const obj4 = { variant: "eyebrow", color: "text-default", children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.Obre8v);
  const items1 = [closure_1_29(Text_Text.Text, obj4), , ];
  const obj5 = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl2 = util.intl;
  const obj6 = { helpCenterLink: HelpdeskUtilsDefault.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT) };
  obj5.children = intl2.format(util.t.AYGoBn, obj6);
  items1[1] = closure_1_29(Text_Text.Text, obj5);
  const obj8 = { style: tmp.fpRowStart, start: true, end: false, variant: "primary", children: null };
  const obj9 = { style: tmp.fpRowIcon, children: null };
  const obj10 = { style: null, start: null, end: null, colors: null, children: null };
  const obj11 = { padding: 6, borderRadius: null };
  obj11.borderRadius = nativeDefault.radii.sm;
  obj10.style = obj11;
  obj10.start = { x: 0, y: 0 };
  obj10.end = { x: 0, y: 1 };
  const items2 = [nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE, nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj10.colors = items2;
  const obj12 = { children: null };
  const tmp11 = LinearGradientDefault;
  obj12.children = closure_1_29(native.Icon, { color: nativeDefault.unsafe_rawColors.WHITE, source: _modDef8054, size: native.IconSizes.LARGE });
  obj10.children = closure_1_29(closure_1_8, obj12);
  obj9.children = closure_1_29(tmp11, obj10);
  const items3 = [closure_1_29(closure_1_8, obj9), ];
  const obj14 = { style: tmp.fpRowContent, children: null };
  const obj15 = { variant: "text-sm/semibold", style: tmp.fpUnitsTitle, children: null };
  const intl3 = util.intl;
  obj15.children = intl3.string(util.t.DFMPWS);
  const items4 = [closure_1_29(Text_Text.Text, obj15), ];
  if (hasUnactivatedUnits) {
    if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
      const obj16 = { variant: "text-sm/medium", children: unactivatedHoursString };
      let tmp8Result = closure_1_29(Text_Text.Text, obj16);
    }
    items4[1] = tmp8Result;
    obj14.children = items4;
    items3[1] = __initData3(closure_1_8, obj14);
    obj8.children = items3;
    const items5 = [__initData3(Card.Card, obj8), , ];
    const obj17 = { style: tmp.dividerContainer, children: null };
    const obj18 = { style: tmp.divider };
    obj17.children = closure_1_29(closure_1_8, obj18);
    items5[1] = closure_1_29(closure_1_8, obj17);
    const obj19 = { start: false, end: true, style: tmp.fpRowEnd, variant: "secondary", children: null };
    const obj20 = { style: tmp.fpRowContent, children: null };
    if (hasUnactivatedUnits) {
      if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
        const obj21 = { variant: "text-md/semibold", children: null };
        const intl6 = util.intl;
        obj21.children = intl6.string(util.t["hT6i/0"]);
        const items6 = [closure_1_29(Text_Text.Text, obj21), ];
        let tmp8Result3 = undefined !== activationDate;
        if (tmp8Result3) {
          const obj22 = { variant: "text-xs/medium", color: "text-subtle", children: null };
          const intl7 = util.intl;
          const obj23 = { activateDate: activationDate };
          obj22.children = intl7.format(util.t["0Vwb/l"], obj23);
          tmp8Result3 = closure_1_29(Text_Text.Text, obj22);
        }
        const obj24 = { children: null };
        items6[1] = tmp8Result3;
        obj24.children = items6;
        let tmp8Result5 = __initData3(closure_1_8, obj24);
      }
      const items7 = [tmp8Result5, ];
      if (hasUnactivatedUnits) {
        if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
          const obj25 = { style: tmp.fpUnactivatedHoursPill, children: null };
          const obj26 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: unactivatedHoursString };
          obj25.children = closure_1_29(Text_Text.Text, obj26);
          let tmp8Result4 = closure_1_29(closure_1_8, obj25);
        }
        const obj27 = { children: null };
        items7[1] = tmp8Result4;
        obj20.children = items7;
        obj19.children = __initData3(closure_1_8, obj20);
        items5[2] = closure_1_29(tmp14, obj19);
        obj27.children = items5;
        items1[2] = __initData3(closure_1_8, obj27);
        obj3.children = items1;
        items[1] = __initData3(closure_1_8, obj3);
        obj.children = items;
        return __initData3(closure_1_8, obj);
      }
      const obj28 = { style: tmp.fpTimeRemainingPill, children: null };
      const obj29 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: durationText.durationText };
      obj28.children = closure_1_29(Text_Text.Text, obj29);
      tmp8Result4 = closure_1_29(closure_1_8, obj28);
    }
    const obj30 = { variant: "text-md/semibold", style: tmp.fpTimeRemaining, children: null };
    const intl5 = util.intl;
    obj30.children = intl5.string(util.t["3G0CTC"]);
    tmp8Result5 = closure_1_29(Text_Text.Text, obj30);
  }
  const obj31 = { variant: "text-sm/medium", style: tmp.fpUnitsStatusText, children: null };
  const intl4 = util.intl;
  obj31.children = intl4.string(util.t["B66Z+f"]);
  tmp8Result = closure_1_29(Text_Text.Text, obj31);
  const obj13 = { color: nativeDefault.unsafe_rawColors.WHITE, source: _modDef8054, size: native.IconSizes.LARGE };
});
ReactCompilerGating = fn(558);
let obj5 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumManagePlan.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumManagePlan() {
  const cResult = navigation(576).c(88);
  const tmp4 = closure_32();
  let obj = navigation(576);
  ({ top, bottom } = useSafeAreaInsetsDefault());
  const tmp6 = useSafeAreaInsetsDefault();
  const youBarSettingsOutsideSafeAreaTop = navigation(13585).useYouBarSettingsOutsideSafeAreaTop();
  let obj2 = navigation(13585);
  navigation = navigation(1502).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t() {
      navigation.setOptions({ headerShown: false });
    };
    let items = [navigation];
    cResult[0] = navigation;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp10 = items;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const layoutEffect = noop.useLayoutEffect(tmp9, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SubscriptionPlanStore];
    const fn2 = function c() {
      return SubscriptionPlanStore.isLoadedForPremiumSKUs();
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    let tmp13 = fn2;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  let obj3 = navigation(1502);
  const stateFromStores = navigation(504).useStateFromStores(tmp12, tmp13);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SubscriptionStore];
    class E {
      constructor() {
        items = [, ];
        items[0] = closure_1_16.getPremiumTypeSubscription();
        items[1] = closure_1_16.hasFetchedSubscriptions();
        return items;
      }
    }
    cResult[5] = items2;
    cResult[6] = E;
    let tmp17 = E;
    let tmp16 = items2;
  } else {
    tmp16 = cResult[5];
    tmp17 = cResult[6];
  }
  const tmpResult = navigation(504);
  const tmpResult6 = navigation(504);
  [tmp20, r10071] = navigation(504).useStateFromStoresArray(tmp16, tmp17);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [UserStore];
    class U {
      constructor() {
        return closure_1_13.getCurrentUser();
      }
    }
    cResult[7] = items3;
    cResult[8] = U;
    let tmp22 = U;
    let tmp21 = items3;
  } else {
    tmp21 = cResult[7];
    tmp22 = cResult[8];
  }
  const tmp19 = _slicedToArray(navigation(504).useStateFromStoresArray(tmp16, tmp17), 2);
  const stateFromStores1 = navigation(504).useStateFromStores(tmp21, tmp22);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    cResult[9] = { forceFetch: true };
    class U {
      constructor() {
        return closure_1_13.getCurrentUser();
      }
    }
    const obj5 = { forceFetch: true };
  } else {
    const tmp25 = cResult[9];
  }
  const tmp26 = useFractionalPremiumInfoDefault(tmp25);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        isSubscriptionFetching = closure_1_16.hasFetchedSubscriptions();
        if (!isSubscriptionFetching) {
          tmp = closure_1_14;
          isSubscriptionFetching = closure_1_14.isSubscriptionFetching;
        }
        if (!isSubscriptionFetching) {
          tmp2 = closure_0;
          tmp3 = closure_1_2;
          obj = closure_0(closure_1_2[34]);
          subscriptions = obj.fetchSubscriptions();
        }
        obj2 = closure_1_15;
        tmp5 = closure_1_15.isLoadedForPremiumSKUs() || obj2.isFetchingForPremiumSKUs();
        if (!tmp5) {
          tmp6 = closure_0;
          tmp7 = closure_1_2;
          obj3 = closure_0(closure_1_2[64]);
          premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
        return;
      }
    }
    cResult[10] = X;
    class U {
      constructor() {
        return closure_1_13.getCurrentUser();
      }
    }
  } else {
    class X {
      constructor() {
        isSubscriptionFetching = closure_1_16.hasFetchedSubscriptions();
        if (!isSubscriptionFetching) {
          tmp = closure_1_14;
          isSubscriptionFetching = closure_1_14.isSubscriptionFetching;
        }
        if (!isSubscriptionFetching) {
          tmp2 = closure_0;
          tmp3 = closure_1_2;
          obj = closure_0(closure_1_2[34]);
          subscriptions = obj.fetchSubscriptions();
        }
        obj2 = closure_1_15;
        tmp5 = closure_1_15.isLoadedForPremiumSKUs() || obj2.isFetchingForPremiumSKUs();
        if (!tmp5) {
          tmp6 = closure_0;
          tmp7 = closure_1_2;
          obj3 = closure_0(closure_1_2[64]);
          premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
        return;
      }
    }
  }
  useMountEffectDefault(tmp27);
  const tmpResult7 = navigation(504);
  const isInReverseTrial = navigation(8068).useIsInReverseTrial();
  const tmpResult8 = navigation(8068);
  useFPDurationLeftDefault(tmp26.endsAt, navigation(13587).CountDownMessageTypes.SHORT_TIME);
  if (cResult[11] !== tmp26) {
    class X {
      constructor() {
        isSubscriptionFetching = closure_1_16.hasFetchedSubscriptions();
        if (!isSubscriptionFetching) {
          tmp = closure_1_14;
          isSubscriptionFetching = closure_1_14.isSubscriptionFetching;
        }
        if (!isSubscriptionFetching) {
          tmp2 = closure_0;
          tmp3 = closure_1_2;
          obj = closure_0(closure_1_2[34]);
          subscriptions = obj.fetchSubscriptions();
        }
        obj2 = closure_1_15;
        tmp5 = closure_1_15.isLoadedForPremiumSKUs() || obj2.isFetchingForPremiumSKUs();
        if (!tmp5) {
          tmp6 = closure_0;
          tmp7 = closure_1_2;
          obj3 = closure_0(closure_1_2[64]);
          premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
        return;
      }
    }
    const unactivatedFractionalPremiumDurationString = obj10.getUnactivatedFractionalPremiumDurationString(tmp26);
    class U {
      constructor() {
        return closure_1_13.getCurrentUser();
      }
    }
    cResult[12] = unactivatedFractionalPremiumDurationString;
  } else {
    class X {
      constructor() {
        isSubscriptionFetching = closure_1_16.hasFetchedSubscriptions();
        if (!isSubscriptionFetching) {
          tmp = closure_1_14;
          isSubscriptionFetching = closure_1_14.isSubscriptionFetching;
        }
        if (!isSubscriptionFetching) {
          tmp2 = closure_0;
          tmp3 = closure_1_2;
          obj = closure_0(closure_1_2[34]);
          subscriptions = obj.fetchSubscriptions();
        }
        obj2 = closure_1_15;
        tmp5 = closure_1_15.isLoadedForPremiumSKUs() || obj2.isFetchingForPremiumSKUs();
        if (!tmp5) {
          tmp6 = closure_0;
          tmp7 = closure_1_2;
          obj3 = closure_0(closure_1_2[64]);
          premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
        return;
      }
    }
  }
  if (null !== tmp20) {
    class X {
      constructor() {
        isSubscriptionFetching = closure_1_16.hasFetchedSubscriptions();
        if (!isSubscriptionFetching) {
          tmp = closure_1_14;
          isSubscriptionFetching = closure_1_14.isSubscriptionFetching;
        }
        if (!isSubscriptionFetching) {
          tmp2 = closure_0;
          tmp3 = closure_1_2;
          obj = closure_0(closure_1_2[34]);
          subscriptions = obj.fetchSubscriptions();
        }
        obj2 = closure_1_15;
        tmp5 = closure_1_15.isLoadedForPremiumSKUs() || obj2.isFetchingForPremiumSKUs();
        if (!tmp5) {
          tmp6 = closure_0;
          tmp7 = closure_1_2;
          obj3 = closure_0(closure_1_2[64]);
          premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
        return;
      }
    }
    if (!tmp20.isPurchasedExternally) {
      class X {
        constructor() {
          isSubscriptionFetching = closure_1_16.hasFetchedSubscriptions();
          if (!isSubscriptionFetching) {
            tmp = closure_1_14;
            isSubscriptionFetching = closure_1_14.isSubscriptionFetching;
          }
          if (!isSubscriptionFetching) {
            tmp2 = closure_0;
            tmp3 = closure_1_2;
            obj = closure_0(closure_1_2[34]);
            subscriptions = obj.fetchSubscriptions();
          }
          obj2 = closure_1_15;
          tmp5 = closure_1_15.isLoadedForPremiumSKUs() || obj2.isFetchingForPremiumSKUs();
          if (!tmp5) {
            tmp6 = closure_0;
            tmp7 = closure_1_2;
            obj3 = closure_0(closure_1_2[64]);
            premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
          }
          return;
        }
      }
    }
  }
  let tmp34 = tmp26.fractionalState !== constants4.NONE;
  if (tmp34) {
    class X {
      constructor() {
        isSubscriptionFetching = closure_1_16.hasFetchedSubscriptions();
        if (!isSubscriptionFetching) {
          tmp = closure_1_14;
          isSubscriptionFetching = closure_1_14.isSubscriptionFetching;
        }
        if (!isSubscriptionFetching) {
          tmp2 = closure_0;
          tmp3 = closure_1_2;
          obj = closure_0(closure_1_2[34]);
          subscriptions = obj.fetchSubscriptions();
        }
        obj2 = closure_1_15;
        tmp5 = closure_1_15.isLoadedForPremiumSKUs() || obj2.isFetchingForPremiumSKUs();
        if (!tmp5) {
          tmp6 = closure_0;
          tmp7 = closure_1_2;
          obj3 = closure_0(closure_1_2[64]);
          premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
        return;
      }
    }
    if (isInReverseTrial) {
      class X {
        constructor() {
          isSubscriptionFetching = closure_1_16.hasFetchedSubscriptions();
          if (!isSubscriptionFetching) {
            tmp = closure_1_14;
            isSubscriptionFetching = closure_1_14.isSubscriptionFetching;
          }
          if (!isSubscriptionFetching) {
            tmp2 = closure_0;
            tmp3 = closure_1_2;
            obj = closure_0(closure_1_2[34]);
            subscriptions = obj.fetchSubscriptions();
          }
          obj2 = closure_1_15;
          tmp5 = closure_1_15.isLoadedForPremiumSKUs() || obj2.isFetchingForPremiumSKUs();
          if (!tmp5) {
            tmp6 = closure_0;
            tmp7 = closure_1_2;
            obj3 = closure_0(closure_1_2[64]);
            premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
          }
          return;
        }
      }
    }
    tmp34 = !tmp35;
  }
  if (!tmp34) {
    class X {
      constructor() {
        isSubscriptionFetching = closure_1_16.hasFetchedSubscriptions();
        if (!isSubscriptionFetching) {
          tmp = closure_1_14;
          isSubscriptionFetching = closure_1_14.isSubscriptionFetching;
        }
        if (!isSubscriptionFetching) {
          tmp2 = closure_0;
          tmp3 = closure_1_2;
          obj = closure_0(closure_1_2[34]);
          subscriptions = obj.fetchSubscriptions();
        }
        obj2 = closure_1_15;
        tmp5 = closure_1_15.isLoadedForPremiumSKUs() || obj2.isFetchingForPremiumSKUs();
        if (!tmp5) {
          tmp6 = closure_0;
          tmp7 = closure_1_2;
          obj3 = closure_0(closure_1_2[64]);
          premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
        return;
      }
    }
  }
  const tmp5Result = useFPDurationLeftDefault;
  const theme = navigation(4787).useThemeContext().theme;
  importDefault = noop.useRef(false);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
    cResult[13] = J;
    class U {
      constructor() {
        return closure_1_13.getCurrentUser();
      }
    }
  } else {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
    const items4 = [EntitlementStore];
    class U {
      constructor() {
        return closure_1_13.getCurrentUser();
      }
    }
    const items5 = [];
    cResult[14] = items4;
    cResult[15] = tmp39;
    cResult[16] = items5;
    let tmp38 = items5;
    let tmp37 = tmp39;
    const tmp36 = items4;
  } else {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
    tmp37 = cResult[15];
    tmp38 = cResult[16];
  }
  const tmpResult9 = navigation(4787);
  const stateFromStores2 = navigation(504).useStateFromStores(tmp36, tmp37, tmp38, tmp(2081).areSetsEqual);
  if (cResult[17] !== navigation) {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
    cResult[17] = navigation;
    class U {
      constructor() {
        return closure_1_13.getCurrentUser();
      }
    }
    cResult[18] = tmp42;
  } else {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
  }
  if (stateFromStores1 != null) {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
  }
  if (cResult[19] !== stateFromStores1) {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
    if (stateFromStores1 != null) {
      class J {
        constructor(arg0) {
          obj = closure_0(closure_2[68]);
          obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
          return obj.trackIfScrolledToBottom(obj1);
        }
      }
    }
    class U {
      constructor() {
        return closure_1_13.getCurrentUser();
      }
    }
    cResult[20] = tmp44;
  } else {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
  }
  if (tmp44) {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
  }
  if (!youBarSettingsOutsideSafeAreaTop) {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
  }
  if (cResult[21] !== 0) {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
    tmp46[0] = num21;
    class U {
      constructor() {
        return closure_1_13.getCurrentUser();
      }
    }
    cResult[22] = tmp46;
  } else {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
  }
  if (cResult[23] === tmp4.topBlur) {
    class J {
      constructor(arg0) {
        obj = closure_0(closure_2[68]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
        return obj.trackIfScrolledToBottom(obj1);
      }
    }
    if (cResult[26] === tmp47) {
      class J {
        constructor(arg0) {
          obj = closure_0(closure_2[68]);
          obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
          return obj.trackIfScrolledToBottom(obj1);
        }
      }
      if (!youBarSettingsOutsideSafeAreaTop) {
        class J {
          constructor(arg0) {
            obj = closure_0(closure_2[68]);
            obj1 = { nativeEvent: arg0.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
            return obj.trackIfScrolledToBottom(obj1);
          }
        }
      }
      class U {
        constructor() {
          return closure_1_13.getCurrentUser();
        }
      }
      const obj6 = { paddingTop: 16, paddingBottom: bottom };
      cResult[29] = bottom;
      cResult[30] = 16;
      cResult[31] = obj6;
    }
    class U {
      constructor() {
        return closure_1_13.getCurrentUser();
      }
    }
    tmp50[1] = tmp47;
    tmp50[2] = theme;
    const tmp51 = closure_29(tmp5(5362), tmp50);
    cResult[26] = tmp47;
    cResult[27] = theme;
    cResult[28] = tmp51;
  }
  const items6 = [tmp4.topBlur, tmp46];
  cResult[23] = tmp4.topBlur;
  cResult[24] = tmp46;
  cResult[25] = items6;
  const tmpResult10 = navigation(504);
}) : (function PremiumManagePlan() {
  const tmp = closure_32();
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  const youBarSettingsOutsideSafeAreaTop = navigation(13585).useYouBarSettingsOutsideSafeAreaTop();
  let obj = navigation(13585);
  navigation = navigation(1502).useNavigation();
  let items = [navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  let obj2 = navigation(1502);
  const items1 = [SubscriptionPlanStore];
  const stateFromStores = navigation(504).useStateFromStores(items1, () => SubscriptionPlanStore.isLoadedForPremiumSKUs());
  const obj4 = navigation(504);
  const items2 = [SubscriptionStore];
  const obj5 = navigation(504);
  [tmp10, tmp11] = navigation(504).useStateFromStoresArray(items2, () => {
    const items = [SubscriptionStore.getPremiumTypeSubscription(), SubscriptionStore.hasFetchedSubscriptions()];
    return items;
  });
  const tmp9 = _slicedToArray(navigation(504).useStateFromStoresArray(items2, () => {
    const items = [SubscriptionStore.getPremiumTypeSubscription(), SubscriptionStore.hasFetchedSubscriptions()];
    return items;
  }), 2);
  const items3 = [UserStore];
  const stateFromStores1 = navigation(504).useStateFromStores(items3, () => currentUser.getCurrentUser());
  const tmp12 = useFractionalPremiumInfoDefault({ forceFetch: true });
  useMountEffectDefault(() => {
    let isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions();
    if (!isSubscriptionFetching) {
      isSubscriptionFetching = BillingInfoStore.isSubscriptionFetching;
    }
    if (!isSubscriptionFetching) {
      const subscriptions = navigation(5720).fetchSubscriptions();
      const obj = navigation(5720);
    }
    if (!tmp5) {
      const premiumSubscriptionPlans = navigation(6946).fetchPremiumSubscriptionPlans();
      const obj3 = navigation(6946);
    }
    tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
  });
  const obj6 = navigation(504);
  let isInReverseTrial = navigation(8068).useIsInReverseTrial();
  const obj8 = navigation(8068);
  const tmp15Result = useFPDurationLeftDefault(tmp12.endsAt, navigation(13587).CountDownMessageTypes.SHORT_TIME);
  const unactivatedFractionalPremiumDurationString = navigation(4726).getUnactivatedFractionalPremiumDurationString(tmp12);
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
  const obj9 = navigation(4726);
  importDefault = noop.useRef(false);
  const callback = noop.useCallback((nativeEvent) => PremiumNitroHomeUtils.trackIfScrolledToBottom({ nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom }), []);
  const tmp4Result = navigation(4787);
  const items4 = [EntitlementStore];
  let tmp23 = null != tmp10;
  const stateFromStores2 = navigation(504).useStateFromStores(items4, () => {
    forApplication = forApplication.getForApplication(closure_1_26);
    if (forApplication == null) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], tmp4(2081).areSetsEqual);
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
  const items5 = [tmp.topBlur, ];
  let num = 0;
  const tmp4Result2 = navigation(504);
  if (!youBarSettingsOutsideSafeAreaTop) {
    num = top;
  }
  items5[1] = { height: num };
  const items6 = [closure_29(VisualEffectViewAnimatedDefault, { blurAmount: 0.2, style: items5, blurTheme: tmp4Result.useThemeContext().theme }), ];
  const items7 = [tmp.container, ];
  let num2 = 16;
  if (!youBarSettingsOutsideSafeAreaTop) {
    num2 = top;
  }
  const obj10 = { contentContainerStyle: items7, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: null };
  items7[1] = { paddingTop: num2, paddingBottom: rect.bottom };
  const items8 = [closure_29(closure_34, {}), ];
  const obj11 = { style: tmp.contentContainer, children: null };
  let tmp29Result = tmp23;
  if (tmp23) {
    const obj12 = { subscription: tmp10, fractionalPremiumInfo: tmp12, isPremiumGroup: result, premiumGroupRole };
    tmp29Result = closure_29(SubscriptionAndBillingInfo, obj12);
  }
  const items9 = [tmp29Result, , , , , , ];
  if (isInReverseTrial) {
    const obj13 = { premiumType: closure_27.TIER_2, forFractionalPremium: true, hideButton: true };
    isInReverseTrial = closure_29(tmp2(9330), obj13);
  }
  items9[1] = isInReverseTrial;
  let tmp29Result3 = result;
  if (result) {
    tmp29Result3 = !tmp23;
  }
  if (tmp29Result3) {
    const obj14 = { premiumType: closure_27.TIER_2, hideButton: true, hidePrice: true, isPremiumGroup: true, premiumGroupRole };
    tmp29Result3 = closure_29(tmp2(9330), obj14);
  }
  items9[2] = tmp29Result3;
  if (tmp29Result4) {
    const obj15 = { fractionalPremiumInfo: tmp12, showPremiumFeaturesCard: tmp12.fractionalState === constants4.FP_ONLY, hasUnactivatedUnits: tmp17, unactivatedHoursString: unactivatedFractionalPremiumDurationString, activationDate: currentPeriodEnd, durationText: tmp15Result };
    tmp29Result4 = closure_29(closure_37, obj15);
  }
  items9[3] = tmp29Result4;
  if (tmp27Result) {
    const obj16 = { children: null };
    const obj17 = {
      style: tmp.subscriptionHeader,
      onClickManagePremiumGuild: function handleLearnMorePremiumGuild() {
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
      subscription: tmp10
    };
    const items10 = [closure_29(tmp2(13476), obj17), ];
    const obj18 = { style: tmp.billingInfo, subscription: tmp10 };
    items10[1] = closure_29(tmp2(13516), obj18);
    obj16.children = items10;
    tmp27Result = closure_30(closure_8, obj16);
  }
  items9[4] = tmp27Result;
  const obj19 = { style: tmp.accountCredit, creditListContainerStyle: tmp.accountCreditList, currentSubscription: tmp10, entitlements: stateFromStores2, hasPremiumGroup: null };
  let flag = result;
  const tmp2Result = VisualEffectViewAnimatedDefault;
  if (result == null) {
    flag = false;
  }
  obj19.hasPremiumGroup = flag;
  items9[5] = closure_29(PremiumAccountCreditDefault, obj19);
  const obj20 = { style: tmp.featuresTable, variant: "nitro_home", titleOverride: null, isFractionalOnly: null, isPremiumGroup: null, premiumGroupRole: null };
  const tmp2Result3 = PremiumAccountCreditDefault;
  const intl = tmp4(1126).intl;
  obj20.titleOverride = intl.string(navigation(1126).t.QXx2gs);
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
});
export const BACK_BUTTON_SIZE = 24;