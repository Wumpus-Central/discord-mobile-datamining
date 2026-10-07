// === Module 6929: PremiumModal ===

// Module 6929 (PremiumModal)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import Navigator from "Navigator" /* 6503 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6664 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 6930 */;
import PremiumPlanSelectDefault from "PremiumPlanSelect" /* 13366 */;
import UserSettingsPremiumGiftingDefault from "UserSettingsPremiumGifting" /* 13380 */;
import noop from "module_19" /* 19 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function getScreens(arg0) {
  ({ analyticsLocation: require, onClose } = arg0);
  ({ onBack: dependencyMap, giftRecipientId: UserSettingsSections, planId: jsx, applicationId: getScreens, activitySessionId: closure_6, channelId: closure_7, guildId: closure_8, premiumFeatureCardOrder: closure_9, onPaymentSuccess: closure_10, onPaymentDismiss: closure_11 } = arg0);
  let obj = {};
  const obj2 = { title: null, headerLeft: null, render: null };
  ({ predicate, showCurrentPlan, isBoostPurchaseFlow } = arg0);
  const intl = util.intl;
  obj2.title = intl.string(util.t.lpNrPu);
  obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
  obj2.render = function render() {
    return jsx(UserSettingsPremiumDefault, { applicationId, onClose, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation: true });
  };
  obj[UserSettingsSections.PREMIUM] = obj2;
  const obj4 = { title: null, render: null };
  const intl2 = util.intl;
  obj4.title = intl2.string(util.t["8jmdON"]);
  obj4.render = function render() {
    return planId(onClose(13321), {});
  };
  obj[UserSettingsSections.PREMIUM_MANAGE_PLAN] = obj4;
  const obj5 = { title: null, headerLeft: null, render: null };
  const intl3 = util.intl;
  obj5.title = intl3.string(util.t["+CbP2v"]);
  obj5.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
  obj5.render = function render() {
    return planId(onClose(13324), {});
  };
  obj[UserSettingsSections.GUILD_BOOSTING] = obj5;
  const obj7 = { title: null, headerLeft: null, initialParams: null, render: null };
  const intl4 = util.intl;
  obj7.title = intl4.string(util.t.u95Dt4);
  obj7.headerLeft = function headerLeft(canGoBack) {
    const obj = NavigatorHeader;
    if (canGoBack.canGoBack) {
      let tmp2 = obj.getHeaderBackButton(dependencyMap)(canGoBack);
    } else {
      tmp2 = obj.getHeaderCloseButton(onClose)(canGoBack);
    }
    return tmp2;
  };
  obj7.initialParams = { predicate, showCurrentPlan, isBoostPurchaseFlow };
  obj7.render = function render(arg0) {
    ({ predicate, showCurrentPlan, isBoostPurchaseFlow } = arg0);
    return jsx(PremiumPlanSelectDefault, { analyticsLocation, predicate, showCurrentPlan, isBoostPurchaseFlow, planId, applicationId, guildId });
  };
  obj[UserSettingsSections.PREMIUM_PLAN_SELECT] = obj7;
  const obj8 = { title: null, headerLeft: null, render: null };
  const intl5 = util.intl;
  obj8.title = intl5.string(util.t.Oba8Sh);
  obj8.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
  obj8.render = function render() {
    return jsx(UserSettingsPremiumGiftingDefault, { recipientUserId, analyticsLocation });
  };
  obj[UserSettingsSections.PREMIUM_GIFTING] = obj8;
  return obj;
}
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsLocations) => {
  const cResult = c.c(22);
  ({ applicationId, analyticsLocation, initialRoute, onClose, onBack, giftRecipientId, predicate, showCurrentPlan, isBoostPurchaseFlow, planId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss } = analyticsLocations);
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
                              if (cResult[14] === showCurrentPlan) {
                                let tmp5 = cResult[15];
                              }
                              if (cResult[16] === initialRoute) {
                                if (cResult[17] === tmp5) {
                                  let tmp7 = cResult[18];
                                }
                                if (cResult[19] === analyticsLocations) {
                                  if (cResult[20] === tmp7) {
                                    let tmp10 = cResult[21];
                                  }
                                  return tmp10;
                                }
                                const obj2 = { value: analyticsLocations, children: tmp7 };
                                const tmp12 = jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: tmp7 });
                                cResult[19] = analyticsLocations;
                                cResult[20] = tmp7;
                                cResult[21] = tmp12;
                                tmp10 = tmp12;
                              }
                              const obj3 = { screens: tmp5, initialRouteName: initialRoute };
                              const tmp9 = jsx(Navigator.Navigator, { screens: tmp5, initialRouteName: initialRoute });
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
  const tmp6 = getScreens({ analyticsLocation, onClose, onBack, predicate, giftRecipientId, showCurrentPlan, isBoostPurchaseFlow, planId, applicationId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss });
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
}) : ((initialRoute) => {
  let PREMIUM = initialRoute.initialRoute;
  ({ applicationId, analyticsLocation, analyticsLocations, onClose, onBack, giftRecipientId, predicate, showCurrentPlan, isBoostPurchaseFlow, planId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss } = initialRoute);
  if (PREMIUM == null) {
    PREMIUM = UserSettingsSections.PREMIUM;
  }
  const obj = { value: useAnalyticsLocationsDefault(analyticsLocations).analyticsLocations, children: jsx(Navigator.Navigator, { screens: getScreens({ analyticsLocation, onClose, onBack, predicate, giftRecipientId, showCurrentPlan, isBoostPurchaseFlow, planId, applicationId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss }), initialRouteName: PREMIUM }) };
  return jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: useAnalyticsLocationsDefault(analyticsLocations).analyticsLocations, children: jsx(Navigator.Navigator, { screens: getScreens({ analyticsLocation, onClose, onBack, predicate, giftRecipientId, showCurrentPlan, isBoostPurchaseFlow, planId, applicationId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss }), initialRouteName: PREMIUM }) });
});
export const PREMIUM_KEY = "PREMIUM_KEY";