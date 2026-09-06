// discord_app/modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = {
  body: null,
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
createStyles = {
  paddingVertical: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
};
createStyles.body = createStyles;
createStyles.gradientContainer = {
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
createStyles.dropperContainer = rect;
let obj1 = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
};
createStyles.dropper = {
  borderColor: "white",
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
};
let size = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
createStyles.gradient = size;
let obj2 = {
  borderColor: "white",
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.round,
  borderWidth: 1,
};
createStyles.optionContainer = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: nativeDefault.space.PX_4 };
createStyles.swatchWrapper = { width: "25%", padding: 2 };
let obj3 = { flexDirection: "row", flexWrap: "wrap", paddingHorizontal: nativeDefault.space.PX_4 };
createStyles.pressable = {
  height: 40,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 2,
  borderColor: "transparent",
};
let obj4 = {
  height: 40,
  borderRadius: nativeDefault.radii.sm,
  overflow: "hidden",
  borderWidth: 2,
  borderColor: "transparent",
};
createStyles.selected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.option = { flex: 1 };
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedColors) {
  ({ selectedEffectId, onSelectColors } = selectedColors);
  let displayNameStylesEffectConfig;
  let colors;
  let tmp = closure_10();
  importDefault = tmp;
  let obj = onSelectColors(displayNameStylesEffectConfig[7]);
  displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedEffectId);
  let obj1 = onSelectColors(displayNameStylesEffectConfig[8]);
  const effectColorCount = obj1.getEffectColorCount(selectedEffectId);
  let arr = require("useColorPresetsWithA11yLabels")(selectedEffectId);
  const tmp4 = arr(colors.useState(selectedColors.selectedColors), 2);
  colors = tmp4[0];
  closure_5 = tmp4[1];
  let items = [colors, onSelectColors];
  const items1 = [arr, displayNameStylesEffectConfig.defaultColors];
  const callback = colors.useCallback(() => {
    let obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(colors);
    obj = { default: false, colors };
    AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
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
  obj = { header: null, children: null };
  obj = { title: displayNameStylesEffectConfig.name, trailing: null };
  obj1 = { variant: "primary", size: "sm", text: null, onPress: null };
  let intl = onSelectColors(displayNameStylesEffectConfig[17]).intl;
  obj1.text = intl.string(onSelectColors(displayNameStylesEffectConfig[17]).t.XqMe3N);
  obj1.onPress = callback;
  obj.trailing = closure_8(onSelectColors(displayNameStylesEffectConfig[16]).Button, obj1);
  obj.header = closure_8(onSelectColors(displayNameStylesEffectConfig[15]).BottomSheetTitleHeader, obj);
  let obj2 = { style: tmp.body, children: null };
  const obj3 = { style: tmp.gradientContainer, children: null };
  const obj4 = {
    style: tmp.gradient,
    colors: colors.map((item) => onSelectColors(displayNameStylesEffectConfig[19]).int2hex(item)),
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
  };
  const items3 = [closure_8(require("LinearGradient"), obj4)];
  const obj5 = { style: tmp.dropperContainer, children: null };
  arr = Array.from({ length: effectColorCount });
  obj5.children = arr.map((item, index) => {
    closure_0 = index;
    let obj = {
      style: closure_1.dropper,
      onPress() {
        return closure_6(closure_0);
      },
      accessibilityLabel: null,
      accessibilityRole: "button",
      children: null,
    };
    const intl = onSelectColors(displayNameStylesEffectConfig[17]).intl;
    obj = { number: index + 1 };
    obj.accessibilityLabel = intl.formatToPlainString(onSelectColors(displayNameStylesEffectConfig[17]).t.n5Ve0L, obj);
    obj.children = closure_1_8(onSelectColors(displayNameStylesEffectConfig[20]).EyeDropperIcon, {
      color: "white",
      size: "sm",
    });
    return closure_1_8(closure_6, obj, index);
  });
  items3[1] = closure_8(closure_5, obj5);
  obj3.children = items3;
  const items4 = [closure_9(closure_5, obj3), ,];
  const tmp7 = require("LinearGradient");
  items4[1] = closure_8(closure_5, {
    style: tmp.optionContainer,
    children: arr.map((accessibilityLabel, index) => {
      colors = accessibilityLabel.colors;
      let obj = closure_1(displayNameStylesEffectConfig[21]);
      const isEqualResult = obj.isEqual(colors, first);
      obj = { style: closure_1.swatchWrapper, children: null };
      const items = [closure_1.pressable];
      let selected = isEqualResult;
      if (isEqualResult) {
        selected = tmp6.selected;
      }
      obj = {
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
      const obj1 = {
        style: closure_1.option,
        colors: colors.map((item) => colors(displayNameStylesEffectConfig[19]).int2hex(item)),
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
      };
      obj.children = closure_1_8(closure_1(displayNameStylesEffectConfig[18]), obj1);
      obj.children = closure_1_8(onSelectColors(displayNameStylesEffectConfig[22]).PressableOpacity, obj);
      return closure_1_8(closure_5, obj, index);
    }),
  });
  const obj7 = { text: null, onPress: null, variant: "secondary" };
  const intl2 = onSelectColors(displayNameStylesEffectConfig[17]).intl;
  obj7.text = intl2.string(onSelectColors(displayNameStylesEffectConfig[17]).t.yBZMsQ);
  obj7.onPress = callback1;
  items4[2] = closure_8(onSelectColors(displayNameStylesEffectConfig[16]).Button, obj7);
  obj2.children = items4;
  obj.children = closure_9(closure_5, obj2);
  return closure_8(onSelectColors(displayNameStylesEffectConfig[14]).BottomSheet, obj);
}
