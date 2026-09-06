// discord_app/modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx
import DateUtils from "../../../utils/DateUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import hooks from "../../../../_runtime/metro/04153__.js";

require = fn;
let closure_4 = hooks.duration(30, "days");
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx");

export default function useOutboundPromotionRedemptionEndDate(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return noop.useMemo(() => {
    let tmp = dependencyMap;
    DateUtils;
    if (closure_1) {
      let outboundRedemptionEndDate = closure_0;
      if (null != closure_0.outboundRedemptionEndDate) {
        tmp = hooks;
        outboundRedemptionEndDate = outboundRedemptionEndDate.outboundRedemptionEndDate;
        let addResult = tmp(outboundRedemptionEndDate);
      } else {
        addResult = hooks(outboundRedemptionEndDate.endDate).add(closure_4);
        const obj = hooks(outboundRedemptionEndDate.endDate);
      }
    } else {
      return tmp3(hooks(closure_0.endDate), "LL");
    }
  }, items);
}
