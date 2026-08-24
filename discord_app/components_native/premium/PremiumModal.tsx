// === Module 7381: PremiumModal ===

// Module 7381 (PremiumModal)
import noopAll from "noop" /* 19 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("components_native/premium/PremiumModal.tsx");

export default function PremiumModal(arg0) {
  ({ initialRoute, onClose } = arg0);
  ({ applicationId, analyticsLocation, analyticsLocations, onBack, giftRecipientId, predicate, showCurrentPlan, isBoostPurchaseFlow, planId, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss } = arg0);
  if (initialRoute == null) {
    initialRoute = giftRecipientId.PREMIUM;
  }
  let obj = { value: onClose(onBack[10])(analyticsLocations).analyticsLocations, children: null };
  obj = { screens: null, initialRouteName: null };
  obj = {};
  obj1 = { title: null, headerLeft: null, render: null };
  const intl = analyticsLocation(tmp[3]).intl;
  obj1[0] = intl.string(analyticsLocation(onBack[3]).t.lpNrPu);
  let obj4 = analyticsLocation(tmp[4]);
  obj1[1] = obj4.getHeaderCloseButton(onClose);
  obj1[2] = function render() {
    return planId(onClose(onBack[5]), { applicationId, onClose, activitySessionId, channelId, guildId, premiumFeatureCardOrder, onPaymentSuccess, onPaymentDismiss, isFullScreenPresentation: true });
  };
  obj[giftRecipientId.PREMIUM] = obj1;
  const obj2 = { title: null, render: null };
  const intl2 = analyticsLocation(tmp[3]).intl;
  obj2[0] = intl2.string(analyticsLocation(onBack[3]).t["8jmdON"]);
  obj2[1] = function render() {
    return planId(onClose(onBack[6]), {});
  };
  obj[giftRecipientId.PREMIUM_MANAGE_PLAN] = obj2;
  const obj3 = { title: null, headerLeft: null, render: null };
  const intl3 = analyticsLocation(tmp[3]).intl;
  obj3[0] = intl3.string(analyticsLocation(onBack[3]).t["+CbP2v"]);
  obj3[1] = analyticsLocation(onBack[4]).getHeaderCloseButton(onClose);
  obj3[2] = function render() {
    return planId(onClose(onBack[7]), {});
  };
  obj[giftRecipientId.GUILD_BOOSTING] = obj3;
  obj4 = { title: null, headerLeft: null, initialParams: null, render: null };
  const intl4 = analyticsLocation(tmp[3]).intl;
  obj4[0] = intl4.string(analyticsLocation(onBack[3]).t.u95Dt4);
  obj4[1] = function headerLeft(canGoBack) {
    const obj = analyticsLocation(onBack[4]);
    if (canGoBack.canGoBack) {
      let tmp2 = obj.getHeaderBackButton(onBack)(canGoBack);
    } else {
      tmp2 = obj.getHeaderCloseButton(onClose)(canGoBack);
    }
    return tmp2;
  };
  obj4[2] = { predicate, showCurrentPlan, isBoostPurchaseFlow };
  obj4[3] = function render(arg0) {
    ({ predicate, showCurrentPlan, isBoostPurchaseFlow } = arg0);
    return planId(onClose(onBack[8]), { analyticsLocation, predicate, showCurrentPlan, isBoostPurchaseFlow, planId, applicationId, guildId });
  };
  obj[giftRecipientId.PREMIUM_PLAN_SELECT] = obj4;
  const obj5 = { title: null, headerLeft: null, render: null };
  const intl5 = analyticsLocation(tmp[3]).intl;
  obj5[0] = intl5.string(analyticsLocation(onBack[3]).t.Oba8Sh);
  const obj8 = analyticsLocation(onBack[4]);
  obj5[1] = analyticsLocation(onBack[4]).getHeaderCloseButton(onClose);
  obj5[2] = function render() {
    return planId(onClose(onBack[9]), { recipientUserId: giftRecipientId, analyticsLocation });
  };
  obj[giftRecipientId.PREMIUM_GIFTING] = obj5;
  obj[0] = obj;
  obj[1] = initialRoute;
  obj[1] = planId(analyticsLocation(onBack[11]).Navigator, obj);
  return planId(analyticsLocation(onBack[10]).AnalyticsLocationProvider, obj);
};
export const PREMIUM_KEY = "PREMIUM_KEY";