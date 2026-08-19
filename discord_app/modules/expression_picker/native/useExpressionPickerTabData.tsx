// discord_app/modules/expression_picker/native/useExpressionPickerTabData.tsx
import noop from "../../../../_runtime/00019_noop.js";
import ExpressionPickerViewType from "../ExpressionPickerConstants.tsx";

const require = fn;
({ ExpressionPickerOrder: c3, ExpressionPickerViewType: c4 } = ExpressionPickerViewType);
const result = require("obj132").fileFinishedImporting("modules/expression_picker/native/useExpressionPickerTabData.tsx");

export default function useExpressionPickerTabData(arg0) {
  ({ expressionType, expressionPickerTabs } = arg0);
  let num = 0;
  if (closure_3.indexOf(expressionType) >= 0) {
    num = closure_3.indexOf(expressionType);
  }
  const items = [expressionPickerTabs];
  const memo = React.useMemo(() => {
    let obj = { label: null, viewType: null, show: null, order: null };
    const intl = expressionPickerTabs(dependencyMap[2]).intl;
    obj[0] = intl.string(expressionPickerTabs(dependencyMap[2]).t.Xu3wE3);
    obj[1] = closure_1_4.EMOJI;
    obj[2] = expressionPickerTabs.includes(closure_1_4.EMOJI);
    obj[3] = closure_1_3.indexOf(closure_1_4.EMOJI);
    obj[0] = obj;
    obj = { label: null, viewType: null, show: null, order: null };
    const intl2 = expressionPickerTabs(dependencyMap[2]).intl;
    obj[0] = intl2.string(expressionPickerTabs(dependencyMap[2]).t["6gUTsS"]);
    obj[1] = closure_1_4.GIF;
    obj[2] = expressionPickerTabs.includes(closure_1_4.GIF);
    obj[3] = closure_1_3.indexOf(closure_1_4.GIF);
    obj[1] = obj;
    obj1 = { label: null, viewType: null, show: null, order: null };
    const intl3 = expressionPickerTabs(dependencyMap[2]).intl;
    obj1[0] = intl3.string(expressionPickerTabs(dependencyMap[2]).t.nf1s3u);
    obj1[1] = closure_1_4.STICKER;
    obj1[2] = expressionPickerTabs.includes(closure_1_4.STICKER);
    obj1[3] = closure_1_3.indexOf(closure_1_4.STICKER);
    obj[2] = obj1;
    const values = Object.values(obj);
    const found = values.filter((item, index) => item.show);
    const sorted = found.sort((order, arg1) => order.order);
    return { expressionPickerTabsSorted: sorted, expressionPickerTabStrings: sorted.map((item, index) => item.label) };
  }, items);
  const prop = memo.expressionPickerTabsSorted;
  return { expressionPickerSelectedIndex: num, expressionPickerViewType: num < prop.length ? prop[num] : prop[0].viewType, expressionPickerTabStrings: memo.expressionPickerTabStrings };
};