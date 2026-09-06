// === Module 7412: PremiumModal ===

// Module 7412 (PremiumModal)
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import UserSettingsPremiumDefault from "UserSettingsPremium" /* 7413 */;
import PremiumPlanSelectDefault from "PremiumPlanSelect" /* 13542 */;
import UserSettingsPremiumGiftingDefault from "UserSettingsPremiumGifting" /* 13554 */;
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
  obj = { screens: null, initialRouteName: null };
  obj = {};
  const obj1 = { title: null, headerLeft: null, render: null };
  const intl = analyticsLocation(tmp[3]).intl;
  obj1.title = intl.string(analyticsLocation(onBack[3]).t.lpNrPu);
  let obj4 = analyticsLocation(tmp[4]);
  obj1.headerLeft = obj4.getHeaderCloseButton(onClose);
  obj1.render = function render() {
    return jsx(UserSettingsPremiumDefault, { applicationId, onClose, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation: true });
  };
  obj[giftRecipientId.PREMIUM] = obj1;
  const obj2 = { title: null, render: null };
  const intl2 = analyticsLocation(tmp[3]).intl;
  obj2.title = intl2.string(analyticsLocation(onBack[3]).t["8jmdON"]);
  obj2.render = function render() {
    return planId(onClose(onBack[6]), {});
  };
  obj[giftRecipientId.PREMIUM_MANAGE_PLAN] = obj2;
  const obj3 = { title: null, headerLeft: null, render: null };
  const intl3 = analyticsLocation(tmp[3]).intl;
  obj3.title = intl3.string(analyticsLocation(onBack[3]).t["+CbP2v"]);
  obj3.headerLeft = analyticsLocation(onBack[4]).getHeaderCloseButton(onClose);
  obj3.render = function render() {
    return planId(onClose(onBack[7]), {});
  };
  obj[giftRecipientId.GUILD_BOOSTING] = obj3;
  obj4 = { title: null, headerLeft: null, initialParams: null, render: null };
  const intl4 = analyticsLocation(tmp[3]).intl;
  obj4.title = intl4.string(analyticsLocation(onBack[3]).t.u95Dt4);
  obj4.headerLeft = function headerLeft(canGoBack) {
    const obj = NavigatorHeader;
    if (canGoBack.canGoBack) {
      let tmp2 = obj.getHeaderBackButton(onBack)(canGoBack);
    } else {
      tmp2 = obj.getHeaderCloseButton(onClose)(canGoBack);
    }
    return tmp2;
  };
  obj4.initialParams = { predicate, showCurrentPlan, isBoostPurchaseFlow };
  obj4.render = function render(arg0) {
    ({ predicate, showCurrentPlan, isBoostPurchaseFlow } = arg0);
    return jsx(PremiumPlanSelectDefault, { analyticsLocation, predicate, showCurrentPlan, isBoostPurchaseFlow, planId, applicationId, guildId });
  };
  obj[giftRecipientId.PREMIUM_PLAN_SELECT] = obj4;
  const obj5 = { title: null, headerLeft: null, render: null };
  const intl5 = analyticsLocation(tmp[3]).intl;
  obj5.title = intl5.string(analyticsLocation(onBack[3]).t.Oba8Sh);
  const obj8 = analyticsLocation(onBack[4]);
  obj5.headerLeft = analyticsLocation(onBack[4]).getHeaderCloseButton(onClose);
  obj5.render = function render() {
    return jsx(UserSettingsPremiumGiftingDefault, { recipientUserId: giftRecipientId, analyticsLocation });
  };
  obj[giftRecipientId.PREMIUM_GIFTING] = obj5;
  obj.screens = obj;
  obj.initialRouteName = initialRoute;
  obj.children = planId(analyticsLocation(onBack[11]).Navigator, obj);
  return planId(analyticsLocation(onBack[10]).AnalyticsLocationProvider, obj);
};
export const PREMIUM_KEY = "PREMIUM_KEY";