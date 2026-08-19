// discord_app/modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { paddingVertical: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_12, flexGrow: 1, justifyContent: "center", alignItems: "center", gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "row", justifyContent: "center", alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_8 };
createCacheKey[2] = { left: ThemesDefault.space.PX_24, right: ThemesDefault.space.PX_24, position: "absolute", flexDirection: "row", justifyContent: "space-between" };
createCacheKey[3] = { borderColor: "white", padding: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.round, borderWidth: 1 };
createCacheKey[4] = { height: 50, width: "100%", borderRadius: ThemesDefault.radii.sm };
createCacheKey[5] = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: ThemesDefault.space.PX_4 };
createCacheKey[6] = { width: "25%", padding: 2 };
createCacheKey[7] = { height: 40, borderRadius: ThemesDefault.radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
createCacheKey[8] = { borderColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[9] = { flex: 1 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedColors) {
  ({ selectedEffectId, onSelectColors } = selectedColors);
  let displayNameStylesEffectConfig;
  let first;
  let tmp = callback3();
  importDefault = tmp;
  let obj = onSelectColors(displayNameStylesEffectConfig[7]);
  displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedEffectId);
  obj1 = onSelectColors(displayNameStylesEffectConfig[8]);
  const effectColorCount = obj1.getEffectColorCount(selectedEffectId);
  let arr = importDefault(displayNameStylesEffectConfig[9])(selectedEffectId);
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
    lib(displayNameStylesEffectConfig[11]).track(constants.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
    const obj2 = lib(displayNameStylesEffectConfig[11]);
    lib(displayNameStylesEffectConfig[12]).hideActionSheet();
  }, items);
  const items2 = [first];
  const callback1 = first.useCallback(() => {
    first = arr[0];
    let colors;
    if (first != null) {
      colors = first.colors;
    }
    if (colors == null) {
      colors = displayNameStylesEffectConfig.defaultColors;
    }
    const items = [...colors];
    callback(items);
  }, items1);
  closure_6 = first.useCallback((arg0) => {
    closure_0 = arg0;
    let num = first[arg0];
    if (num == null) {
      num = 0;
    }
    lib(displayNameStylesEffectConfig[13])({
      color: num,
      onSelect(arg0) {
        closure_0 = arg0;
        const result = onSelectColors(displayNameStylesEffectConfig[10]).triggerHapticFeedback(onSelectColors(displayNameStylesEffectConfig[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
        closure_1_5((arr) => arr.map((item, index) => {
          let tmp = item;
          if (index === closure_1_0) {
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
  obj = { title: displayNameStylesEffectConfig.name, trailing: null };
  obj1 = { variant: "primary", size: "sm", text: null, onPress: null };
  let intl = onSelectColors(displayNameStylesEffectConfig[17]).intl;
  obj1[2] = intl.string(onSelectColors(displayNameStylesEffectConfig[17]).t.XqMe3N);
  obj1[3] = callback;
  obj[1] = callback(onSelectColors(displayNameStylesEffectConfig[16]).Button, obj1);
  obj[0] = callback(onSelectColors(displayNameStylesEffectConfig[15]).BottomSheetTitleHeader, obj);
  let obj2 = { style: tmp.body, children: null };
  const obj3 = { style: tmp.gradientContainer, children: null };
  const obj4 = { style: tmp.gradient, colors: first.map((item, index) => onSelectColors(displayNameStylesEffectConfig[19]).int2hex(item)), start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
  const items3 = [callback(importDefault(displayNameStylesEffectConfig[18]), obj4), ];
  const obj5 = { style: tmp.dropperContainer, children: null };
  arr = Array.from({ length: effectColorCount });
  obj5[1] = arr.map((item, index) => {
    closure_0 = index;
    const intl = onSelectColors(displayNameStylesEffectConfig[17]).intl;
    const obj = { number: index + 1 };
    obj[2] = intl.formatToPlainString(onSelectColors(displayNameStylesEffectConfig[17]).t.n5Ve0L, obj);
    obj[4] = closure_1_8(onSelectColors(displayNameStylesEffectConfig[20]).EyeDropperIcon, { color: "white", size: "sm" });
    return closure_1_8(closure_6, obj, index);
  });
  items3[1] = callback(closure_5, obj5);
  obj3[1] = items3;
  const items4 = [callback2(closure_5, obj3), , ];
  const tmp7 = importDefault(displayNameStylesEffectConfig[18]);
  items4[1] = callback(closure_5, {
    style: tmp.optionContainer,
    children: arr.map((item, index) => {
      const colors = item.colors;
      let obj = lib(displayNameStylesEffectConfig[21]);
      const isEqualResult = obj.isEqual(colors, first);
      obj = { style: lib.swatchWrapper, children: null };
      const items = [lib.pressable, ];
      let selected = isEqualResult;
      if (isEqualResult) {
        selected = lib.selected;
      }
      obj = {
        style: items,
        onPress() {
          return closure_1_7(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: isEqualResult },
        accessibilityLabel: item.a11yLabel,
        children: null
      };
      items[1] = selected;
      obj1 = { style: lib.option, colors: colors.map((item, index) => colors(table[19]).int2hex(item)), start: { x: 0, y: 0 }, end: { x: 1, y: 0 } };
      obj[5] = closure_1_8(lib(displayNameStylesEffectConfig[18]), obj1);
      obj[1] = closure_1_8(onSelectColors(displayNameStylesEffectConfig[22]).PressableOpacity, obj);
      return closure_1_8(closure_5, obj, index);
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