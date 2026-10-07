// === Module 10098: useExpressionPickerTabData ===

// Module 10098 (useExpressionPickerTabData)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import noop from "module_19" /* 19 */;

require = fn;
const ExpressionPickerConstants = fn(1229);
({ ExpressionPickerOrder: c3, ExpressionPickerViewType: closure_4 } = ExpressionPickerConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerTabData.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(14);
  ({ expressionType, expressionPickerTabs } = arg0);
  if (cResult[0] !== expressionType) {
    let num2 = 0;
    if (React3.indexOf(expressionType) >= 0) {
      num2 = React3.indexOf(expressionType);
    }
    cResult[0] = expressionType;
    cResult[1] = num2;
    let tmp4 = num2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== expressionPickerTabs) {
    const obj2 = { EMOJI: null, GIF: null, STICKER: null };
    const obj3 = { label: null, viewType: null, show: null, order: null };
    const intl = util.intl;
    obj3.label = intl.string(util.t.Xu3wE3);
    obj3.viewType = constants.EMOJI;
    obj3.show = expressionPickerTabs.includes(constants.EMOJI);
    obj3.order = React3.indexOf(constants.EMOJI);
    obj2.EMOJI = obj3;
    const obj4 = { label: null, viewType: null, show: null, order: null };
    const intl2 = util.intl;
    obj4.label = intl2.string(util.t["6gUTsS"]);
    obj4.viewType = constants.GIF;
    obj4.show = expressionPickerTabs.includes(constants.GIF);
    obj4.order = React3.indexOf(constants.GIF);
    obj2.GIF = obj4;
    const obj5 = { label: null, viewType: null, show: null, order: null };
    const intl3 = util.intl;
    obj5.label = intl3.string(util.t.nf1s3u);
    obj5.viewType = constants.STICKER;
    obj5.show = expressionPickerTabs.includes(constants.STICKER);
    obj5.order = React3.indexOf(constants.STICKER);
    obj2.STICKER = obj5;
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function u(order) {
        return order.order;
      };
      cResult[5] = fn;
      let tmp10 = fn;
    } else {
      tmp10 = cResult[5];
    }
    const _Object = Object;
    const values = Object.values(obj2);
    const found = values.filter((show) => show.show);
    const sorted = found.sort(tmp10);
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function f(label) {
        return label.label;
      };
      cResult[6] = fn2;
      let tmp11 = fn2;
    } else {
      tmp11 = cResult[6];
    }
    const mapped = sorted.map(tmp11);
    cResult[2] = expressionPickerTabs;
    cResult[3] = sorted;
    cResult[4] = mapped;
  } else {
    if (cResult[7] === cResult[3]) {
      if (cResult[8] === tmp6) {
        let tmp15 = cResult[9];
      }
      ({ expressionPickerTabsSorted, expressionPickerTabStrings } = tmp15);
      const viewType = tmp4 < expressionPickerTabsSorted.length ? expressionPickerTabsSorted[tmp4] : expressionPickerTabsSorted[0].viewType;
      if (cResult[10] === tmp4) {
        if (cResult[11] === expressionPickerTabStrings) {
          if (cResult[12] === viewType) {
            let tmp16 = cResult[13];
          }
          return tmp16;
        }
      }
      const obj6 = { expressionPickerSelectedIndex: tmp4, expressionPickerViewType: viewType, expressionPickerTabStrings };
      cResult[10] = tmp4;
      cResult[11] = expressionPickerTabStrings;
      cResult[12] = viewType;
      cResult[13] = obj6;
      tmp16 = obj6;
    }
    const obj7 = { expressionPickerTabsSorted: cResult[3], expressionPickerTabStrings: cResult[4] };
    cResult[7] = cResult[3];
    cResult[8] = cResult[4];
    cResult[9] = obj7;
    tmp15 = obj7;
  }
}) : ((arg0) => {
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
});