// discord_app/modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx
import noop from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../../../_runtime/00030_get.js";
import importDefaultResult from "../../../../_runtime/03975_t.js";

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