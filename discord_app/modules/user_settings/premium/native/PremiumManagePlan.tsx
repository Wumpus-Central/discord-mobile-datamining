import mergeGuildAvatar from "mergeGuildAvatar";
import AccessibilityAnnouncer from "AccessibilityAnnouncer";
import Themes from "Themes";
import get_ActivityIndicator from "timestamp";
import { isNoneSubscription } from "createFromServer";
import closure_12 from "mergeGuildAvatar";
import handlePaymentSourceCreateEnd from "handlePaymentSourceCreateEnd";
import addSubscriptionPlan from "addSubscriptionPlan";
import reset from "reset";
import addEntitlement from "addEntitlement";
import getState from "getState";
import updateProduct from "updateProduct";
import ME from "ME";
import { getTableDividerWidth } from "TABLE_ROW_HEIGHT";
import { CustomCheckoutFlow } from "CustomCheckoutFlow";
import GuildFeatures from "GuildFeatures";
import jsxProd from "PressableBase";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_25;
let closure_26;
let closure_27;
let closure_28;
let closure_29;
let closure_30;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function ManagePlanHeader() {
  const tmp = callback5();
  let obj = _require(1480);
  _require = obj.useNavigation();
  obj = { style: tmp.headerContainer, children: null };
  obj = {
    style: tmp.backButtonWrapper,
    onPress() {
      return arr.pop();
    },
    children: null
  };
  obj[2] = callback3(_require(5213).ArrowLargeLeftIcon, { size: "md" });
  const items = [callback3(_require(4783).PressableOpacity, obj), , ];
  const obj1 = { variant: "redesign/heading-18/bold", accessibilityRole: "header", children: null };
  const intl = _require(1236).intl;
  obj1[2] = intl.string(_require(1236).t["1bX7Tx"]);
  items[1] = callback3(_require(4251).Text, obj1);
  items[2] = callback3(closure_8, { style: tmp.backButtonWrapper });
  obj[1] = items;
  return callback4(closure_8, obj);
}
function SubscriptionAndBillingInfo(subscription) {
  let c8;
  let fractionalPremiumInfo;
  let isPremiumGroup;
  let premiumGroupRole;
  let tmp21;
  subscription = subscription.subscription;
  ({ fractionalPremiumInfo, isPremiumGroup, premiumGroupRole } = subscription);
  let analyticsLocations;
  let stateFromStores2;
  let callback;
  let first2;
  let React;
  let stateFromStores3;
  let c7;
  c8 = undefined;
  let tmp2 = stateFromStores2;
  let tmp3 = callback6(analyticsLocations(stateFromStores2[26])("PremiumManagePlan"));
  analyticsLocations = analyticsLocations(stateFromStores2[27])().analyticsLocations;
  const tmp4 = subscription;
  let obj = subscription(stateFromStores2[28]);
  obj = { subscriptionId: subscription.id, renewal: true, applyEntitlements: true, analyticsLocations, analyticsLocation: analyticsLocations(stateFromStores2[29]).PREMIUM_SUBSCRIPTION_DETAILS };
  const first = first2(obj.useFetchSubscriptionInvoicePreview(obj), 1)[0];
  let obj2 = subscription(stateFromStores2[28]);
  obj = { subscriptionId: subscription.id, preventFetch: subscription.status !== constants2.PAST_DUE };
  const first1 = first2(obj2.useGetSubscriptionInvoice(obj), 1)[0];
  let obj4 = subscription(stateFromStores2[30]);
  let items = [updateProduct];
  const stateFromStores = obj4.useStateFromStores(items, () => {
    if (subscription.isOnPlatformMatchingExternalPaymentGateway) {
      if (null != tmp.paymentGatewayPlanId) {
        if ("" !== tmp.paymentGatewayPlanId) {
          return outer1_18.getProduct(tmp.paymentGatewayPlanId);
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
  const items1 = [reset];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj6 = subscription(stateFromStores2[30]);
  const items2 = [handlePaymentSourceCreateEnd];
  stateFromStores2 = obj6.useStateFromStores(items2, () => obj.isSubscriptionFetching);
  let tmp12 = null !== stateFromStores1 && stateFromStores1.hasActiveTrial;
  let tmp4Result = tmp4(tmp2[20]);
  callback = tmp4Result.useNavigation();
  tmp4Result = tmp4(tmp2[31]);
  const isThemeLightResult = tmp4(tmp2[32]).isThemeLight(tmp4Result.useThemeContext().theme);
  let tmp5Result = tmp5(React.useState(null), 2);
  first2 = tmp5Result[0];
  React = tmp5Result[1];
  const tmp4Result1 = tmp4(tmp2[32]);
  const items3 = [getState];
  stateFromStores3 = tmp4(tmp2[30]).useStateFromStores(items3, () => state.getState());
  const items4 = [first2, stateFromStores2, stateFromStores3];
  const effect = React.useEffect(() => {
    let tmp2 = "opening_mobile_web" === first2;
    if (tmp2) {
      tmp2 = stateFromStores3 !== subscription(stateFromStores2[33]).AppStates.ACTIVE;
    }
    if (tmp2) {
      validElement("in_mobile_web");
    }
    let tmp8 = "in_mobile_web" === tmp;
    if (tmp8) {
      tmp8 = stateFromStores3 === subscription(stateFromStores2[33]).AppStates.ACTIVE;
    }
    if (tmp8) {
      const subscriptions = subscription(stateFromStores2[34]).fetchSubscriptions();
      validElement("start_fetching_update");
      const obj = subscription(stateFromStores2[34]);
    }
    if (tmp17) {
      validElement("fetching_update");
    }
    if (!tmp20) {
      validElement(null);
    }
  }, items4);
  const tmp18 = analyticsLocations(tmp2[35])(() => subscription(stateFromStores2[36]).getNewAnalyticsLoadId());
  c7 = tmp18;
  const items5 = [subscription, first2, analyticsLocations, tmp18];
  const memo = React.useMemo(() => {
    if ("start_fetching_update" !== first2) {
      if ("fetching_update" !== tmp) {
        let obj = { returnCtaAsComponent: true, loadId: null, shouldAllowExternalManagement: true, onSuccessCallback: null };
        obj[1] = c7;
        obj[3] = function onSuccessCallback() {
          outer1_31.log("Successfully opened mobile web Nitro Management page");
          let obj = outer1_1(outer1_2[38]);
          obj = { load_id: closure_7, location_stack: null, custom_checkout_flow: null };
          const items = [...closure_1, outer1_1(outer1_2[29]).MOBILE_APP_MANAGE_PREMIUM_SUBSCRIPTION_CTA];
          obj[1] = items;
          obj[2] = outer1_24.MOBILE_WEB_REDIRECT_CHECKOUT;
          obj.track(outer1_19.MOBILE_OPEN_STANDALONE_MANAGE_SUBSCRIPTION_PAGE, obj);
          callback("opening_mobile_web");
        };
        const externalManagementMessage = subscription(stateFromStores2[37]).getExternalManagementMessage(subscription, obj);
        let tmp5 = null;
        if (null != externalManagementMessage) {
          let tmp3 = externalManagementMessage;
          if (!validElement.isValidElement(externalManagementMessage)) {
            obj = { variant: "text-sm/medium", color: "text-default", children: null };
            obj[2] = externalManagementMessage;
            tmp3 = outer1_29(subscription(stateFromStores2[23]).Text, obj);
          }
          tmp5 = tmp3;
        }
        return tmp5;
      }
    }
    return outer1_29(outer1_10, { size: "small" });
  }, items5);
  tmp5Result = tmp5(React.useState(false), 2);
  [tmp21, c8] = tmp5Result;
  if (null == first) {
    return null;
  } else {
    let tmpResult = tmp(tmp2[39]);
    const planIdFromInvoice = tmpResult.getPlanIdFromInvoice(subscription, first);
    tmpResult = tmp(tmp2[39]);
    const statusFromInvoice = tmpResult.getStatusFromInvoice(subscription, first);
    tmp(tmp2[40])(null != table[planIdFromInvoice], "missing subscription planInfo");
    let obj1 = { subscription: null, planId: null, price: null, includePremiumGuilds: true };
    obj1[0] = subscription;
    obj1[1] = planIdFromInvoice;
    let formatRateResult = null;
    if (null != stateFromStores) {
      formatRateResult = tmp4(tmp2[41]).formatRate(stateFromStores.priceString, tmp56.interval, tmp56.intervalCount);
      const tmp4Result3 = tmp4(tmp2[41]);
    }
    obj1[2] = formatRateResult;
    const planDescription = tmp(tmp2[39]).getPlanDescription(obj1);
    if (statusFromInvoice !== tmp7.CANCELED) {
      if (statusFromInvoice !== tmp7.PAUSE_PENDING) {
        if (statusFromInvoice !== tmp7.PAST_DUE) {
          if (null != subscription.renewalMutations) {
            const _Date = Date;
            const date = new Date(subscription.currentPeriodEnd);
            let result = date;
            if (!subscription.isPurchasedExternally) {
              result = tmp4(tmp2[39]).extendDateWithUnconsumedFractionalPremium(date, fractionalPremiumInfo.unactivatedUnits);
              const tmp4Result4 = tmp4(tmp2[39]);
            }
            obj2 = { style: null, children: null };
            obj2[0] = tmp3.container;
            const obj3 = { style: null, children: null };
            obj3[0] = tmp3.mutationWarningContainer;
            const items6 = [callback3(tmp4(tmp2[51]).AnnouncementsWarningIcon, { size: "md" }), ];
            obj4 = { style: null, variant: "heading-sm/medium", color: "text-default", children: null };
            obj4[0] = tmp3.mutationText;
            const intl6 = tmp4(tmp2[24]).intl;
            if (!subscription.hasExternalPlanChange) {
              if (!isNoneSubscription(subscription.renewalMutations.planId)) {
                let displayName = tmp(tmp2[39]).getDisplayName(subscription.renewalMutations.planId);
                const tmpResult2 = tmp(tmp2[39]);
              }
              obj5 = { planName: null, date: null };
              obj5[0] = displayName;
              obj5[1] = result;
              obj4[3] = intl6.format(tmp43, obj5);
              items6[1] = tmp42(tmp4(tmp2[23]).Text, obj4);
              obj3[1] = items6;
              const items7 = [tmp40(tmp41, obj3), , ];
              obj6 = { premiumType: null, hideButton: true, isPremiumGroup: null, premiumGroupRole: null };
              obj6[0] = closure_27.TIER_2;
              obj6[2] = isPremiumGroup;
              obj6[3] = premiumGroupRole;
              items7[1] = tmp42(tmp(tmp2[52]), obj6);
              const obj7 = { style: null, children: null };
              obj7[0] = tmp3.extraInfoContainer;
              const obj8 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
              const intl7 = tmp4(tmp2[24]).intl;
              obj8[3] = intl7.string(tmp4(tmp2[24]).t.YCrcPL);
              const items8 = [tmp42(tmp4(tmp2[23]).Text, obj8), ];
              const obj9 = { style: null, children: null };
              obj9[0] = tmp3.extraInfoTextContainer;
              const obj10 = { variant: "text-sm/medium", color: "text-default", children: null };
              const intl8 = tmp4(tmp2[24]).intl;
              obj10[2] = intl8.string(tmp4(tmp2[24]).t["MTG+3O"]);
              const items9 = [tmp42(tmp4(tmp2[23]).Text, obj10), , ];
              const obj11 = { variant: "text-sm/medium", color: "text-default", children: null };
              obj11[2] = tmp4(tmp2[49]).getBillingInformationStringNative(subscription, first, first1);
              items9[1] = tmp42(tmp4(tmp2[23]).Text, obj11);
              items9[2] = null != memo && memo;
              obj9[1] = items9;
              items8[1] = tmp40(tmp41, obj9);
              obj7[1] = items8;
              items7[2] = tmp40(tmp41, obj7);
              obj2[1] = items7;
              return tmp40(tmp41, obj2);
            }
            displayName = tmp4(tmp2[39]).getExternalPlanDisplayName(subscription.renewalMutations);
            const tmp4Result6 = tmp4(tmp2[39]);
          } else {
            const obj12 = { style: null, children: null };
            obj12[0] = tmp3.container;
            const obj13 = { style: null, children: null };
            obj13[0] = tmp3.pillAndCardContainer;
            if (tmp12) {
              const obj14 = { style: null, children: null };
              obj14[0] = tmp3.pillPosition;
              obj14[1] = callback3(tmp4(tmp2[53]).PremiumReferralTrialPill, {});
              tmp12 = callback3(tmp59, obj14);
            }
            const items10 = [tmp12, ];
            const obj15 = { premiumType: null, forFractionalPremium: null, hideButton: true, isPremiumGroup: null, premiumGroupRole: null };
            obj15[0] = closure_27.TIER_2;
            obj15[1] = fractionalPremiumInfo.fractionalState !== constants3.NONE;
            obj15[3] = isPremiumGroup;
            obj15[4] = premiumGroupRole;
            items10[1] = callback3(tmp(tmp2[52]), obj15);
            obj13[1] = items10;
            const items11 = [closure_30(c8, obj13), ];
            const obj16 = { style: null, children: null };
            obj16[0] = tmp3.extraInfoContainer;
            const obj17 = { variant: "eyebrow", color: "text-default", children: null };
            const intl = tmp4(tmp2[24]).intl;
            obj17[2] = intl.string(tmp4(tmp2[24]).t.YCrcPL);
            const items12 = [callback3(tmp4(tmp2[23]).Text, obj17), , , ];
            const obj18 = { style: null, children: null };
            obj18[0] = tmp3.extraInfoTextContainer;
            if (null != memo) {
              const intl3 = tmp4(tmp2[24]).intl;
              let stringResult = intl3.string(tmp4(tmp2[24]).t["MTG+3O"]);
            } else {
              const intl2 = tmp4(tmp2[24]).intl;
              const obj19 = { onSwitchPlans: null, onCancel: null };
              obj19[0] = function onSwitchPlans() {
                return subscription(stateFromStores2[48]).handleManageSubscription(subscription, mergeGuildAvatar, analyticsLocations);
              };
              obj19[1] = function onCancel() {
                return subscription(stateFromStores2[48]).onCancelClick(subscription, analyticsLocations);
              };
              stringResult = intl2.format(tmp4(tmp2[24]).t.fvk30i, obj19);
            }
            const obj20 = { variant: "text-sm/medium", color: "text-default", children: null };
            obj20[2] = stringResult;
            const items13 = [callback3(tmp4(tmp2[23]).Text, obj20), , ];
            const obj21 = { subscription: null };
            obj21[0] = subscription;
            items13[1] = callback3(tmp4(tmp2[50]).GoogleManagementLink, obj21);
            items13[2] = null != memo && memo;
            obj18[1] = items13;
            items12[1] = closure_30(c8, obj18);
            const obj22 = { variant: "eyebrow", color: "text-default", children: null };
            const intl4 = tmp4(tmp2[24]).intl;
            obj22[2] = intl4.string(tmp4(tmp2[24]).t.Sb6wI1);
            items12[2] = callback3(tmp4(tmp2[23]).Text, obj22);
            const obj23 = { style: null, children: null };
            const items14 = [tmp3.extraInfoTextContainer, { gap: 4 }];
            obj23[0] = items14;
            const obj24 = { variant: "text-md/semibold", color: "text-default", children: null };
            const intl5 = tmp4(tmp2[24]).intl;
            obj24[2] = intl5.string(tmp4(tmp2[24]).t.KXQjfc);
            const items15 = [callback3(tmp4(tmp2[23]).Text, obj24), ];
            const obj25 = { variant: "text-sm/medium", color: "text-default", children: null };
            const tmp4Result7 = tmp4(tmp2[49]);
            obj25[2] = tmp4Result7.getBillingInformationStringNative(subscription, first, first1, false, fractionalPremiumInfo);
            items15[1] = callback3(tmp4(tmp2[23]).Text, obj25);
            obj23[1] = items15;
            items12[3] = closure_30(c8, obj23);
            obj16[1] = items12;
            items11[1] = closure_30(c8, obj16);
            obj12[1] = items11;
            return closure_30(c8, obj12);
          }
        }
      }
    }
    const obj26 = { style: null, children: null };
    obj26[0] = tmp3.container;
    const obj27 = { style: null, children: null };
    obj27[0] = tmp3.errorHeader;
    const obj28 = { source: null, style: null, children: null };
    obj28[0] = tmp(isThemeLightResult ? tmp2[42] : tmp2[43]);
    obj28[1] = tmp3.headerBackground;
    const obj29 = { style: null, children: null };
    obj29[0] = tmp3.logoContainer;
    const obj30 = { source: null, style: null };
    obj30[0] = tmp(tmp2[44]);
    obj30[1] = tmp3.wumpusImg;
    const items16 = [callback3(stateFromStores3, obj30), ];
    const obj31 = { source: null, style: null };
    obj31[0] = tmp(isThemeLightResult ? tmp2[45] : tmp2[46]);
    obj31[1] = tmp3.logoStyle;
    items16[1] = callback3(stateFromStores3, obj31);
    obj29[1] = items16;
    const items17 = [closure_30(c8, obj29), ];
    const obj32 = { variant: "heading-sm/medium", color: "text-default", children: null };
    obj32[2] = planDescription;
    items17[1] = callback3(tmp4(tmp2[23]).Text, obj32);
    obj28[2] = items17;
    const items18 = [closure_30(c7, obj28), ];
    let isOnPlatformMatchingExternalPaymentGateway = subscription.isOnPlatformMatchingExternalPaymentGateway;
    if (isOnPlatformMatchingExternalPaymentGateway) {
      const obj33 = { style: null, children: null };
      obj33[0] = tmp3.errorHeaderPrimaryButton;
      const obj34 = { size: "sm", variant: "secondary", text: null, onPress: null, loading: null, disabled: null };
      const intl9 = tmp4(tmp2[24]).intl;
      obj34[2] = intl9.string(tmp4(tmp2[24]).t.lTCb0c);
      obj34[3] = callback(function*() {
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
                outer1_8(true);
                let c3 = 1;
                let obj1 = outer1_0(outer1_2[48]);
                c1 = 2;
                c4 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = obj1.onResubscribeClick(outer1_0);
                return obj1;
              }
            } else if (1 === tmp7) {
              c3 = 0;
              callback(false);
              throw closure_2;
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
          } catch (tmp24) {
            closure_2 = tmp24;
            if (tmp4 === c3) {
              c4 = tmp2;
              throw tmp24;
            } else {
              c1 = tmp;
            }
          }
        }
      });
      obj34[4] = tmp21;
      obj34[5] = tmp21;
      obj33[1] = tmp50(tmp4(tmp2[47]).Button, obj34);
      isOnPlatformMatchingExternalPaymentGateway = tmp50(tmp48, obj33);
    }
    items18[1] = isOnPlatformMatchingExternalPaymentGateway;
    obj27[1] = items18;
    const items19 = [closure_30(c8, obj27), ];
    const obj35 = { style: null, children: null };
    obj35[0] = tmp3.extraInfoContainer;
    const obj36 = { variant: "eyebrow", color: "text-default", accessibilityRole: "header", children: null };
    const intl10 = tmp4(tmp2[24]).intl;
    obj36[3] = intl10.string(tmp4(tmp2[24]).t.YCrcPL);
    const items20 = [callback3(tmp4(tmp2[23]).Text, obj36), ];
    const obj37 = { style: null, children: null };
    obj37[0] = tmp3.extraInfoTextContainer;
    const obj38 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl11 = tmp4(tmp2[24]).intl;
    obj38[2] = intl11.string(tmp4(tmp2[24]).t["MTG+3O"]);
    const items21 = [callback3(tmp4(tmp2[23]).Text, obj38), , , ];
    const obj39 = { variant: "text-sm/medium", color: "text-default", children: null };
    const tmp49 = c7;
    const tmp51 = stateFromStores3;
    const tmpResult1 = tmp(tmp2[39]);
    obj39[2] = tmp4(tmp2[49]).getBillingInformationStringNative(subscription, first, first1);
    items21[1] = callback3(tmp4(tmp2[23]).Text, obj39);
    const obj40 = { subscription: null };
    obj40[0] = subscription;
    items21[2] = callback3(tmp4(tmp2[50]).GoogleManagementLink, obj40);
    items21[3] = null != memo && memo;
    obj37[1] = items21;
    items20[1] = closure_30(c8, obj37);
    obj35[1] = items20;
    items19[1] = closure_30(c8, obj35);
    obj26[1] = items19;
    return closure_30(c8, obj26);
  }
  const tmp4Result2 = tmp4(tmp2[30]);
}
function FractionalPremiumCredits(durationText) {
  let activationDate;
  let fractionalPremiumInfo;
  let hasUnactivatedUnits;
  let showPremiumFeaturesCard;
  let unactivatedHoursString;
  ({ fractionalPremiumInfo, showPremiumFeaturesCard, hasUnactivatedUnits, unactivatedHoursString, activationDate } = durationText);
  const tmp3 = callback6(importDefault(1348)("FractionalPremiumCredits"));
  let obj = { style: tmp3.container, children: null };
  if (showPremiumFeaturesCard) {
    obj = { premiumType: null, forFractionalPremium: true, hideButton: true };
    obj[0] = closure_27.TIER_2;
    showPremiumFeaturesCard = callback3(tmp(8193), obj);
  }
  const items = [showPremiumFeaturesCard, ];
  obj = { style: tmp3.extraInfoContainer, children: null };
  const obj1 = { variant: "eyebrow", color: "text-default", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[2] = intl.string(require(1236) /* getSystemLocale */.t.Obre8v);
  const items1 = [callback3(require(4251) /* Text */.Text, obj1), , ];
  const obj2 = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  const obj3 = { helpCenterLink: null };
  let tmpResult = tmp(1945);
  obj3[0] = tmpResult.getArticleURL(constants.FRACTIONAL_PREMIUM_ABOUT);
  obj2[2] = intl2.format(require(1236) /* getSystemLocale */.t.AYGoBn, obj3);
  items1[1] = callback3(require(4251) /* Text */.Text, obj2);
  const obj4 = { style: tmp3.fpRowStart, start: true, end: false, variant: "primary", children: null };
  const obj5 = { style: tmp3.fpRowIcon, children: null };
  const obj6 = { style: null, start: null, end: null, colors: null, children: null };
  const obj7 = { padding: 6, borderRadius: null };
  tmpResult = tmp(4677);
  obj7[1] = importDefault(712).radii.sm;
  obj6[0] = obj7;
  obj6[1] = { x: 0, y: 0 };
  obj6[2] = { x: 0, y: 1 };
  const items2 = [importDefault(712).unsafe_rawColors.GUILD_BOOSTING_BLUE, importDefault(712).unsafe_rawColors.GUILD_BOOSTING_PURPLE];
  obj6[3] = items2;
  const obj8 = { children: null };
  const obj9 = { color: null, source: null, size: null };
  obj9[0] = importDefault(712).unsafe_rawColors.WHITE;
  obj9[1] = importDefault(7614);
  obj9[2] = require(1297) /* Button */.IconSizes.LARGE;
  obj8[0] = callback3(require(1297) /* Button */.Icon, obj9);
  obj6[4] = callback3(closure_8, obj8);
  obj5[1] = callback3(tmpResult, obj6);
  const items3 = [callback3(closure_8, obj5), ];
  const obj10 = { style: tmp3.fpRowContent, children: null };
  const obj11 = { variant: "text-sm/semibold", style: tmp3.fpUnitsTitle, children: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj11[2] = intl3.string(require(1236) /* getSystemLocale */.t.DFMPWS);
  const items4 = [callback3(require(4251) /* Text */.Text, obj11), ];
  if (hasUnactivatedUnits) {
    if (fractionalPremiumInfo.fractionalState === constants3.NONE) {
      const obj12 = { variant: "text-sm/medium", children: null };
      obj12[1] = unactivatedHoursString;
      let tmp8Result = tmp8(tmp9(4251).Text, obj12);
    }
    items4[1] = tmp8Result;
    obj10[1] = items4;
    items3[1] = tmp4(tmp5, obj10);
    obj4[4] = items3;
    const items5 = [tmp4(require(5288) /* PressableCard */.Card, obj4), , ];
    const obj13 = { style: null, children: null };
    obj13[0] = tmp3.dividerContainer;
    const obj14 = { style: null };
    obj14[0] = tmp3.divider;
    obj13[1] = tmp8(tmp5, obj14);
    items5[1] = tmp8(tmp5, obj13);
    const obj15 = { start: false, end: true, style: null, variant: "secondary", children: null };
    obj15[2] = tmp3.fpRowEnd;
    const obj16 = { style: null, children: null };
    obj16[0] = tmp3.fpRowContent;
    if (hasUnactivatedUnits) {
      if (fractionalPremiumInfo.fractionalState === constants3.NONE) {
        const obj17 = { variant: "text-md/semibold", children: null };
        const intl6 = tmp9(1236).intl;
        obj17[1] = intl6.string(tmp9(1236).t["hT6i/0"]);
        const items6 = [tmp8(tmp9(4251).Text, obj17), ];
        tmp8Result = undefined !== activationDate;
        if (tmp8Result) {
          const obj18 = { variant: "text-xs/medium", color: "text-subtle", children: null };
          const intl7 = tmp9(1236).intl;
          const obj19 = { activateDate: null };
          obj19[0] = activationDate;
          obj18[2] = intl7.format(tmp9(1236).t["0Vwb/l"], obj19);
          tmp8Result = tmp8(tmp9(4251).Text, obj18);
        }
        const obj20 = { children: null };
        items6[1] = tmp8Result;
        obj20[0] = items6;
        let tmp8Result2 = tmp4(tmp5, obj20);
      }
      const items7 = [tmp8Result2, ];
      if (hasUnactivatedUnits) {
        if (fractionalPremiumInfo.fractionalState === constants3.NONE) {
          const obj21 = { style: null, children: null };
          obj21[0] = tmp3.fpUnactivatedHoursPill;
          const obj22 = { variant: "text-sm/medium", style: null, children: null };
          obj22[1] = tmp3.fpTimeRemainingText;
          obj22[2] = unactivatedHoursString;
          obj21[1] = tmp8(tmp9(4251).Text, obj22);
          let tmp8Result1 = tmp8(tmp5, obj21);
        }
        const obj23 = { children: null };
        items7[1] = tmp8Result1;
        obj16[1] = items7;
        obj15[4] = tmp4(tmp5, obj16);
        items5[2] = tmp8(tmp13, obj15);
        obj23[0] = items5;
        items1[2] = tmp4(tmp5, obj23);
        obj[1] = items1;
        items[1] = tmp4(tmp5, obj);
        obj[1] = items;
        return tmp4(tmp5, obj);
      }
      const obj24 = { style: null, children: null };
      obj24[0] = tmp3.fpTimeRemainingPill;
      const obj25 = { variant: "text-sm/medium", style: null, children: null };
      obj25[1] = tmp3.fpTimeRemainingText;
      obj25[2] = durationText.durationText;
      obj24[1] = tmp8(tmp9(4251).Text, obj25);
      tmp8Result1 = tmp8(tmp5, obj24);
    }
    const obj26 = { variant: "text-md/semibold", style: null, children: null };
    obj26[1] = tmp3.fpTimeRemaining;
    const intl5 = tmp9(1236).intl;
    obj26[2] = intl5.string(tmp9(1236).t["3G0CTC"]);
    tmp8Result2 = tmp8(tmp9(4251).Text, obj26);
  }
  const obj27 = { variant: "text-sm/medium", style: tmp3.fpUnitsStatusText, children: null };
  const intl4 = tmp9(1236).intl;
  obj27[2] = intl4.string(require(1236) /* getSystemLocale */.t["B66Z+f"]);
  tmp8Result = tmp8(tmp9(4251).Text, obj27);
}
({ Image: closure_6, ImageBackground: error, View: metroImportAll, ScrollView: c9, ActivityIndicator: c10 } = get_ActivityIndicator);
({ AnalyticEvents: closure_19, HelpdeskArticles: closure_20, SubscriptionStatusTypes: closure_21, UserSettingsSections: closure_22 } = ME);
({ FractionalPremiumStates: closure_25, PREMIUM_SUBSCRIPTION_APPLICATION: closure_26, PremiumTypes: closure_27, SubscriptionPlanInfo: closure_28 } = GuildFeatures);
({ jsx: closure_29, jsxs: closure_30 } = jsxProd);
let closure_31 = new require("get ActivityIndicator")("PremiumManagePlan");
createCacheKey = { background: null, container: null, contentContainer: null, topBlur: null, accountCredit: null, accountCreditList: null, featuresTable: null, subscriptionHeader: null, billingInfo: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, height: "100%" };
createCacheKey[0] = createCacheKey;
const tmp6 = new require("get ActivityIndicator")("PremiumManagePlan");
createCacheKey[1] = { display: "flex", paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey[2] = { marginTop: 24, display: "flex", gap: 12 };
createCacheKey[3] = { position: "absolute", zIndex: 5, top: 0, left: 0, right: 0 };
createCacheKey[4] = { paddingHorizontal: 16 };
let obj1 = { display: "flex", paddingHorizontal: require("Themes").modules.mobile.TABLE_ROW_PADDING };
createCacheKey[5] = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[6] = { paddingTop: 16 };
createCacheKey[7] = { marginTop: 20, width: "100%" };
createCacheKey[8] = { marginTop: 20, width: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between" }, backButtonWrapper: null };
let obj2 = { borderRadius: require("Themes").radii.sm, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
obj3[1] = { width: 24, height: 24, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "center" };
let closure_33 = createCacheKey.createStyles(obj3);
let closure_35 = createCacheKey.createStyles((arg0) => {
  const tmp = getTableDividerWidth(arg0);
  let obj = { container: { display: "flex", flexDirection: "column", gap: 12 }, errorHeader: null, headerBackground: null, logoContainer: null, wumpusImg: null, logoStyle: null, errorHeaderPrimaryButton: null, extraInfoContainer: null, extraInfoTextContainer: null, mutationWarningContainer: null, mutationText: null, fpTimeRemaining: null, fpTimeRemainingPill: null, fpUnactivatedHoursPill: null, fpTimeRemainingText: null, fpUnitsTitle: null, fpUnitsStatusText: null, fpRowStart: null, fpRowIcon: null, fpRowContent: null, fpRowEnd: null, dividerContainer: null, divider: null, pillAndCardContainer: null, pillPosition: null };
  obj = { backgroundColor: importDefault(712).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(712).radii.lg, overflow: "hidden" };
  obj[1] = obj;
  obj[2] = { padding: 16 };
  obj[3] = { flexDirection: "row", alignItems: "center", marginBottom: 12 };
  obj[4] = { marginRight: 10, height: 36, width: 51 };
  obj[5] = { height: 32, width: 78 };
  obj[6] = { marginBottom: 16, marginHorizontal: 16 };
  obj[7] = { paddingTop: 16, paddingHorizontal: 16, display: "flex", gap: 8 };
  obj = { padding: 16, borderRadius: importDefault(712).radii.sm, backgroundColor: importDefault(712).colors.BACKGROUND_SURFACE_HIGH, display: "flex", gap: 18 };
  obj[8] = obj;
  obj[9] = { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 16, borderRadius: importDefault(712).radii.lg, backgroundColor: importDefault(712).colors.BACKGROUND_SURFACE_HIGH };
  obj[10] = { flex: 1 };
  const obj1 = { display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 8, padding: 16, borderRadius: importDefault(712).radii.lg, backgroundColor: importDefault(712).colors.BACKGROUND_SURFACE_HIGH };
  obj[11] = { color: importDefault(712).colors.TEXT_BRAND };
  const obj2 = { color: importDefault(712).colors.TEXT_BRAND };
  obj[12] = { borderRadius: importDefault(712).radii.lg, backgroundColor: importDefault(712).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 };
  const obj3 = { borderRadius: importDefault(712).radii.lg, backgroundColor: importDefault(712).colors.CONTROL_PRIMARY_BACKGROUND_ACTIVE, paddingVertical: 4, paddingHorizontal: 8 };
  obj[13] = { borderRadius: importDefault(712).radii.lg, backgroundColor: importDefault(712).colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 };
  const obj4 = { borderRadius: importDefault(712).radii.lg, backgroundColor: importDefault(712).colors.BACKGROUND_MOD_STRONG, paddingVertical: 4, paddingHorizontal: 8 };
  obj[14] = { color: importDefault(712).colors.WHITE };
  const obj5 = { color: importDefault(712).colors.WHITE };
  obj[15] = { color: importDefault(712).colors.MOBILE_TEXT_HEADING_PRIMARY };
  const obj6 = { color: importDefault(712).colors.MOBILE_TEXT_HEADING_PRIMARY };
  obj[16] = { color: importDefault(712).colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 };
  const obj7 = { color: importDefault(712).colors.TEXT_BRAND, marginStart: 18, flexShrink: 1 };
  obj[17] = { padding: importDefault(712).modules.mobile.TABLE_ROW_PADDING, minHeight: importDefault(712).modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: importDefault(712).colors.BACKGROUND_SURFACE_HIGH };
  const obj8 = { padding: importDefault(712).modules.mobile.TABLE_ROW_PADDING, minHeight: importDefault(712).modules.mobile.TABLE_ROW_HEIGHT, flexDirection: "row", alignItems: "center", backgroundColor: importDefault(712).colors.BACKGROUND_SURFACE_HIGH };
  obj[18] = { marginEnd: importDefault(712).modules.mobile.TABLE_ROW_PADDING };
  obj[19] = { flexShrink: 1, flexGrow: 1, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  const obj9 = { marginEnd: importDefault(712).modules.mobile.TABLE_ROW_PADDING };
  obj[20] = { backgroundColor: importDefault(712).colors.BACKGROUND_BASE_LOWEST };
  let prop;
  if (!arg0) {
    prop = tmp2(712).colors.TABLEROW_BACKGROUND_DEFAULT;
  }
  obj[21] = { backgroundColor: prop, height: tmp };
  const obj11 = { height: tmp, backgroundColor: null };
  if (arg0) {
    let DIVIDER_BACKGROUND = tmp2(712).colors.BORDER_SUBTLE;
  } else {
    DIVIDER_BACKGROUND = require(5096) /* result */.DIVIDER_BACKGROUND;
  }
  obj11[1] = DIVIDER_BACKGROUND;
  obj[22] = obj11;
  obj[23] = { position: "relative" };
  obj[24] = { position: "absolute", top: -18, left: 5, zIndex: 99 };
  return obj;
});
let obj4 = { width: 24, height: 24, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "center" };
let result = require("noop").fileFinishedImporting("modules/user_settings/premium/native/PremiumManagePlan.tsx");

export default function PremiumManagePlan() {
  let tmp10;
  let tmp11;
  const tmp = createCacheKey();
  const rect = importDefault(1581)();
  const top = rect.top;
  let obj = navigation(7549);
  const youBarSettingsOutsideSafeAreaTop = obj.useYouBarSettingsOutsideSafeAreaTop();
  let obj1 = navigation(1480);
  navigation = obj1.useNavigation();
  let obj2 = React;
  let items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  let obj3 = navigation(589);
  const items1 = [addSubscriptionPlan];
  const stateFromStores = obj3.useStateFromStores(items1, () => addSubscriptionPlan.isLoadedForPremiumSKUs());
  let obj4 = navigation(589);
  const items2 = [reset];
  [tmp10, tmp11] = callback2(obj4.useStateFromStoresArray(items2, () => {
    const items = [reset.getPremiumTypeSubscription(), reset.hasFetchedSubscriptions()];
    return items;
  }), 2);
  let obj5 = navigation(589);
  const items3 = [closure_12];
  const stateFromStores1 = obj5.useStateFromStores(items3, () => currentUser.getCurrentUser());
  const tmp12 = importDefault(6757)({ forceFetch: true });
  importDefault(4682)(() => {
    let isSubscriptionFetching = reset.hasFetchedSubscriptions();
    if (!isSubscriptionFetching) {
      isSubscriptionFetching = obj.isSubscriptionFetching;
    }
    if (!isSubscriptionFetching) {
      obj = navigation(4575);
      const subscriptions = obj.fetchSubscriptions();
    }
    if (!tmp5) {
      const premiumSubscriptionPlans = navigation(5757).fetchPremiumSubscriptionPlans();
      const obj3 = navigation(5757);
    }
  });
  let obj7 = navigation(7964);
  let isInReverseTrial = obj7.useIsInReverseTrial();
  const tmp9 = callback2(obj4.useStateFromStoresArray(items2, () => {
    const items = [reset.getPremiumTypeSubscription(), reset.hasFetchedSubscriptions()];
    return items;
  }), 2);
  const tmp15 = importDefault(12604);
  let obj8 = navigation(3901);
  const unactivatedFractionalPremiumDurationString = obj8.getUnactivatedFractionalPremiumDurationString(tmp12);
  if (null !== tmp10) {
    if (!tmp10.isPurchasedExternally) {
      const currentPeriodEnd = tmp10.currentPeriodEnd;
    }
  }
  let tmp29Result1 = tmp12.fractionalState !== constants3.NONE;
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
  let tmp4Result = tmp4(3967);
  importDefault = obj2.useRef(false);
  const callback = obj2.useCallback((nativeEvent) => {
    let obj = navigation(outer1_2[66]);
    obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: "your_nitro_plan", hasTrackedScrolledToBottom: closure_1 };
    return obj.trackIfScrolledToBottom(obj);
  }, []);
  tmp4Result = tmp4(589);
  const items4 = [addEntitlement];
  let tmp23 = null != tmp10;
  const stateFromStores2 = tmp4Result.useStateFromStores(items4, () => {
    forApplication = forApplication.getForApplication(closure_26);
    if (forApplication == null) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], tmp4(1414).areSetsEqual);
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
  let tmp2Result = tmp2(4655);
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
    obj2 = { subscription: null, fractionalPremiumInfo: null, isPremiumGroup: null, premiumGroupRole: null };
    obj2[0] = tmp10;
    obj2[1] = tmp12;
    obj2[2] = result;
    obj2[3] = premiumGroupRole;
    tmp29Result = tmp29(SubscriptionAndBillingInfo, obj2);
  }
  const items9 = [tmp29Result, , , , , , ];
  if (isInReverseTrial) {
    obj3 = { premiumType: null, forFractionalPremium: true, hideButton: true };
    obj3[0] = closure_27.TIER_2;
    isInReverseTrial = tmp29(tmp2(8193), obj3);
  }
  items9[1] = isInReverseTrial;
  tmp29Result = result;
  if (result) {
    tmp29Result = !tmp23;
  }
  if (tmp29Result) {
    obj4 = { premiumType: null, hideButton: true, hidePrice: true, isPremiumGroup: true, premiumGroupRole: null };
    obj4[0] = closure_27.TIER_2;
    obj4[4] = premiumGroupRole;
    tmp29Result = tmp29(tmp2(8193), obj4);
  }
  items9[2] = tmp29Result;
  if (tmp29Result1) {
    obj5 = { fractionalPremiumInfo: null, showPremiumFeaturesCard: null, hasUnactivatedUnits: null, unactivatedHoursString: null, activationDate: null, durationText: null };
    obj5[0] = tmp12;
    obj5[1] = tmp12.fractionalState === tmp18.FP_ONLY;
    obj5[2] = tmp17;
    obj5[3] = unactivatedFractionalPremiumDurationString;
    obj5[4] = currentPeriodEnd;
    obj5[5] = tmp15Result;
    tmp29Result1 = tmp29(FractionalPremiumCredits, obj5);
  }
  items9[3] = tmp29Result1;
  if (tmp27Result) {
    const obj6 = { children: null };
    obj7 = { style: null, onClickManagePremiumGuild: null, subscription: null };
    obj7[0] = tmp.subscriptionHeader;
    obj7[1] = function onClickManagePremiumGuild() {
      let arr = navigation;
      const routes = navigation.getState().routes;
      const found = routes.find((name) => name.name === constants.GUILD_BOOSTING);
      let obj = callback(outer1_2[69]);
      obj.setSection(outer1_22.GUILD_BOOSTING);
      obj = { destinationPane: outer1_22.GUILD_BOOSTING };
      const result = navigation(outer1_2[70]).trackUserSettingsPaneViewed(obj);
      if (null != found) {
        arr.navigate(found);
      } else {
        arr = arr.push(outer1_22.GUILD_BOOSTING);
      }
    };
    obj7[2] = tmp10;
    const items10 = [tmp29(tmp2(7505), obj7), ];
    obj8 = { style: null, subscription: null };
    obj8[0] = tmp.billingInfo;
    obj8[1] = tmp10;
    items10[1] = tmp29(tmp2(7545), obj8);
    obj6[0] = items10;
    tmp27Result = tmp27(tmp28, obj6);
  }
  items9[4] = tmp27Result;
  const obj9 = { style: tmp.accountCredit, creditListContainerStyle: tmp.accountCreditList, currentSubscription: tmp10, entitlements: stateFromStores2, hasPremiumGroup: null };
  let flag = result;
  tmp2Result = tmp2(7547);
  if (result == null) {
    flag = false;
  }
  obj9[4] = flag;
  items9[5] = closure_29(tmp2Result, obj9);
  const obj10 = { style: tmp.featuresTable, variant: "nitro_home", titleOverride: null, isFractionalOnly: null, isPremiumGroup: null, premiumGroupRole: null };
  tmp15Result = importDefault(12604)(tmp12.endsAt, navigation(12604).CountDownMessageTypes.SHORT_TIME);
  const tmp31 = closure_9;
  const intl = tmp4(1236).intl;
  obj10[2] = intl.string(navigation(1236).t.QXx2gs);
  obj10[3] = tmp12.fractionalState === constants3.FP_ONLY;
  obj10[4] = result;
  obj10[5] = premiumGroupRole;
  items9[6] = closure_29(importDefault(12619), obj10);
  obj1[1] = items9;
  items8[1] = closure_30(closure_8, obj1);
  obj[4] = items8;
  items6[1] = closure_30(tmp31, obj);
  obj[1] = items6;
  return closure_30(closure_8, obj);
};
export const BACK_BUTTON_SIZE = 24;