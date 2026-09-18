// === Module 7608: PremiumModal ===

// Module 7608 (PremiumModal)
import NavigatorHeader from "NavigatorHeader" /* 5794 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7609 */;
import PremiumPlanSelectDefault from "PremiumPlanSelect" /* 13745 */;
import UserSettingsPremiumGiftingDefault from "UserSettingsPremiumGifting" /* 13757 */;
import noop from "module_19" /* 19 */;

require = fn;
const UserSettingsSections = fn(1074).UserSettingsSections;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumModal.tsx");

export default function PremiumModal(arg0) {
  ({ initialRoute, onClose } = arg0);
  ({ applicationId, analyticsLocation, analyticsLocations, onBack, giftRecipientId, predicate, showCurrentPlan, isBoostPurchaseFlow, planId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss } = arg0);
  if (initialRoute == null) {
    initialRoute = giftRecipientId.PREMIUM;
  }
  let obj = { value: onClose(onBack[10])(analyticsLocations).analyticsLocations, children: null };
  const obj2 = { screens: null, initialRouteName: null };
  const obj3 = {};
  const obj4 = { title: null, headerLeft: null, render: null };
  const intl = analyticsLocation(tmp[3]).intl;
  obj4.title = intl.string(analyticsLocation(onBack[3]).t.lpNrPu);
  obj4.headerLeft = analyticsLocation(onBack[4]).getHeaderCloseButton(onClose);
  obj4.render = function render() {
    return jsx(UserSettingsPremiumDefault, { applicationId, onClose, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation: true });
  };
  obj3[giftRecipientId.PREMIUM] = obj4;
  const obj6 = { title: null, render: null };
  const intl2 = analyticsLocation(tmp[3]).intl;
  obj6.title = intl2.string(analyticsLocation(onBack[3]).t["8jmdON"]);
  obj6.render = function render() {
    return planId(onClose(onBack[6]), {});
  };
  obj3[giftRecipientId.PREMIUM_MANAGE_PLAN] = obj6;
  const obj7 = { title: null, headerLeft: null, render: null };
  const intl3 = analyticsLocation(tmp[3]).intl;
  obj7.title = intl3.string(analyticsLocation(onBack[3]).t["+CbP2v"]);
  const obj5 = analyticsLocation(onBack[4]);
  obj7.headerLeft = analyticsLocation(onBack[4]).getHeaderCloseButton(onClose);
  obj7.render = function render() {
    return planId(onClose(onBack[7]), {});
  };
  obj3[giftRecipientId.GUILD_BOOSTING] = obj7;
  const obj9 = { title: null, headerLeft: null, initialParams: null, render: null };
  const intl4 = analyticsLocation(tmp[3]).intl;
  obj9.title = intl4.string(analyticsLocation(onBack[3]).t.u95Dt4);
  obj9.headerLeft = function headerLeft(canGoBack) {
    const obj = NavigatorHeader;
    if (canGoBack.canGoBack) {
      let tmp2 = obj.getHeaderBackButton(onBack)(canGoBack);
    } else {
      tmp2 = obj.getHeaderCloseButton(onClose)(canGoBack);
    }
    return tmp2;
  };
  obj9.initialParams = { predicate, showCurrentPlan, isBoostPurchaseFlow };
  obj9.render = function render(arg0) {
    ({ predicate, showCurrentPlan, isBoostPurchaseFlow } = arg0);
    return jsx(PremiumPlanSelectDefault, { analyticsLocation, predicate, showCurrentPlan, isBoostPurchaseFlow, planId, applicationId, guildId });
  };
  obj3[giftRecipientId.PREMIUM_PLAN_SELECT] = obj9;
  const obj10 = { title: null, headerLeft: null, render: null };
  const intl5 = analyticsLocation(tmp[3]).intl;
  obj10.title = intl5.string(analyticsLocation(onBack[3]).t.Oba8Sh);
  const obj8 = analyticsLocation(onBack[4]);
  obj10.headerLeft = analyticsLocation(onBack[4]).getHeaderCloseButton(onClose);
  obj10.render = function render() {
    return jsx(UserSettingsPremiumGiftingDefault, { recipientUserId: giftRecipientId, analyticsLocation });
  };
  obj3[giftRecipientId.PREMIUM_GIFTING] = obj10;
  obj2.screens = obj3;
  obj2.initialRouteName = initialRoute;
  obj.children = planId(analyticsLocation(onBack[11]).Navigator, obj2);
  return planId(analyticsLocation(onBack[10]).AnalyticsLocationProvider, obj);
};
export const PREMIUM_KEY = "PREMIUM_KEY";