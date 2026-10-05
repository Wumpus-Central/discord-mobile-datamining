// === Module 14635: ExplicitMediaSettingsActionSheet ===

// Module 14635 (ExplicitMediaSettingsActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { content: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((currentValue) => {
  let options;
  let subtitle;
  let title;
  let tmp5;
  let obj = options(576);
  const cResult = obj.c(18);
  ({ title, subtitle, options } = currentValue);
  let SHOW = currentValue.currentValue;
  const tmp4 = closure_7();
  if (cResult[0] !== options) {
    const fn = function n(arg0) {
      let closure_0 = arg0;
      const found = options.find((value) => value.value === closure_0);
      if (null != found) {
        found.onPress();
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
      }
    };
    cResult[0] = options;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === subtitle) {
    const content = tmp4.content;
    if (SHOW == null) {
      SHOW = options(1197).ExplicitContentRedaction.SHOW;
    }
    if (cResult[5] !== options) {
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(label) {
            const obj = { label: label.label, value: label.value };
            return closure_1_5(options(dependencyMap[10]).TableRadioRow, obj, label.value);
          }
        }
        cResult[7] = R;
      } else {
        class R {
          constructor(label) {
            const obj = { label: label.label, value: label.value };
            return closure_1_5(options(dependencyMap[10]).TableRadioRow, obj, label.value);
          }
        }
      }
      const mapped = options.map(R);
      cResult[5] = options;
      cResult[6] = mapped;
    } else {
      class R {
        constructor(label) {
          const obj = { label: label.label, value: label.value };
          return closure_1_5(options(dependencyMap[10]).TableRadioRow, obj, label.value);
        }
      }
    }
    if (cResult[8] === tmp5) {
      class R {
        constructor(label) {
          const obj = { label: label.label, value: label.value };
          return closure_1_5(options(dependencyMap[10]).TableRadioRow, obj, label.value);
        }
      }
    }
    let obj2 = { defaultValue: SHOW, onChange: tmp5, hasIcons: false, children: tmp9 };
    cResult[8] = tmp5;
    cResult[9] = SHOW;
    cResult[10] = tmp9;
    cResult[11] = closure_5(options(6072).TableRadioGroup, obj2);
    const tmp15 = closure_5(options(6072).TableRadioGroup, obj2);
  }
  cResult[2] = subtitle;
  cResult[3] = title;
  cResult[4] = closure_5(options(6644).BottomSheetTitleHeader, { title, subtitle });
  closure_5(options(6644).BottomSheetTitleHeader, { title, subtitle });
}) : ((options) => {
  let TableRadioGroup;
  let obj3;
  let subtitle;
  let title;
  options = options.options;
  let SHOW = options.currentValue;
  ({ title, subtitle } = options);
  const items = [options];
  const tmp = closure_7();
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    const found = options.find((value) => value.value === closure_0);
    if (null != found) {
      found.onPress();
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  }, items);
  BottomSheet = options(6645).BottomSheet;
  const items1 = [closure_5(options(6644).BottomSheetTitleHeader, { title, subtitle }), ];
  let obj = { style: tmp.content, children: closure_5(TableRadioGroup, obj3) };
  TableRadioGroup = options(6072).TableRadioGroup;
  const tmp4 = options;
  if (SHOW == null) {
    SHOW = tmp4(1197).ExplicitContentRedaction.SHOW;
  }
  let obj2 = { startExpanded: true, children: items1 };
  obj3 = {
    defaultValue: SHOW,
    onChange: callback,
    hasIcons: false,
    children: options.map((label) => {
      const obj = { label: label.label, value: label.value };
      return closure_1_5(options(dependencyMap[10]).TableRadioRow, obj, label.value);
    })
  };
  items1[1] = closure_5(View, obj);
  return closure_6(BottomSheet, obj2);
});
const result = size.fileFinishedImporting("modules/explicit_media_redaction/native/ExplicitMediaSettingsActionSheet.tsx");

export default tmp3;