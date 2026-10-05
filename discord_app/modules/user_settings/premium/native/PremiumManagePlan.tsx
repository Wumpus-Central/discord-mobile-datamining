// === Module 13302: PremiumManagePlan ===

// Module 13302 (PremiumManagePlan)
import LoggerDefault from "Logger" /* 3 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import intl13 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import useNavigation from "useNavigation" /* 1490 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import SubscriptionPlanRecord from "SubscriptionPlanRecord" /* 4529 */;
import PaymentConstants from "PaymentConstants" /* 4869 */;
import Text_Text from "Text/Text" /* 4886 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5404 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import Pressables from "Pressables" /* 5909 */;
import TableRowConstants from "TableRowConstants" /* 5989 */;
import Card_Card from "Card/Card" /* 5995 */;
import ArrowLargeLeftIcon from "ArrowLargeLeftIcon" /* 6014 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6487 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6491 */;
import PremiumManagementUtils from "PremiumManagementUtils" /* 6910 */;
import AssetRegistryDefault from "AssetRegistry" /* 7722 */;
import PremiumFeaturesCardDefault from "PremiumFeaturesCard" /* 8868 */;
import PremiumSubscriptionDetails from "PremiumSubscriptionDetails" /* 13157 */;
import PremiumBillingInfoDefault from "PremiumBillingInfo" /* 13197 */;
import PremiumAccountCreditDefault from "PremiumAccountCredit" /* 13199 */;
import PremiumNitroHomeUtils from "PremiumNitroHomeUtils" /* 13230 */;
import PremiumFeaturesTableDefault from "PremiumFeaturesTable" /* 13281 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import BillingInfoStore from "BillingInfoStore" /* 4530 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4533 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import EntitlementStore from "EntitlementStore" /* 6899 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import IAPStore from "IAPStore" /* 6739 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c1, c4, forApplication, importDefault, navigation;

let c10;
let c9;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
let tmp5;
const useMountEffectDefault = tmp5(5590);
const VisualEffectViewAnimatedDefault = tmp5(5772);
const useFractionalPremiumInfoDefault = tmp5(6898);
const useFPDurationLeftDefault = tmp5(13267);
function SubscriptionAndBillingInfo(subscription) {
  let Button;
  let _undefined;
  let c8;
  let closure_3;
  let closure_5;
  let formatRateResult;
  let fractionalPremiumInfo;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let isPremiumGroup;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items18;
  let items19;
  let items20;
  let items21;
  let items22;
  let items8;
  let items9;
  let logger;
  let obj45;
  let premiumGroupRole;
  let premiumTypeSubscription;
  let state;
  let tmp21;
  subscription = subscription.subscription;
  ({ fractionalPremiumInfo, isPremiumGroup, premiumGroupRole } = subscription);
  let analyticsLocations;
  let stateFromStores2;
  let first2;
  react = undefined;
  c8 = undefined;
  const tmp = closure_35();
  let tmp2 = analyticsLocations;
  let tmp3 = stateFromStores2;
  analyticsLocations = analyticsLocations(stateFromStores2[27])().analyticsLocations;
  const tmp4 = subscription;
  let obj = subscription(stateFromStores2[28]);
  let obj2 = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations, analyticsLocation: analyticsLocations(stateFromStores2[29]).PREMIUM_SUBSCRIPTION_DETAILS };
  let tmp5 = first2;
  const first = first2(obj.useFetchSubscriptionInvoicePreview(obj2), 1)[0];
  let obj3 = subscription(stateFromStores2[28]);
  let obj4 = { subscriptionId: subscription.id, preventFetch: subscription.status !== constants2.PAST_DUE };
  const first1 = first2(obj3.useGetSubscriptionInvoice(obj4), 1)[0];
  let obj5 = subscription(stateFromStores2[30]);
  let items = [IAPStore];
  const stateFromStores = obj5.useStateFromStores(items, function() {
    if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
      if (null != subscription.paymentGatewayPlanId) {
        if ("" !== subscription.paymentGatewayPlanId) {
          return IAPStore.getProduct(subscription.paymentGatewayPlanId);
        }
      }
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Subscription missing plan ID");
      throw error;
    } else {
      return null;
    }
  });
  const items1 = [SubscriptionStore];
  const obj6 = subscription(stateFromStores2[30]);
  const stateFromStores1 = obj6.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const items2 = [BillingInfoStore];
  const obj7 = subscription(stateFromStores2[30]);
  stateFromStores2 = obj7.useStateFromStores(items2, () => BillingInfoStore.isSubscriptionFetching);
  let tmp12 = null !== stateFromStores1 && stateFromStores1.hasActiveTrial;
  const tmp4Result = tmp4(tmp3[22]);
  _asyncToGenerator = tmp4Result.useNavigation();
  const tmp4Result9 = tmp4(tmp3[31]);
  const theme = tmp4Result9.useThemeContext().theme;
  const tmp4Result10 = tmp4(tmp3[32]);
  const isThemeLightResult = tmp4Result10.isThemeLight(theme);
  const tmp5Result = tmp5(react.useState(null), 2);
  first2 = tmp5Result[0];
  react = tmp5Result[1];
  const items3 = [AppStateStore];
  const tmp4Result11 = tmp4(tmp3[30]);
  const stateFromStores3 = tmp4Result11.useStateFromStores(items3, () => state.getState());
  const items4 = [first2, stateFromStores2, stateFromStores3];
  const effect = react.useEffect(() => {
    const tmp2 = "opening_mobile_web" === first2 && stateFromStores3 !== ConstantsIOS.AppStates.ACTIVE;
    if (tmp2) {
      closure_5("in_mobile_web");
    }
    const tmp8 = "in_mobile_web" === first2 && stateFromStores3 === ConstantsIOS.AppStates.ACTIVE;
    if (tmp8) {
      const obj = actions_BillingActionCreators;
      const subscriptions = obj.fetchSubscriptions();
      closure_5("start_fetching_update");
    }
    const tmp17 = "start_fetching_update" === first2 && stateFromStores2;
    if (tmp17) {
      closure_5("fetching_update");
    }
    const tmp20 = "fetching_update" !== first2 || stateFromStores2;
    if (!tmp20) {
      closure_5(null);
    }
  }, items4);
  const tmp18 = tmp2(tmp3[35])(() => {
    const obj = subscription(stateFromStores2[36]);
    return obj.getNewAnalyticsLoadId();
  });
  const loadId = tmp18;
  const items5 = [subscription, first2, analyticsLocations, tmp18];
  const memo = react.useMemo(() => {
    let args;
    let load_id;
    if ("start_fetching_update" !== first2) {
      if ("fetching_update" !== tmp) {
        let obj2 = PremiumManagementUtils;
        const obj3 = {
          returnCtaAsComponent: true,
          loadId,
          shouldAllowExternalManagement: true,
          onSuccessCallback() {
                let items;
                logger.log("Successfully opened mobile web Nitro Management page");
                const obj2 = { load_id, location_stack: items, custom_checkout_flow: constants2.MOBILE_WEB_REDIRECT_CHECKOUT };
                const obj = analyticsLocations(stateFromStores2[38]);
                items = [...closure_1_1, analyticsLocations(stateFromStores2[29]).MOBILE_APP_MANAGE_PREMIUM_SUBSCRIPTION_CTA];
                obj.track(constants.MOBILE_OPEN_STANDALONE_MANAGE_SUBSCRIPTION_PAGE, obj2);
                closure_1_5("opening_mobile_web");
              }
        };
        const externalManagementMessage = obj2.getExternalManagementMessage(subscription, obj3);
        let tmp5 = null;
        if (null != externalManagementMessage) {
          let tmp3 = externalManagementMessage;
          if (!react.isValidElement(externalManagementMessage)) {
            let obj = { variant: "text-sm/medium", color: "text-default", children: externalManagementMessage };
            tmp3 = set(Text_Text.Text, obj);
          }
          tmp5 = tmp3;
        }
        return tmp5;
      }
    }
    return set(authStore, { size: "small" });
  }, items5);
  [tmp21, c8] = tmp5(react.useState(false), 2);
  tmp5(react.useState(false), 2);
  const tmp4Result12 = tmp4(tmp3[39]);
  const appleSubscriptionOwnership = tmp4Result12.useAppleSubscriptionOwnership(subscription);
  const obj8 = { fractionalPremiumInfo };
  const tmp4Result13 = tmp4(tmp3[40]);
  const billingInformationNative = tmp4Result13.useBillingInformationNative(subscription, first, first1, false, obj8);
  if (null == first) {
    return null;
  } else {
    const tmp2Result = tmp2(tmp3[41]);
    const planIdFromInvoice = tmp2Result.getPlanIdFromInvoice(subscription, first);
    const tmp2Result4 = tmp2(tmp3[41]);
    const statusFromInvoice = tmp2Result4.getStatusFromInvoice(subscription, first);
    tmp2(tmp3[42])(null != closure_28[planIdFromInvoice], "missing subscription planInfo");
    const obj9 = { subscription, planId: planIdFromInvoice, price: formatRateResult, includePremiumGuilds: true };
    formatRateResult = null;
    const getPlanDescription = tmp2(tmp3[41]).getPlanDescription;
    tmp2(tmp3[41]);
    if (null != stateFromStores) {
      const tmp4Result14 = tmp4(tmp3[43]);
      formatRateResult = tmp4Result14.formatRate(stateFromStores.priceString, tmp51.interval, tmp51.intervalCount);
    }
    const planDescription = getPlanDescription(obj9);
    if (statusFromInvoice !== constants2.CANCELED) {
      if (statusFromInvoice !== constants2.PAUSE_PENDING) {
        if (statusFromInvoice !== constants2.PAST_DUE) {
          if (null != subscription.renewalMutations) {
            const _Date = Date;
            let self = this;
            let self2 = this;
            const date = new Date(subscription.currentPeriodEnd);
            let result = date;
            if (!subscription.isPurchasedExternally) {
              const tmp4Result15 = tmp4(tmp3[41]);
              result = tmp4Result15.extendDateWithUnconsumedFractionalPremium(date, fractionalPremiumInfo.unactivatedUnits);
            }
            const obj10 = { style: tmp.container, children: null };
            const obj11 = { style: tmp.mutationWarningContainer, children: null };
            const items6 = [closure_29(tmp4(tmp3[52]).AnnouncementsWarningIcon, { size: "md" }), ];
            const obj12 = { style: tmp.mutationText, variant: "heading-sm/medium", color: "text-default", children: null };
            const Text6 = tmp4(tmp3[25]).Text;
            const intl7 = tmp4(tmp3[26]).intl;
            const format = intl7.format;
            if (!subscription.hasExternalPlanChange) {
              let displayName;
              if (!isNoneSubscription(subscription.renewalMutations.planId)) {
                const tmp2Result6 = tmp2(tmp3[41]);
                displayName = tmp2Result6.getDisplayName(subscription.renewalMutations.planId);
              }
              const obj13 = { planName: displayName, date: result };
              obj12.children = format(tmp38, obj13);
              items6[1] = closure_29(Text6, obj12);
              obj11.children = items6;
              const items7 = [closure_30(c8, obj11), , ];
              const obj14 = { premiumType: closure_27.TIER_2, hideButton: true, isPremiumGroup, premiumGroupRole };
              items7[1] = closure_29(tmp2(tmp3[53]), obj14);
              const obj15 = { style: tmp.extraInfoContainer, children: items8 };
              const obj16 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: intl8.string(tmp4(tmp3[26]).t.YCrcPL) };
              const Text7 = tmp4(tmp3[25]).Text;
              intl8 = tmp4(tmp3[26]).intl;
              items8 = [closure_29(Text7, obj16), ];
              const obj17 = { style: tmp.extraInfoTextContainer, children: items9 };
              const obj18 = { variant: "text-sm/medium", color: "text-default", children: intl9.string(tmp4(tmp3[26]).t["MTG+3O"]) };
              const Text8 = tmp4(tmp3[25]).Text;
              intl9 = tmp4(tmp3[26]).intl;
              items9 = [closure_29(Text8, obj18), , ];
              const obj19 = { variant: "text-sm/medium", color: "text-default", children: billingInformationNative };
              items9[1] = closure_29(tmp4(tmp3[25]).Text, obj19);
              items9[2] = null != memo && memo;
              items8[1] = closure_30(c8, obj17);
              items7[2] = closure_30(c8, obj15);
              obj10.children = items7;
              return closure_30(c8, obj10);
            }
            const tmp4Result16 = tmp4(tmp3[41]);
            displayName = tmp4Result16.getExternalPlanDisplayName(subscription.renewalMutations);
          } else {
            let tmp54Result;
            const obj20 = { style: tmp.container, children: items11 };
            const obj21 = { style: tmp.pillAndCardContainer, children: items10 };
            if (tmp12) {
              const obj22 = { style: tmp.pillPosition, children: closure_29(tmp4(tmp3[54]).PremiumReferralTrialPill, {}) };
              tmp12 = closure_29(tmp55, obj22);
            }
            items10 = [tmp12, ];
            const obj23 = { premiumType: closure_27.TIER_2, forFractionalPremium: fractionalPremiumInfo.fractionalState !== constants4.NONE, hideButton: true, isPremiumGroup, premiumGroupRole };
            items10[1] = closure_29(tmp2(tmp3[53]), obj23);
            items11 = [closure_30(c8, obj21), ];
            const obj24 = { style: tmp.extraInfoContainer, children: items12 };
            const obj25 = { variant: "eyebrow", color: "text-default", children: intl.string(tmp4(tmp3[26]).t.YCrcPL) };
            const Text = tmp4(tmp3[25]).Text;
            intl = tmp4(tmp3[26]).intl;
            items12 = [closure_29(Text, obj25), , , ];
            if (appleSubscriptionOwnership.isMismatch()) {
              const obj26 = { accessibilityRole: "alert", style: tmp.appleAccountMismatchNotice, children: items13 };
              const obj27 = { size: "sm", color: tmp2(tmp3[19]).colors.ICON_FEEDBACK_WARNING };
              const WarningIcon = tmp4(tmp3[55]).WarningIcon;
              items13 = [closure_29(WarningIcon, obj27), ];
              const obj28 = { variant: "text-sm/medium", color: "text-strong", style: tmp.appleAccountMismatchNoticeText, children: intl4.string(tmp4(tmp3[26]).t.meauFg) };
              const Text3 = tmp4(tmp3[25]).Text;
              intl4 = tmp4(tmp3[26]).intl;
              items13[1] = closure_29(Text3, obj28);
              tmp54Result = closure_30(tmp55, obj26);
            } else {
              let stringResult;
              const obj29 = { style: tmp.extraInfoTextContainer, children: items14 };
              const Text2 = tmp4(tmp3[25]).Text;
              if (null != memo) {
                const intl3 = tmp4(tmp3[26]).intl;
                stringResult = intl3.string(tmp4(tmp3[26]).t["MTG+3O"]);
              } else {
                const intl2 = tmp4(tmp3[26]).intl;
                const obj30 = {
                  onSwitchPlans() {
                                  const obj = PremiumSubscriptionDetails;
                                  return obj.handleManageSubscription(subscription, closure_3, analyticsLocations);
                                },
                  onCancel() {
                                  const obj = PremiumSubscriptionDetails;
                                  return obj.onCancelClick(subscription, analyticsLocations);
                                }
                };
                stringResult = intl2.format(tmp4(tmp3[26]).t.fvk30i, obj30);
              }
              const obj31 = { variant: "text-sm/medium", color: "text-default", children: stringResult };
              items14 = [closure_29(Text2, obj31), , ];
              const obj32 = { subscription };
              items14[1] = closure_29(tmp4(tmp3[51]).GoogleManagementLink, obj32);
              items14[2] = null != memo && memo;
              tmp54Result = closure_30(tmp55, obj29);
            }
            items12[1] = tmp54Result;
            const obj33 = { variant: "eyebrow", color: "text-default", children: intl5.string(tmp4(tmp3[26]).t.Sb6wI1) };
            const Text4 = tmp4(tmp3[25]).Text;
            intl5 = tmp4(tmp3[26]).intl;
            items12[2] = closure_29(Text4, obj33);
            const obj34 = { style: items15, children: items16 };
            items15 = [tmp.extraInfoTextContainer, { gap: 4 }];
            const obj35 = { variant: "text-md/semibold", color: "text-default", children: intl6.string(tmp4(tmp3[26]).t.KXQjfc) };
            const Text5 = tmp4(tmp3[25]).Text;
            intl6 = tmp4(tmp3[26]).intl;
            items16 = [closure_29(Text5, obj35), ];
            const obj36 = { variant: "text-sm/medium", color: "text-default", children: billingInformationNative };
            items16[1] = closure_29(tmp4(tmp3[25]).Text, obj36);
            items12[3] = closure_30(c8, obj34);
            items11[1] = closure_30(c8, obj24);
            return closure_30(c8, obj20);
          }
        }
      }
    }
    const obj37 = { style: tmp.container, children: items20 };
    const obj38 = { style: tmp.errorHeader, children: items19 };
    const obj39 = { source: tmp2(isThemeLightResult ? tmp3[44] : tmp3[45]), style: tmp.headerBackground, children: items18 };
    const obj40 = { style: tmp.logoContainer, children: items17 };
    const obj41 = { source: tmp2(tmp3[46]), style: tmp.wumpusImg };
    items17 = [closure_29(stateFromStores3, obj41), ];
    const obj42 = { source: tmp2(isThemeLightResult ? tmp3[47] : tmp3[48]), style: tmp.logoStyle };
    items17[1] = closure_29(stateFromStores3, obj42);
    items18 = [closure_30(c8, obj40), ];
    const obj43 = { variant: "heading-sm/medium", color: "text-default", children: planDescription };
    items18[1] = closure_29(tmp4(tmp3[25]).Text, obj43);
    items19 = [closure_30(loadId, obj39), ];
    let isOnPlatformMatchingExternalPaymentGateway = subscription.isOnPlatformMatchingExternalPaymentGateway;
    if (isOnPlatformMatchingExternalPaymentGateway) {
      const obj44 = { style: tmp.errorHeaderPrimaryButton, children: closure_29(Button, obj45) };
      obj45 = {
        size: "sm",
        variant: "secondary",
        text: intl10.string(tmp4(tmp3[26]).t.lTCb0c),
        onPress: _asyncToGenerator(async () => {
              let closure_0;
              let closure_2;
              let obj2;
              if (c4 === 2) {
                c4 = 3;
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
                let c3;
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
                      const obj5 = { value: obj2.onResubscribeClick(subscription), done: false };
                      obj2 = tmp(stateFromStores2[50]);
                      return obj5;
                    }
                  } else if (1 === tmp4) {
                    c3 = 0;
                    closure_128_8(false);
                    throw stateFromStores2;
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
                } catch (tmp21) {
                  stateFromStores2 = tmp21;
                  if (0 === c3) {
                    c4 = 3;
                    throw tmp21;
                  } else {
                    c1 = 1;
                  }
                }
              }
            }),
        loading: tmp21,
        disabled: tmp21
      };
      Button = tmp4(tmp3[49]).Button;
      intl10 = tmp4(tmp3[26]).intl;
      isOnPlatformMatchingExternalPaymentGateway = closure_29(tmp43, obj44);
    }
    items19[1] = isOnPlatformMatchingExternalPaymentGateway;
    items20 = [closure_30(c8, obj38), ];
    const obj46 = { style: tmp.extraInfoContainer, children: items21 };
    const obj47 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: intl11.string(tmp4(tmp3[26]).t.YCrcPL) };
    const Text9 = tmp4(tmp3[25]).Text;
    intl11 = tmp4(tmp3[26]).intl;
    items21 = [closure_29(Text9, obj47), ];
    const obj48 = { style: tmp.extraInfoTextContainer, children: items22 };
    const obj49 = { variant: "text-sm/medium", color: "text-default", children: intl12.string(tmp4(tmp3[26]).t["MTG+3O"]) };
    const Text10 = tmp4(tmp3[25]).Text;
    intl12 = tmp4(tmp3[26]).intl;
    items22 = [closure_29(Text10, obj49), , , ];
    const obj50 = { variant: "text-sm/medium", color: "text-default", children: billingInformationNative };
    items22[1] = closure_29(tmp4(tmp3[25]).Text, obj50);
    const obj51 = { subscription };
    items22[2] = closure_29(tmp4(tmp3[51]).GoogleManagementLink, obj51);
    items22[3] = null != memo && memo;
    items21[1] = closure_30(c8, obj48);
    items20[1] = closure_30(c8, obj46);
    return closure_30(c8, obj37);
  }
}
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
({ Image: metroRequire, ImageBackground: metroImportDefault, View: metroImportAll, ScrollView: c9, ActivityIndicator: c10 } = react_native);
const TABLE_DIVIDER_WIDTH = TableRowConstants.TABLE_DIVIDER_WIDTH;
const isNoneSubscription = SubscriptionPlanRecord.isNoneSubscription;
({ AnalyticEvents: closure_20, HelpdeskArticles: closure_21, SubscriptionStatusTypes: closure_22, UserSettingsSections: closure_23 } = Constants);
const CustomCheckoutFlow = PaymentConstants.CustomCheckoutFlow;
({ FractionalPremiumStates: closure_25, PREMIUM_SUBSCRIPTION_APPLICATION: closure_26, PremiumTypes: closure_27, SubscriptionPlanInfo: closure_28 } = PremiumConstants);
({ jsx: closure_29, jsxs: closure_30 } = Fragment);
let tmp6 = new LoggerDefault("PremiumManagePlan");
let closure_31 = tmp6;
let createStyles = createStyles_mod;
let obj = { background: obj2, container: obj3, contentContainer: { marginTop: 24, display: "flex", gap: 12 }, topBlur: { position: "absolute", zIndex: 5, top: 0, left: 0, right: 0 }, accountCredit: { paddingHorizontal: 16 }, accountCreditList: obj4, featuresTable: { paddingTop: 16 }, subscriptionHeader: { marginTop: 20, width: "100%" }, billingInfo: { marginTop: 20, width: "100%" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%" };
createStyles = createStyles.createStyles;
obj3 = { display: "flex", paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj4 = { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_32 = createStyles(obj);
createStyles = createStyles_mod;
let obj5 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between" }, backButtonWrapper: size };
size = { width: 24, height: 24, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
let closure_33 = createStyles.createStyles(obj5);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_34 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  let items;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(13);
  const tmp4 = closure_33();
  const obj2 = useNavigation;
  navigation = obj2.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t() {
      return navigation.pop();
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = set(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" });
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.backButtonWrapper) {
    let tmp10;
    let tmp12;
    let tmp15;
    if (cResult[4] === tmp6) {
      tmp10 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: intl.string(intl13.t["1bX7Tx"]) };
      const Text = Text_Text.Text;
      intl = intl13.intl;
      const tmp14 = set(Text, obj3);
      cResult[6] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[6];
    }
    if (cResult[7] !== tmp4.backButtonWrapper) {
      const obj4 = { style: tmp4.backButtonWrapper };
      const tmp18 = set(metroImportAll, obj4);
      cResult[7] = tmp4.backButtonWrapper;
      cResult[8] = tmp18;
      tmp15 = tmp18;
    } else {
      tmp15 = cResult[8];
    }
    if (cResult[9] === tmp4.headerContainer) {
      if (cResult[10] === tmp10) {
        let tmp19;
        if (cResult[11] === tmp15) {
          tmp19 = cResult[12];
        }
        return tmp19;
      }
    }
    const obj5 = { style: tmp4.headerContainer, children: items };
    items = [tmp10, tmp12, tmp15];
    const tmp22 = __initData(metroImportAll, obj5);
    cResult[9] = tmp4.headerContainer;
    cResult[10] = tmp10;
    cResult[11] = tmp15;
    cResult[12] = tmp22;
    tmp19 = tmp22;
  }
  const obj6 = { style: tmp4.backButtonWrapper, onPress: tmp6, children: tmp7 };
  const tmp11 = set(Pressables.PressableOpacity, obj6);
  cResult[3] = tmp4.backButtonWrapper;
  cResult[4] = tmp6;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let intl;
  let items;
  const tmp = closure_33();
  const obj = useNavigation;
  let closure_0 = obj.useNavigation();
  const obj2 = { style: tmp.headerContainer, children: items };
  const obj3 = {
    style: tmp.backButtonWrapper,
    onPress() {
      return closure_0.pop();
    },
    children: set(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md" })
  };
  const PressableOpacity = Pressables.PressableOpacity;
  items = [set(PressableOpacity, obj3), , ];
  const obj4 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: intl.string(intl13.t["1bX7Tx"]) };
  const Text = Text_Text.Text;
  intl = intl13.intl;
  items[1] = set(Text, obj4);
  const obj5 = { style: tmp.backButtonWrapper };
  items[2] = set(metroImportAll, obj5);
  return __initData(metroImportAll, obj2);
});
createStyles = createStyles_mod;
let closure_35 = createStyles.createStyles(() => {
  const obj = { container: { display: "flex", flexDirection: "column", gap: 12 }, errorHeader: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" }, headerBackground: { padding: 16 }, logoContainer: { flexDirection: "row", alignItems: "center", marginBottom: 12 }, wumpusImg: { marginRight: 10, height: 36, width: 51 }, logoStyle: { height: 32, width: 78 }, errorHeaderPrimaryButton: { marginBottom: 16, marginHorizontal: 16 }, extraInfoContainer: { paddingTop: 16, paddingHorizontal: 16, display: "flex", gap: 8 }, extraInfoTextContainer: { padding: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", gap: 18 }, mutationWarningContainer: { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, mutationText: { flex: 1 }, fpTimeRemaining: { color: nativeDefault.colors.TEXT_BRAND }, fpTimeRemainingPill: { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 }, fpUnactivatedHoursPill: { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 }, fpTimeRemainingText: { color: nativeDefault.colors.WHITE }, fpUnitsTitle: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, fpUnitsStatusText: { color: nativeDefault.colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 }, fpRowStart: { padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, fpRowIcon: { marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING }, fpRowContent: { flexShrink: 1, flexGrow: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, fpRowEnd: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST }, dividerContainer: { height: TABLE_DIVIDER_WIDTH }, divider: { height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE }, pillAndCardContainer: { position: "relative" }, pillPosition: { position: "absolute", top: -18, left: 5, zIndex: 99 }, appleAccountMismatchNotice: { alignSelf: "stretch", width: "100%", flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING }, appleAccountMismatchNoticeText: { flex: 1 } };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, overflow: "hidden" });
  ({ padding: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", gap: 18 });
  ({ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 16, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
  ({ color: nativeDefault.colors.TEXT_BRAND });
  ({ borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 });
  ({ borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 });
  ({ color: nativeDefault.colors.WHITE });
  ({ color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY });
  ({ color: nativeDefault.colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 });
  ({ padding: nativeDefault.modules.mobile.TABLE_ROW_PADDING, minHeight: nativeDefault.modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
  ({ marginEnd: nativeDefault.modules.mobile.TABLE_ROW_PADDING });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST });
  ({ height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
  ({ alignSelf: "stretch", width: "100%", flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_WARNING, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING });
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_37 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let AYGoBn;
  let Icon;
  let activationDate;
  let durationText;
  let format;
  let fpRowContent;
  let fpUnitsTitle;
  let fractionalPremiumInfo;
  let hasUnactivatedUnits;
  let intl;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items1;
  let items2;
  let items3;
  let items4;
  let items6;
  let items7;
  let obj10;
  let obj20;
  let obj22;
  let obj25;
  let obj5;
  let obj6;
  let obj9;
  let showPremiumFeaturesCard;
  let tmp10;
  let tmp13;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp23;
  let tmp29;
  let tmp33;
  let tmp35;
  let tmp38;
  let tmp5;
  let unactivatedHoursString;
  const obj = react2;
  const cResult = obj.c(63);
  ({ fractionalPremiumInfo, showPremiumFeaturesCard, durationText, hasUnactivatedUnits, unactivatedHoursString, activationDate } = arg0);
  const tmp4 = closure_35();
  const container = tmp4.container;
  if (cResult[0] !== showPremiumFeaturesCard) {
    let tmp6 = showPremiumFeaturesCard;
    if (tmp6) {
      const obj2 = { premiumType: closure_27.TIER_2, forFractionalPremium: true, hideButton: true };
      tmp6 = set(PremiumFeaturesCardDefault, obj2);
    }
    cResult[0] = showPremiumFeaturesCard;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  const extraInfoContainer = tmp4.extraInfoContainer;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "eyebrow", color: "text-default", children: intl.string(intl13.t.Obre8v) };
    const Text = Text_Text.Text;
    intl = intl13.intl;
    const tmp12 = set(Text, obj3);
    cResult[2] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "text-md/semibold", color: "text-default", children: format(AYGoBn, obj5) };
    const Text2 = Text_Text.Text;
    const intl2 = intl13.intl;
    format = intl2.format;
    obj5 = { helpCenterLink: obj6.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT) };
    AYGoBn = intl13.t.AYGoBn;
    obj6 = HelpdeskUtilsDefault;
    const tmp17 = set(Text2, obj4);
    cResult[3] = tmp17;
    tmp13 = tmp17;
  } else {
    tmp13 = cResult[3];
  }
  const fpRowStart = tmp4.fpRowStart;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { padding: 6, borderRadius: nativeDefault.radii.sm };
    const point = { x: 0, y: 0 };
    const point1 = { x: 0, y: 1 };
    const items = [nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE, nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE];
    cResult[4] = items;
    cResult[5] = obj7;
    cResult[6] = point;
    cResult[7] = point1;
    tmp21 = point1;
    tmp20 = point;
    tmp19 = obj7;
    tmp18 = items;
  } else {
    tmp18 = cResult[4];
    tmp19 = cResult[5];
    tmp20 = cResult[6];
    tmp21 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { style: tmp19, start: tmp20, end: tmp21, colors: tmp18, children: set(metroImportAll, obj9) };
    obj9 = { children: set(Icon, obj10) };
    obj10 = { color: nativeDefault.unsafe_rawColors.WHITE, source: AssetRegistryDefault, size: native.IconSizes.LARGE };
    const tmp26 = LinearGradientDefault;
    Icon = native.Icon;
    const tmp28 = set(tmp26, obj8);
    cResult[8] = tmp28;
    tmp23 = tmp28;
  } else {
    tmp23 = cResult[8];
  }
  if (cResult[9] !== tmp4.fpRowIcon) {
    const obj11 = { style: tmp4.fpRowIcon, children: tmp23 };
    const tmp32 = set(metroImportAll, obj11);
    cResult[9] = tmp4.fpRowIcon;
    cResult[10] = tmp32;
    tmp29 = tmp32;
  } else {
    tmp29 = cResult[10];
  }
  ({ fpRowContent, fpUnitsTitle } = tmp4);
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl13.intl;
    const stringResult = intl3.string(intl13.t.DFMPWS);
    cResult[11] = stringResult;
    tmp33 = stringResult;
  } else {
    tmp33 = cResult[11];
  }
  if (cResult[12] !== tmp4.fpUnitsTitle) {
    const obj12 = { variant: "text-sm/semibold", style: fpUnitsTitle, children: tmp33 };
    const tmp37 = set(Text_Text.Text, obj12);
    cResult[12] = tmp4.fpUnitsTitle;
    cResult[13] = tmp37;
    tmp35 = tmp37;
  } else {
    tmp35 = cResult[13];
  }
  if (cResult[14] === fractionalPremiumInfo) {
    if (cResult[15] === hasUnactivatedUnits) {
      if (cResult[16] === tmp4.fpUnitsStatusText) {
        if (cResult[17] === unactivatedHoursString) {
          tmp38 = cResult[18];
        }
        if (cResult[19] === tmp4.fpRowContent) {
          if (cResult[20] === tmp35) {
            let tmp42;
            if (cResult[21] === tmp38) {
              tmp42 = cResult[22];
            }
            if (cResult[23] === tmp4.fpRowStart) {
              if (cResult[24] === tmp29) {
                let tmp46;
                let tmp49;
                if (cResult[25] === tmp42) {
                  tmp46 = cResult[26];
                }
                if (cResult[27] !== tmp4.divider) {
                  const obj13 = { style: tmp4.divider };
                  const tmp52 = set(metroImportAll, obj13);
                  cResult[27] = tmp4.divider;
                  cResult[28] = tmp52;
                  tmp49 = tmp52;
                } else {
                  tmp49 = cResult[28];
                }
                if (cResult[29] === tmp4.dividerContainer) {
                  let tmp53;
                  let tmp57;
                  if (cResult[30] === tmp49) {
                    tmp53 = cResult[31];
                  }
                  if (cResult[32] === activationDate) {
                    if (cResult[33] === fractionalPremiumInfo) {
                      if (cResult[34] === hasUnactivatedUnits) {
                        let tmp65;
                        if (cResult[35] === tmp4.fpTimeRemaining) {
                          tmp57 = cResult[36];
                        }
                        if (cResult[37] === durationText) {
                          if (cResult[38] === fractionalPremiumInfo) {
                            if (cResult[39] === hasUnactivatedUnits) {
                              if (cResult[40] === tmp4.fpTimeRemainingPill) {
                                if (cResult[41] === tmp4.fpTimeRemainingText) {
                                  if (cResult[42] === tmp4.fpUnactivatedHoursPill) {
                                    if (cResult[43] === unactivatedHoursString) {
                                      tmp65 = cResult[44];
                                    }
                                    if (cResult[45] === tmp4.fpRowContent) {
                                      if (cResult[46] === tmp57) {
                                        let tmp72;
                                        if (cResult[47] === tmp65) {
                                          tmp72 = cResult[48];
                                        }
                                        if (cResult[49] === tmp4.fpRowEnd) {
                                          let tmp76;
                                          if (cResult[50] === tmp72) {
                                            tmp76 = cResult[51];
                                          }
                                          if (cResult[52] === tmp46) {
                                            if (cResult[53] === tmp53) {
                                              let tmp79;
                                              if (cResult[54] === tmp76) {
                                                tmp79 = cResult[55];
                                              }
                                              if (cResult[56] === tmp4.extraInfoContainer) {
                                                let tmp83;
                                                if (cResult[57] === tmp79) {
                                                  tmp83 = cResult[58];
                                                }
                                                if (cResult[59] === tmp4.container) {
                                                  if (cResult[60] === tmp5) {
                                                    let tmp87;
                                                    if (cResult[61] === tmp83) {
                                                      tmp87 = cResult[62];
                                                    }
                                                    return tmp87;
                                                  }
                                                }
                                                const obj14 = { style: container, children: items1 };
                                                items1 = [tmp5, tmp83];
                                                const tmp90 = __initData(metroImportAll, obj14);
                                                cResult[59] = tmp4.container;
                                                cResult[60] = tmp5;
                                                cResult[61] = tmp83;
                                                cResult[62] = tmp90;
                                                tmp87 = tmp90;
                                              }
                                              const obj15 = { style: extraInfoContainer, children: items2 };
                                              items2 = [tmp10, tmp13, tmp79];
                                              const tmp86 = __initData(metroImportAll, obj15);
                                              cResult[56] = tmp4.extraInfoContainer;
                                              cResult[57] = tmp79;
                                              cResult[58] = tmp86;
                                              tmp83 = tmp86;
                                            }
                                          }
                                          const obj16 = { children: items3 };
                                          items3 = [tmp46, tmp53, tmp76];
                                          const tmp82 = __initData(metroImportAll, obj16);
                                          cResult[52] = tmp46;
                                          cResult[53] = tmp53;
                                          cResult[54] = tmp76;
                                          cResult[55] = tmp82;
                                          tmp79 = tmp82;
                                        }
                                        const obj17 = { start: false, end: true, style: tmp4.fpRowEnd, variant: "secondary", children: tmp72 };
                                        const tmp78 = set(Card_Card.Card, obj17);
                                        cResult[49] = tmp4.fpRowEnd;
                                        cResult[50] = tmp72;
                                        cResult[51] = tmp78;
                                        tmp76 = tmp78;
                                      }
                                    }
                                    const obj18 = { style: tmp4.fpRowContent, children: items4 };
                                    items4 = [tmp57, tmp65];
                                    const tmp75 = __initData(metroImportAll, obj18);
                                    cResult[45] = tmp4.fpRowContent;
                                    cResult[46] = tmp57;
                                    cResult[47] = tmp65;
                                    cResult[48] = tmp75;
                                    tmp72 = tmp75;
                                  }
                                }
                              }
                            }
                          }
                        }
                        if (hasUnactivatedUnits) {
                          let tmp69;
                          if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
                            const obj19 = { style: tmp4.fpUnactivatedHoursPill, children: set(Text_Text.Text, obj20) };
                            obj20 = { variant: "text-sm/medium", style: tmp4.fpTimeRemainingText, children: unactivatedHoursString };
                            tmp69 = set(metroImportAll, obj19);
                          }
                          cResult[37] = durationText;
                          cResult[38] = fractionalPremiumInfo;
                          cResult[39] = hasUnactivatedUnits;
                          cResult[40] = tmp4.fpTimeRemainingPill;
                          cResult[41] = tmp4.fpTimeRemainingText;
                          cResult[42] = tmp4.fpUnactivatedHoursPill;
                          cResult[43] = unactivatedHoursString;
                          cResult[44] = tmp69;
                          tmp65 = tmp69;
                        }
                        const obj21 = { style: tmp4.fpTimeRemainingPill, children: set(Text_Text.Text, obj22) };
                        obj22 = { variant: "text-sm/medium", style: tmp4.fpTimeRemainingText, children: durationText };
                        tmp69 = set(metroImportAll, obj21);
                      }
                    }
                  }
                  if (hasUnactivatedUnits) {
                    let tmp61Result;
                    if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
                      const obj23 = { variant: "text-md/semibold", children: intl6.string(intl13.t["hT6i/0"]) };
                      const Text5 = Text_Text.Text;
                      intl6 = intl13.intl;
                      const items5 = [set(Text5, obj23), ];
                      let tmp63Result = undefined !== activationDate;
                      if (tmp63Result) {
                        const obj24 = { variant: "text-xs/medium", color: "text-subtle", children: intl7.format(intl13.t["0Vwb/l"], obj25) };
                        const Text6 = Text_Text.Text;
                        intl7 = intl13.intl;
                        obj25 = { activateDate: activationDate };
                        tmp63Result = set(Text6, obj24);
                      }
                      const obj26 = { children: items5 };
                      items5[1] = tmp63Result;
                      tmp61Result = __initData(metroImportAll, obj26);
                    }
                    cResult[32] = activationDate;
                    cResult[33] = fractionalPremiumInfo;
                    cResult[34] = hasUnactivatedUnits;
                    cResult[35] = tmp4.fpTimeRemaining;
                    cResult[36] = tmp61Result;
                    tmp57 = tmp61Result;
                  }
                  const obj27 = { variant: "text-md/semibold", style: tmp4.fpTimeRemaining, children: intl5.string(intl13.t["3G0CTC"]) };
                  const Text4 = Text_Text.Text;
                  intl5 = intl13.intl;
                  tmp61Result = set(Text4, obj27);
                }
                const obj28 = { style: tmp4.dividerContainer, children: tmp49 };
                const tmp56 = set(metroImportAll, obj28);
                cResult[29] = tmp4.dividerContainer;
                cResult[30] = tmp49;
                cResult[31] = tmp56;
                tmp53 = tmp56;
              }
            }
            const obj29 = { style: fpRowStart, start: true, end: false, variant: "primary", children: items6 };
            items6 = [tmp29, tmp42];
            const tmp48 = __initData(Card_Card.Card, obj29);
            cResult[23] = tmp4.fpRowStart;
            cResult[24] = tmp29;
            cResult[25] = tmp42;
            cResult[26] = tmp48;
            tmp46 = tmp48;
          }
        }
        const obj30 = { style: fpRowContent, children: items7 };
        items7 = [tmp35, tmp38];
        const tmp45 = __initData(metroImportAll, obj30);
        cResult[19] = tmp4.fpRowContent;
        cResult[20] = tmp35;
        cResult[21] = tmp38;
        cResult[22] = tmp45;
        tmp42 = tmp45;
      }
    }
  }
  if (hasUnactivatedUnits) {
    let tmp40;
    if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
      const obj31 = { variant: "text-sm/medium", children: unactivatedHoursString };
      tmp40 = set(Text_Text.Text, obj31);
    }
    cResult[14] = fractionalPremiumInfo;
    cResult[15] = hasUnactivatedUnits;
    cResult[16] = tmp4.fpUnitsStatusText;
    cResult[17] = unactivatedHoursString;
    cResult[18] = tmp40;
    tmp38 = tmp40;
  }
  const obj32 = { variant: "text-sm/medium", style: tmp4.fpUnitsStatusText, children: intl4.string(intl13.t["B66Z+f"]) };
  const Text3 = Text_Text.Text;
  intl4 = intl13.intl;
  tmp40 = set(Text3, obj32);
}) : ((durationText) => {
  let AYGoBn;
  let Icon;
  let activationDate;
  let format;
  let fractionalPremiumInfo;
  let hasUnactivatedUnits;
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items2;
  let obj10;
  let obj11;
  let obj12;
  let obj13;
  let obj18;
  let obj23;
  let obj26;
  let obj29;
  let obj6;
  let obj7;
  let showPremiumFeaturesCard;
  let tmp11;
  let unactivatedHoursString;
  ({ fractionalPremiumInfo, showPremiumFeaturesCard, hasUnactivatedUnits, unactivatedHoursString, activationDate } = durationText);
  durationText = durationText.durationText;
  const tmp = closure_35();
  const obj = { style: tmp.container, children: null };
  if (showPremiumFeaturesCard) {
    const obj2 = { premiumType: closure_27.TIER_2, forFractionalPremium: true, hideButton: true };
    showPremiumFeaturesCard = set(PremiumFeaturesCardDefault, obj2);
  }
  const items = [showPremiumFeaturesCard, ];
  const obj3 = { style: tmp.extraInfoContainer, children: null };
  const obj4 = { variant: "eyebrow", color: "text-default", children: intl.string(intl13.t.Obre8v) };
  const Text = Text_Text.Text;
  intl = intl13.intl;
  const items1 = [set(Text, obj4), , ];
  const obj5 = { variant: "text-md/semibold", color: "text-default", children: format(AYGoBn, obj6) };
  const Text2 = Text_Text.Text;
  const intl2 = intl13.intl;
  format = intl2.format;
  obj6 = { helpCenterLink: obj7.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT) };
  AYGoBn = intl13.t.AYGoBn;
  obj7 = HelpdeskUtilsDefault;
  items1[1] = set(Text2, obj5);
  const obj8 = { style: tmp.fpRowStart, start: true, end: false, variant: "primary", children: null };
  const obj9 = { style: tmp.fpRowIcon, children: set(tmp11, obj10) };
  const Card = Card_Card.Card;
  obj10 = { style: obj11, start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items2, children: set(metroImportAll, obj12) };
  obj11 = { padding: 6, borderRadius: nativeDefault.radii.sm };
  tmp11 = LinearGradientDefault;
  items2 = [nativeDefault.unsafe_rawColors.GUILD_BOOSTING_BLUE, nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj12 = { children: set(Icon, obj13) };
  obj13 = { color: nativeDefault.unsafe_rawColors.WHITE, source: AssetRegistryDefault, size: native.IconSizes.LARGE };
  Icon = native.Icon;
  const items3 = [set(metroImportAll, obj9), ];
  const obj14 = { style: tmp.fpRowContent, children: null };
  const obj15 = { variant: "text-sm/semibold", style: tmp.fpUnitsTitle, children: intl3.string(intl13.t.DFMPWS) };
  const Text3 = Text_Text.Text;
  intl3 = intl13.intl;
  const items4 = [set(Text3, obj15), ];
  if (hasUnactivatedUnits) {
    let tmp8Result;
    if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
      const obj16 = { variant: "text-sm/medium", children: unactivatedHoursString };
      tmp8Result = set(Text_Text.Text, obj16);
    }
    items4[1] = tmp8Result;
    obj14.children = items4;
    items3[1] = __initData(metroImportAll, obj14);
    obj8.children = items3;
    const items5 = [__initData(Card, obj8), , ];
    const obj17 = { style: tmp.dividerContainer, children: set(metroImportAll, obj18) };
    obj18 = { style: tmp.divider };
    items5[1] = set(metroImportAll, obj17);
    const obj19 = { start: false, end: true, style: tmp.fpRowEnd, variant: "secondary", children: null };
    const obj20 = { style: tmp.fpRowContent, children: null };
    if (hasUnactivatedUnits) {
      let tmp8Result5;
      if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
        const obj21 = { variant: "text-md/semibold", children: intl6.string(intl13.t["hT6i/0"]) };
        const Text6 = Text_Text.Text;
        intl6 = intl13.intl;
        const items6 = [set(Text6, obj21), ];
        let tmp8Result3 = undefined !== activationDate;
        if (tmp8Result3) {
          const obj22 = { variant: "text-xs/medium", color: "text-subtle", children: intl7.format(intl13.t["0Vwb/l"], obj23) };
          const Text7 = Text_Text.Text;
          intl7 = intl13.intl;
          obj23 = { activateDate: activationDate };
          tmp8Result3 = set(Text7, obj22);
        }
        const obj24 = { children: items6 };
        items6[1] = tmp8Result3;
        tmp8Result5 = __initData(metroImportAll, obj24);
      }
      const items7 = [tmp8Result5, ];
      if (hasUnactivatedUnits) {
        let tmp8Result4;
        if (fractionalPremiumInfo.fractionalState === constants4.NONE) {
          const obj25 = { style: tmp.fpUnactivatedHoursPill, children: set(Text_Text.Text, obj26) };
          obj26 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: unactivatedHoursString };
          tmp8Result4 = set(metroImportAll, obj25);
        }
        const obj27 = { children: items5 };
        items7[1] = tmp8Result4;
        obj20.children = items7;
        obj19.children = __initData(metroImportAll, obj20);
        items5[2] = set(tmp14, obj19);
        items1[2] = __initData(metroImportAll, obj27);
        obj3.children = items1;
        items[1] = __initData(metroImportAll, obj3);
        obj.children = items;
        return __initData(metroImportAll, obj);
      }
      const obj28 = { style: tmp.fpTimeRemainingPill, children: set(Text_Text.Text, obj29) };
      obj29 = { variant: "text-sm/medium", style: tmp.fpTimeRemainingText, children: durationText };
      tmp8Result4 = set(metroImportAll, obj28);
    }
    const obj30 = { variant: "text-md/semibold", style: tmp.fpTimeRemaining, children: intl5.string(intl13.t["3G0CTC"]) };
    const Text5 = Text_Text.Text;
    intl5 = intl13.intl;
    tmp8Result5 = set(Text5, obj30);
  }
  const obj31 = { variant: "text-sm/medium", style: tmp.fpUnitsStatusText, children: intl4.string(intl13.t["B66Z+f"]) };
  const Text4 = Text_Text.Text;
  intl4 = intl13.intl;
  tmp8Result = set(Text4, obj31);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let bottom;
  let currentUser;
  let hasTrackedScrolledToBottom;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp26;
  let tmp37;
  let tmp38;
  let tmp39;
  let tmp9;
  let top;
  let obj = navigation(576);
  const cResult = obj.c(88);
  const tmp4 = closure_32();
  let tmp5 = importDefault;
  ({ top, bottom } = useSafeAreaInsetsDefault());
  useSafeAreaInsetsDefault();
  let obj2 = navigation(13265);
  const youBarSettingsOutsideSafeAreaTop = obj2.useYouBarSettingsOutsideSafeAreaTop();
  let obj3 = navigation(1490);
  navigation = obj3.useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t() {
      navigation.setOptions({ headerShown: false });
    };
    let items = [navigation];
    cResult[0] = navigation;
    cResult[1] = fn;
    cResult[2] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const layoutEffect = react.useLayoutEffect(tmp9, tmp10);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SubscriptionPlanStore];
    const fn2 = function c() {
      return SubscriptionPlanStore.isLoadedForPremiumSKUs();
    };
    cResult[3] = items1;
    cResult[4] = fn2;
    tmp13 = fn2;
    tmp12 = items1;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const tmpResult = navigation(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp12, tmp13);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [SubscriptionStore];
    class E {
      constructor() {
        const items = [SubscriptionStore.getPremiumTypeSubscription(), SubscriptionStore.hasFetchedSubscriptions()];
        return items;
      }
    }
    cResult[5] = items2;
    cResult[6] = E;
    tmp17 = E;
    tmp16 = items2;
  } else {
    tmp16 = cResult[5];
    tmp17 = cResult[6];
  }
  const tmpResult6 = navigation(504);
  [tmp20, tmp21] = tmpResult6.useStateFromStoresArray(tmp16, tmp17);
  _slicedToArray(tmpResult6.useStateFromStoresArray(tmp16, tmp17), 2);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [UserStore];
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[7] = items3;
    cResult[8] = U;
    tmp23 = U;
    tmp22 = items3;
  } else {
    tmp22 = cResult[7];
    tmp23 = cResult[8];
  }
  const tmpResult7 = navigation(504);
  const stateFromStores1 = tmpResult7.useStateFromStores(tmp22, tmp23);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { forceFetch: true };
    cResult[9] = obj5;
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
  } else {
    tmp26 = cResult[9];
  }
  const tmp27 = useFractionalPremiumInfoDefault(tmp26);
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor() {
        const isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions() || BillingInfoStore.isSubscriptionFetching;
        if (!isSubscriptionFetching) {
          const obj = navigation(dependencyMap[34]);
          const subscriptions = obj.fetchSubscriptions();
        }
        const tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
        if (!tmp5) {
          const obj3 = navigation(dependencyMap[64]);
          const premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
      }
    }
    cResult[10] = X;
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
  } else {
    class X {
      constructor() {
        const isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions() || BillingInfoStore.isSubscriptionFetching;
        if (!isSubscriptionFetching) {
          const obj = navigation(dependencyMap[34]);
          const subscriptions = obj.fetchSubscriptions();
        }
        const tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
        if (!tmp5) {
          const obj3 = navigation(dependencyMap[64]);
          const premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
      }
    }
  }
  useMountEffectDefault(tmp28);
  const tmpResult8 = navigation(7736);
  const isInReverseTrial = tmpResult8.useIsInReverseTrial();
  const tmp5Result = useFPDurationLeftDefault;
  tmp5Result(tmp27.endsAt, navigation(13267).CountDownMessageTypes.SHORT_TIME);
  if (cResult[11] !== tmp27) {
    class X {
      constructor() {
        const isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions() || BillingInfoStore.isSubscriptionFetching;
        if (!isSubscriptionFetching) {
          const obj = navigation(dependencyMap[34]);
          const subscriptions = obj.fetchSubscriptions();
        }
        const tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
        if (!tmp5) {
          const obj3 = navigation(dependencyMap[64]);
          const premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
      }
    }
    const unactivatedFractionalPremiumDurationString = obj10.getUnactivatedFractionalPremiumDurationString(tmp27);
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[12] = unactivatedFractionalPremiumDurationString;
  } else {
    class X {
      constructor() {
        const isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions() || BillingInfoStore.isSubscriptionFetching;
        if (!isSubscriptionFetching) {
          const obj = navigation(dependencyMap[34]);
          const subscriptions = obj.fetchSubscriptions();
        }
        const tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
        if (!tmp5) {
          const obj3 = navigation(dependencyMap[64]);
          const premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
      }
    }
  }
  if (null !== tmp20) {
    class X {
      constructor() {
        const isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions() || BillingInfoStore.isSubscriptionFetching;
        if (!isSubscriptionFetching) {
          const obj = navigation(dependencyMap[34]);
          const subscriptions = obj.fetchSubscriptions();
        }
        const tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
        if (!tmp5) {
          const obj3 = navigation(dependencyMap[64]);
          const premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
      }
    }
    if (!tmp20.isPurchasedExternally) {
      class X {
        constructor() {
          const isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions() || BillingInfoStore.isSubscriptionFetching;
          if (!isSubscriptionFetching) {
            const obj = navigation(dependencyMap[34]);
            const subscriptions = obj.fetchSubscriptions();
          }
          const tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
          if (!tmp5) {
            const obj3 = navigation(dependencyMap[64]);
            const premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
          }
        }
      }
    }
  }
  let tmp35 = tmp27.fractionalState !== constants4.NONE;
  if (tmp35) {
    class X {
      constructor() {
        const isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions() || BillingInfoStore.isSubscriptionFetching;
        if (!isSubscriptionFetching) {
          const obj = navigation(dependencyMap[34]);
          const subscriptions = obj.fetchSubscriptions();
        }
        const tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
        if (!tmp5) {
          const obj3 = navigation(dependencyMap[64]);
          const premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
      }
    }
    tmp35 = !tmp36;
  }
  if (!tmp35) {
    class X {
      constructor() {
        const isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions() || BillingInfoStore.isSubscriptionFetching;
        if (!isSubscriptionFetching) {
          const obj = navigation(dependencyMap[34]);
          const subscriptions = obj.fetchSubscriptions();
        }
        const tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
        if (!tmp5) {
          const obj3 = navigation(dependencyMap[64]);
          const premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
        }
      }
    }
  }
  const tmpResult9 = navigation(4589);
  const theme = tmpResult9.useThemeContext().theme;
  importDefault = react.useRef(false);
  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
    cResult[13] = J;
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
  } else {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
  }
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
    const items4 = [EntitlementStore];
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    const items5 = [];
    cResult[14] = items4;
    cResult[15] = tmp40;
    cResult[16] = items5;
    tmp39 = items5;
    tmp38 = tmp40;
    tmp37 = items4;
  } else {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
    tmp38 = cResult[15];
    tmp39 = cResult[16];
  }
  const tmpResult10 = navigation(504);
  const stateFromStores2 = tmpResult10.useStateFromStores(tmp37, tmp38, tmp39, tmp(2069).areSetsEqual);
  if (cResult[17] !== navigation) {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
    cResult[17] = navigation;
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[18] = tmp43;
  } else {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
  }
  if (stateFromStores1 != null) {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
  }
  if (cResult[19] !== stateFromStores1) {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
    if (stateFromStores1 != null) {
      class J {
        constructor(nativeEvent) {
          const obj = PremiumNitroHomeUtils;
          const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
          return obj.trackIfScrolledToBottom(obj2);
        }
      }
    }
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[20] = tmp46;
  } else {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
  }
  if (!youBarSettingsOutsideSafeAreaTop) {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
  }
  if (cResult[21] !== 0) {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
    tmp48[0] = 0;
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[22] = tmp48;
  } else {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
  }
  if (cResult[23] === tmp4.topBlur) {
    class J {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
        return obj.trackIfScrolledToBottom(obj2);
      }
    }
    if (cResult[26] === tmp49) {
      class J {
        constructor(nativeEvent) {
          const obj = PremiumNitroHomeUtils;
          const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
          return obj.trackIfScrolledToBottom(obj2);
        }
      }
      if (!youBarSettingsOutsideSafeAreaTop) {
        class J {
          constructor(nativeEvent) {
            const obj = PremiumNitroHomeUtils;
            const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
            return obj.trackIfScrolledToBottom(obj2);
          }
        }
      }
      class U {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      const obj6 = { paddingTop: 16, paddingBottom: bottom };
      cResult[29] = bottom;
      cResult[30] = 16;
      cResult[31] = obj6;
    }
    class U {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    tmp52[1] = tmp49;
    tmp52[2] = theme;
    cResult[26] = tmp49;
    cResult[27] = theme;
    cResult[28] = closure_29(VisualEffectViewAnimatedDefault, tmp52);
    const tmp53 = closure_29(VisualEffectViewAnimatedDefault, tmp52);
  }
  const items6 = [tmp4.topBlur, tmp48];
  cResult[23] = tmp4.topBlur;
  cResult[24] = tmp48;
  cResult[25] = items6;
}) : (() => {
  let currentPeriodEnd;
  let currentUser;
  let flag;
  let hasTrackedScrolledToBottom;
  let intl;
  let items10;
  let items6;
  let items8;
  let items9;
  let tmp10;
  let tmp11;
  const f114426 = () => {
    const items = [SubscriptionStore.getPremiumTypeSubscription(), SubscriptionStore.hasFetchedSubscriptions()];
    return items;
  };
  const tmp = closure_32();
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  const bottom = rect.bottom;
  let obj = navigation(13265);
  const youBarSettingsOutsideSafeAreaTop = obj.useYouBarSettingsOutsideSafeAreaTop();
  let obj2 = navigation(1490);
  navigation = obj2.useNavigation();
  let items = [navigation];
  const layoutEffect = react.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  const items1 = [SubscriptionPlanStore];
  const obj4 = navigation(504);
  const stateFromStores = obj4.useStateFromStores(items1, () => SubscriptionPlanStore.isLoadedForPremiumSKUs());
  const items2 = [SubscriptionStore];
  const obj5 = navigation(504);
  [tmp10, tmp11] = obj5.useStateFromStoresArray(items2, f114426);
  _slicedToArray(obj5.useStateFromStoresArray(items2, f114426), 2);
  const items3 = [UserStore];
  const obj6 = navigation(504);
  const stateFromStores1 = obj6.useStateFromStores(items3, () => currentUser.getCurrentUser());
  const tmp12 = useFractionalPremiumInfoDefault({ forceFetch: true });
  useMountEffectDefault(() => {
    const isSubscriptionFetching = SubscriptionStore.hasFetchedSubscriptions() || BillingInfoStore.isSubscriptionFetching;
    if (!isSubscriptionFetching) {
      const obj = navigation(dependencyMap[34]);
      const subscriptions = obj.fetchSubscriptions();
    }
    const tmp5 = SubscriptionPlanStore.isLoadedForPremiumSKUs() || SubscriptionPlanStore.isFetchingForPremiumSKUs();
    if (!tmp5) {
      const obj3 = navigation(dependencyMap[64]);
      const premiumSubscriptionPlans = obj3.fetchPremiumSubscriptionPlans();
    }
  });
  const obj8 = navigation(7736);
  let isInReverseTrial = obj8.useIsInReverseTrial();
  const tmp15 = useFPDurationLeftDefault;
  const tmp15Result = tmp15(tmp12.endsAt, navigation(13267).CountDownMessageTypes.SHORT_TIME);
  const obj9 = navigation(4528);
  const unactivatedFractionalPremiumDurationString = obj9.getUnactivatedFractionalPremiumDurationString(tmp12);
  if (null !== tmp10) {
    if (!tmp10.isPurchasedExternally) {
      currentPeriodEnd = tmp10.currentPeriodEnd;
    }
  }
  let tmp29Result4 = tmp12.fractionalState !== constants4.NONE;
  if (tmp29Result4) {
    tmp29Result4 = !(isInReverseTrial && tmp12.unactivatedUnits.length <= 0);
  }
  if (!tmp29Result4) {
    tmp29Result4 = tmp17;
  }
  const tmp4Result = navigation(4589);
  const theme = tmp4Result.useThemeContext().theme;
  importDefault = react.useRef(false);
  const callback = react.useCallback((nativeEvent) => {
    const obj = PremiumNitroHomeUtils;
    const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom };
    return obj.trackIfScrolledToBottom(obj2);
  }, []);
  const items4 = [EntitlementStore];
  let tmp23 = null != tmp10;
  const tmp4Result2 = navigation(504);
  const stateFromStores2 = tmp4Result2.useStateFromStores(items4, function() {
    forApplication = forApplication.getForApplication(closure_1_26);
    if (forApplication == null) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      forApplication = new Set();
    }
    return forApplication;
  }, [], tmp4(2069).areSetsEqual);
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
  const items5 = [tmp.topBlur, ];
  let num = 0;
  const obj7 = { style: tmp.background, children: items6 };
  const tmp2Result = VisualEffectViewAnimatedDefault;
  if (!youBarSettingsOutsideSafeAreaTop) {
    num = top;
  }
  items5[1] = { height: num };
  items6 = [closure_29(tmp2Result, { blurAmount: 0.2, style: items5, blurTheme: theme }), ];
  const items7 = [tmp.container, ];
  let num2 = 16;
  if (!youBarSettingsOutsideSafeAreaTop) {
    num2 = top;
  }
  const obj10 = { contentContainerStyle: items7, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: items8 };
  items7[1] = { paddingTop: num2, paddingBottom: bottom };
  items8 = [closure_29(closure_34, {}), ];
  let tmp29Result = tmp23;
  const obj11 = { style: tmp.contentContainer, children: items9 };
  if (tmp29Result) {
    const obj12 = { subscription: tmp10, fractionalPremiumInfo: tmp12, isPremiumGroup: result, premiumGroupRole };
    tmp29Result = closure_29(SubscriptionAndBillingInfo, obj12);
  }
  items9 = [tmp29Result, , , , , , ];
  if (isInReverseTrial) {
    const obj13 = { premiumType: closure_27.TIER_2, forFractionalPremium: true, hideButton: true };
    isInReverseTrial = closure_29(tmp2(8868), obj13);
  }
  items9[1] = isInReverseTrial;
  let tmp29Result3 = result && !tmp23;
  if (tmp29Result3) {
    const obj14 = { premiumType: closure_27.TIER_2, hideButton: true, hidePrice: true, isPremiumGroup: true, premiumGroupRole };
    tmp29Result3 = closure_29(tmp2(8868), obj14);
  }
  items9[2] = tmp29Result3;
  if (tmp29Result4) {
    const obj15 = { fractionalPremiumInfo: tmp12, showPremiumFeaturesCard: tmp12.fractionalState === constants4.FP_ONLY, hasUnactivatedUnits: unactivatedFractionalPremiumDurationString.length > 0, unactivatedHoursString: unactivatedFractionalPremiumDurationString, activationDate: currentPeriodEnd, durationText: tmp15Result };
    tmp29Result4 = closure_29(closure_37, obj15);
  }
  items9[3] = tmp29Result4;
  if (tmp27Result) {
    const obj16 = { children: items10 };
    const obj17 = {
      style: tmp.subscriptionHeader,
      onClickManagePremiumGuild() {
          const routes = navigation.getState().routes;
          const found = routes.find((name) => name.name === constants.GUILD_BOOSTING);
          const obj = UserSettingsModalActionCreatorsDefault;
          obj.setSection(constants.GUILD_BOOSTING);
          const obj2 = UserSettingsUtils;
          const obj3 = { destinationPane: constants.GUILD_BOOSTING };
          const result = obj2.trackUserSettingsPaneViewed(obj3);
          if (null != found) {
            navigation.navigate(constants.GUILD_BOOSTING, undefined, { pop: true });
          } else {
            navigation.push(constants.GUILD_BOOSTING);
          }
        },
      subscription: tmp10
    };
    items10 = [closure_29(tmp2(13157), obj17), ];
    const obj18 = { style: tmp.billingInfo, subscription: tmp10 };
    items10[1] = closure_29(PremiumBillingInfoDefault, obj18);
    tmp27Result = closure_30(closure_8, obj16);
  }
  items9[4] = tmp27Result;
  const obj19 = { style: tmp.accountCredit, creditListContainerStyle: tmp.accountCreditList, currentSubscription: tmp10, entitlements: stateFromStores2, hasPremiumGroup: flag };
  flag = result;
  const tmp2Result3 = PremiumAccountCreditDefault;
  if (result == null) {
    flag = false;
  }
  items9[5] = closure_29(tmp2Result3, obj19);
  const obj20 = { style: tmp.featuresTable, variant: "nitro_home", titleOverride: intl.string(navigation(1126).t.QXx2gs), isFractionalOnly: tmp12.fractionalState === constants4.FP_ONLY, isPremiumGroup: result, premiumGroupRole };
  const tmp2Result4 = PremiumFeaturesTableDefault;
  intl = tmp4(1126).intl;
  items9[6] = closure_29(tmp2Result4, obj20);
  items8[1] = closure_30(closure_8, obj11);
  items6[1] = closure_30(closure_9, obj10);
  return closure_30(closure_8, obj7);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumManagePlan.tsx");

export default tmp8;
export const BACK_BUTTON_SIZE = 24;