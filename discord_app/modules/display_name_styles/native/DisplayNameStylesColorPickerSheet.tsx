// discord_app/modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import _modDef2932 from "../intl/DisplayNameStyles.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import useDisplayNameStylesEffectDefaultColorsDefault from "../hooks/useDisplayNameStylesEffectDefaultColors.native.tsx";
import showCustomColorPickerActionSheetDefault from "../../color_picker/native/showCustomColorPickerActionSheet.tsx";
import DisplayNameStylesSheetHeaderDefault from "DisplayNameStylesSheetHeader.tsx";
import useColorPresetsWithA11yLabelsDefault from "../hooks/useColorPresetsWithA11yLabels.tsx";
import DisplayNameStylesCustomColorButtonDefault from "DisplayNameStylesCustomColorButton.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  sheetBackground: { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg },
  container: null,
  contentContainer: null,
  presetGrid: null,
  presetColor: null,
  presetColorSelected: null,
};
let obj3 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
obj2.container = {
  flex: 1,
  paddingTop: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
};
obj2.contentContainer = { alignSelf: "center", width: "100%", maxWidth: fn(17324).SHEET_CONTENT_MAX_WIDTH };
let obj4 = {
  flex: 1,
  paddingTop: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
};
obj2.presetGrid = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  columnGap: nativeDefault.space.PX_24,
  rowGap: nativeDefault.space.PX_20,
  marginBottom: nativeDefault.space.PX_20,
};
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
obj2.presetColor = size;
let obj5 = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  columnGap: nativeDefault.space.PX_24,
  rowGap: nativeDefault.space.PX_20,
  marginBottom: nativeDefault.space.PX_20,
};
obj2.presetColorSelected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(arg0) {
  ({ selectedColor, selectedEffectId, onSelectColor } = arg0);
  let color;
  noop = undefined;
  const tmp = closure_10();
  importDefault = tmp;
  const tmp5 = useDisplayNameStylesEffectDefaultColorsDefault()[selectedEffectId];
  dependencyMap = tmp5;
  const tmp6 = color(noop.useState(selectedColor), 2);
  color = tmp6[0];
  noop = tmp6[1];
  const arr = useColorPresetsWithA11yLabelsDefault(selectedEffectId);
  const tmp8 = color !== tmp5[0] && !arr.some((item) => item.colors[0] === first);
  let obj3 = { colors: tmp5, a11yLabel: null };
  const intl = onSelectColor(1113).intl;
  let obj = onSelectColor(8741);
  const stringResult = intl.string(onSelectColor(1113).t.bBvAEH);
  obj3.a11yLabel = "" + stringResult + ", " + onSelectColor(1090).int2hex(tmp5[0]);
  let items = [obj3, ...arr.filter((item) => item.colors[0] !== 32)];
  closure_5 = tmp10;
  closure_6 = obj2.useCallback((arg0) => {
    closure_4(arg0);
  }, []);
  const items1 = [tmp5, onSelectColor];
  const onPress = obj2.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    onSelectColor(32);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  const items2 = [color];
  const items3 = [color !== selectedColor, color, onSelectColor, tmp5];
  const callback1 = obj2.useCallback(() => {
    showCustomColorPickerActionSheetDefault(
      {
        color,
        onSelect(arg0) {
          const result = onSelectColor(5260).triggerHapticFeedback(
            onSelectColor(5260).HapticFeedbackTypes.IMPACT_MEDIUM,
          );
          closure_1_4(arg0);
        },
        actionButtonVariant: "primary",
      },
      "stack",
    );
  }, items2);
  const callback2 = obj2.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    if (closure_5) {
      onSelectColor(first);
      const obj3 = { default: first === 32, colors: null };
      const items = [first];
      obj3.colors = items;
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items3);
  let obj4 = {
    backgroundStyles: tmp.sheetBackground,
    ref: obj.useBottomSheetRef().bottomSheetRef,
    header: null,
    children: null,
  };
  const obj5 = { title: null, trailing: null };
  const tmp2Result = onSelectColor(1090);
  const intl2 = onSelectColor(1113).intl;
  obj5.title = intl2.string(_modDef2932["6OxgN7"]);
  const obj6 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl3 = onSelectColor(1113).intl;
  obj6.text = intl3.string(onSelectColor(1113).t.XqMe3N);
  obj6.onPress = callback2;
  obj5.trailing = closure_8(onSelectColor(5634).Button, obj6);
  obj4.header = closure_8(DisplayNameStylesSheetHeaderDefault, obj5);
  const obj7 = { style: tmp.container, children: null };
  const obj8 = { style: tmp.contentContainer, children: null };
  const obj9 = { style: tmp.presetGrid, children: null };
  let tmp19;
  const tmp4Result = DisplayNameStylesSheetHeaderDefault;
  if (tmp8) {
    const items4 = [color];
    tmp19 = items4;
  }
  const items5 = [
    closure_8(DisplayNameStylesCustomColorButtonDefault, { activeColors: tmp19, isSelected: tmp8, onPress: callback1 }),
    items.map((colors, index) => {
      [tmp] = colors.colors;
      const obj = {
        onPress: tmp === 32 ? callback : () => closure_6(onSelectColor),
        style: null,
        accessibilityRole: "button",
        accessibilityState: null,
        accessibilityLabel: null,
      };
      const items = [presetColor.presetColor, ,];
      const obj2 = { backgroundColor: onSelectColor(1090).int2hex(tmp) };
      items[1] = obj2;
      let presetColorSelected = tmp4;
      if (tmp === first) {
        presetColorSelected = presetColor.presetColorSelected;
      }
      items[2] = presetColorSelected;
      obj.style = items;
      obj.accessibilityState = { selected: tmp === first };
      obj.accessibilityLabel = colors.a11yLabel;
      return closure_1_8(closure_6, obj, index);
    }),
  ];
  obj9.children = items5;
  const items6 = [closure_9(closure_5, obj9)];
  const obj10 = { text: null, onPress: null, variant: "secondary", size: "md", grow: true };
  const intl4 = onSelectColor(1113).intl;
  obj10.text = intl4.string(onSelectColor(1113).t.yBZMsQ);
  obj10.onPress = onPress;
  items6[1] = closure_8(onSelectColor(5634).Button, obj10);
  obj8.children = items6;
  obj7.children = closure_9(closure_5, obj8);
  obj4.children = closure_8(closure_5, obj7);
  return closure_8(onSelectColor(5272).BottomSheet, obj4);
}
