// discord_app/modules/premium/gifting/utils/promotions/useFetchSummer2026GogoPromoEligibility.tsx
import closure_2 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { Endpoints } from "../../../../../Constants.tsx";

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