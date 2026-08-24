// discord_app/modules/payments/utils/BillingStandaloneUtils.tsx
import set from "../../../../_runtime/00002_set.js";
import v1 from "../../../../_runtime/00514_v1.js";
import sendRequest from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import isDiscordProxiedAssetUrlDefault from "../../../utils/URLUtils.tsx";
import ME from "../../../Constants.tsx";
import { v1 } from "../../../../_runtime/00514_v1.js";

function goToStandalonePremiumCheckout(planId, arg1, arg2) {
  const result = closure_4.BILLING_STANDALONE_CHECKOUT_PAGE(planId.planId, planId.isGift, planId.loadId, planId.paymentMethodType, planId.deepLinkType, planId.usePresetOffer, planId.flowType);
  require = result;
  importDefault = arg1;
  dependencyMap = arg2;
  let uRL;
  let obj = isDiscordProxiedAssetUrlDefault;
  uRL = new URL(obj.makeUrl(closure_4.BILLING_LOGIN_HANDOFF, false));
  const v4Result = v1.v4();
  const searchParams = uRL.searchParams;
  searchParams.append("handoff_key", v4Result);
  const searchParams2 = uRL.searchParams;
  searchParams2.append("redirect_to", result);
  const HTTP = sendRequest.HTTP;
  obj = { url: uRL.HANDOFF, body: { key: v4Result }, oldFormErrors: true, rejectWithError: false };
  const obj2 = v1;
  return HTTP.post(obj).then((arg0) => callback(arg0, uRL), (arg0) => callback2(arg0, closure_0));
}
({ Endpoints: c3, Routes: c4 } = ME);
let result = set.fileFinishedImporting("modules/payments/utils/BillingStandaloneUtils.tsx");

export const goToBillingStandalonePageWithHandoff = function goToBillingStandalonePageWithHandoff(Routes, arg1, arg2) {
  const _require = Routes;
  importDefault = arg1;
  dependencyMap = arg2;
  let obj = isDiscordProxiedAssetUrlDefault;
  const uRL = new URL(obj.makeUrl(closure_4.BILLING_LOGIN_HANDOFF, false));
  const v4Result = require("../../../../_runtime/00514_v1.js").v4();
  const searchParams = uRL.searchParams;
  searchParams.append("handoff_key", v4Result);
  const searchParams2 = uRL.searchParams;
  searchParams2.append("redirect_to", Routes);
  const HTTP = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
  obj = { url: uRL.HANDOFF, body: { key: v4Result }, oldFormErrors: true, rejectWithError: false };
  const obj2 = v1;
  return HTTP.post(obj).then((arg0) => callback(arg0, uRL), (arg0) => callback2(arg0, closure_0));
};
export { goToStandalonePremiumCheckout };
export const goToStandalonePremiumCheckoutWeb = function goToStandalonePremiumCheckoutWeb(planId) {
  return goToStandalonePremiumCheckout(planId, (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    window.open(searchParams.href);
  }, arg1);
};