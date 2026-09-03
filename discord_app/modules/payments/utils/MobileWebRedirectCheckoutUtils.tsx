// discord_app/modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import _modDef1205 from "../../../utils/SentryUtils.native.tsx";
import isMetaQuest from "../../device/MetaQuestUtils.android.tsx";
import _extends from "../../../../_runtime/metro/04305__extends.js";
import CustomCheckoutFlow2 from "../PaymentConstants.tsx";
import keysSorter from "../../../../_runtime/05407_keysSorter.js";
import ME from "../../../Constants.tsx";

const CustomCheckoutFlow = CustomCheckoutFlow2.CustomCheckoutFlow;
({ Routes: c4, LinkingTypes: c5 } = ME);
const mobile_web_redirect_checkout = "mobile_web_redirect_checkout";
const result = set.fileFinishedImporting("modules/payments/utils/MobileWebRedirectCheckoutUtils.tsx");

export const MOBILE_WEB_REDIRECT_CHECKOUT_ERROR_TAG = "mobile_web_redirect_checkout";
export const captureMobileWebRedirectCheckoutSentryError = function captureMobileWebRedirectCheckoutSentryError(
  error,
  source,
  tags,
) {
  let obj = _modDef1205;
  obj = { tags: null, extra: null };
  obj = { app_context: mobile_web_redirect_checkout, source };
  const merged = Object.assign(tags.tags);
  obj[0] = obj;
  obj[1] = tags.extra;
  obj.captureException(error, obj);
};
export const isMobileWebRedirectCheckoutEnabled = function isMobileWebRedirectCheckoutEnabled() {
  return isMetaQuest.isMetaQuest();
};
export const getCustomCheckoutFlowForAnalytics = function getCustomCheckoutFlowForAnalytics() {
  return isMetaQuest.isMetaQuest()
    ? CustomCheckoutFlow.META_QUEST_WEB_REDIRECT_CHECKOUT
    : CustomCheckoutFlow.MOBILE_WEB_REDIRECT_CHECKOUT;
};
export const useGetCustomCheckoutFlow = function useGetCustomCheckoutFlow() {
  const _location = _extends.useLocation();
  ({ pathname, search } = _location);
  const obj = _extends;
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
