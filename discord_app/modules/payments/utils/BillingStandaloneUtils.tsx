// === Module 6913: BillingStandaloneUtils ===

// Module 6913 (BillingStandaloneUtils)
import v1 from "v1" /* 1266 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import URLUtilsDefault from "URLUtils" /* 1371 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
function goToStandalonePremiumCheckout(planId, arg1, arg2) {
  const result = React3.BILLING_STANDALONE_CHECKOUT_PAGE(planId.planId, planId.isGift, planId.loadId, planId.paymentMethodType, planId.deepLinkType, planId.usePresetOffer, planId.flowType);
  let closure_1 = arg1;
  let closure_2 = arg2;
  const obj = URLUtilsDefault;
  const uRL = new URL(obj.makeUrl(React3.BILLING_LOGIN_HANDOFF, false));
  const obj2 = v1;
  const v4Result = obj2.v4();
  const searchParams = uRL.searchParams;
  searchParams.append("handoff_key", v4Result);
  const searchParams2 = uRL.searchParams;
  searchParams2.append("redirect_to", result);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.HANDOFF, body: { key: v4Result }, oldFormErrors: true, rejectWithError: false };
  const postResult = HTTP.post(request);
  return postResult.then((result) => closure_1(result, uRL), (arg0) => closure_2(arg0, result));
}
({ Endpoints: c3, Routes: closure_4 } = Constants);
let result = size.fileFinishedImporting("modules/payments/utils/BillingStandaloneUtils.tsx");

export const goToBillingStandalonePageWithHandoff = function goToBillingStandalonePageWithHandoff(Routes, arg1, arg2) {
  let closure_0 = Routes;
  let closure_1 = arg1;
  let closure_2 = arg2;
  const obj = URLUtilsDefault;
  const uRL = new URL(obj.makeUrl(React3.BILLING_LOGIN_HANDOFF, false));
  const obj2 = v1;
  const v4Result = obj2.v4();
  const searchParams = uRL.searchParams;
  searchParams.append("handoff_key", v4Result);
  const searchParams2 = uRL.searchParams;
  searchParams2.append("redirect_to", Routes);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.HANDOFF, body: { key: v4Result }, oldFormErrors: true, rejectWithError: false };
  const postResult = HTTP.post(request);
  return postResult.then((result) => closure_1(result, uRL), (arg0) => closure_2(arg0, result));
};
export { goToStandalonePremiumCheckout };
export const goToStandalonePremiumCheckoutWeb = function goToStandalonePremiumCheckoutWeb(planId, arg1) {
  return goToStandalonePremiumCheckout(planId, (body, searchParams) => {
    searchParams = searchParams.searchParams;
    searchParams.append("handoff_token", body.body.handoff_token);
    window.open(searchParams.href);
  }, arg1);
};