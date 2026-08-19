// === Module 12988: useOutboundPromotionRedemptionEndDate ===

// Module 12988 (useOutboundPromotionRedemptionEndDate)
import noop from "noop" /* 19 */;
import closure_4 from "module_30" /* 30 */;
import importDefaultResult from "t" /* 3975 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx");

export default function useOutboundPromotionRedemptionEndDate(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => {
    let tmp = dependencyMap;
    lib(dependencyMap[2]);
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