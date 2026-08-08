// discord_app/modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx
import _slicedToArray from "_slicedToArray";
import int2hslRaw from "int2hslRaw";
import get_ActivityIndicator from "getSystemLocale";
import { getColorPresetsForEffect } from "items3";
import { AnalyticEvents } from "ME";
import jsxProd from "apply";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
const require = arg1;
({ View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
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

export default function DisplayNameStylesColorPickerSheet(selectedEffectId) {
  selectedEffectId = selectedEffectId.selectedEffectId;
  const onSelectColors = selectedEffectId.onSelectColors;
  let dependencyMap;
  let displayNameStylesEffectConfig;
  let memo;
  let first;
  let closure_6;
  let closure_7;
  let closure_8;
  let tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = selectedEffectId(9473);
  displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedEffectId);
  let obj1 = selectedEffectId(1914);
  let items = [selectedEffectId];
  const effectColorCount = obj1.getEffectColorCount(selectedEffectId);
  memo = memo.useMemo(() => callback2(selectedEffectId), items);
  const tmp4 = displayNameStylesEffectConfig(memo.useState(selectedEffectId.selectedColors), 2);
  first = tmp4[0];
  closure_6 = tmp4[1];
  const items1 = [first, onSelectColors];
  const items2 = [memo, displayNameStylesEffectConfig.defaultColors];
  const callback = memo.useCallback(() => {
    let obj = selectedEffectId(_undefined[10]);
    const result = obj.triggerHapticFeedback(selectedEffectId(_undefined[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first);
    obj = { default: false, colors: first };
    onSelectColors(_undefined[11]).track(constants.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
    const obj2 = onSelectColors(_undefined[11]);
    onSelectColors(_undefined[12]).hideActionSheet();
  }, items1);
  const items3 = [first];
  const callback1 = memo.useCallback(() => {
    let defaultColors = memo[0];
    if (defaultColors == null) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    const items = [...defaultColors];
    closure_6(items);
  }, items2);
  closure_7 = memo.useCallback((arg0) => {
    let closure_0 = arg0;
    let num = first[arg0];
    if (num == null) {
      num = 0;
    }
    onSelectColors(_undefined[13])({
      color: num,
      onSelect(arg0) {
        let closure_0 = arg0;
        const result = selectedEffectId(4272).triggerHapticFeedback(selectedEffectId(4272).HapticFeedbackTypes.IMPACT_MEDIUM);
        outer1_6((arr) => arr.map((arg0, arg1) => {
          let tmp = arg0;
          if (arg1 === outer1_0) {
            tmp = closure_0;
          }
          return tmp;
        }));
      },
      actionButtonVariant: "primary"
    }, "stack");
  }, items3);
  closure_8 = memo.useCallback((arg0) => {
    const items = [...arg0];
    callback(items);
  }, []);
  obj = { header: null, children: null };
  obj = { title: displayNameStylesEffectConfig.name, trailing: null };
  obj1 = { variant: "primary", size: "sm", text: null, onPress: null };
  let intl = selectedEffectId(1236).intl;
  obj1[2] = intl.string(selectedEffectId(1236).t.XqMe3N);
  obj1[3] = callback;
  obj[1] = callback(selectedEffectId(4714).Button, obj1);
  obj[0] = callback(selectedEffectId(5396).BottomSheetTitleHeader, obj);
  let obj2 = { style: tmp.body, children: null };
  const obj3 = { style: tmp.gradientContainer, children: null };
  const obj4 = { style: tmp.gradient, colors: null, start: null, end: null };
  obj4[1] = first.map((color) => selectedEffectId(_undefined[19]).int2hex(color));
  obj4[2] = { x: 0, y: 0 };
  obj4[3] = { x: 1, y: 0 };
  const items4 = [callback(onSelectColors(4725), obj4), ];
  const obj5 = { style: tmp.dropperContainer, children: null };
  const tmp7 = onSelectColors(4725);
  obj5[1] = Array.from({ length: effectColorCount }).map((arg0, arg1) => {
    let closure_0 = arg1;
    let obj = {
      style: _undefined.dropper,
      onPress() {
        return outer1_7(closure_0);
      },
      accessibilityLabel: null,
      accessibilityRole: "button",
      children: null
    };
    const intl = selectedEffectId(_undefined[17]).intl;
    obj = { number: arg1 + 1 };
    obj[2] = intl.formatToPlainString(selectedEffectId(_undefined[17]).t.n5Ve0L, obj);
    obj[4] = outer1_9(selectedEffectId(_undefined[20]).EyeDropperIcon, { color: "white", size: "sm" });
    return outer1_9(closure_6, obj, arg1);
  });
  items4[1] = callback(first, obj5);
  obj3[1] = items4;
  const items5 = [callback2(first, obj3), , ];
  const arr = Array.from({ length: effectColorCount });
  items5[1] = callback(first, {
    style: tmp.optionContainer,
    children: memo.map((arr) => {
      let closure_0 = arr;
      let obj = onSelectColors(_undefined[21]);
      let selected = obj.isEqual(arr, first);
      obj = { style: _undefined.swatchWrapper, children: null };
      const items = [_undefined.pressable, ];
      if (selected) {
        selected = tmp5.selected;
      }
      obj = {
        style: items,
        onPress() {
          return outer1_8(closure_0);
        },
        children: null
      };
      items[1] = selected;
      const obj1 = { style: _undefined.option, colors: null, start: null, end: null };
      obj1[1] = arr.map((color) => arr(table[19]).int2hex(color));
      obj1[2] = { x: 0, y: 0 };
      obj1[3] = { x: 1, y: 0 };
      obj[2] = outer1_9(onSelectColors(_undefined[18]), obj1);
      obj[1] = outer1_9(selectedEffectId(_undefined[22]).PressableOpacity, obj);
      return outer1_9(first, obj, arg1);
    })
  });
  const obj7 = { text: null, onPress: null, variant: "secondary" };
  const intl2 = selectedEffectId(1236).intl;
  obj7[0] = intl2.string(selectedEffectId(1236).t.yBZMsQ);
  obj7[1] = callback1;
  items5[2] = callback(selectedEffectId(4714).Button, obj7);
  obj2[1] = items5;
  obj[1] = callback2(first, obj2);
  return callback(selectedEffectId(5397).BottomSheet, obj);
};