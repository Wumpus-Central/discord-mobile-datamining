// === Module 17217: DisplayNameStylesGradientPickerSheet ===

// Module 17217 (DisplayNameStylesGradientPickerSheet)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1406 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5247 */;
import HapticUtils from "HapticUtils" /* 5249 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = get_ActivityIndicator);
let getColorPresetsForEffect = fn(1407).getColorPresetsForEffect;
const AnalyticEvents = fn(1084).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { body: { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16 }, gradientContainer: null, dropperContainer: null, dropper: null, gradient: null, optionContainer: null, swatchWrapper: null, pressable: null, selectedRing: null, option: null, checkmarkOverlay: null, checkmark: null, resetButtonContainer: null };
let obj3 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16 };
obj2.gradientContainer = { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
const rect = { left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, position: "absolute", flexDirection: "row", justifyContent: "space-between" };
obj2.dropperContainer = rect;
let obj4 = { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8 };
obj2.dropper = { borderColor: "white", padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
let size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
obj2.gradient = size;
let obj5 = { borderColor: "white", padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round, borderWidth: 1 };
obj2.optionContainer = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: nativeDefault.space.PX_4, rowGap: nativeDefault.space.PX_16 };
let obj6 = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: nativeDefault.space.PX_4, rowGap: nativeDefault.space.PX_16 };
obj2.swatchWrapper = { width: "33.333%", paddingHorizontal: nativeDefault.space.PX_4 };
let obj7 = { width: "33.333%", paddingHorizontal: nativeDefault.space.PX_4 };
obj2.pressable = { height: 40, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let obj9 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj9.borderRadius = nativeDefault.radii.sm;
obj9.borderWidth = 2;
obj9.borderColor = nativeDefault.colors.BACKGROUND_BRAND;
obj2.selectedRing = obj9;
obj2.option = { flex: 1 };
const obj10 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj10.alignItems = "center";
obj10.justifyContent = "center";
obj2.checkmarkOverlay = obj10;
const size1 = { width: fn(17218).CHECKMARK_SIZE, height: fn(17218).CHECKMARK_SIZE };
obj2.checkmark = size1;
let obj8 = { height: 40, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.resetButtonContainer = { alignSelf: "stretch", flexDirection: "row", marginHorizontal: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj11 = { alignSelf: "stretch", flexDirection: "row", marginHorizontal: nativeDefault.space.PX_8 };
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesColorPickerSheet(selectedColors) {
  const cResult = selectedColors(onSelectColors[10]).c(81);
  selectedColors = selectedColors.selectedColors;
  const selectedEffectId = selectedColors.selectedEffectId;
  onSelectColors = selectedColors.onSelectColors;
  let obj = selectedColors(onSelectColors[10]);
  _slicedToArray = closure_12();
  const tmp4 = closure_12();
  const displayNameStylesEffectConfig = selectedColors(onSelectColors[11]).useDisplayNameStylesEffectConfig(selectedEffectId);
  selectedColors(onSelectColors[12]);
  if (cResult[0] === displayNameStylesEffectConfig.defaultColors) {
    if (cResult[1] === selectedColors) {
      let tmp7 = cResult[2];
    }
    [colors, closure_6] = displayNameStylesEffectConfig.useState(tmp7);
    if (cResult[3] === selectedColors) {
      if (cResult[4] === selectedEffectId) {
        let tmp11 = cResult[5];
      }
      const tmp8Result = tmp8(obj3.useState(tmp11), 2);
      getColorPresetsForEffect = tmp8Result[1];
      selectedEffectId(tmp2[13])(selectedEffectId, tmp8Result[0]);
      if (cResult[6] === colors) {
        if (cResult[7] === onSelectColors) {
          let tmp15 = cResult[8];
        }
        if (cResult[9] === displayNameStylesEffectConfig.defaultColors) {
          if (cResult[12] === colors) {
            if (cResult[13] === selectedEffectId) {
              const tmp17 = cResult[14];
            }
            closure_8 = tmp17;
            class H {
              constructor() {
                first = closure_7(selectedEffectId)[0];
                if (first == null) {
                  tmp = closure_4;
                  first = closure_4.defaultColors;
                }
                substr = first.slice();
                closure_0 = substr;
                tmp3 = closure_6(substr);
                tmp4 = closure_7((arr) => DisplayNameStylesUtils.updateCustomSwatch(arr, selectedEffectId, substr));
                return;
              }
            }
            const _Symbol = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              class X {
                constructor(arg0) {
                  items = [...selectedColors];
                  tmp = closure_6(items);
                  return;
                }
              }
              class H {
                constructor() {
                  first = closure_7(selectedEffectId)[0];
                  if (first == null) {
                    tmp = closure_4;
                    first = closure_4.defaultColors;
                  }
                  substr = first.slice();
                  closure_0 = substr;
                  tmp3 = closure_6(substr);
                  tmp4 = closure_7((arr) => DisplayNameStylesUtils.updateCustomSwatch(arr, selectedEffectId, substr));
                  return;
                }
              }
            } else {
              class X {
                constructor(arg0) {
                  items = [...selectedColors];
                  tmp = closure_6(items);
                  return;
                }
              }
            }
            class D {
              constructor() {
                obj = closure_0(closure_2[14]);
                result = obj.triggerHapticFeedback(closure_0(closure_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
                tmp2 = onSelectColors(closure_5);
                obj2 = closure_1(closure_2[15]);
                obj1 = { default: false, colors: closure_5 };
                trackResult = obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj1);
                obj4 = closure_1(closure_2[16]);
                hideActionSheetResult = obj4.hideActionSheet();
                return;
              }
            }
            BottomSheet = tmp(tmp2[18]).BottomSheet;
            class E {
              constructor() {
                obj = closure_0(closure_2[12]);
                tmp2 = null;
                tmp = selectedEffectId;
                if (selectedColors.length > 0) {
                  tmp2 = selectedColors;
                }
                return obj.createColorPaletteList(tmp, tmp2);
              }
            }
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              class X {
                constructor(arg0) {
                  items = [...selectedColors];
                  tmp = closure_6(items);
                  return;
                }
              }
              const string = tmp21.string;
              class H {
                constructor() {
                  first = closure_7(selectedEffectId)[0];
                  if (first == null) {
                    tmp = closure_4;
                    first = closure_4.defaultColors;
                  }
                  substr = first.slice();
                  closure_0 = substr;
                  tmp3 = closure_6(substr);
                  tmp4 = closure_7((arr) => DisplayNameStylesUtils.updateCustomSwatch(arr, selectedEffectId, substr));
                  return;
                }
              }
              cResult[16] = tmp22;
            } else {
              class X {
                constructor(arg0) {
                  items = [...selectedColors];
                  tmp = closure_6(items);
                  return;
                }
              }
            }
            if (cResult[17] !== tmp15) {
              class X {
                constructor(arg0) {
                  items = [...selectedColors];
                  tmp = closure_6(items);
                  return;
                }
              }
              let obj4 = { variant: "primary", size: "sm", text: null, onPress: null };
              class H {
                constructor() {
                  first = closure_7(selectedEffectId)[0];
                  if (first == null) {
                    tmp = closure_4;
                    first = closure_4.defaultColors;
                  }
                  substr = first.slice();
                  closure_0 = substr;
                  tmp3 = closure_6(substr);
                  tmp4 = closure_7((arr) => DisplayNameStylesUtils.updateCustomSwatch(arr, selectedEffectId, substr));
                  return;
                }
              }
              obj4.onPress = tmp15;
              cResult[17] = tmp15;
              class D {
                constructor() {
                  obj = closure_0(closure_2[14]);
                  result = obj.triggerHapticFeedback(closure_0(closure_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
                  tmp2 = onSelectColors(closure_5);
                  obj2 = closure_1(closure_2[15]);
                  obj1 = { default: false, colors: closure_5 };
                  trackResult = obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj1);
                  obj4 = closure_1(closure_2[16]);
                  hideActionSheetResult = obj4.hideActionSheet();
                  return;
                }
              }
              cResult[18] = closure_9(tmp(tmp2[20]).Button, obj4);
              class E {
                constructor() {
                  obj = closure_0(closure_2[12]);
                  tmp2 = null;
                  tmp = selectedEffectId;
                  if (selectedColors.length > 0) {
                    tmp2 = selectedColors;
                  }
                  return obj.createColorPaletteList(tmp, tmp2);
                }
              }
              const tmp24 = closure_9(tmp(tmp2[20]).Button, obj4);
            } else {
              class X {
                constructor(arg0) {
                  items = [...selectedColors];
                  tmp = closure_6(items);
                  return;
                }
              }
            }
            if (cResult[19] === displayNameStylesEffectConfig.name) {
              class X {
                constructor(arg0) {
                  items = [...selectedColors];
                  tmp = closure_6(items);
                  return;
                }
              }
              class H {
                constructor() {
                  first = closure_7(selectedEffectId)[0];
                  if (first == null) {
                    tmp = closure_4;
                    first = closure_4.defaultColors;
                  }
                  substr = first.slice();
                  closure_0 = substr;
                  tmp3 = closure_6(substr);
                  tmp4 = closure_7((arr) => DisplayNameStylesUtils.updateCustomSwatch(arr, selectedEffectId, substr));
                  return;
                }
              }
            }
            let obj5 = { title: displayNameStylesEffectConfig.name, trailing: tmp23 };
            const tmp27 = closure_9(tmp13(tmp2[21]), obj5);
            cResult[19] = displayNameStylesEffectConfig.name;
            cResult[20] = tmp23;
            cResult[21] = tmp27;
          }
          class H {
            constructor() {
              first = closure_7(selectedEffectId)[0];
              if (first == null) {
                tmp = closure_4;
                first = closure_4.defaultColors;
              }
              substr = first.slice();
              closure_0 = substr;
              tmp3 = closure_6(substr);
              tmp4 = closure_7((arr) => DisplayNameStylesUtils.updateCustomSwatch(arr, selectedEffectId, substr));
              return;
            }
          }
          cResult[12] = colors;
          cResult[13] = selectedEffectId;
          class D {
            constructor() {
              obj = closure_0(closure_2[14]);
              result = obj.triggerHapticFeedback(closure_0(closure_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
              tmp2 = onSelectColors(closure_5);
              obj2 = closure_1(closure_2[15]);
              obj1 = { default: false, colors: closure_5 };
              trackResult = obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj1);
              obj4 = closure_1(closure_2[16]);
              hideActionSheetResult = obj4.hideActionSheet();
              return;
            }
          }
          cResult[14] = tmp18;
          class E {
            constructor() {
              obj = closure_0(closure_2[12]);
              tmp2 = null;
              tmp = selectedEffectId;
              if (selectedColors.length > 0) {
                tmp2 = selectedColors;
              }
              return obj.createColorPaletteList(tmp, tmp2);
            }
          }
        }
        class H {
          constructor() {
            first = closure_7(selectedEffectId)[0];
            if (first == null) {
              tmp = closure_4;
              first = closure_4.defaultColors;
            }
            substr = first.slice();
            closure_0 = substr;
            tmp3 = closure_6(substr);
            tmp4 = closure_7((arr) => DisplayNameStylesUtils.updateCustomSwatch(arr, selectedEffectId, substr));
            return;
          }
        }
        cResult[9] = displayNameStylesEffectConfig.defaultColors;
        cResult[10] = selectedEffectId;
        class D {
          constructor() {
            obj = closure_0(closure_2[14]);
            result = obj.triggerHapticFeedback(closure_0(closure_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
            tmp2 = onSelectColors(closure_5);
            obj2 = closure_1(closure_2[15]);
            obj1 = { default: false, colors: closure_5 };
            trackResult = obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj1);
            obj4 = closure_1(closure_2[16]);
            hideActionSheetResult = obj4.hideActionSheet();
            return;
          }
        }
        cResult[11] = H;
        class E {
          constructor() {
            obj = closure_0(closure_2[12]);
            tmp2 = null;
            tmp = selectedEffectId;
            if (selectedColors.length > 0) {
              tmp2 = selectedColors;
            }
            return obj.createColorPaletteList(tmp, tmp2);
          }
        }
      }
      class D {
        constructor() {
          obj = closure_0(closure_2[14]);
          result = obj.triggerHapticFeedback(closure_0(closure_2[14]).HapticFeedbackTypes.IMPACT_MEDIUM);
          tmp2 = onSelectColors(closure_5);
          obj2 = closure_1(closure_2[15]);
          obj1 = { default: false, colors: closure_5 };
          trackResult = obj2.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj1);
          obj4 = closure_1(closure_2[16]);
          hideActionSheetResult = obj4.hideActionSheet();
          return;
        }
      }
      class E {
        constructor() {
          obj = closure_0(closure_2[12]);
          tmp2 = null;
          tmp = selectedEffectId;
          if (selectedColors.length > 0) {
            tmp2 = selectedColors;
          }
          return obj.createColorPaletteList(tmp, tmp2);
        }
      }
      cResult[7] = onSelectColors;
      cResult[8] = D;
      tmp15 = D;
      tmp13 = selectedEffectId;
    }
    class E {
      constructor() {
        obj = closure_0(closure_2[12]);
        tmp2 = null;
        tmp = selectedEffectId;
        if (selectedColors.length > 0) {
          tmp2 = selectedColors;
        }
        return obj.createColorPaletteList(tmp, tmp2);
      }
    }
    cResult[3] = selectedColors;
    cResult[4] = selectedEffectId;
    cResult[5] = E;
    tmp11 = E;
    obj3 = displayNameStylesEffectConfig;
    tmp8 = _slicedToArray;
  }
  const fn = function l() {
    let defaultColors = selectedColors;
    if (selectedColors.length <= 0) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    return defaultColors;
  };
  cResult[0] = displayNameStylesEffectConfig.defaultColors;
  cResult[1] = selectedColors;
  cResult[2] = fn;
  tmp7 = fn;
  let obj2 = selectedColors(onSelectColors[11]);
}) : (function DisplayNameStylesColorPickerSheet(onSelectColors) {
  ({ selectedColors: require, selectedEffectId } = onSelectColors);
  onSelectColors = onSelectColors.onSelectColors;
  colors = undefined;
  closure_6 = undefined;
  let tmp = closure_12();
  _slicedToArray = tmp;
  const displayNameStylesEffectConfig = require("useDisplayNameStylesEffectConfigs").useDisplayNameStylesEffectConfig(selectedEffectId);
  let obj = require("useDisplayNameStylesEffectConfigs");
  const effectColorCount = require("DisplayNameStylesUtils").getEffectColorCount(selectedEffectId);
  [colors, closure_6] = displayNameStylesEffectConfig.useState(() => {
    let defaultColors = _require;
    if (_require.length <= 0) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    return defaultColors;
  });
  const tmp5 = _slicedToArray(displayNameStylesEffectConfig.useState(() => {
    let tmp2 = null;
    if (_require.length > 0) {
      tmp2 = _require;
    }
    return DisplayNameStylesUtils.createColorPaletteList(selectedEffectId, tmp2);
  }), 2);
  closure_7 = tmp5[1];
  let obj2 = require("DisplayNameStylesUtils");
  let items = [colors, onSelectColors];
  let items1 = [selectedEffectId, displayNameStylesEffectConfig.defaultColors];
  const callback = displayNameStylesEffectConfig.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(colors);
    AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: false, colors });
    const obj3 = { default: false, colors };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const items2 = [colors, selectedEffectId];
  const callback1 = displayNameStylesEffectConfig.useCallback(() => {
    let first = closure_7(selectedEffectId)[0];
    if (first == null) {
      first = displayNameStylesEffectConfig.defaultColors;
    }
    const substr = first.slice();
    closure_6(substr);
    closure_7((arr) => DisplayNameStylesUtils.updateCustomSwatch(arr, selectedEffectId, substr));
  }, items1);
  closure_8 = displayNameStylesEffectConfig.useCallback((arg0) => {
    closure_0 = arg0;
    let num = first[arg0];
    if (num == null) {
      num = 0;
    }
    selectedEffectId(onSelectColors[17])({
      color: num,
      onSelect(arg0) {
        closure_0 = arg0;
        const result = require("HapticUtils").triggerHapticFeedback(require("HapticUtils").HapticFeedbackTypes.IMPACT_MEDIUM);
        const mapped = colors.map((item, index) => {
          let tmp = item;
          if (index === closure_0) {
            tmp = closure_0;
          }
          return tmp;
        });
        closure_1_6(mapped);
        closure_1_7((arr) => DisplayNameStylesUtils.updateCustomSwatch(arr, selectedEffectId, mapped));
      },
      actionButtonVariant: "primary"
    }, "stack");
  }, items2);
  closure_9 = displayNameStylesEffectConfig.useCallback((arg0) => {
    const items = [...arg0];
    closure_6(items);
  }, []);
  let obj3 = { header: null, children: null };
  let obj4 = { title: displayNameStylesEffectConfig.name, trailing: null };
  const arr2 = selectedEffectId(onSelectColors[13])(selectedEffectId, tmp5[0]);
  let obj5 = { variant: "primary", size: "sm", text: null, onPress: null };
  let intl = require("util").intl;
  obj5.text = intl.string(require("util").t.XqMe3N);
  obj5.onPress = callback;
  obj4.trailing = closure_9(require("components/Button/Button").Button, obj5);
  obj3.header = closure_9(selectedEffectId(onSelectColors[21]), obj4);
  let obj6 = { style: tmp.body, children: null };
  let obj7 = { style: tmp.gradientContainer, children: null };
  let obj8 = { style: tmp.gradient, colors: null, start: null, end: null };
  const tmp8 = selectedEffectId(onSelectColors[21]);
  obj8.colors = colors.map((item) => require("utils/ColorUtils").int2hex(item));
  obj8.start = { x: 0, y: 0 };
  obj8.end = { x: 1, y: 0 };
  const items3 = [closure_9(selectedEffectId(onSelectColors[23]), obj8), ];
  const obj9 = { style: tmp.dropperContainer, children: null };
  const tmp9 = selectedEffectId(onSelectColors[23]);
  obj9.children = Array.from({ length: effectColorCount }).map((item, index) => {
    closure_0 = index;
    const obj = {
      style: closure_3.dropper,
      onPress() {
        return closure_8(closure_0);
      },
      accessibilityLabel: null,
      accessibilityRole: "button",
      children: null
    };
    const intl = require("util").intl;
    obj.accessibilityLabel = intl.formatToPlainString(require("util").t.n5Ve0L, { number: index + 1 });
    obj.children = closure_9(require("EyeDropperIcon").EyeDropperIcon, { color: "white", size: "sm" });
    return closure_9(closure_6, obj, index);
  });
  items3[1] = closure_9(colors, obj9);
  obj7.children = items3;
  const items4 = [closure_10(colors, obj7), , ];
  const arr = Array.from({ length: effectColorCount });
  items4[1] = closure_9(colors, {
    style: tmp.optionContainer,
    children: arr2.map((accessibilityLabel, index) => {
      colors = accessibilityLabel.colors;
      let isEqualResult = selectedEffectId(onSelectColors[25]).isEqual(colors, first);
      const obj2 = { style: closure_3.swatchWrapper, children: null };
      const obj3 = {
        style: closure_3.pressable,
        onPress() {
          return closure_9(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: isEqualResult },
        accessibilityLabel: accessibilityLabel.a11yLabel,
        children: null
      };
      const obj4 = { style: closure_3.option, colors: null, start: null, end: null };
      const obj = selectedEffectId(onSelectColors[25]);
      obj4.colors = colors.map((item) => colors(onSelectColors[22]).int2hex(item));
      obj4.start = { x: 0, y: 0 };
      obj4.end = { x: 1, y: 0 };
      const items = [closure_9(selectedEffectId(onSelectColors[23]), obj4), ];
      if (isEqualResult) {
        const obj5 = { children: null };
        const obj6 = { style: closure_3.selectedRing, pointerEvents: "none" };
        const items1 = [closure_9(first, obj6), ];
        const obj7 = { style: closure_3.checkmarkOverlay, pointerEvents: "none", children: null };
        const obj8 = { size: "custom", style: closure_3.checkmark, color: "white" };
        obj7.children = closure_9(require("CheckmarkLargeIcon").CheckmarkLargeIcon, obj8);
        items1[1] = closure_9(first, obj7);
        obj5.children = items1;
        isEqualResult = closure_1_10(closure_1_11, obj5);
      }
      items[1] = isEqualResult;
      obj3.children = items;
      obj2.children = closure_1_10(require("Pressables").PressableOpacity, obj3);
      return closure_9(first, obj2, index);
    })
  });
  const obj11 = { style: tmp.resetButtonContainer, children: null };
  const obj12 = { text: null, onPress: null, variant: "secondary", size: "md", grow: true };
  const intl2 = require("util").intl;
  obj12.text = intl2.string(require("util").t.yBZMsQ);
  obj12.onPress = callback1;
  obj11.children = closure_9(require("components/Button/Button").Button, obj12);
  items4[2] = closure_9(colors, obj11);
  obj6.children = items4;
  obj3.children = closure_10(colors, obj6);
  return closure_9(require("Sheet/BottomSheet").BottomSheet, obj3);
});