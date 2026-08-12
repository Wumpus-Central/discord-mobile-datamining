// discord_app/modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx
import _slicedToArray from "_slicedToArray";
import int2hslRaw from "int2hslRaw";
import get_ActivityIndicator from "getSystemLocale";
import { AnalyticEvents } from "ME";
import jsxProd from "apply";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
({ View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { body: null, gradientContainer: null, dropperContainer: null, dropper: null, gradient: null, optionContainer: null, swatchWrapper: null, pressable: null, selected: null, option: null };
createCacheKey = { paddingVertical: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: require("Themes").space.PX_8 };
let obj1 = { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: require("Themes").space.PX_8 };
createCacheKey[2] = { left: require("Themes").space.PX_24, right: require("Themes").space.PX_24, position: "absolute", flexDirection: "row", justifyContent: "space-between" };
let obj2 = { left: require("Themes").space.PX_24, right: require("Themes").space.PX_24, position: "absolute", flexDirection: "row", justifyContent: "space-between" };
createCacheKey[3] = { borderColor: "white", padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round, borderWidth: 1 };
let obj3 = { borderColor: "white", padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.round, borderWidth: 1 };
createCacheKey[4] = { height: 50, width: "100%", borderRadius: require("Themes").radii.sm };
let obj4 = { height: 50, width: "100%", borderRadius: require("Themes").radii.sm };
createCacheKey[5] = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: require("Themes").space.PX_4 };
createCacheKey[6] = { width: "25%", padding: 2 };
let obj5 = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: require("Themes").space.PX_4 };
createCacheKey[7] = { height: 40, borderRadius: require("Themes").radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
const obj6 = { height: 40, borderRadius: require("Themes").radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
createCacheKey[8] = { borderColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[9] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj7 = { borderColor: require("Themes").colors.BACKGROUND_BRAND };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedColors) {
  let onSelectColors;
  let selectedEffectId;
  ({ selectedEffectId, onSelectColors } = selectedColors);
  let importDefault;
  let displayNameStylesEffectConfig;
  let arr;
  let first;
  let closure_5;
  let closure_6;
  let closure_7;
  let tmp = createCacheKey();
  importDefault = tmp;
  let obj = onSelectColors(displayNameStylesEffectConfig[7]);
  displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedEffectId);
  let obj1 = onSelectColors(displayNameStylesEffectConfig[8]);
  const effectColorCount = obj1.getEffectColorCount(selectedEffectId);
  arr = importDefault(displayNameStylesEffectConfig[9])(selectedEffectId);
  const tmp4 = arr(first.useState(selectedColors.selectedColors), 2);
  first = tmp4[0];
  closure_5 = tmp4[1];
  let items = [first, onSelectColors];
  const items1 = [arr, displayNameStylesEffectConfig.defaultColors];
  const callback = first.useCallback(() => {
    let obj = onSelectColors(displayNameStylesEffectConfig[10]);
    const result = obj.triggerHapticFeedback(onSelectColors(displayNameStylesEffectConfig[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first);
    obj = { default: false, colors: first };
    _undefined(displayNameStylesEffectConfig[11]).track(constants.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
    const obj2 = _undefined(displayNameStylesEffectConfig[11]);
    _undefined(displayNameStylesEffectConfig[12]).hideActionSheet();
  }, items);
  const items2 = [first];
  const callback1 = first.useCallback(() => {
    const first = arr[0];
    let colors;
    if (first != null) {
      colors = first.colors;
    }
    if (colors == null) {
      colors = displayNameStylesEffectConfig.defaultColors;
    }
    const items = [...colors];
    closure_5(items);
  }, items1);
  closure_6 = first.useCallback((arg0) => {
    let closure_0 = arg0;
    let num = first[arg0];
    if (num == null) {
      num = 0;
    }
    _undefined(displayNameStylesEffectConfig[13])({
      color: num,
      onSelect(arg0) {
        let closure_0 = arg0;
        const result = onSelectColors(displayNameStylesEffectConfig[10]).triggerHapticFeedback(onSelectColors(displayNameStylesEffectConfig[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
        outer1_5((arr) => arr.map((arg0, arg1) => {
          let tmp = arg0;
          if (arg1 === outer1_0) {
            tmp = closure_0;
          }
          return tmp;
        }));
      },
      actionButtonVariant: "primary"
    }, "stack");
  }, items2);
  closure_7 = first.useCallback((arg0) => {
    const items = [...arg0];
    callback(items);
  }, []);
  obj = { header: null, children: null };
  obj = { title: displayNameStylesEffectConfig.name, trailing: null };
  obj1 = { variant: "primary", size: "sm", text: null, onPress: null };
  let intl = onSelectColors(displayNameStylesEffectConfig[17]).intl;
  obj1[2] = intl.string(onSelectColors(displayNameStylesEffectConfig[17]).t.XqMe3N);
  obj1[3] = callback;
  obj[1] = callback(onSelectColors(displayNameStylesEffectConfig[16]).Button, obj1);
  obj[0] = callback(onSelectColors(displayNameStylesEffectConfig[15]).BottomSheetTitleHeader, obj);
  let obj2 = { style: tmp.body, children: null };
  const obj3 = { style: tmp.gradientContainer, children: null };
  const obj4 = { style: tmp.gradient, colors: null, start: null, end: null };
  obj4[1] = first.map((color) => onSelectColors(displayNameStylesEffectConfig[19]).int2hex(color));
  obj4[2] = { x: 0, y: 0 };
  obj4[3] = { x: 1, y: 0 };
  const items3 = [callback(importDefault(displayNameStylesEffectConfig[18]), obj4), ];
  const obj5 = { style: tmp.dropperContainer, children: null };
  arr = Array.from({ length: effectColorCount });
  obj5[1] = arr.map((arg0, arg1) => {
    let closure_0 = arg1;
    let obj = {
      style: _undefined.dropper,
      onPress() {
        return outer1_6(closure_0);
      },
      accessibilityLabel: null,
      accessibilityRole: "button",
      children: null
    };
    const intl = onSelectColors(displayNameStylesEffectConfig[17]).intl;
    obj = { number: arg1 + 1 };
    obj[2] = intl.formatToPlainString(onSelectColors(displayNameStylesEffectConfig[17]).t.n5Ve0L, obj);
    obj[4] = outer1_8(onSelectColors(displayNameStylesEffectConfig[20]).EyeDropperIcon, { color: "white", size: "sm" });
    return outer1_8(closure_6, obj, arg1);
  });
  items3[1] = callback(closure_5, obj5);
  obj3[1] = items3;
  const items4 = [callback2(closure_5, obj3), , ];
  const tmp7 = importDefault(displayNameStylesEffectConfig[18]);
  items4[1] = callback(closure_5, {
    style: tmp.optionContainer,
    children: arr.map((accessibilityLabel) => {
      const colors = accessibilityLabel.colors;
      let obj = _undefined(displayNameStylesEffectConfig[21]);
      const isEqualResult = obj.isEqual(colors, first);
      obj = { style: _undefined.swatchWrapper, children: null };
      const items = [_undefined.pressable, ];
      let selected = isEqualResult;
      if (isEqualResult) {
        selected = tmp6.selected;
      }
      obj = {
        style: items,
        onPress() {
          return outer1_7(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: isEqualResult },
        accessibilityLabel: accessibilityLabel.a11yLabel,
        children: null
      };
      items[1] = selected;
      const obj1 = { style: _undefined.option, colors: null, start: null, end: null };
      obj1[1] = colors.map((color) => colors(table[19]).int2hex(color));
      obj1[2] = { x: 0, y: 0 };
      obj1[3] = { x: 1, y: 0 };
      obj[5] = outer1_8(_undefined(displayNameStylesEffectConfig[18]), obj1);
      obj[1] = outer1_8(onSelectColors(displayNameStylesEffectConfig[22]).PressableOpacity, obj);
      return outer1_8(closure_5, obj, arg1);
    })
  });
  const obj7 = { text: null, onPress: null, variant: "secondary" };
  const intl2 = onSelectColors(displayNameStylesEffectConfig[17]).intl;
  obj7[0] = intl2.string(onSelectColors(displayNameStylesEffectConfig[17]).t.yBZMsQ);
  obj7[1] = callback1;
  items4[2] = callback(onSelectColors(displayNameStylesEffectConfig[16]).Button, obj7);
  obj2[1] = items4;
  obj[1] = callback2(closure_5, obj2);
  return callback(onSelectColors(displayNameStylesEffectConfig[14]).BottomSheet, obj);
};