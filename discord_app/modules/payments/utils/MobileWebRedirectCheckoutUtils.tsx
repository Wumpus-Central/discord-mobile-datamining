// discord_app/modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import _mod4387 from "../../../../_runtime/metro/04387__.js";
import PaymentConstants from "../PaymentConstants.tsx";
import keysSorter from "../../../../_runtime/05456_keysSorter.js";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const CustomCheckoutFlow = PaymentConstants.CustomCheckoutFlow;
({ Routes: closure_4, LinkingTypes: hasOwnProperty } = Constants);
const mobile_web_redirect_checkout = "mobile_web_redirect_checkout";
const result = size.fileFinishedImporting("modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx");

export const MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG = "mobile_web_redirect_checkout";
export const captureMobileWebRedirectCheckoutSentryError = function captureMobileWebRedirectCheckoutSentryError(
  error,
  source,
  tags,
) {
  let obj = { tags: null, extra: null };
  obj = { app_context: mobile_web_redirect_checkout, source };
  const merged = Object.assign(tags.tags);
  obj.tags = obj;
  obj.extra = tags.extra;
  obj.captureException(error, obj);
};
export const isMobileWebRedirectCheckoutEnabled = function isMobileWebRedirectCheckoutEnabled() {
  return MetaQuestUtils.isMetaQuest();
};
export const getCustomCheckoutFlowForAnalytics = function getCustomCheckoutFlowForAnalytics() {
  return MetaQuestUtils.isMetaQuest()
    ? CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT
    : CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
};
export const useGetCustomCheckoutFlow = function useGetCustomCheckoutFlow() {
  const _location = _mod4387.useLocation();
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
