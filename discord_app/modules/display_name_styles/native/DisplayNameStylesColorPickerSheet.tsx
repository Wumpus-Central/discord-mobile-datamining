// === Module 15174: DisplayNameStylesColorPickerSheet ===

// Module 15174 (DisplayNameStylesColorPickerSheet)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1394 */;
import DisplayNameStylesConstants from "DisplayNameStylesConstants" /* 1395 */;
import CheckmarkLargeIcon2 from "CheckmarkLargeIcon" /* 4577 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import HapticUtils from "HapticUtils" /* 4855 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14421 */;
import ColorPickerConsts from "ColorPickerConsts" /* 15171 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, selectedColor;

let StyleSheet;
let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let size1;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = react_native);
let getColorPresetsForEffect = DisplayNameStylesConstants.getColorPresetsForEffect;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, contentContainer: obj2, presetGrid: obj3, presetRow: obj4, presetColor: size, presetColorSelected: obj5, checkmarkOverlay: obj6, checkmark: size1, buttonsContainer: obj7, button: { flex: 1 } };
obj2 = { alignSelf: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
size = { width: 42, height: 42, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
obj5 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj6 = { alignItems: "center", justifyContent: "center" };
const merged = Object.assign(StyleSheet.absoluteFillObject);
size1 = { width: ColorPickerConsts.CHECKMARK_SIZE, height: ColorPickerConsts.CHECKMARK_SIZE };
obj7 = { alignSelf: "stretch", flexDirection: "row", gap: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((selectedColor) => {
  let closure_4;
  let closure_6;
  let closure_7;
  let color;
  let onSelectColor;
  let presetRow;
  let obj = selectedColor(onSelectColor[11]);
  const cResult = obj.c(68);
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  onSelectColor = selectedColor.onSelectColor;
  _slicedToArray = closure_11();
  const tmp2 = closure_11();
  let obj2 = selectedColor(onSelectColor[12]);
  const bottomSheetRef = obj2.useBottomSheetRef().bottomSheetRef;
  const tmp3 = selectedEffectId(onSelectColor[13])()[selectedEffectId];
  react = tmp3;
  if (cResult[0] !== selectedEffectId) {
    let tmp6;
    const _Symbol = Symbol;
    let str = "react.memo_cache_sentinel";
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function y(arg0) {
        return arg0[0];
      };
      cResult[2] = fn;
      tmp6 = fn;
    } else {
      tmp6 = cResult[2];
    }
    const arr = getColorPresetsForEffect(selectedEffectId);
    const mapped = arr.map(tmp6);
    cResult[0] = selectedEffectId;
    cResult[1] = mapped;
  }
  if (cResult[3] === selectedColor) {
    let tmp9;
    let tmp16;
    if (cResult[4] === selectedEffectId) {
      tmp9 = cResult[5];
    }
    [color, closure_6] = react.useState(tmp9);
    getColorPresetsForEffect = tmp14;
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(arg0) {
          closure_6(arg0);
        }
      }
      cResult[6] = M;
      tmp16 = M;
    } else {
      class M {
        constructor(arg0) {
          closure_6(arg0);
        }
      }
    }
    M = tmp16;
    if (cResult[7] === tmp3[0]) {
      class M {
        constructor(arg0) {
          closure_6(arg0);
        }
      }
      if (cResult[10] === color) {
        class M {
          constructor(arg0) {
            closure_6(arg0);
          }
        }
        if (cResult[13] === tmp3[0]) {
          class M {
            constructor(arg0) {
              closure_6(arg0);
            }
          }
        }
        class L {
          constructor() {
            let items;
            const obj = HapticUtils;
            const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
            if (closure_7) {
              onSelectColor(first);
              const obj3 = { default: first === closure_4[0], colors: items };
              items = [first];
              const obj2 = AnalyticsUtilsDefault;
              obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
            }
            const obj4 = ActionSheetActionCreatorsDefault;
            obj4.hideActionSheet();
          }
        }
        cResult[13] = tmp3[0];
        cResult[14] = color !== selectedColor;
        cResult[15] = color;
        cResult[16] = onSelectColor;
        cResult[17] = L;
      }
      cResult[10] = color;
      cResult[11] = onSelectColor;
      cResult[12] = tmp19;
    }
    class D {
      constructor() {
        const obj = HapticUtils;
        const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
        onSelectColor(closure_4[0]);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet();
      }
    }
    cResult[7] = tmp3[0];
    cResult[8] = onSelectColor;
    class I {
      constructor() {
        const obj = DisplayNameStylesUtils;
        return obj.resolveSolidPresetSeed(selectedColor, selectedEffectId);
      }
    }
  }
  class I {
    constructor() {
      const obj = DisplayNameStylesUtils;
      return obj.resolveSolidPresetSeed(selectedColor, selectedEffectId);
    }
  }
  cResult[3] = selectedColor;
  cResult[4] = selectedEffectId;
  cResult[5] = I;
  tmp9 = I;
}) : ((selectedColor) => {
  let Button;
  let Button2;
  let Button3;
  let chunkResult;
  let closure_4;
  let closure_6;
  let color;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items5;
  let items6;
  let obj11;
  let obj13;
  let obj3;
  let obj4;
  let obj5;
  let obj6;
  let presetRow;
  let tmp10;
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  const onSelectColor = selectedColor.onSelectColor;
  color = undefined;
  closure_6 = undefined;
  let tmp = closure_11();
  _slicedToArray = tmp;
  let obj = selectedColor(onSelectColor[12]);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  const tmp2 = selectedEffectId(onSelectColor[13])()[selectedEffectId];
  react = tmp2;
  let items = [selectedEffectId];
  const memo = react.useMemo(() => {
    const arr = getColorPresetsForEffect(selectedEffectId);
    return arr.map((item) => item[0]);
  }, items);
  [color, closure_6] = react.useState(() => {
    const obj = DisplayNameStylesUtils;
    return obj.resolveSolidPresetSeed(selectedColor, selectedEffectId);
  });
  const items1 = [color, selectedColor];
  const memo1 = react.useMemo(() => first !== selectedColor, items1);
  let closure_8 = react.useCallback((arg0) => {
    closure_6(arg0);
  }, []);
  const items2 = [tmp2, onSelectColor];
  const items3 = [color, onSelectColor];
  const callback = react.useCallback(() => {
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    onSelectColor(closure_4[0]);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet();
  }, items2);
  const items4 = [memo1, color, onSelectColor, tmp2];
  const callback1 = react.useCallback(() => {
    let obj = {
      color,
      onSelect(arg0) {
        const obj = selectedColor(onSelectColor[15]);
        const result = obj.triggerHapticFeedback(selectedColor(onSelectColor[15]).HapticFeedbackTypes.IMPACT_MEDIUM);
        closure_1_2(arg0);
        const obj2 = selectedEffectId(onSelectColor[16]);
        obj2.hideActionSheet();
      },
      actionButtonVariant: "primary"
    };
    showCustomColorPickerActionSheetDefault(obj);
  }, items3);
  const callback2 = react.useCallback(() => {
    let items;
    const obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    if (memo1) {
      onSelectColor(first);
      const obj3 = { default: first === closure_4[0], colors: items };
      items = [first];
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    }
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet();
  }, items4);
  let obj2 = { ref: bottomSheetRef, header: closure_9(tmp10, obj3), children: closure_9(color, obj5) };
  BottomSheet = selectedColor(onSelectColor[26]).BottomSheet;
  obj3 = { title: intl.string(selectedEffectId(onSelectColor[20])["6OxgN7"]), trailing: closure_9(Button, obj4) };
  tmp10 = selectedEffectId(onSelectColor[21]);
  intl = selectedColor(onSelectColor[19]).intl;
  obj4 = { text: intl2.string(selectedColor(onSelectColor[19]).t.XqMe3N), onPress: callback2, variant: "primary", size: "sm" };
  Button = selectedColor(onSelectColor[22]).Button;
  intl2 = selectedColor(onSelectColor[19]).intl;
  obj5 = { style: tmp.container, children: closure_10(color, obj6) };
  obj6 = { style: tmp.contentContainer, children: items5 };
  const obj7 = {
    style: tmp.presetGrid,
    children: chunkResult.map((arr, index) => {
      let presetColor;
      let closure_0 = index;
      let obj = {
        style: presetRow.presetRow,
        children: arr.map((item, index) => {
          let CheckmarkLargeIcon;
          let items;
          let obj3;
          let obj5;
          let str;
          let tmp5Result;
          let closure_0 = item;
          let tmp = item === first;
          const obj = {
            onPress() {
              return closure_2_8(closure_0);
            },
            style: items,
            accessibilityRole: "button",
            accessibilityState: { selected: tmp },
            accessibilityLabel: tmp5Result.int2hex(item),
            children: tmp
          };
          items = [presetColor.presetColor, , ];
          const obj2 = { backgroundColor: obj3.int2hex(item) };
          items[1] = obj2;
          items[2] = tmp && presetColor.presetColorSelected;
          obj3 = utils_ColorUtils;
          tmp5Result = utils_ColorUtils;
          if (tmp) {
            const obj4 = { style: presetColor.checkmarkOverlay, pointerEvents: "none", children: React4(CheckmarkLargeIcon, obj5) };
            obj5 = { size: "custom", style: presetColor.checkmark, color: str };
            CheckmarkLargeIcon = CheckmarkLargeIcon2.CheckmarkLargeIcon;
            const tmp5Result2 = utils_ColorUtils;
            const darkness = tmp5Result2.getDarkness(item);
            str = "black";
            if (darkness > ColorPickerConsts.DARK_SWATCH_THRESHOLD) {
              str = "white";
            }
            tmp = React4(hasOwnProperty, obj4);
          }
          return React4(metroRequire, obj, 6 * closure_0 + index);
        })
      };
      return closure_1_9(first, obj, index);
    })
  };
  const obj8 = selectedEffectId(onSelectColor[24]);
  chunkResult = obj8.chunk(memo, 6);
  items5 = [closure_9(color, obj7), ];
  const obj9 = { style: tmp.buttonsContainer, children: items6 };
  const obj10 = { style: tmp.button, children: closure_9(Button2, obj11) };
  obj11 = { text: intl3.string(selectedEffectId(onSelectColor[20]).gIeJTK), onPress: callback, variant: "secondary", size: "md", grow: true };
  Button2 = selectedColor(onSelectColor[22]).Button;
  intl3 = selectedColor(onSelectColor[19]).intl;
  items6 = [closure_9(color, obj10), ];
  const obj12 = { style: tmp.button, children: closure_9(Button3, obj13) };
  obj13 = { text: intl4.string(selectedColor(onSelectColor[19]).t["FHBa/1"]), onPress: callback1, variant: "secondary", size: "md", icon: closure_9(selectedColor(onSelectColor[25]).EyeDropperIcon, { size: "sm" }), grow: true };
  Button3 = selectedColor(onSelectColor[22]).Button;
  intl4 = selectedColor(onSelectColor[19]).intl;
  items6[1] = closure_9(color, obj12);
  items5[1] = closure_10(color, obj9);
  return closure_9(BottomSheet, obj2);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default tmp6;