// discord_app/modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx
import noop from "noop";
import module_30 from "module_30";
import importDefaultResult from "t";

const require = arg1;
const result = require("resetCache").fileFinishedImporting("modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx");

export default function useOutboundPromotionRedemptionEndDate(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => {
    let tmp = outer1_2;
    lib(outer1_2[2]);
    if (callback) {
      let outboundRedemptionEndDate = lib;
      if (null != lib.outboundRedemptionEndDate) {
        tmp = callback(tmp[1]);
        outboundRedemptionEndDate = outboundRedemptionEndDate.outboundRedemptionEndDate;
        let addResult = tmp(outboundRedemptionEndDate);
      } else {
        addResult = callback(tmp[1])(outboundRedemptionEndDate.endDate).add(outer1_4);
        const obj = callback(tmp[1])(outboundRedemptionEndDate.endDate);
      }
    } else {
      return tmp3(callback(tmp[1])(lib.endDate), "LL");
    }
  }, items);
};