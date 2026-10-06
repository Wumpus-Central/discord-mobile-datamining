// discord_app/modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx
import react from "../../../../_runtime/00576_react.js";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import BrowserRouter from "../../../../_runtime/04711_BrowserRouter.js";
import PaymentConstants from "../PaymentConstants.tsx";
import _mod5642 from "../../../../_runtime/metro/05642__.js";
import Constants from "../../../Constants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
const CustomCheckoutFlow = PaymentConstants.CustomCheckoutFlow;
({ Routes: closure_4, LinkingTypes: hasOwnProperty } = Constants);
const mobile_web_redirect_checkout = "mobile_web_redirect_checkout";
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
      const tmpResult = _mod5642;
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
    }
  : () => {
      let deep_link_type;
      let flow_type;
      let pathname;
      let search;
      const obj = BrowserRouter;
      const _location = obj.useLocation();
      ({ pathname, search } = _location);
      const obj2 = _mod5642;
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
    };
const result = size.fileFinishedImporting("modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx");

export const MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG = "mobile_web_redirect_checkout";
export const captureMobileWebRedirectCheckoutSentryError = function captureMobileWebRedirectCheckoutSentryError(
  error,
  source,
  tags,
) {
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
  return obj.isMetaQuest()
    ? CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT
    : CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
};
export const useGetCustomCheckoutFlow = tmp3;
export const getCustomCheckoutFlow = function getCustomCheckoutFlow() {
  let deep_link_type;
  let flow_type;
  const obj = _mod5642;
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
