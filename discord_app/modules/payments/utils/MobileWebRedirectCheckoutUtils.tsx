// === Module 6912: MobileWebRedirectCheckoutUtils ===

// Module 6912 (MobileWebRedirectCheckoutUtils)
import react from "react" /* 576 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import BrowserRouter from "BrowserRouter" /* 4705 */;
import PaymentConstants from "PaymentConstants" /* 4869 */;
import _mod5635 from "module_5635" /* 5635 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const CustomCheckoutFlow = PaymentConstants.CustomCheckoutFlow;
({ Routes: closure_4, LinkingTypes: hasOwnProperty } = Constants);
const mobile_web_redirect_checkout = "mobile_web_redirect_checkout";
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let deep_link_type;
  let flow_type;
  let pathname;
  let search;
  const obj = react;
  const cResult = obj.c(3);
  const obj2 = BrowserRouter;
  const _location = obj2.useLocation();
  ({ search, pathname } = _location);
  if (cResult[0] === search) {
    let tmp5;
    if (cResult[1] === pathname) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  const tmpResult = _mod5635;
  const parsed = tmpResult.parse(search);
  ({ deep_link_type, flow_type } = parsed);
  let tmp7;
  if (!pathname.startsWith(constants.BILLING_MANAGE_SUBSCRIPTION)) {
    let META_QUEST_WEB_REDIRECT_CHECKOUT;
    if (deep_link_type === hasOwnProperty.MOBILE_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
    } else if (flow_type === CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    }
    tmp7 = META_QUEST_WEB_REDIRECT_CHECKOUT;
  }
  cResult[0] = search;
  cResult[1] = pathname;
  cResult[2] = tmp7;
  tmp5 = tmp7;
}) : (() => {
  let deep_link_type;
  let flow_type;
  let pathname;
  let search;
  const obj = BrowserRouter;
  const _location = obj.useLocation();
  ({ pathname, search } = _location);
  const obj2 = _mod5635;
  const parsed = obj2.parse(search);
  ({ deep_link_type, flow_type } = parsed);
  let tmp3;
  if (!pathname.startsWith(constants.BILLING_MANAGE_SUBSCRIPTION)) {
    let META_QUEST_WEB_REDIRECT_CHECKOUT;
    if (deep_link_type === hasOwnProperty.MOBILE_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
    } else if (flow_type === CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    }
    tmp3 = META_QUEST_WEB_REDIRECT_CHECKOUT;
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx");

export const MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG = "mobile_web_redirect_checkout";
export const captureMobileWebRedirectCheckoutSentryError = function captureMobileWebRedirectCheckoutSentryError(error, source, tags) {
  let obj2;
  const obj = { tags: obj2, extra: tags.extra };
  const captureException = SentryUtilsDefault.captureException;
  obj2 = { app_context: mobile_web_redirect_checkout, source };
  SentryUtilsDefault;
  const merged = Object.assign(tags.tags);
  captureException(error, obj);
};
export const isMobileWebRedirectCheckoutEnabled = function isMobileWebRedirectCheckoutEnabled() {
  const obj = MetaQuestUtils;
  return obj.isMetaQuest();
};
export const getCustomCheckoutFlowForAnalytics = function getCustomCheckoutFlowForAnalytics() {
  const obj = MetaQuestUtils;
  return obj.isMetaQuest() ? CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT : CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
};
export const useGetCustomCheckoutFlow = tmp3;
export const getCustomCheckoutFlow = function getCustomCheckoutFlow() {
  let deep_link_type;
  let flow_type;
  const obj = _mod5635;
  const parsed = obj.parse(window.location.search);
  ({ deep_link_type, flow_type } = parsed);
  let tmp2;
  if (!pathname.startsWith(constants.BILLING_MANAGE_SUBSCRIPTION)) {
    let META_QUEST_WEB_REDIRECT_CHECKOUT;
    if (deep_link_type === hasOwnProperty.MOBILE_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
    } else if (flow_type === CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT) {
      META_QUEST_WEB_REDIRECT_CHECKOUT = CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT;
    }
    tmp2 = META_QUEST_WEB_REDIRECT_CHECKOUT;
  }
  return tmp2;
};