// === Module 10739: useFetchSummer2026GogoPromoEligibility ===

// Module 10739 (useFetchSummer2026GogoPromoEligibility)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import { Endpoints } from "ME" /* 1074 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/gifting/utils/promotions/useFetchSummer2026GogoPromoEligibility.tsx");

export const useFetchSummer2026GogoPromoEligibility = function useFetchSummer2026GogoPromoEligibility(someResult) {
  closure_0 = someResult;
  let tmp = callback(React.useState({ isEligible: false, hasFetched: false }), 2);
  closure_1 = tmp[1];
  callback = React.useRef(false);
  const items = [someResult];
  const effect = React.useEffect(() => {
    let tmp = someResult;
    if (someResult) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      const HTTP = someResult(table[3]).HTTP;
      const obj = { url: null, rejectWithError: true };
      obj[0] = closure_1_4.GIFTING_PROMOTION_SUMMER_2026_GOGO_CAMPAIGN_ELIGIBILITY;
      const value = HTTP.get(obj);
      value.then((body) => {
        callback({ isEligible: body.body.is_eligible, hasFetched: true });
      }).catch(() => {
        callback({ isEligible: false, hasFetched: true });
      });
      const nextPromise = value.then((body) => {
        callback({ isEligible: body.body.is_eligible, hasFetched: true });
      });
    }
  }, items);
  return tmp[0];
};