// discord_app/components_native/premium/PremiumModal.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import intl6 from "../../intl/index.native.tsx";
import NavigatorHeader from "../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator2 from "../../design/components/Navigator/native/Navigator.native.tsx";
import useAnalyticsLocations from "../../modules/app_analytics/useAnalyticsLocations.tsx";
import UserSettingsPremiumDefault from "../../modules/user_settings/premium/native/UserSettingsPremium.tsx";
import PremiumPlanSelectDefault from "../../modules/premium/native/PremiumPlanSelect.tsx";
import UserSettingsPremiumGiftingDefault from "../../modules/user_settings/premium/native/UserSettingsPremiumGifting.tsx";
import react from "../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

function getScreens(arg0) {
  let activitySessionId;
  let analyticsLocation;
  let applicationId;
  let channelId;
  let closure_10;
  let closure_11;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let guildId;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let isBoostPurchaseFlow;
  let obj3;
  let obj6;
  let obj9;
  let onClose;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let planId;
  let predicate;
  let premiumFeatureCardOrder;
  let recipientUserId;
  let showCurrentPlan;
  ({ analyticsLocation: require, onClose } = arg0);
  ({
    onBack: dependencyMap,
    giftRecipientId: UserSettingsSections,
    planId: jsx,
    applicationId: getScreens,
    activitySessionId: closure_6,
    channelId: closure_7,
    guildId: closure_8,
    premiumFeatureCardOrder: closure_9,
    onPaymentSuccess: closure_10,
    onPaymentDismiss: closure_11,
  } = arg0);
  let obj = {};
  ({ predicate, showCurrentPlan, isBoostPurchaseFlow } = arg0);
  const PREMIUM = UserSettingsSections.PREMIUM;
  const obj2 = {
    title: intl.string(intl6.t.lpNrPu),
    headerLeft: obj3.getHeaderCloseButton(onClose),
    render() {
      return jsx(UserSettingsPremiumDefault, {
        applicationId: getScreens,
        onClose,
        activitySessionId,
        channelId,
        guildId,
        premiumFeatureCardOrder,
        onPaymentSuccess,
        onPaymentDismiss,
        isFullScreenPresentation: true,
      });
    },
  };
  intl = intl6.intl;
  obj[PREMIUM] = obj2;
  obj3 = NavigatorHeader;
  const PREMIUM_MANAGE_PLAN = UserSettingsSections.PREMIUM_MANAGE_PLAN;
  const obj4 = {
    title: intl2.string(intl6.t["8jmdON"]),
    render() {
      return jsx(onClose(dependencyMap[6]), {});
    },
  };
  intl2 = intl6.intl;
  obj[PREMIUM_MANAGE_PLAN] = obj4;
  const GUILD_BOOSTING = UserSettingsSections.GUILD_BOOSTING;
  const obj5 = {
    title: intl3.string(intl6.t["+CbP2v"]),
    headerLeft: obj6.getHeaderCloseButton(onClose),
    render() {
      return jsx(onClose(dependencyMap[7]), {});
    },
  };
  intl3 = intl6.intl;
  obj[GUILD_BOOSTING] = obj5;
  obj6 = NavigatorHeader;
  const PREMIUM_PLAN_SELECT = UserSettingsSections.PREMIUM_PLAN_SELECT;
  const obj7 = {
    title: intl4.string(intl6.t.u95Dt4),
    headerLeft(canGoBack) {
      let tmp2;
      canGoBack = canGoBack.canGoBack;
      const obj = NavigatorHeader;
      if (canGoBack) {
        tmp2 = obj.getHeaderBackButton(dependencyMap)(canGoBack);
      } else {
        tmp2 = obj.getHeaderCloseButton(onClose)(canGoBack);
      }
      return tmp2;
    },
    initialParams: { predicate, showCurrentPlan, isBoostPurchaseFlow },
    render(arg0) {
      let isBoostPurchaseFlow;
      let predicate;
      let showCurrentPlan;
      ({ predicate, showCurrentPlan, isBoostPurchaseFlow } = arg0);
      return jsx(PremiumPlanSelectDefault, {
        analyticsLocation: require,
        predicate,
        showCurrentPlan,
        isBoostPurchaseFlow,
        planId: jsx,
        applicationId: getScreens,
        guildId,
      });
    },
  };
  intl4 = intl6.intl;
  obj[PREMIUM_PLAN_SELECT] = obj7;
  const PREMIUM_GIFTING = UserSettingsSections.PREMIUM_GIFTING;
  const obj8 = {
    title: intl5.string(intl6.t.Oba8Sh),
    headerLeft: obj9.getHeaderCloseButton(onClose),
    render() {
      return jsx(UserSettingsPremiumGiftingDefault, {
        recipientUserId: UserSettingsSections,
        analyticsLocation: require,
      });
    },
  };
  intl5 = intl6.intl;
  obj[PREMIUM_GIFTING] = obj8;
  obj9 = NavigatorHeader;
  return obj;
}
const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (analyticsLocations) => {
      let activitySessionId;
      let analyticsLocation;
      let applicationId;
      let channelId;
      let giftRecipientId;
      let guildId;
      let initialRoute;
      let isBoostPurchaseFlow;
      let onBack;
      let onClose;
      let onPaymentDismiss;
      let onPaymentSuccess;
      let planId;
      let predicate;
      let premiumFeatureCardOrder;
      let showCurrentPlan;
      const obj = react2;
      const cResult = obj.c(22);
      ({
        applicationId,
        analyticsLocation,
        initialRoute,
        onClose,
        onBack,
        giftRecipientId,
        predicate,
        showCurrentPlan,
        isBoostPurchaseFlow,
        planId,
        activitySessionId,
        channelId,
        guildId,
        premiumFeatureCardOrder,
        onPaymentSuccess,
        onPaymentDismiss,
      } = analyticsLocations);
      analyticsLocations = useAnalyticsLocationsDefault(analyticsLocations.analyticsLocations).analyticsLocations;
      if (initialRoute == null) {
        initialRoute = UserSettingsSections.PREMIUM;
      }
      if (cResult[0] === activitySessionId) {
        if (cResult[1] === analyticsLocation) {
          if (cResult[2] === applicationId) {
            if (cResult[3] === channelId) {
              if (cResult[4] === giftRecipientId) {
                if (cResult[5] === guildId) {
                  if (cResult[6] === isBoostPurchaseFlow) {
                    if (cResult[7] === onBack) {
                      if (cResult[8] === onClose) {
                        if (cResult[9] === onPaymentDismiss) {
                          if (cResult[10] === onPaymentSuccess) {
                            if (cResult[11] === planId) {
                              if (cResult[12] === predicate) {
                                if (cResult[13] === premiumFeatureCardOrder) {
                                  let tmp5;
                                  if (cResult[14] === showCurrentPlan) {
                                    tmp5 = cResult[15];
                                  }
                                  if (cResult[16] === initialRoute) {
                                    let tmp7;
                                    if (cResult[17] === tmp5) {
                                      tmp7 = cResult[18];
                                    }
                                    if (cResult[19] === analyticsLocations) {
                                      let tmp10;
                                      if (cResult[20] === tmp7) {
                                        tmp10 = cResult[21];
                                      }
                                      return tmp10;
                                    }
                                    const tmp12 = jsx(useAnalyticsLocations.AnalyticsLocationProvider, {
                                      value: analyticsLocations,
                                      children: tmp7,
                                    });
                                    cResult[19] = analyticsLocations;
                                    cResult[20] = tmp7;
                                    cResult[21] = tmp12;
                                    tmp10 = tmp12;
                                  }
                                  const tmp9 = jsx(Navigator2.Navigator, {
                                    screens: tmp5,
                                    initialRouteName: initialRoute,
                                  });
                                  cResult[16] = initialRoute;
                                  cResult[17] = tmp5;
                                  cResult[18] = tmp9;
                                  tmp7 = tmp9;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const tmp6 = getScreens({
        analyticsLocation,
        onClose,
        onBack,
        predicate,
        giftRecipientId,
        showCurrentPlan,
        isBoostPurchaseFlow,
        planId,
        applicationId,
        activitySessionId,
        channelId,
        guildId,
        premiumFeatureCardOrder,
        onPaymentSuccess,
        onPaymentDismiss,
      });
      cResult[0] = activitySessionId;
      cResult[1] = analyticsLocation;
      cResult[2] = applicationId;
      cResult[3] = channelId;
      cResult[4] = giftRecipientId;
      cResult[5] = guildId;
      cResult[6] = isBoostPurchaseFlow;
      cResult[7] = onBack;
      cResult[8] = onClose;
      cResult[9] = onPaymentDismiss;
      cResult[10] = onPaymentSuccess;
      cResult[11] = planId;
      cResult[12] = predicate;
      cResult[13] = premiumFeatureCardOrder;
      cResult[14] = showCurrentPlan;
      cResult[15] = tmp6;
      tmp5 = tmp6;
    }
  : (initialRoute) => {
      let activitySessionId;
      let analyticsLocation;
      let analyticsLocations;
      let applicationId;
      let channelId;
      let giftRecipientId;
      let guildId;
      let isBoostPurchaseFlow;
      let onBack;
      let onClose;
      let onPaymentDismiss;
      let onPaymentSuccess;
      let planId;
      let predicate;
      let premiumFeatureCardOrder;
      let showCurrentPlan;
      let PREMIUM = initialRoute.initialRoute;
      ({
        applicationId,
        analyticsLocation,
        analyticsLocations,
        onClose,
        onBack,
        giftRecipientId,
        predicate,
        showCurrentPlan,
        isBoostPurchaseFlow,
        planId,
        activitySessionId,
        channelId,
        guildId,
        premiumFeatureCardOrder,
        onPaymentSuccess,
        onPaymentDismiss,
      } = initialRoute);
      const analyticsLocations2 = useAnalyticsLocationsDefault(analyticsLocations).analyticsLocations;
      if (PREMIUM == null) {
        PREMIUM = UserSettingsSections.PREMIUM;
      }
      const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
      ({
        screens: getScreens({
          analyticsLocation,
          onClose,
          onBack,
          predicate,
          giftRecipientId,
          showCurrentPlan,
          isBoostPurchaseFlow,
          planId,
          applicationId,
          activitySessionId,
          channelId,
          guildId,
          premiumFeatureCardOrder,
          onPaymentSuccess,
          onPaymentDismiss,
        }),
        initialRouteName: PREMIUM,
      });
      const Navigator = Navigator2.Navigator;
      return <AnalyticsLocationProvider value={analyticsLocations2}>{null}</AnalyticsLocationProvider>;
    };
const result = size.fileFinishedImporting("components_native/premium/PremiumModal.tsx");

export default tmp3;
export const PREMIUM_KEY = "PREMIUM_KEY";
