// discord_app/modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx
import react2 from "../../../../_runtime/00576_react.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import 04461__ from "../../../../_runtime/metro/04461__.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4 = module_4461.duration(30, "days");
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((endDate, arg1) => {
  let tmp7;
  const obj = react2;
  const cResult = obj.c(4);
  if (cResult[0] === arg1) {
    if (cResult[1] === endDate.endDate) {
      let tmp4;
      if (cResult[2] === endDate.outboundRedemptionEndDate) {
        tmp4 = cResult[3];
      }
      return tmp4;
    }
  }
  const dateFormat = DateUtils.dateFormat;
  DateUtils;
  if (arg1) {
    let addResult;
    if (null != endDate.outboundRedemptionEndDate) {
      addResult = module_4461(endDate.outboundRedemptionEndDate);
    } else {
      const obj2 = module_4461(endDate.endDate);
      addResult = obj2.add(closure_4);
    }
    tmp7 = addResult;
  } else {
    tmp7 = module_4461(endDate.endDate);
  }
  const dateFormatResult = dateFormat(tmp7, "LL");
  cResult[0] = arg1;
  cResult[1] = endDate.endDate;
  cResult[2] = endDate.outboundRedemptionEndDate;
  cResult[3] = dateFormatResult;
  tmp4 = dateFormatResult;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return react.useMemo(() => {
    let tmp5;
    const dateFormat = DateUtils.dateFormat;
    DateUtils;
    if (closure_1) {
      let addResult;
      if (null != closure_0.outboundRedemptionEndDate) {
        addResult = module_4461(closure_0.outboundRedemptionEndDate);
      } else {
        const obj = module_4461(closure_0.endDate);
        addResult = obj.add(closure_4);
      }
      tmp5 = addResult;
    } else {
      tmp5 = module_4461(closure_0.endDate);
    }
    return dateFormat(tmp5, "LL");
  }, items);
});
const result = size.fileFinishedImporting("modules/premium/hooks/useOutboundPromotionRedemptionEndDate.tsx");

export default tmp2;