// === Module 7646: MobileWebRedirectCheckoutUtils ===

// Module 7646 (MobileWebRedirectCheckoutUtils)
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1609 */;
import _mod4583 from "module_4583" /* 4583 */;
import PaymentConstants from "PaymentConstants" /* 4738 */;
import keysSorter from "keysSorter" /* 5668 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const CustomCheckoutFlow = PaymentConstants.CustomCheckoutFlow;
({ Routes: closure_4, LinkingTypes: hasOwnProperty } = Constants);
const mobile_web_redirect_checkout = "mobile_web_redirect_checkout";
const result = size.fileFinishedImporting("modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx");

export const MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG = "mobile_web_redirect_checkout";
export const captureMobileWebRedirectCheckoutSentryError = function captureMobileWebRedirectCheckoutSentryError(error, source, tags) {
  const obj2 = { tags: null, extra: null };
  const merged = Object.assign(tags.tags);
  obj2.tags = { app_context: mobile_web_redirect_checkout, source };
  obj2.extra = tags.extra;
  SentryUtilsDefault.captureException(error, obj2);
};
export const isMobileWebRedirectCheckoutEnabled = function isMobileWebRedirectCheckoutEnabled() {
  return MetaQuestUtils.isMetaQuest();
};
export const getCustomCheckoutFlowForAnalytics = function getCustomCheckoutFlowForAnalytics() {
  return MetaQuestUtils.isMetaQuest() ? CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT : CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
};
export const useGetCustomCheckoutFlow = function useGetCustomCheckoutFlow() {
  const _location = _mod4583.useLocation();
  ({ pathname, search } = _location);
  const parsed = keysSorter.parse(search);
  ({ deep_link_type, flow_type } = parsed);
  if (!pathname.startsWith(constants.BILLING_MANAGE_SUBSCRIPTION)) {
    if (deep_link_type === constants2.MOBILE_WEB_REDIRECT_CHECKOUT) {
      let META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
    } else if (flow_type === CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    }
  }
};
export const getCustomCheckoutFlow = function getCustomCheckoutFlow() {
  const parsed = keysSorter.parse(window.location.search);
  ({ deep_link_type, flow_type } = parsed);
  if (!pathname.startsWith(constants.BILLING_MANAGE_SUBSCRIPTION)) {
    if (deep_link_type === constants2.MOBILE_WEB_REDIRECT_CHECKOUT) {
      let META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
    } else if (flow_type === CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    }
  }
};