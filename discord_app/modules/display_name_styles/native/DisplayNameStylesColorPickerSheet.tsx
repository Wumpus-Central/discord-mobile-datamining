// === Module 17221: DisplayNameStylesColorPickerSheet ===

// Module 17221 (DisplayNameStylesColorPickerSheet)
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1102 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1406 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import HapticUtils from "HapticUtils" /* 5249 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 6979 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 16342 */;
import ColorPickerConsts from "ColorPickerConsts" /* 17218 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = get_ActivityIndicator);
let AnalyticEvents = fn(1084).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { container: { flex: 1 }, contentContainer: { alignSelf: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, presetGrid: null, presetRow: null, presetColor: null, presetColorSelected: null, checkmarkOverlay: null, checkmark: null, buttonsContainer: null, button: null };
let obj3 = { alignSelf: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.presetGrid = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let obj4 = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj2.presetRow = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
let size = { width: 42, height: 42, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
obj2.presetColor = size;
let obj5 = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
obj2.presetColorSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
let obj7 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj7.alignItems = "center";
obj7.justifyContent = "center";
obj2.checkmarkOverlay = obj7;
const size1 = { width: fn(17218).CHECKMARK_SIZE, height: fn(17218).CHECKMARK_SIZE };
obj2.checkmark = size1;
let obj6 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.buttonsContainer = { alignSelf: "stretch", flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj2.button = { flex: 1 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = { alignSelf: "stretch", flexDirection: "row", gap: nativeDefault.space.PX_16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesColorPickerSheet(selectedColor) {
  const cResult = selectedColor(hasCustomSingleColor[10]).c(69);
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  hasCustomSingleColor = selectedColor.hasCustomSingleColor;
  const onSelectColor = selectedColor.onSelectColor;
  let obj = selectedColor(hasCustomSingleColor[10]);
  noop = closure_10();
  let tmp2 = closure_10();
  const bottomSheetRef = selectedColor(hasCustomSingleColor[11]).useBottomSheetRef().bottomSheetRef;
  const tmp3 = selectedEffectId(hasCustomSingleColor[12])()[selectedEffectId];
  dependencyMap = tmp3;
  if (cResult[0] === hasCustomSingleColor) {
    if (cResult[1] === selectedColor) {
      if (cResult[2] === selectedEffectId) {
        let tmp4 = cResult[3];
      }
      const first = onSelectColor(noop.useState(tmp4), 1)[0];
      if (cResult[4] !== first) {
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0) {
              return selectedColor.colors[0];
            }
          }
          cResult[6] = I;
        } else {
          class I {
            constructor(arg0) {
              return selectedColor.colors[0];
            }
          }
        }
        const mapped = first.map(I);
        cResult[4] = first;
        cResult[5] = mapped;
      } else {
        class I {
          constructor(arg0) {
            return selectedColor.colors[0];
          }
        }
        const tmp5Result = tmp5(obj3.useState(selectedColor), 2);
        const first1 = tmp5Result[0];
        AnalyticEvents = tmp5Result[1];
        closure_8 = tmp12;
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor(arg0) {
              tmp = closure_7(selectedColor);
              return;
            }
          }
          cResult[7] = T;
        } else {
          class T {
            constructor(arg0) {
              tmp = closure_7(selectedColor);
              return;
            }
          }
        }
        closure_9 = T;
        if (cResult[8] === tmp3[0]) {
          class T {
            constructor(arg0) {
              tmp = closure_7(selectedColor);
              return;
            }
          }
          if (cResult[11] === first1) {
            class T {
              constructor(arg0) {
                tmp = closure_7(selectedColor);
                return;
              }
            }
            if (cResult[14] === tmp3[0]) {
              class T {
                constructor(arg0) {
                  tmp = closure_7(selectedColor);
                  return;
                }
              }
            }
            class F {
              constructor() {
                obj = {
                  color: closure_6,
                  onSelect(arg0) {
                                  const result = selectedColor(hasCustomSingleColor[14]).triggerHapticFeedback(selectedColor(hasCustomSingleColor[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
                                  onSelectColor(arg0);
                                  const obj = selectedColor(hasCustomSingleColor[14]);
                                  selectedEffectId(hasCustomSingleColor[15]).hideActionSheet();
                                },
                  actionButtonVariant: "primary"
                };
                tmp = closure_1(closure_2[16])(obj);
                return;
              }
            }
            cResult[14] = tmp3[0];
            cResult[15] = tmp12;
            cResult[16] = first1;
            cResult[17] = onSelectColor;
            cResult[18] = tmp18;
          }
          class F {
            constructor() {
              obj = {
                color: closure_6,
                onSelect(arg0) {
                              const result = selectedColor(hasCustomSingleColor[14]).triggerHapticFeedback(selectedColor(hasCustomSingleColor[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
                              onSelectColor(arg0);
                              const obj = selectedColor(hasCustomSingleColor[14]);
                              selectedEffectId(hasCustomSingleColor[15]).hideActionSheet();
                            },
                actionButtonVariant: "primary"
              };
              tmp = closure_1(closure_2[16])(obj);
              return;
            }
          }
          cResult[11] = first1;
          cResult[12] = onSelectColor;
          cResult[13] = F;
        }
        const fn2 = function w() {
          const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
          onSelectColor(32);
          ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        cResult[8] = tmp3[0];
        cResult[9] = onSelectColor;
        cResult[10] = fn2;
      }
      obj3 = noop;
      tmp5 = onSelectColor;
    }
  }
  const fn = function s() {
    let tmp2 = null;
    if (hasCustomSingleColor) {
      const items = [selectedColor];
      tmp2 = items;
    }
    return DisplayNameStylesUtils.createColorPaletteList(selectedEffectId, tmp2);
  };
  cResult[0] = hasCustomSingleColor;
  cResult[1] = selectedColor;
  cResult[2] = selectedEffectId;
  cResult[3] = fn;
  tmp4 = fn;
  let obj2 = selectedColor(hasCustomSingleColor[11]);
}) : (function DisplayNameStylesColorPickerSheet(selectedColor) {
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  ({ hasCustomSingleColor: dependencyMap, onSelectColor } = selectedColor);
  closure_10 = undefined;
  let tmp = closure_10();
  noop = tmp;
  let tmp2 = selectedEffectId(10733)()[selectedEffectId];
  const dependencyMap2 = tmp2;
  const first = onSelectColor(noop.useState(() => {
    let tmp2 = null;
    if (dependencyMap) {
      const items = [selectedColor];
      tmp2 = items;
    }
    return DisplayNameStylesUtils.createColorPaletteList(selectedEffectId, tmp2);
  }), 1)[0];
  let items = [first];
  const memo = noop.useMemo(() => first.map((item) => item.colors[0]), items);
  const tmp5 = onSelectColor(noop.useState(selectedColor), 2);
  const first1 = tmp5[0];
  closure_8 = tmp5[1];
  const items1 = [first1, selectedColor];
  const memo1 = noop.useMemo(() => first1 !== selectedColor, items1);
  closure_10 = noop.useCallback((arg0) => {
    closure_8(arg0);
  }, []);
  const items2 = [tmp2, onSelectColor];
  const items3 = [first1, onSelectColor];
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    onSelectColor(32);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items2);
  const items4 = [memo1, first1, onSelectColor, tmp2];
  const callback1 = noop.useCallback(() => {
    showCustomColorPickerActionSheetDefault({
      color: first1,
      onSelect(arg0) {
        const result = selectedColor(5249).triggerHapticFeedback(selectedColor(5249).HapticFeedbackTypes.IMPACT_MEDIUM);
        onSelectColor(arg0);
        const obj = selectedColor(5249);
        selectedEffectId(5247).hideActionSheet();
      },
      actionButtonVariant: "primary"
    });
  }, items3);
  const callback2 = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    if (memo1) {
      onSelectColor(first1);
      const obj3 = { default: first1 === 32, colors: null };
      const items = [first1];
      obj3.colors = items;
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items4);
  let obj2 = { ref: selectedColor(8699).useBottomSheetRef().bottomSheetRef, header: null, children: null };
  let obj3 = { title: null, trailing: null };
  let obj = selectedColor(8699);
  const intl = selectedColor(1125).intl;
  obj3.title = intl.string(selectedEffectId(2930)["6OxgN7"]);
  let obj4 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = selectedColor(1125).intl;
  obj4.text = intl2.string(selectedColor(1125).t.XqMe3N);
  obj4.onPress = callback2;
  obj3.trailing = closure_8(selectedColor(5281).Button, obj4);
  obj2.header = closure_8(selectedEffectId(17209), obj3);
  let obj5 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.contentContainer, children: null };
  const obj7 = { style: tmp.presetGrid, children: null };
  const tmp11 = selectedEffectId(17209);
  const obj8 = selectedEffectId(12);
  obj7.children = selectedEffectId(12).chunk(memo, 6).map((arr, index) => {
    closure_0 = index;
    return closure_8(closure_5, {
      style: presetRow.presetRow,
      children: arr.map((item, index) => {
        closure_0 = item;
        let tmp = item === first1;
        const obj = {
          onPress() {
            return closure_2_10(closure_0);
          },
          style: null,
          accessibilityRole: "button",
          accessibilityState: null,
          accessibilityLabel: null,
          children: null
        };
        const items = [presetColor.presetColor, , ];
        const obj2 = { backgroundColor: utils_ColorUtils.int2hex(item) };
        items[1] = obj2;
        let presetColorSelected = tmp;
        if (tmp) {
          presetColorSelected = presetColor.presetColorSelected;
        }
        items[2] = presetColorSelected;
        obj.style = items;
        obj.accessibilityState = { selected: tmp };
        obj.accessibilityLabel = utils_ColorUtils.int2hex(item);
        if (tmp) {
          const obj4 = { style: presetColor.checkmarkOverlay, pointerEvents: "none", children: null };
          const obj5 = { size: "custom", style: presetColor.checkmark, color: null };
          const darkness = utils_ColorUtils.getDarkness(item);
          let str = "black";
          if (darkness > ColorPickerConsts.DARK_SWATCH_THRESHOLD) {
            str = "white";
          }
          obj5.color = str;
          obj4.children = closure_3_8(CheckmarkLargeIcon.CheckmarkLargeIcon, obj5);
          tmp = closure_3_8(hasOwnProperty, obj4);
          const tmp5Result2 = utils_ColorUtils;
        }
        obj.children = tmp;
        return closure_3_8(color, obj, 6 * closure_0 + index);
      })
    }, index);
  });
  const items5 = [closure_8(dependencyMap2, obj7), ];
  const obj9 = { style: tmp.buttonsContainer, children: null };
  const obj10 = { style: tmp.button, children: null };
  const obj11 = { text: null, onPress: null, variant: "secondary", size: "md", grow: true };
  const intl3 = selectedColor(1125).intl;
  obj11.text = intl3.string(selectedEffectId(2930).gIeJTK);
  obj11.onPress = callback;
  obj10.children = closure_8(selectedColor(5281).Button, obj11);
  const items6 = [closure_8(dependencyMap2, obj10), ];
  const obj12 = { style: tmp.button, children: null };
  const obj13 = { text: null, onPress: null, variant: "secondary", size: "md", icon: null, grow: true };
  const intl4 = selectedColor(1125).intl;
  obj13.text = intl4.string(selectedColor(1125).t["FHBa/1"]);
  obj13.onPress = callback1;
  obj13.icon = closure_8(selectedColor(17219).EyeDropperIcon, { size: "sm" });
  obj12.children = closure_8(selectedColor(5281).Button, obj13);
  items6[1] = closure_8(dependencyMap2, obj12);
  obj9.children = items6;
  items5[1] = memo1(dependencyMap2, obj9);
  obj6.children = items5;
  obj5.children = memo1(dependencyMap2, obj6);
  obj2.children = closure_8(dependencyMap2, obj5);
  return closure_8(selectedColor(5302).BottomSheet, obj2);
});