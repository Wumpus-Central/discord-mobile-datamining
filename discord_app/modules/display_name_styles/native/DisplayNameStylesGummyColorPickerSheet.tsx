// === Module 17266: DisplayNameStylesGummyColorPickerSheet ===

// Module 17266 (DisplayNameStylesGummyColorPickerSheet)
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import DisplayNameStylesUtils2 from "DisplayNameStylesUtils" /* 1401 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1403 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5253 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import showGummyCustomColorSheetDefault from "showGummyCustomColorSheet" /* 17268 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = get_ActivityIndicator);
let closure_7 = fn(1402).DISPLAY_NAME_STYLES_GUMMY_PRESETS;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const DisplayNameStylesUtils = fn(1401);
let closure_11 = DisplayNameStylesUtils.hueToGummyColor(0);
const createStyles = fn(5009);
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
  noop = undefined;
  let initialColor;
  closure_6 = undefined;
  let first1;
  closure_8 = undefined;
  c9 = undefined;
  c10 = undefined;
  closure_11 = undefined;
  let tmp = closure_12();
  dependencyMap = tmp;
  const displayNameStylesEffectConfig = selectedColors(10755).useDisplayNameStylesEffectConfig(selectedColors(1403).DisplayNameEffect.GUMMY);
  let tmp5 = selectedColors.length > 0;
  if (tmp5) {
    tmp5 = !first1.some((item) => discord_common_shallowEqual.areArraysShallowEqual(item, selectedColors));
  }
  noop = tmp5;
  const tmp7 = displayNameStylesEffectConfig(noop.useState(() => {
    if (closure_4) {
      let result = DisplayNameStylesUtils2.rebuildGummySourceColor(selectedColors);
    } else {
      result = closure_11;
    }
    return result;
  }), 2);
  initialColor = tmp7[0];
  closure_6 = tmp7[1];
  const tmp9 = displayNameStylesEffectConfig(noop.useState(() => {
    let defaultColors = selectedColors;
    if (selectedColors.length <= 0) {
      defaultColors = displayNameStylesEffectConfig.defaultColors;
    }
    return defaultColors;
  }), 2);
  first1 = tmp9[0];
  closure_8 = tmp9[1];
  let obj = selectedColors(10755);
  [tmp12, c9] = displayNameStylesEffectConfig(noop.useState(() => {
    let tmp = null;
    if (selectedColors.length > 0) {
      tmp = selectedColors;
    }
    return DisplayNameStylesUtils2.createColorPaletteList(DisplayNameEffect.DisplayNameEffect.GUMMY, tmp);
  }), 2);
  const tmp11 = displayNameStylesEffectConfig(noop.useState(() => {
    let tmp = null;
    if (selectedColors.length > 0) {
      tmp = selectedColors;
    }
    return DisplayNameStylesUtils2.createColorPaletteList(DisplayNameEffect.DisplayNameEffect.GUMMY, tmp);
  }), 2);
  const tmp13 = onSelectColors;
  const tmp14Result = onSelectColors(17267)(selectedColors(1403).DisplayNameEffect.GUMMY, tmp12);
  const findIndexResult = tmp14Result.findIndex((colors) => discord_common_shallowEqual.areArraysShallowEqual(colors.colors, first1));
  c10 = findIndexResult;
  let items = [initialColor];
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    showGummyCustomColorSheetDefault({
      initialColor,
      onSelect(color) {
        const gummyColors = selectedColors(1401).buildGummyColors(color);
        closure_1_6(color);
        closure_1_8(gummyColors);
        _undefined((arr) => selectedColors(1401).updateCustomSwatch(arr, selectedColors(1403).DisplayNameEffect.GUMMY, gummyColors));
      }
    });
  }, items);
  closure_11 = noop.useCallback((arg0) => {
    const items = [...arg0];
    closure_8(items);
  }, []);
  const items1 = [first1, onSelectColors];
  const callback1 = noop.useCallback(() => {
    const items = [...closure_7[0]];
    closure_8(items);
    closure_6(closure_11);
    _undefined((arr) => selectedColors(1401).updateCustomSwatch(arr, selectedColors(1403).DisplayNameEffect.GUMMY, items));
  }, []);
  const callback2 = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first1);
    AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, { default: false, colors: first1 });
    const obj3 = { default: false, colors: first1 };
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items1);
  let obj2 = { header: null, children: null };
  let obj3 = { title: displayNameStylesEffectConfig.name, trailing: null };
  const tmp14 = onSelectColors(17267);
  const obj4 = { variant: "primary", size: "sm", text: null, onPress: null };
  const intl = tmp2(1114).intl;
  obj4.text = intl.string(selectedColors(1114).t.XqMe3N);
  obj4.onPress = callback2;
  obj3.trailing = c9(selectedColors(5629).Button, obj4);
  obj2.header = c9(onSelectColors(17263), obj3);
  const obj5 = { style: tmp.body, children: null };
  const obj6 = { style: null, children: null };
  const items2 = [, ];
  ({ colorRowInset: arr5[0], optionContainer: arr5[1] } = tmp);
  obj6.style = items2;
  const obj7 = { style: tmp.swatchWrapper, children: null };
  const obj8 = { style: tmp.swatch, onPress: callback, accessibilityRole: "button", accessibilityLabel: null, children: null };
  const intl2 = tmp2(1114).intl;
  obj8.accessibilityLabel = intl2.string(selectedColors(1114).t["FHBa/1"]);
  if (findIndexResult >= 0) {
    const obj9 = { style: tmp.customSwatchEmpty };
    let tmp19Result = tmp19(tmp22, obj9);
  } else {
    const obj10 = { colors: first1 };
    tmp19Result = tmp19(tmp13(16424), obj10);
  }
  const items3 = [tmp19Result, ];
  const obj11 = { style: tmp.customIconOverlay, pointerEvents: "none", children: null };
  const tmp20 = onSelectColors(17263);
  const tmp23 = closure_6;
  obj11.children = c9(initialColor, { style: tmp.customIconScrim, children: c9(selectedColors(10212).PencilIcon, { color: "white", size: "sm" }) });
  items3[1] = c9(initialColor, obj11);
  obj8.children = items3;
  obj7.children = c10(tmp23, obj8);
  const items4 = [
    c9(initialColor, obj7),
    tmp14Result.map((accessibilityLabel, index) => {
      const colors = accessibilityLabel.colors;
      const obj = { style: closure_2.swatchWrapper, children: null };
      const items = [closure_2.swatch, ];
      let swatchSelected = tmp;
      if (c10 === index) {
        swatchSelected = closure_2.swatchSelected;
      }
      items[1] = swatchSelected;
      obj.children = _undefined(closure_6, {
        style: items,
        onPress() {
          return closure_11(colors);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: c10 === index },
        accessibilityLabel: accessibilityLabel.a11yLabel,
        children: _undefined(onSelectColors(closure_2[21]), { colors })
      });
      return _undefined(first, obj, index);
    })
  ];
  obj6.children = items4;
  const items5 = [c10(initialColor, obj6), ];
  const obj13 = { text: null, onPress: null, variant: "secondary" };
  const intl3 = tmp2(1114).intl;
  obj13.text = intl3.string(selectedColors(1114).t.yBZMsQ);
  obj13.onPress = callback1;
  items5[1] = c9(selectedColors(5629).Button, obj13);
  obj5.children = items5;
  obj2.children = c10(initialColor, obj5);
  return c9(selectedColors(5267).BottomSheet, obj2);
};