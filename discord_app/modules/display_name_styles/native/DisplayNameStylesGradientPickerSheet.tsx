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
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const SHEET_CONTENT_MAX_WIDTH = fn(17324).SHEET_CONTENT_MAX_WIDTH;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5014);
let closure_12 = createStyles.createStyles((arg0) => {
  const obj = {
    sheetBackground: { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg },
    body: null,
    gradientContainer: null,
    colorStopRow: null,
    colorStop: null,
    gradient: null,
    optionContainer: null,
    pressable: null,
    selectedRing: null,
    option: null,
    resetButtonContainer: null,
  };
  const obj2 = { borderTopLeftRadius: nativeDefault.radii.lg, borderTopRightRadius: nativeDefault.radii.lg };
  obj.body = {
    paddingTop: nativeDefault.space.PX_4,
    paddingBottom: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  };
  const obj3 = {
    paddingTop: nativeDefault.space.PX_4,
    paddingBottom: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  };
  obj.gradientContainer = {
    marginBottom: nativeDefault.space.PX_24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: SHEET_CONTENT_MAX_WIDTH,
  };
  const rect = {
    left: nativeDefault.space.PX_8,
    right: nativeDefault.space.PX_8,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  };
  obj.colorStopRow = rect;
  const size = { borderColor: "white", width: 28, height: 28, borderRadius: nativeDefault.radii.sm, borderWidth: 1 };
  obj.colorStop = size;
  const size1 = { height: 50, width: "100%", borderRadius: nativeDefault.radii.sm };
  obj.gradient = size1;
  const space = nativeDefault.space;
  const obj4 = {
    marginBottom: nativeDefault.space.PX_24,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: SHEET_CONTENT_MAX_WIDTH,
  };
  obj.optionContainer = {
    marginBottom: arg0 ? space.PX_24 : space.PX_20,
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    maxWidth: SHEET_CONTENT_MAX_WIDTH,
    flexWrap: "wrap",
    columnGap: nativeDefault.space.PX_24,
    rowGap: nativeDefault.space.PX_16,
  };
  const size2 = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
  obj.pressable = size2;
  const obj6 = {};
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj6.borderRadius = nativeDefault.radii.sm;
  obj6.borderWidth = 2;
  obj6.borderColor = nativeDefault.colors.BACKGROUND_BRAND;
  obj.selectedRing = obj6;
  obj.option = { flex: 1 };
  obj.resetButtonContainer = { width: "100%", maxWidth: SHEET_CONTENT_MAX_WIDTH, flexDirection: "row" };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGradientPickerSheet.tsx");

export default function DisplayNameStylesGradientPickerSheet(onSelectColors) {
  ({ selectedColors: require, selectedEffectId } = onSelectColors);
  onSelectColors = onSelectColors.onSelectColors;
  colors = undefined;
  closure_6 = undefined;
  let tmp = closure_12(selectedEffectId === require("DisplayNameEffect").DisplayNameEffect.PRISM);
  _slicedToArray = tmp;
  const displayNameStylesEffectConfig = require("useDisplayNameStylesEffectConfigs").useDisplayNameStylesEffectConfig(
    selectedEffectId,
  );
  let obj = require("useDisplayNameStylesEffectConfigs");
  const effectColorCount = require("DisplayNameStylesUtils").getEffectColorCount(selectedEffectId);
  [colors, closure_6] = displayNameStylesEffectConfig.useState(() => {
    let defaultColors = require;
    if (require.length <= 0) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    return defaultColors;
  });
  const arr2 = selectedEffectId(onSelectColors[11])(selectedEffectId);
  let items = [colors, onSelectColors];
  const items1 = [arr2, displayNameStylesEffectConfig.defaultColors];
  const callback = displayNameStylesEffectConfig.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(colors);
    AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: false, colors });
    const obj3 = { default: false, colors };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const items2 = [colors];
  const callback1 = displayNameStylesEffectConfig.useCallback(() => {
    const first = arr2[0];
    colors = undefined;
    if (first != null) {
      colors = first.colors;
    }
    if (colors == null) {
      colors = displayNameStylesEffectConfig.defaultColors;
    }
    const items = [...colors];
    closure_6(items);
  }, items1);
  closure_8 = displayNameStylesEffectConfig.useCallback((arg0) => {
    closure_0 = arg0;
    let num = first[arg0];
    if (num == null) {
      num = 0;
    }
    selectedEffectId(onSelectColors[15])(
      {
        color: num,
        onSelect(arg0) {
          closure_0 = arg0;
          const result = require("HapticUtils").triggerHapticFeedback(
            require("HapticUtils").HapticFeedbackTypes.IMPACT_MEDIUM,
          );
          closure_1_6((arr) =>
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
  closure_9 = displayNameStylesEffectConfig.useCallback((arg0) => {
    const items = [...arg0];
    closure_6(items);
  }, []);
  let obj3 = { backgroundStyles: tmp.sheetBackground, header: null, children: null };
  let obj4 = { title: displayNameStylesEffectConfig.name, trailing: null };
  let obj2 = require("DisplayNameStylesUtils");
  const obj5 = { variant: "primary", size: "sm", text: null, onPress: null };
  let intl = require("util").intl;
  obj5.text = intl.string(require("util").t.XqMe3N);
  obj5.onPress = callback;
  obj4.trailing = closure_10(require("components/Button/Button").Button, obj5);
  obj3.header = closure_10(selectedEffectId(onSelectColors[17]), obj4);
  const obj6 = { style: tmp.body, children: null };
  const obj7 = { style: tmp.gradientContainer, children: null };
  const obj8 = { style: tmp.gradient, colors: null, locations: null, start: null, end: null };
  const tmp7 = selectedEffectId(onSelectColors[17]);
  obj8.colors = colors.map((item) => require("utils/ColorUtils").int2hex(item));
  obj8.locations = selectedEffectId(onSelectColors[22])(selectedEffectId, colors, true);
  obj8.start = { x: 0, y: 0 };
  obj8.end = { x: 1, y: 0 };
  const items3 = [closure_10(selectedEffectId(onSelectColors[20]), obj8)];
  const obj9 = { style: tmp.colorStopRow, children: null };
  const tmp8 = selectedEffectId(onSelectColors[20]);
  obj9.children = Array.from({ length: effectColorCount }).map((item, index) => {
    closure_0 = index;
    const items = [closure_3.colorStop];
    let num = first[index];
    if (num == null) {
      num = 0;
    }
    const obj2 = { style: null, onPress: null, accessibilityLabel: null, accessibilityRole: "button" };
    const obj = require("utils/ColorUtils");
    items[1] = { backgroundColor: require("utils/ColorUtils").int2hex(num) };
    obj2.style = items;
    obj2.onPress = function onPress() {
      return closure_8(closure_0);
    };
    const intl = require("util").intl;
    const obj3 = { backgroundColor: require("utils/ColorUtils").int2hex(num) };
    const obj4 = { number: index + 1 };
    const formatToPlainStringResult = intl.formatToPlainString(require("util").t.n5Ve0L, { number: index + 1 });
    let num2 = first[index];
    if (num2 == null) {
      num2 = 0;
    }
    obj2.accessibilityLabel = "" + formatToPlainStringResult + ", " + require("utils/ColorUtils").int2hex(num2);
    return closure_1_10(closure_6, obj2, index);
  });
  items3[1] = closure_10(colors, obj9);
  obj7.children = items3;
  const items4 = [closure_11(colors, obj7), ,];
  const arr = Array.from({ length: effectColorCount });
  items4[1] = closure_10(colors, {
    style: tmp.optionContainer,
    children: arr2.map((accessibilityLabel, index) => {
      colors = accessibilityLabel.colors;
      let isEqualResult = selectedEffectId(onSelectColors[23]).isEqual(colors, first);
      const obj2 = {
        style: closure_3.pressable,
        onPress() {
          return closure_9(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: isEqualResult },
        accessibilityLabel: accessibilityLabel.a11yLabel,
        children: null,
      };
      const obj3 = { style: closure_3.option, colors: null, locations: null, start: null, end: null };
      const obj = selectedEffectId(onSelectColors[23]);
      obj3.colors = colors.map((item) => colors(onSelectColors[21]).int2hex(item));
      obj3.locations = selectedEffectId(onSelectColors[22])(selectedEffectId, colors);
      obj3.start = { x: 0, y: 0 };
      obj3.end = { x: 1, y: 0 };
      const items = [closure_1_10(selectedEffectId(onSelectColors[20]), obj3)];
      if (isEqualResult) {
        const obj4 = { style: closure_3.selectedRing, pointerEvents: "none" };
        isEqualResult = closure_1_10(first, obj4);
      }
      items[1] = isEqualResult;
      obj2.children = items;
      return closure_1_11(require("Pressables").PressableOpacity, obj2, index);
    }),
  });
  const obj11 = { style: tmp.resetButtonContainer, children: null };
  const obj12 = { text: null, onPress: null, variant: "secondary", size: "md", grow: true };
  const intl2 = require("util").intl;
  obj12.text = intl2.string(require("util").t.yBZMsQ);
  obj12.onPress = callback1;
  obj11.children = closure_10(require("components/Button/Button").Button, obj12);
  items4[2] = closure_10(colors, obj11);
  obj6.children = items4;
  obj3.children = closure_11(colors, obj6);
  return closure_10(require("Sheet/BottomSheet").BottomSheet, obj3);
}
