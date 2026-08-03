// === Module 9604: useExpressionPickerTabData ===

// Module 9604 (useExpressionPickerTabData)
import noop from "noop";
import ExpressionPickerViewType from "ExpressionPickerViewType";

let c3;
let c4;
const require = arg1;
({ ExpressionPickerOrder: c3, ExpressionPickerViewType: c4 } = ExpressionPickerViewType);
const result = require("getSystemLocale").fileFinishedImporting("modules/expression_picker/native/useExpressionPickerTabData.tsx");

export default function useExpressionPickerTabData(arg0) {
  let expressionPickerTabs;
  let expressionType;
  ({ expressionType, expressionPickerTabs } = arg0);
  let num = 0;
  if (closure_3.indexOf(expressionType) >= 0) {
    num = closure_3.indexOf(expressionType);
  }
  const items = [expressionPickerTabs];
  const memo = React.useMemo(() => {
    let obj = { EMOJI: null, GIF: null, STICKER: null };
    obj = { label: null, viewType: null, show: null, order: null };
    const intl = expressionPickerTabs(outer1_1[2]).intl;
    obj[0] = intl.string(expressionPickerTabs(outer1_1[2]).t.Xu3wE3);
    obj[1] = outer1_4.EMOJI;
    obj[2] = expressionPickerTabs.includes(outer1_4.EMOJI);
    obj[3] = outer1_3.indexOf(outer1_4.EMOJI);
    obj[0] = obj;
    obj = { label: null, viewType: null, show: null, order: null };
    const intl2 = expressionPickerTabs(outer1_1[2]).intl;
    obj[0] = intl2.string(expressionPickerTabs(outer1_1[2]).t["6gUTsS"]);
    obj[1] = outer1_4.GIF;
    obj[2] = expressionPickerTabs.includes(outer1_4.GIF);
    obj[3] = outer1_3.indexOf(outer1_4.GIF);
    obj[1] = obj;
    const obj1 = { label: null, viewType: null, show: null, order: null };
    const intl3 = expressionPickerTabs(outer1_1[2]).intl;
    obj1[0] = intl3.string(expressionPickerTabs(outer1_1[2]).t.nf1s3u);
    obj1[1] = outer1_4.STICKER;
    obj1[2] = expressionPickerTabs.includes(outer1_4.STICKER);
    obj1[3] = outer1_3.indexOf(outer1_4.STICKER);
    obj[2] = obj1;
    const values = Object.values(obj);
    const found = values.filter((show) => show.show);
    const sorted = found.sort((order) => order.order);
    return { expressionPickerTabsSorted: sorted, expressionPickerTabStrings: sorted.map((label) => label.label) };
  }, items);
  const prop = memo.expressionPickerTabsSorted;
  return { expressionPickerSelectedIndex: num, expressionPickerViewType: num < prop.length ? prop[num] : prop[0].viewType, expressionPickerTabStrings: memo.expressionPickerTabStrings };
};