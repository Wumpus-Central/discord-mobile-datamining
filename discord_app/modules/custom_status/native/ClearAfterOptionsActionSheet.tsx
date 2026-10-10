// === Module 10606: ClearAfterOptionsActionSheet ===

// Module 10606 (ClearAfterOptionsActionSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import TableRadioRow from "TableRadioRow" /* 6261 */;
import TableRadioGroup from "TableRadioGroup" /* 6262 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 6838 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6839 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const ClearAfterOptions = fn(10518).ClearAfterOptions;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, buttonWrapper: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj2.buttonWrapper = { marginTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_24, paddingBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/custom_status/native/ClearAfterOptionsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ClearAfterOptionsActionSheet(arg0) {
  const cResult = onChange(576).c(18);
  ({ initialValue, onChange } = arg0);
  const tmp4 = closure_9();
  const obj = onChange(576);
  const first = _slicedToArray(noop.useState(initialValue), 2)[0];
  if (cResult[0] === onChange) {
    if (cResult[1] === first) {
      let tmp8 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { title: null };
      const intl = onChange(1126).intl;
      obj2.title = intl.string(onChange(1126).t["5XnRQ+"]);
      const tmp12 = closure_7(onChange(6838).BottomSheetTitleHeader, obj2);
      cResult[3] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = onChange(1126).intl;
      const stringResult = intl2.string(onChange(1126).t.E45wvP);
      cResult[4] = stringResult;
      let tmp13 = stringResult;
    } else {
      tmp13 = cResult[4];
    }
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const mapped = ClearAfterOptions.map((value) => closure_1_7(onChange(6261).TableRadioRow, { value, label: first(10607)(value) }, value));
      cResult[5] = mapped;
      let tmp15 = mapped;
    } else {
      tmp15 = cResult[5];
    }
    if (cResult[6] !== initialValue) {
      const obj3 = { onChange: tmp7, title: tmp13, defaultValue: initialValue, hasIcons: false, children: tmp15 };
      const tmp20 = closure_7(onChange(6262).TableRadioGroup, obj3);
      cResult[6] = initialValue;
      cResult[7] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[7];
    }
    const _Symbol4 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = onChange(1126).intl;
      const stringResult1 = intl3.string(onChange(1126).t.TyCVIq);
      cResult[8] = stringResult1;
      let tmp21 = stringResult1;
    } else {
      tmp21 = cResult[8];
    }
    if (cResult[9] !== tmp8) {
      const obj4 = { onPress: tmp8, text: tmp21 };
      const tmp25 = closure_7(onChange(5379).Button, obj4);
      cResult[9] = tmp8;
      cResult[10] = tmp25;
      let tmp23 = tmp25;
    } else {
      tmp23 = cResult[10];
    }
    if (cResult[11] === tmp4.buttonWrapper) {
      if (cResult[12] === tmp23) {
        let tmp26 = cResult[13];
      }
      if (cResult[14] === tmp4.content) {
        if (cResult[15] === tmp26) {
          if (cResult[16] === tmp18) {
            let tmp30 = cResult[17];
          }
          return tmp30;
        }
      }
      const obj5 = { contentStyles: tmp4.content, header: tmp10, children: null };
      const items = [tmp18, tmp26];
      obj5.children = items;
      const tmp32 = closure_8(onChange(6839).BottomSheet, obj5);
      cResult[14] = tmp4.content;
      cResult[15] = tmp26;
      cResult[16] = tmp18;
      cResult[17] = tmp32;
      tmp30 = tmp32;
    }
    const obj6 = { style: tmp4.buttonWrapper, children: tmp23 };
    const tmp29 = closure_7(View, obj6);
    cResult[11] = tmp4.buttonWrapper;
    cResult[12] = tmp23;
    cResult[13] = tmp29;
    tmp26 = tmp29;
  }
  function handleConfirm() {
    onChange(first);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }
  cResult[0] = onChange;
  cResult[1] = first;
  cResult[2] = handleConfirm;
  tmp8 = handleConfirm;
  const tmp5 = _slicedToArray(noop.useState(initialValue), 2);
}) : (function ClearAfterOptionsActionSheet(arg0) {
  ({ initialValue, onChange: require } = arg0);
  const tmp = closure_9();
  const tmp2 = _slicedToArray(noop.useState(initialValue), 2);
  closure_1 = tmp2[0];
  const obj = { contentStyles: tmp.content, header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["5XnRQ+"]);
  obj.header = closure_7(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const obj3 = { onChange: tmp2[1], title: null, defaultValue: null, hasIcons: false, children: null };
  const intl2 = util.intl;
  obj3.title = intl2.string(util.t.E45wvP);
  obj3.defaultValue = initialValue;
  obj3.children = ClearAfterOptions.map((value) => closure_1_7(TableRadioRow.TableRadioRow, { value, label: closure_1(10607)(value) }, value));
  const items = [closure_7(TableRadioGroup.TableRadioGroup, obj3), ];
  const obj4 = { style: tmp.buttonWrapper, children: null };
  const obj5 = {
    onPress: function handleConfirm() {
      require(closure_1);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    text: null
  };
  const intl3 = util.intl;
  obj5.text = intl3.string(util.t.TyCVIq);
  obj4.children = closure_7(components_Button_Button.Button, obj5);
  items[1] = closure_7(View, obj4);
  obj.children = items;
  return closure_8(Sheet_BottomSheet.BottomSheet, obj);
});