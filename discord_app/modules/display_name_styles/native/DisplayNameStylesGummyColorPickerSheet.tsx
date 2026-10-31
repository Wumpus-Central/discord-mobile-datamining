// discord_app/modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx
import discord_common_shallowEqual from "../../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DisplayNameStylesUtils2 from "../DisplayNameStylesUtils.tsx";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useDisplayNameStylesEffectConfigs from "../hooks/useDisplayNameStylesEffectConfigs.tsx";
import showGummyCustomColorSheetDefault from "showGummyCustomColorSheet.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = get_ActivityIndicator);
let closure_7 = fn(1401).DISPLAY_NAME_STYLES_GUMMY_PRESETS;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const DisplayNameStylesUtils = fn(1400);
let closure_11 = DisplayNameStylesUtils.hueToGummyColor(0);
const createStyles = fn(5014);
let obj3 = {
  sheetBackground: { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg },
  body: null,
  sheetContentColumn: null,
  optionContainer: null,
  swatch: null,
  selectionRing: null,
};
let obj4 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
obj3.body = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_4,
  paddingBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
};
obj3.sheetContentColumn = { width: "100%", maxWidth: fn(17324).SHEET_CONTENT_MAX_WIDTH };
let obj5 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_4,
  paddingBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
};
obj3.optionContainer = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  columnGap: nativeDefault.space.PX_24,
  rowGap: nativeDefault.space.PX_24,
};
let size = { width: 40, height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj3.swatch = size;
let obj7 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj7.borderWidth = 2;
obj7.borderRadius = nativeDefault.radii.sm;
obj7.borderColor = nativeDefault.colors.BACKGROUND_BRAND;
obj3.selectionRing = obj7;
let closure_12 = createStyles.createStyles(obj3);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx",
);

export default function DisplayNameStylesGummyColorPickerSheet(arg0) {
  ({ selectedColors: require, onSelectColors } = arg0);
  let colors;
  let tmp = closure_12();
  dependencyMap = tmp;
  const displayNameStylesEffectConfig = useDisplayNameStylesEffectConfigs.useDisplayNameStylesEffectConfig(
    DisplayNameEffect.DisplayNameEffect.GUMMY,
  );
  const tmp6 = displayNameStylesEffectConfig(
    colors.useState(() => {
      let defaultColors = require;
      if (require.length <= 0) {
        defaultColors = displayNameStylesEffectConfig.defaultColors;
      }
      return defaultColors;
    }),
    2,
  );
  colors = tmp6[0];
  closure_5 = tmp6[1];
  const tmp5 = displayNameStylesEffectConfig;
  const tmp8Result = onSelectColors(17325)(DisplayNameEffect.DisplayNameEffect.GUMMY);
  const findIndexResult = tmp8Result.findIndex((colors) =>
    discord_common_shallowEqual.areArraysShallowEqual(colors.colors, first),
  );
  c6 = findIndexResult;
  closure_7 = tmp10;
  const tmp5Result = tmp5(
    colors.useState(() => {
      if (closure_7) {
        let result = DisplayNameStylesUtils2.rebuildGummySourceColor(first);
      } else {
        result = closure_11;
      }
      return result;
    }),
    2,
  );
  const first1 = tmp5Result[0];
  closure_9 = tmp5Result[1];
  let items = [first1];
  const callback = obj2.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    showGummyCustomColorSheetDefault({
      initialColor: first1,
      onSelect(color) {
        closure_1_9(color);
        closure_1_5(require("DisplayNameStylesUtils").buildGummyColors(color));
      },
    });
  }, items);
  closure_10 = obj2.useCallback((arg0) => {
    const items = [...arg0];
    closure_5(items);
  }, []);
  const items1 = [colors, onSelectColors];
  const callback1 = obj2.useCallback(() => {
    const items = [...closure_7[0]];
    closure_5(items);
    closure_9(closure_11);
  }, []);
  const callback2 = obj2.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(colors);
    AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: false, colors });
    const obj3 = { default: false, colors };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  let obj3 = { backgroundStyles: tmp.sheetBackground, header: null, children: null };
  const obj4 = { title: displayNameStylesEffectConfig.name, trailing: null };
  const tmp8 = onSelectColors(17325);
  const obj5 = { variant: "primary", size: "sm", text: null, onPress: null };
  const intl = util.intl;
  obj5.text = intl.string(util.t.XqMe3N);
  obj5.onPress = callback2;
  obj4.trailing = closure_9(components_Button_Button.Button, obj5);
  obj3.header = closure_9(onSelectColors(17320), obj4);
  const obj6 = { style: tmp.body, children: null };
  const obj7 = { style: null, children: null };
  const items2 = [,];
  ({ sheetContentColumn: arr5[0], optionContainer: arr5[1] } = tmp);
  obj7.style = items2;
  let tmp21;
  const tmp7Result = onSelectColors(17320);
  if (colors.length > 0 && findIndexResult < 0) {
    tmp21 = colors;
  }
  const items3 = [
    closure_9(onSelectColors(17329), {
      activeColors: tmp21,
      isSelected: colors.length > 0 && findIndexResult < 0,
      onPress: callback,
      showGummyStripes: true,
    }),
    tmp8Result.map((accessibilityLabel, index) => {
      colors = accessibilityLabel.colors;
      let tmp = c6 === index;
      const obj = {
        style: swatch.swatch,
        onPress() {
          return closure_10(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: tmp },
        accessibilityLabel: accessibilityLabel.a11yLabel,
        children: null,
      };
      const items = [closure_9(onSelectColors(swatch[23]), { colors })];
      if (tmp) {
        const obj2 = { style: swatch.selectionRing, pointerEvents: "none" };
        tmp = closure_9(closure_5, obj2);
      }
      items[1] = tmp;
      obj.children = items;
      return closure_10(c6, obj, index);
    }),
  ];
  obj7.children = items3;
  const items4 = [closure_10(closure_5, obj7)];
  const obj8 = { style: tmp.sheetContentColumn, children: null };
  const obj9 = { text: null, onPress: null, variant: "secondary", size: "md", grow: true };
  const intl2 = util.intl;
  obj9.text = intl2.string(util.t.yBZMsQ);
  obj9.onPress = callback1;
  obj8.children = closure_9(components_Button_Button.Button, obj9);
  items4[1] = closure_9(closure_5, obj8);
  obj6.children = items4;
  obj3.children = closure_10(closure_5, obj6);
  return closure_9(Sheet_BottomSheet.BottomSheet, obj3);
}
