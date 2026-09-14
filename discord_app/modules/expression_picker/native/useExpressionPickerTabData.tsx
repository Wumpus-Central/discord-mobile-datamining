// === Module 10406: useExpressionPickerTabData ===

// Module 10406 (useExpressionPickerTabData)
import util from "util" /* 1114 */;
import noop from "module_19" /* 19 */;

require = fn;
const ExpressionPickerConstants = fn(1217);
({ ExpressionPickerOrder: c3, ExpressionPickerViewType: closure_4 } = ExpressionPickerConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerTabData.tsx");

export default function useExpressionPickerTabData(arg0) {
  ({ expressionType, expressionPickerTabs } = arg0);
  let num = 0;
  if (closure_3.indexOf(expressionType) >= 0) {
    num = closure_3.indexOf(expressionType);
  }
  const items = [expressionPickerTabs];
  const memo = noop.useMemo(() => {
    const obj = { EMOJI: null, GIF: null, STICKER: null };
    const obj2 = { label: null, viewType: null, show: null, order: null };
    const intl = util.intl;
    obj2.label = intl.string(util.t.Xu3wE3);
    obj2.viewType = constants.EMOJI;
    obj2.show = expressionPickerTabs.includes(constants.EMOJI);
    obj2.order = React3.indexOf(constants.EMOJI);
    obj.EMOJI = obj2;
    const obj3 = { label: null, viewType: null, show: null, order: null };
    const intl2 = util.intl;
    obj3.label = intl2.string(util.t["6gUTsS"]);
    obj3.viewType = constants.GIF;
    obj3.show = expressionPickerTabs.includes(constants.GIF);
    obj3.order = React3.indexOf(constants.GIF);
    obj.GIF = obj3;
    const obj4 = { label: null, viewType: null, show: null, order: null };
    const intl3 = util.intl;
    obj4.label = intl3.string(util.t.nf1s3u);
    obj4.viewType = constants.STICKER;
    obj4.show = expressionPickerTabs.includes(constants.STICKER);
    obj4.order = React3.indexOf(constants.STICKER);
    obj.STICKER = obj4;
    const values = Object.values(obj);
    const found = values.filter((show) => show.show);
    const sorted = found.sort((order) => order.order);
    return { expressionPickerTabsSorted: sorted, expressionPickerTabStrings: sorted.map((label) => label.label) };
  }, items);
  const prop = memo.expressionPickerTabsSorted;
  return { expressionPickerSelectedIndex: num, expressionPickerViewType: num < prop.length ? prop[num] : prop[0].viewType, expressionPickerTabStrings: memo.expressionPickerTabStrings };
};