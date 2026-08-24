// === Module 13043: useOutboundPromotionRedemptionEndDate ===

// Module 13043 (useOutboundPromotionRedemptionEndDate)
import closure_3 from "noop" /* 19 */;
import closure_4 from "module_30" /* 30 */;
import importDefaultResult from "t" /* 3978 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx");

export default function useOutboundPromotionRedemptionEndDate(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => {
    let tmp = closure_1_2;
    lib(closure_1_2[2]);
    if (callback) {
      let outboundRedemptionEndDate = lib;
      if (null != lib.outboundRedemptionEndDate) {
        tmp = callback(tmp[1]);
        outboundRedemptionEndDate = outboundRedemptionEndDate.outboundRedemptionEndDate;
        let addResult = tmp(outboundRedemptionEndDate);
      } else {
        addResult = callback(tmp[1])(outboundRedemptionEndDate.endDate).add(closure_1_4);
        const obj = callback(tmp[1])(outboundRedemptionEndDate.endDate);
      }
    } else {
      return tmp3(callback(tmp[1])(lib.endDate), "LL");
    }
  }, items);
};