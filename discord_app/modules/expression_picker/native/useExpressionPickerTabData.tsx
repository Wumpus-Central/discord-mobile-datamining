// discord_app/modules/expression_picker/native/useExpressionPickerTabData.tsx
import react2 from "../../../../_runtime/00576_react.js";
import intl4 from "../../../intl/index.native.tsx";
import react from "../../../../_runtime/00019_react.js";
import ExpressionPickerConstants from "../ExpressionPickerConstants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ ExpressionPickerOrder: c3, ExpressionPickerViewType: closure_4 } = ExpressionPickerConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let expressionPickerTabStrings;
      let expressionPickerTabs;
      let expressionPickerTabsSorted;
      let expressionType;
      let intl;
      let intl2;
      let intl3;
      let obj3;
      let obj4;
      let obj5;
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(14);
      ({ expressionType, expressionPickerTabs } = arg0);
      if (cResult[0] !== expressionType) {
        let num2 = 0;
        if (_false.indexOf(expressionType) >= 0) {
          num2 = _false.indexOf(expressionType);
        }
        cResult[0] = expressionType;
        cResult[1] = num2;
        tmp4 = num2;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] !== expressionPickerTabs) {
        let tmp10;
        let tmp11;
        const obj2 = { EMOJI: obj3, GIF: obj4, STICKER: obj5 };
        obj3 = {
          label: intl.string(intl4.t.Xu3wE3),
          viewType: constants.EMOJI,
          show: expressionPickerTabs.includes(constants.EMOJI),
          order: _false.indexOf(constants.EMOJI),
        };
        intl = intl4.intl;
        obj4 = {
          label: intl2.string(intl4.t["6gUTsS"]),
          viewType: constants.GIF,
          show: expressionPickerTabs.includes(constants.GIF),
          order: _false.indexOf(constants.GIF),
        };
        intl2 = intl4.intl;
        obj5 = {
          label: intl3.string(intl4.t.nf1s3u),
          viewType: constants.STICKER,
          show: expressionPickerTabs.includes(constants.STICKER),
          order: _false.indexOf(constants.STICKER),
        };
        intl3 = intl4.intl;
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function u(order) {
            return order.order;
          };
          cResult[5] = fn;
          tmp10 = fn;
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
          tmp11 = fn2;
        } else {
          tmp11 = cResult[6];
        }
        const mapped = sorted.map(tmp11);
        cResult[2] = expressionPickerTabs;
        cResult[3] = sorted;
        cResult[4] = mapped;
        tmp6 = mapped;
        tmp5 = sorted;
      } else {
        tmp5 = cResult[3];
        tmp6 = cResult[4];
      }
      if (cResult[7] === tmp5) {
        let tmp13;
        if (cResult[8] === tmp6) {
          tmp13 = cResult[9];
        }
        ({ expressionPickerTabsSorted, expressionPickerTabStrings } = tmp13);
        const viewType = (
          tmp4 < expressionPickerTabsSorted.length ? expressionPickerTabsSorted[tmp4] : expressionPickerTabsSorted[0]
        ).viewType;
        if (cResult[10] === tmp4) {
          if (cResult[11] === expressionPickerTabStrings) {
            let tmp14;
            if (cResult[12] === viewType) {
              tmp14 = cResult[13];
            }
            return tmp14;
          }
        }
        const obj6 = {
          expressionPickerSelectedIndex: tmp4,
          expressionPickerViewType: viewType,
          expressionPickerTabStrings,
        };
        cResult[10] = tmp4;
        cResult[11] = expressionPickerTabStrings;
        cResult[12] = viewType;
        cResult[13] = obj6;
        tmp14 = obj6;
      }
      const obj7 = { expressionPickerTabsSorted: tmp5, expressionPickerTabStrings: tmp6 };
      cResult[7] = tmp5;
      cResult[8] = tmp6;
      cResult[9] = obj7;
      tmp13 = obj7;
    }
  : (arg0) => {
      let expressionPickerTabs;
      let expressionType;
      ({ expressionType, expressionPickerTabs } = arg0);
      let num = 0;
      if (closure_3.indexOf(expressionType) >= 0) {
        num = closure_3.indexOf(expressionType);
      }
      const items = [expressionPickerTabs];
      const memo = react.useMemo(() => {
        let intl;
        let intl2;
        let intl3;
        let obj2;
        let obj3;
        let obj4;
        const obj = { EMOJI: obj2, GIF: obj3, STICKER: obj4 };
        obj2 = {
          label: intl.string(intl4.t.Xu3wE3),
          viewType: constants.EMOJI,
          show: expressionPickerTabs.includes(constants.EMOJI),
          order: _false.indexOf(constants.EMOJI),
        };
        intl = intl4.intl;
        obj3 = {
          label: intl2.string(intl4.t["6gUTsS"]),
          viewType: constants.GIF,
          show: expressionPickerTabs.includes(constants.GIF),
          order: _false.indexOf(constants.GIF),
        };
        intl2 = intl4.intl;
        obj4 = {
          label: intl3.string(intl4.t.nf1s3u),
          viewType: constants.STICKER,
          show: expressionPickerTabs.includes(constants.STICKER),
          order: _false.indexOf(constants.STICKER),
        };
        intl3 = intl4.intl;
        const values = Object.values(obj);
        const found = values.filter((show) => show.show);
        const sorted = found.sort((order) => order.order);
        const obj5 = {
          expressionPickerTabsSorted: sorted,
          expressionPickerTabStrings: sorted.map((label) => label.label),
        };
        return obj5;
      }, items);
      const prop = memo.expressionPickerTabsSorted;
      let obj = {
        expressionPickerSelectedIndex: num,
        expressionPickerViewType: (num < prop.length ? prop[num] : prop[0]).viewType,
        expressionPickerTabStrings: memo.expressionPickerTabStrings,
      };
      return obj;
    };
const result = size.fileFinishedImporting("modules/expression_picker/native/useExpressionPickerTabData.tsx");

export default tmp3;
