// discord_app/modules/payments/utils/BillingStandaloneUtils.tsx
import v1 from "../../../../_runtime/01256_v1.js";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import URLUtilsDefault from "../../../utils/URLUtils.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function goToStandalonePremiumCheckout(planId, arg1, arg2) {
  const result = React4.BILLING_STANDALONE_CHECKOUT_PAGE(
    planId.planId,
    planId.isGift,
    planId.loadId,
    planId.paymentMethodType,
    planId.deepLinkType,
    planId.usePresetOffer,
    planId.flowType,
  );
  require = result;
  closure_1 = arg1;
  closure_2 = arg2;
  const uRL = new URL(URLUtilsDefault.makeUrl(React4.BILLING_LOGIN_HANDOFF, false));
  const v4Result = v1.v4();
  const searchParams = uRL.searchParams;
  searchParams.append("handoff_key", v4Result);
  const searchParams2 = uRL.searchParams;
  searchParams2.append("redirect_to", result);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.HANDOFF, body: { key: v4Result }, oldFormErrors: true, rejectWithError: false };
  return HTTP.post(request).then(
    (result) => closure_1(result, uRL),
    (arg0) => closure_2(arg0, result),
  );
}
({ Endpoints: c3, Routes: closure_4 } = Constants);
let result = size.fileFinishedImporting("modules/payments/utils/BillingStandaloneUtils.tsx");

export const goToBillingStandalonePageWithHandoff = function goToBillingStandalonePageWithHandoff(Routes, arg1, arg2) {
  closure_0 = Routes;
  closure_1 = arg1;
  closure_2 = arg2;
  const uRL = new URL(URLUtilsDefault.makeUrl(React4.BILLING_LOGIN_HANDOFF, false));
  const v4Result = v1.v4();
  const searchParams = uRL.searchParams;
  searchParams.append("handoff_key", v4Result);
  const searchParams2 = uRL.searchParams;
  searchParams2.append("redirect_to", Routes);
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.HANDOFF, body: { key: v4Result }, oldFormErrors: true, rejectWithError: false };
  return HTTP.post(request).then(
    (result) => closure_1(result, uRL),
    (arg0) => closure_2(arg0, result),
  );
};
export { goToStandalonePremiumCheckout };
export const goToStandalonePremiumCheckoutWeb = function goToStandalonePremiumCheckoutWeb(planId, arg1) {
  return goToStandalonePremiumCheckout(
    planId,
    (body, searchParams) => {
      searchParams = searchParams.searchParams;
      searchParams.append("handoff_token", body.body.handoff_token);
      window.open(searchParams.href);
    },
    arg1,
  );
};
