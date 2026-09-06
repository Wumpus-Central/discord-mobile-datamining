// discord_app/modules/expression_picker/native/useExpressionPickerTabData.tsx
import util from "../../../intl/index.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ExpressionPickerConstants = fn(1219);
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
    let obj = { EMOJI: null, GIF: null, STICKER: null };
    obj = { label: null, viewType: null, show: null, order: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.Xu3wE3);
    obj.viewType = constants.EMOJI;
    obj.show = expressionPickerTabs.includes(constants.EMOJI);
    obj.order = React3.indexOf(constants.EMOJI);
    obj.EMOJI = obj;
    obj = { label: null, viewType: null, show: null, order: null };
    const intl2 = util.intl;
    obj.label = intl2.string(util.t["6gUTsS"]);
    obj.viewType = constants.GIF;
    obj.show = expressionPickerTabs.includes(constants.GIF);
    obj.order = React3.indexOf(constants.GIF);
    obj.GIF = obj;
    const obj1 = { label: null, viewType: null, show: null, order: null };
    const intl3 = util.intl;
    obj1.label = intl3.string(util.t.nf1s3u);
    obj1.viewType = constants.STICKER;
    obj1.show = expressionPickerTabs.includes(constants.STICKER);
    obj1.order = React3.indexOf(constants.STICKER);
    obj.STICKER = obj1;
    const values = Object.values(obj);
    const found = values.filter((show) => show.show);
    const sorted = found.sort((order) => order.order);
    return { expressionPickerTabsSorted: sorted, expressionPickerTabStrings: sorted.map((label) => label.label) };
  }, items);
  const prop = memo.expressionPickerTabsSorted;
  return {
    expressionPickerSelectedIndex: num,
    expressionPickerViewType: num < prop.length ? prop[num] : prop[0].viewType,
    expressionPickerTabStrings: memo.expressionPickerTabStrings,
  };
}
