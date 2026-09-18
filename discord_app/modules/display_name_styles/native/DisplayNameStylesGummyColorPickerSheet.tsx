// === Module 15556: DisplayNameStylesGummyColorPickerSheet ===

// Module 15556 (DisplayNameStylesGummyColorPickerSheet)
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import DisplayNameStylesUtils2 from "DisplayNameStylesUtils" /* 1389 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4689 */;
import HapticUtils from "HapticUtils" /* 4690 */;
import showGummyCustomColorSheetDefault from "showGummyCustomColorSheet" /* 15558 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = get_ActivityIndicator);
let closure_7 = fn(1390).DISPLAY_NAME_STYLES_GUMMY_PRESETS;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const DisplayNameStylesUtils = fn(1389);
let closure_11 = DisplayNameStylesUtils.hueToGummyColor(0);
const createStyles = fn(4722);
let obj3 = { body: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, alignItems: "center" }, colorRowInset: null, optionContainer: null, swatchWrapper: null, swatch: null, swatchSelected: null, customSwatchEmpty: null, customIconOverlay: null, customIconScrim: null };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, alignItems: "center" };
obj3.colorRowInset = { paddingHorizontal: nativeDefault.space.PX_4, alignSelf: "stretch" };
obj3.optionContainer = { flexDirection: "row", flexWrap: "wrap" };
obj3.swatchWrapper = { width: "25%", padding: 2 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_4, alignSelf: "stretch" };
obj3.swatch = { height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
let obj6 = { height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
obj3.swatchSelected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj7 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
obj3.customSwatchEmpty = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_NORMAL };
let obj9 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj9.alignItems = "center";
obj9.justifyContent = "center";
obj3.customIconOverlay = obj9;
let size = { width: 28, height: 28, borderRadius: nativeDefault.radii.round, backgroundColor: "transparent", alignItems: "center", justifyContent: "center" };
obj3.customIconScrim = size;
let closure_12 = createStyles.createStyles(obj3);
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx");

export default function DisplayNameStylesGummyColorPickerSheet(selectedColors) {
  selectedColors = selectedColors.selectedColors;
  const onSelectColors = selectedColors.onSelectColors;
  _slicedToArray = undefined;
  initialColor = undefined;
  closure_5 = undefined;
  first1 = undefined;
  c8 = undefined;
  closure_9 = undefined;
  const tmp = closure_12();
  dependencyMap = tmp;
  let tmp5 = selectedColors.length > 0;
  const displayNameStylesEffectConfig = selectedColors(11149).useDisplayNameStylesEffectConfig(selectedColors(1391).DisplayNameEffect.GUMMY);
  if (tmp5) {
    tmp5 = !dependencyMap.some((item) => discord_common_shallowEqual.areArraysShallowEqual(item, selectedColors));
  }
  _slicedToArray = tmp5;
  [initialColor, closure_5] = initialColor.useState(() => {
    if (closure_3) {
      let result = DisplayNameStylesUtils2.rebuildGummySourceColor(selectedColors);
    } else {
      result = closure_11;
    }
    return result;
  });
  [first1, dependencyMap] = initialColor.useState(() => {
    let gummyColors = selectedColors;
    if (selectedColors.length <= 0) {
      gummyColors = DisplayNameStylesUtils2.buildGummyColors(closure_11);
    }
    return gummyColors;
  });
  let obj = selectedColors(11149);
  const tmp11 = onSelectColors;
  const tmp12Result = onSelectColors(15557)(selectedColors(1391).DisplayNameEffect.GUMMY);
  const findIndexResult = tmp12Result.findIndex((colors) => discord_common_shallowEqual.areArraysShallowEqual(colors.colors, first1));
  c8 = findIndexResult;
  let items = [initialColor];
  const callback = initialColor.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    showGummyCustomColorSheetDefault({
      initialColor,
      onSelect(color) {
        closure_1_5(color);
        dependencyMap(selectedColors(closure_2[6]).buildGummyColors(color));
      }
    });
  }, items);
  closure_9 = initialColor.useCallback((arg0) => {
    const items = [...arg0];
    dependencyMap(items);
  }, []);
  const items1 = [first1, onSelectColors];
  const callback1 = initialColor.useCallback(() => {
    const items = [...closure_7[0]];
    dependencyMap(items);
    closure_5(closure_11);
  }, []);
  const callback2 = initialColor.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first1);
    AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: false, colors: first1 });
    const obj3 = { default: false, colors: first1 };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  let obj2 = { header: null, children: null };
  let obj3 = { title: displayNameStylesEffectConfig.name, trailing: null };
  const tmp12 = onSelectColors(15557);
  const obj4 = { variant: "primary", size: "sm", text: null, onPress: null };
  const intl = tmp2(1115).intl;
  obj4.text = intl.string(selectedColors(1115).t.XqMe3N);
  obj4.onPress = callback2;
  obj3.trailing = closure_9(selectedColors(5144).Button, obj4);
  obj2.header = closure_9(onSelectColors(15554), obj3);
  const obj5 = { style: tmp.body, children: null };
  const obj6 = { style: null, children: null };
  const items2 = [, ];
  ({ colorRowInset: arr5[0], optionContainer: arr5[1] } = tmp);
  obj6.style = items2;
  const obj7 = { style: tmp.swatchWrapper, children: null };
  const items3 = [tmp.swatch, ];
  let swatchSelected = tmp23;
  if (findIndexResult < 0) {
    swatchSelected = tmp.swatchSelected;
  }
  const obj8 = { style: items3, onPress: callback, accessibilityRole: "button", accessibilityState: { selected: findIndexResult < 0 }, accessibilityLabel: null, children: null };
  items3[1] = swatchSelected;
  const intl2 = tmp2(1115).intl;
  obj8.accessibilityLabel = intl2.string(selectedColors(1115).t["FHBa/1"]);
  if (findIndexResult >= 0) {
    const obj9 = { style: tmp.customSwatchEmpty };
    let tmp18Result = tmp18(tmp21, obj9);
  } else {
    const obj10 = { colors: first1 };
    tmp18Result = tmp18(tmp11(14833), obj10);
  }
  const items4 = [tmp18Result, ];
  const obj11 = { style: tmp.customIconOverlay, pointerEvents: "none", children: null };
  const tmp19 = onSelectColors(15554);
  const tmp22 = first1;
  obj11.children = closure_9(closure_5, { style: tmp.customIconScrim, children: closure_9(selectedColors(10491).PencilIcon, { color: "white", size: "sm" }) });
  items4[1] = closure_9(closure_5, obj11);
  obj8.children = items4;
  obj7.children = closure_10(tmp22, obj8);
  const items5 = [
    closure_9(closure_5, obj7),
    tmp12Result.map((accessibilityLabel, index) => {
      const colors = accessibilityLabel.colors;
      const obj = { style: closure_2.swatchWrapper, children: null };
      const items = [closure_2.swatch, ];
      let swatchSelected = tmp;
      if (c8 === index) {
        swatchSelected = closure_2.swatchSelected;
      }
      items[1] = swatchSelected;
      obj.children = closure_9(first1, {
        style: items,
        onPress() {
          return closure_9(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: c8 === index },
        accessibilityLabel: accessibilityLabel.a11yLabel,
        children: closure_9(onSelectColors(closure_2[21]), { colors })
      });
      return closure_9(closure_5, obj, index);
    })
  ];
  obj6.children = items5;
  const items6 = [closure_10(closure_5, obj6), ];
  const obj13 = { text: null, onPress: null, variant: "secondary" };
  const intl3 = tmp2(1115).intl;
  obj13.text = intl3.string(selectedColors(1115).t.yBZMsQ);
  obj13.onPress = callback1;
  items6[1] = closure_9(selectedColors(5144).Button, obj13);
  obj5.children = items6;
  obj2.children = closure_10(closure_5, obj5);
  return closure_9(selectedColors(7346).BottomSheet, obj2);
};