// === Module 15344: DisplayNameStylesGummyColorPickerSheet ===

// Module 15344 (DisplayNameStylesGummyColorPickerSheet)
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import DisplayNameStylesUtils2 from "DisplayNameStylesUtils" /* 1388 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import showGummyCustomColorSheetDefault from "showGummyCustomColorSheet" /* 15346 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = get_ActivityIndicator);
let closure_7 = fn(1389).DISPLAY_NAME_STYLES_GUMMY_PRESETS;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
let DisplayNameStylesUtils = fn(1388);
let closure_11 = DisplayNameStylesUtils.hueToGummyColor(0);
fn(4560);
DisplayNameStylesUtils = { body: null, colorRowInset: null, optionContainer: null, swatchWrapper: null, swatch: null, swatchSelected: null, customSwatchEmpty: null, customIconOverlay: null, customIconScrim: null };
DisplayNameStylesUtils = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, alignItems: "center" };
DisplayNameStylesUtils.body = DisplayNameStylesUtils;
const createStyles = { paddingHorizontal: nativeDefault.space.PX_4, alignSelf: "stretch" };
DisplayNameStylesUtils.colorRowInset = createStyles;
DisplayNameStylesUtils.optionContainer = { flexDirection: "row", flexWrap: "wrap" };
DisplayNameStylesUtils.swatchWrapper = { width: "25%", padding: 2 };
DisplayNameStylesUtils.swatch = { height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
let obj2 = { height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
DisplayNameStylesUtils.swatchSelected = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
let obj3 = { borderColor: nativeDefault.colors.BACKGROUND_BRAND };
DisplayNameStylesUtils.customSwatchEmpty = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_NORMAL };
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.alignItems = "center";
obj5.justifyContent = "center";
DisplayNameStylesUtils.customIconOverlay = obj5;
let size = { width: 28, height: 28, borderRadius: nativeDefault.radii.round, backgroundColor: "transparent", alignItems: "center", justifyContent: "center" };
DisplayNameStylesUtils.customIconScrim = size;
let closure_12 = createStyles.createStyles(DisplayNameStylesUtils);
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx");

export default function DisplayNameStylesGummyColorPickerSheet(selectedColors) {
  selectedColors = selectedColors.selectedColors;
  const onSelectColors = selectedColors.onSelectColors;
  _slicedToArray = undefined;
  let initialColor;
  closure_5 = undefined;
  let first1;
  c8 = undefined;
  closure_9 = undefined;
  const tmp = closure_12();
  dependencyMap = tmp;
  let obj = selectedColors(10902);
  let tmp5 = selectedColors.length > 0;
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedColors(1390).DisplayNameEffect.GUMMY);
  if (tmp5) {
    tmp5 = !dependencyMap.some((item) => discord_common_shallowEqual.areArraysShallowEqual(item, selectedColors));
  }
  _slicedToArray = tmp5;
  const tmp7 = _slicedToArray(initialColor.useState(() => {
    if (closure_3) {
      let result = DisplayNameStylesUtils2.rebuildGummySourceColor(selectedColors);
    } else {
      result = closure_11;
    }
    return result;
  }), 2);
  initialColor = tmp7[0];
  closure_5 = tmp7[1];
  const tmp9 = _slicedToArray(initialColor.useState(() => {
    let gummyColors = selectedColors;
    if (selectedColors.length <= 0) {
      gummyColors = DisplayNameStylesUtils2.buildGummyColors(closure_11);
    }
    return gummyColors;
  }), 2);
  first1 = tmp9[0];
  dependencyMap = tmp9[1];
  const tmp12Result = onSelectColors(15345)(selectedColors(1390).DisplayNameEffect.GUMMY);
  const findIndexResult = tmp12Result.findIndex((colors) => discord_common_shallowEqual.areArraysShallowEqual(colors.colors, first1));
  c8 = findIndexResult;
  let items = [initialColor];
  const callback = initialColor.useCallback(() => {
    let obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    obj = {
      initialColor,
      onSelect(color) {
        closure_1_5(color);
        dependencyMap(selectedColors(closure_2[6]).buildGummyColors(color));
      }
    };
    showGummyCustomColorSheetDefault(obj);
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
    let obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first1);
    obj = { default: false, colors: first1 };
    AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  obj = { header: null, children: null };
  obj = { title: displayNameStylesEffectConfig.name, trailing: null };
  const obj1 = { variant: "primary", size: "sm", text: null, onPress: null };
  const intl = tmp2(1114).intl;
  obj1.text = intl.string(selectedColors(1114).t.XqMe3N);
  obj1.onPress = callback2;
  obj.trailing = closure_9(selectedColors(4975).Button, obj1);
  obj.header = closure_9(selectedColors(7149).BottomSheetTitleHeader, obj);
  let obj2 = { style: tmp.body, children: null };
  const obj3 = { style: null, children: null };
  const items2 = [, ];
  ({ colorRowInset: arr5[0], optionContainer: arr5[1] } = tmp);
  obj3.style = items2;
  const obj4 = { style: tmp.swatchWrapper, children: null };
  const items3 = [tmp.swatch, ];
  let swatchSelected = tmp22;
  if (findIndexResult < 0) {
    swatchSelected = tmp.swatchSelected;
  }
  const obj5 = { style: items3, onPress: callback, accessibilityRole: "button", accessibilityState: { selected: findIndexResult < 0 }, accessibilityLabel: null, children: null };
  items3[1] = swatchSelected;
  const intl2 = tmp2(1114).intl;
  obj5.accessibilityLabel = intl2.string(selectedColors(1114).t["FHBa/1"]);
  if (findIndexResult >= 0) {
    const obj6 = { style: tmp.customSwatchEmpty };
    let tmp18Result = tmp18(tmp20, obj6);
  } else {
    const obj7 = { colors: first1 };
    tmp18Result = tmp18(tmp11(14617), obj7);
  }
  const items4 = [tmp18Result, ];
  const obj8 = { style: tmp.customIconOverlay, pointerEvents: "none", children: null };
  tmp11 = onSelectColors;
  const tmp12 = onSelectColors(15345);
  const tmp21 = first1;
  obj8.children = closure_9(closure_5, { style: tmp.customIconScrim, children: closure_9(selectedColors(10250).PencilIcon, { color: "white", size: "sm" }) });
  items4[1] = closure_9(closure_5, obj8);
  obj5.children = items4;
  obj4.children = closure_10(tmp21, obj5);
  const items5 = [
    closure_9(closure_5, obj4),
    tmp12Result.map((accessibilityLabel, index) => {
      const colors = accessibilityLabel.colors;
      let obj = { style: closure_2.swatchWrapper, children: null };
      const items = [closure_2.swatch, ];
      let swatchSelected = tmp;
      if (c8 === index) {
        swatchSelected = closure_2.swatchSelected;
      }
      obj = {
        style: items,
        onPress() {
          return closure_9(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: tmp },
        accessibilityLabel: accessibilityLabel.a11yLabel,
        children: tmp2(onSelectColors(closure_2[21]), { colors })
      };
      items[1] = swatchSelected;
      obj.children = closure_9(first1, obj);
      return closure_9(closure_5, obj, index);
    })
  ];
  obj3.children = items5;
  const items6 = [closure_10(closure_5, obj3), ];
  const obj10 = { text: null, onPress: null, variant: "secondary" };
  const intl3 = tmp2(1114).intl;
  obj10.text = intl3.string(selectedColors(1114).t.yBZMsQ);
  obj10.onPress = callback1;
  items6[1] = closure_9(selectedColors(4975).Button, obj10);
  obj2.children = items6;
  obj.children = closure_10(closure_5, obj2);
  return closure_9(selectedColors(7150).BottomSheet, obj);
};