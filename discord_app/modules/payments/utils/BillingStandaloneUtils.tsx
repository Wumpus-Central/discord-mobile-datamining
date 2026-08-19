// === Module 7376: goToStandalonePremiumCheckout ===

// Module 7376 (goToStandalonePremiumCheckout)
import obj132 from "obj132" /* 2 */;
import v1 from "v1" /* 514 */;
import sendRequest from "sendRequest" /* 530 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1487 */;
import ME from "ME" /* 676 */;

function goToStandalonePremiumCheckout(planId, arg1, arg2) {
  const result = closure_4.BILLING_STANDALONE_CHECKOUT_PAGE(planId.planId, planId.isGift, planId.loadId, planId.paymentMethodType, planId.deepLinkType, planId.usePresetOffer, planId.flowType);
  require = result;
  importDefault = arg1;
  dependencyMap = arg2;
  let obj = isDiscordProxiedAssetUrlDefault;
  const uRL = new URL(obj.makeUrl(closure_4.BILLING_LOGIN_HANDOFF, false));
  const v4Result = v1.v4();
  const searchParams = uRL.searchParams;
  searchParams.append("handoff_key", v4Result);
  const searchParams2 = uRL.searchParams;
  searchParams2.append("redirect_to", result);
  const HTTP = sendRequest.HTTP;
  obj = { url: uRL.HANDOFF, body: { key: v4Result }, oldFormErrors: true, rejectWithError: false };
  return HTTP.post(obj).then((result) => callback(result, uRL), (arg0) => callback2(arg0, closure_0));
}
({ Endpoints: c3, Routes: c4 } = ME);
let result = obj132.fileFinishedImporting("modules/payments/utils/BillingStandaloneUtils.tsx");

export const goToBillingStandalonePageWithHandoff = function goToBillingStandalonePageWithHandoff(Routes, arg1, arg2) {
  const _require = Routes;
  importDefault = arg1;
  dependencyMap = arg2;
  let obj = isDiscordProxiedAssetUrlDefault;
  const uRL = new URL(obj.makeUrl(closure_4.BILLING_LOGIN_HANDOFF, false));
  const v4Result = _require(514).v4();
  const searchParams = uRL.searchParams;
  searchParams.append("handoff_key", v4Result);
  const searchParams2 = uRL.searchParams;
  searchParams2.append("redirect_to", Routes);
  const HTTP = _require(530).HTTP;
  obj = { url: uRL.HANDOFF, body: { key: v4Result }, oldFormErrors: true, rejectWithError: false };
  const obj2 = _require(514);
  return HTTP.post(obj).then((result) => callback(result, uRL), (arg0) => callback2(arg0, closure_0));
};
export { goToStandalonePremiumCheckout };
export const goToStandalonePremiumCheckoutWeb = function goToStandalonePremiumCheckoutWeb(planId) {
  return goToStandalonePremiumCheckout(planId, (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    window.open(searchParams.href);
  }, arg1);
};