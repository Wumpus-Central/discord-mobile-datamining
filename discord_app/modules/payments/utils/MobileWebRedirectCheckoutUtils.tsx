// === Module 7116: MobileWebRedirectCheckoutUtils ===

// Module 7116 (MobileWebRedirectCheckoutUtils)
import c from "c" /* 576 */;
import SentryUtilsDefault from "SentryUtils" /* 1255 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1628 */;
import _mod4906 from "module_4906" /* 4906 */;
import PaymentConstants from "PaymentConstants" /* 5070 */;
import keysSorter from "keysSorter" /* 5991 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
export const useGetCustomCheckoutFlow = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetCustomCheckoutFlow() {
  const cResult = c.c(3);
  const _location = _mod4906.useLocation();
  ({ search, pathname } = _location);
  if (cResult[0] === search) {
    if (cResult[1] === pathname) {
      const tmp5 = cResult[2];
    }
    return tmp5;
  }
  const parsed = keysSorter.parse(search);
  ({ deep_link_type, flow_type } = parsed);
  if (pathname.startsWith(constants.BILLING_MANAGE_SUBSCRIPTION)) {
    cResult[0] = search;
    cResult[1] = pathname;
    cResult[2] = undefined;
  } else if (deep_link_type === constants2.MOBILE_WEB_REDIRECT_CHECKOUT) {
    let META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
  } else if (flow_type === CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT) {
    META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
  }
  const tmpResult = keysSorter;
}) : (function useGetCustomCheckoutFlow() {
  const _location = _mod4906.useLocation();
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
});
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