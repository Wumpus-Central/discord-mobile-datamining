// === Module 15620: DisplayNameStylesGummyCustomColorSheet ===

// Module 15620 (DisplayNameStylesGummyCustomColorSheet)
import nativeDefault from "native" /* 587 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1407 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import HapticUtils from "HapticUtils" /* 5057 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const DisplayNameStylesConstants = fn(1408);
({ DISPLAY_NAME_STYLES_GUMMY_HUE_LIGHTNESS: hasOwnProperty, DISPLAY_NAME_STYLES_GUMMY_HUE_SATURATION: metroRequire } = DisplayNameStylesConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { body: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, alignItems: "center" }, huePickerInset: null, previewWrapper: null, preview: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, alignItems: "center" };
obj2.huePickerInset = { paddingHorizontal: nativeDefault.space.PX_4 + 2, alignSelf: "stretch" };
obj2.previewWrapper = { width: "25%", padding: 2 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_4 + 2, alignSelf: "stretch" };
obj2.preview = { height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesGummyCustomColorSheet(onSelect) {
  const cResult = onSelect(576).c(28);
  onSelect = onSelect.onSelect;
  const tmp4 = closure_9();
  let obj = onSelect(576);
  let obj2 = onSelect(4850);
  const obj3 = onSelect(1407);
  const sharedValue = obj2.useSharedValue(obj3.wrapHue(onSelect(1103).int2hslRaw(onSelect.initialColor).h));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const result = onSelect(5057).triggerHapticFeedback(onSelect(5057).HapticFeedbackTypes.IMPACT_LIGHT);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === sharedValue) {
    if (cResult[2] === onSelect) {
      let tmp7 = cResult[3];
    }
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.WTqQ5e);
      cResult[4] = stringResult;
      let tmp8 = stringResult;
    } else {
      tmp8 = cResult[4];
    }
    const _Symbol2 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.XqMe3N);
      cResult[5] = stringResult1;
      let tmp10 = stringResult1;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== tmp7) {
      const obj5 = { title: tmp8, trailing: null };
      const obj6 = { variant: "primary", size: "sm", text: tmp10, onPress: tmp7 };
      obj5.trailing = closure_7(tmp(5379).Button, obj6);
      const tmp16 = closure_7(sharedValue(15615), obj5);
      cResult[6] = tmp7;
      cResult[7] = tmp16;
      let tmp12 = tmp16;
      const tmp15 = sharedValue(15615);
    } else {
      tmp12 = cResult[7];
    }
    if (cResult[8] !== sharedValue) {
      const obj7 = { hue: sharedValue };
      const tmp20 = closure_7(sharedValue(15621), obj7);
      cResult[8] = sharedValue;
      cResult[9] = tmp20;
      let tmp17 = tmp20;
    } else {
      tmp17 = cResult[9];
    }
    if (cResult[10] === tmp4.preview) {
      if (cResult[11] === tmp17) {
        let tmp21 = cResult[12];
      }
      if (cResult[13] === tmp4.previewWrapper) {
        if (cResult[14] === tmp21) {
          let tmp25 = cResult[15];
        }
        if (cResult[16] !== sharedValue) {
          const obj8 = { hue: sharedValue, onPanFinalize: first, saturation, lightness, fullWidth: true };
          const tmp34 = closure_7(sharedValue(14828), obj8);
          cResult[16] = sharedValue;
          cResult[17] = tmp34;
          let tmp29 = tmp34;
        } else {
          tmp29 = cResult[17];
        }
        if (cResult[18] === tmp4.huePickerInset) {
          if (cResult[19] === tmp29) {
            let tmp35 = cResult[20];
          }
          if (cResult[21] === tmp4.body) {
            if (cResult[22] === tmp35) {
              if (cResult[23] === tmp25) {
                let tmp39 = cResult[24];
              }
              if (cResult[25] === tmp39) {
                if (cResult[26] === tmp12) {
                  let tmp43 = cResult[27];
                }
                return tmp43;
              }
              const obj9 = { header: tmp12, children: tmp39 };
              const tmp45 = closure_7(tmp(6839).BottomSheet, obj9);
              cResult[25] = tmp39;
              cResult[26] = tmp12;
              cResult[27] = tmp45;
              tmp43 = tmp45;
            }
          }
          const obj10 = { style: tmp4.body, children: null };
          const items = [tmp25, tmp35];
          obj10.children = items;
          const tmp42 = closure_8(View, obj10);
          cResult[21] = tmp4.body;
          cResult[22] = tmp35;
          cResult[23] = tmp25;
          cResult[24] = tmp42;
          tmp39 = tmp42;
        }
        const obj11 = { style: tmp4.huePickerInset, children: tmp29 };
        const tmp38 = closure_7(View, obj11);
        cResult[18] = tmp4.huePickerInset;
        cResult[19] = tmp29;
        cResult[20] = tmp38;
        tmp35 = tmp38;
      }
      const obj12 = { style: tmp4.previewWrapper, children: tmp21 };
      const tmp28 = closure_7(View, obj12);
      cResult[13] = tmp4.previewWrapper;
      cResult[14] = tmp21;
      cResult[15] = tmp28;
      tmp25 = tmp28;
    }
    const obj13 = { style: tmp4.preview, children: tmp17 };
    const tmp24 = closure_7(View, obj13);
    cResult[10] = tmp4.preview;
    cResult[11] = tmp17;
    cResult[12] = tmp24;
    tmp21 = tmp24;
  }
  class P {
    constructor() {
      obj = closure_0(closure_2[11]);
      result = obj.triggerHapticFeedback(closure_0(closure_2[11]).HapticFeedbackTypes.IMPACT_MEDIUM);
      obj2 = closure_0(closure_2[9]);
      tmp2 = onSelect(obj2.hueToGummyColor(closure_1.get()));
      obj3 = closure_1(closure_2[12]);
      hideActionSheetResult = obj3.hideActionSheet();
      return;
    }
  }
  cResult[1] = sharedValue;
  cResult[2] = onSelect;
  cResult[3] = P;
  tmp7 = P;
  const obj4 = onSelect(1103);
}) : (function DisplayNameStylesGummyCustomColorSheet(onSelect) {
  onSelect = onSelect.onSelect;
  const tmp = closure_9();
  let obj = onSelect(4850);
  let obj2 = onSelect(1407);
  const sharedValue = obj.useSharedValue(obj2.wrapHue(onSelect(1103).int2hslRaw(onSelect.initialColor).h));
  const items = [sharedValue, onSelect];
  const callback = noop.useCallback(() => {
    const result = onSelect(5057).triggerHapticFeedback(onSelect(5057).HapticFeedbackTypes.IMPACT_LIGHT);
  }, []);
  const callback1 = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelect(DisplayNameStylesUtils.hueToGummyColor(sharedValue.get()));
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const obj4 = { header: null, children: null };
  const obj5 = { title: null, trailing: null };
  const obj3 = onSelect(1103);
  const intl = onSelect(1126).intl;
  obj5.title = intl.string(onSelect(1126).t.WTqQ5e);
  const obj6 = { variant: "primary", size: "sm", text: null, onPress: null };
  const intl2 = onSelect(1126).intl;
  obj6.text = intl2.string(onSelect(1126).t.XqMe3N);
  obj6.onPress = callback1;
  obj5.trailing = closure_7(onSelect(5379).Button, obj6);
  obj4.header = closure_7(sharedValue(15615), obj5);
  const obj7 = { style: tmp.body, children: null };
  const obj8 = { style: tmp.previewWrapper, children: null };
  const tmp5 = sharedValue(15615);
  obj8.children = closure_7(View, { style: tmp.preview, children: closure_7(sharedValue(15621), { hue: sharedValue }) });
  const items1 = [closure_7(View, obj8), ];
  const obj10 = { style: tmp.huePickerInset, children: closure_7(sharedValue(14828), { hue: sharedValue, onPanFinalize: callback, saturation, lightness, fullWidth: true }) };
  items1[1] = closure_7(View, obj10);
  obj7.children = items1;
  obj4.children = closure_8(View, obj7);
  return closure_7(onSelect(6839).BottomSheet, obj4);
});