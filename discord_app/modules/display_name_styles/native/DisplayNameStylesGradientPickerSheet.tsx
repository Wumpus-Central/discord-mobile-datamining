// discord_app/modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4640);
let obj2 = {
  body: {
    paddingVertical: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_12,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: nativeDefault.space.PX_16,
  },
  gradientContainer: null,
  dropperContainer: null,
  dropper: null,
  gradient: null,
  optionContainer: null,
  swatchWrapper: null,
  pressable: null,
  selected: null,
  option: null,
};
let obj3 = {
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
};
obj2.gradientContainer = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
};
const rect = {
  left: nativeDefault.space.PX_24,
  right: nativeDefault.space.PX_24,
  position: "absolute",
  flexDirection: "row",
  justifyContent: "space-between",
};
obj2.dropperContainer = rect;
let obj4 = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
};
obj2.dropper = {
  borderColor: "white",
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
};
let size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
obj2.gradient = size;
let obj5 = {
  borderColor: "white",
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
};
obj2.optionContainer = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: nativeDefault.space.PX_4 };
obj2.swatchWrapper = { width: "25%", padding: 2 };
let obj6 = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: nativeDefault.space.PX_4 };
obj2.pressable = {
  height: 40,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 2,
  borderColor: "transparent",
};
let obj7 = {
  height: 40,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 2,
  borderColor: "transparent",
};
obj2.selected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.option = { flex: 1 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedColors) {
  ({ selectedEffectId, onSelectColors } = selectedColors);
  let displayNameStylesEffectConfig;
  let colors;
  let tmp = closure_10();
  importDefault = tmp;
  displayNameStylesEffectConfig = onSelectColors(displayNameStylesEffectConfig[7]).useDisplayNameStylesEffectConfig(
    selectedEffectId,
  );
  let obj = onSelectColors(displayNameStylesEffectConfig[7]);
  const effectColorCount = onSelectColors(displayNameStylesEffectConfig[8]).getEffectColorCount(selectedEffectId);
  const arr = require("useColorPresetsWithA11yLabels")(selectedEffectId);
  const tmp4 = arr(colors.useState(selectedColors.selectedColors), 2);
  colors = tmp4[0];
  closure_5 = tmp4[1];
  let items = [colors, onSelectColors];
  const items1 = [arr, displayNameStylesEffectConfig.defaultColors];
  const callback = colors.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(colors);
    AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: false, colors });
    const obj3 = { default: false, colors };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const items2 = [colors];
  const callback1 = colors.useCallback(() => {
    const first = arr[0];
    colors = undefined;
    if (first != null) {
      colors = first.colors;
    }
    if (colors == null) {
      colors = displayNameStylesEffectConfig.defaultColors;
    }
    const items = [...colors];
    closure_5(items);
  }, items1);
  closure_6 = colors.useCallback((arg0) => {
    closure_0 = arg0;
    let num = first[arg0];
    if (num == null) {
      num = 0;
    }
    closure_1(displayNameStylesEffectConfig[13])(
      {
        color: num,
        onSelect(arg0) {
          closure_0 = arg0;
          const result = onSelectColors(displayNameStylesEffectConfig[10]).triggerHapticFeedback(
            onSelectColors(displayNameStylesEffectConfig[10]).HapticFeedbackTypes.IMPACT_MEDIUM,
          );
          closure_1_5((arr) =>
            arr.map((item, index) => {
              let tmp = item;
              if (index === closure_0) {
                tmp = closure_1_0;
              }
              return tmp;
            }),
          );
        },
        actionButtonVariant: "primary",
      },
      "stack",
    );
  }, items2);
  closure_7 = colors.useCallback((arg0) => {
    const items = [...arg0];
    closure_5(items);
  }, []);
  let obj3 = { header: null, children: null };
  let obj4 = { title: displayNameStylesEffectConfig.name, trailing: null };
  const obj5 = { variant: "primary", size: "sm", text: null, onPress: null };
  let intl = onSelectColors(displayNameStylesEffectConfig[17]).intl;
  obj5.text = intl.string(onSelectColors(displayNameStylesEffectConfig[17]).t.XqMe3N);
  obj5.onPress = callback;
  obj4.trailing = closure_8(onSelectColors(displayNameStylesEffectConfig[16]).Button, obj5);
  obj3.header = closure_8(onSelectColors(displayNameStylesEffectConfig[15]).BottomSheetTitleHeader, obj4);
  const obj6 = { style: tmp.body, children: null };
  const obj7 = { style: tmp.gradientContainer, children: null };
  const obj8 = { style: tmp.gradient, colors: null, start: null, end: null };
  let obj2 = onSelectColors(displayNameStylesEffectConfig[8]);
  obj8.colors = colors.map((item) => onSelectColors(displayNameStylesEffectConfig[19]).int2hex(item));
  obj8.start = { x: 0, y: 0 };
  obj8.end = { x: 1, y: 0 };
  const items3 = [closure_8(require("LinearGradient"), obj8)];
  const obj9 = { style: tmp.dropperContainer, children: null };
  const tmp7 = require("LinearGradient");
  obj9.children = Array.from({ length: effectColorCount }).map((item, index) => {
    closure_0 = index;
    const obj = {
      style: closure_1.dropper,
      onPress() {
        return closure_6(closure_0);
      },
      accessibilityLabel: null,
      accessibilityRole: "button",
      children: null,
    };
    const intl = onSelectColors(displayNameStylesEffectConfig[17]).intl;
    obj.accessibilityLabel = intl.formatToPlainString(onSelectColors(displayNameStylesEffectConfig[17]).t.n5Ve0L, {
      number: index + 1,
    });
    obj.children = closure_1_8(onSelectColors(displayNameStylesEffectConfig[20]).EyeDropperIcon, {
      color: "white",
      size: "sm",
    });
    return closure_1_8(closure_6, obj, index);
  });
  items3[1] = closure_8(closure_5, obj9);
  obj7.children = items3;
  const items4 = [closure_9(closure_5, obj7), ,];
  const arr2 = Array.from({ length: effectColorCount });
  items4[1] = closure_8(closure_5, {
    style: tmp.optionContainer,
    children: arr.map((accessibilityLabel, index) => {
      colors = accessibilityLabel.colors;
      const isEqualResult = closure_1(displayNameStylesEffectConfig[21]).isEqual(colors, first);
      const obj2 = { style: closure_1.swatchWrapper, children: null };
      const items = [closure_1.pressable];
      let selected = isEqualResult;
      if (isEqualResult) {
        selected = closure_1.selected;
      }
      const obj3 = {
        style: items,
        onPress() {
          return closure_7(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: isEqualResult },
        accessibilityLabel: accessibilityLabel.a11yLabel,
        children: null,
      };
      items[1] = selected;
      const obj4 = { style: closure_1.option, colors: null, start: null, end: null };
      const obj = closure_1(displayNameStylesEffectConfig[21]);
      obj4.colors = colors.map((item) => colors(displayNameStylesEffectConfig[19]).int2hex(item));
      obj4.start = { x: 0, y: 0 };
      obj4.end = { x: 1, y: 0 };
      obj3.children = closure_1_8(closure_1(displayNameStylesEffectConfig[18]), obj4);
      obj2.children = closure_1_8(onSelectColors(displayNameStylesEffectConfig[22]).PressableOpacity, obj3);
      return closure_1_8(closure_5, obj2, index);
    }),
  });
  const obj11 = { text: null, onPress: null, variant: "secondary" };
  const intl2 = onSelectColors(displayNameStylesEffectConfig[17]).intl;
  obj11.text = intl2.string(onSelectColors(displayNameStylesEffectConfig[17]).t.yBZMsQ);
  obj11.onPress = callback1;
  items4[2] = closure_8(onSelectColors(displayNameStylesEffectConfig[16]).Button, obj11);
  obj6.children = items4;
  obj3.children = closure_9(closure_5, obj6);
  return closure_8(onSelectColors(displayNameStylesEffectConfig[14]).BottomSheet, obj3);
}
