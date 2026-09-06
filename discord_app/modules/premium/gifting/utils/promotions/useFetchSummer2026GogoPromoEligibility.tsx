// === Module 10739: useFetchSummer2026GogoPromoEligibility ===

// Module 10739 (useFetchSummer2026GogoPromoEligibility)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/utils/promotions/useFetchSummer2026GogoPromoEligibility.tsx");

export const useFetchSummer2026GogoPromoEligibility = function useFetchSummer2026GogoPromoEligibility(someResult) {
  closure_0 = someResult;
  let tmp = _slicedToArray(noop.useState({ isEligible: false, hasFetched: false }), 2);
  closure_1 = tmp[1];
  _slicedToArray = noop.useRef(false);
  const items = [someResult];
  const effect = noop.useEffect(() => {
    let tmp = closure_0;
    if (closure_0) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      const HTTP = HTTPUtils.HTTP;
      const obj = { url: Endpoints.GIFTING_PROMOTION_SUMMER_2026_GOGO_CAMPAIGN_ELIGIBILITY, rejectWithError: true };
      value = HTTP.get(obj);
      value.then((body) => {
        closure_1_1({ isEligible: body.body.is_eligible, hasFetched: true });
      }).catch(() => {
        closure_1_1({ isEligible: false, hasFetched: true });
      });
      const nextPromise = value.then((body) => {
        closure_1_1({ isEligible: body.body.is_eligible, hasFetched: true });
      });
    }
  }, items);
  return tmp[0];
};