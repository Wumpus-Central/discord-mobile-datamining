// discord_app/modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx
import _slicedToArray from "_slicedToArray";
import getSystemLocale from "getSystemLocale";
import get_ActivityIndicator from "RedesignBottomSheetTitleHeaderBase";
import { DISPLAY_NAME_STYLES_GUMMY_PRESETS as closure_7 } from "items3";
import { AnalyticEvents } from "ME";
import jsxProd from "PencilIcon";
import items from "items";
import closure_11 from "_slicedToArray";
import createCacheKey from "createCacheKey";

let StyleSheet;
let c10;
let c5;
let c9;
let closure_6;
const require = arg1;
({ View: c5, Pressable: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
items = { body: null, colorRowInset: null, optionContainer: null, swatchWrapper: null, swatch: null, swatchSelected: null, customSwatchEmpty: null, customIconOverlay: null, customIconScrim: null };
items = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_12, paddingBottom: require("Themes").space.PX_16, gap: require("Themes").space.PX_16, alignItems: "center" };
items[0] = items;
createCacheKey = { paddingHorizontal: require("Themes").space.PX_4, alignSelf: "stretch" };
items[1] = createCacheKey;
items[2] = { flexDirection: "row", flexWrap: "wrap" };
items[3] = { width: "25%", padding: 2 };
items[4] = { height: 40, flexDirection: "row", borderRadius: require("Themes").radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
let obj2 = { height: 40, flexDirection: "row", borderRadius: require("Themes").radii.sm, overflow: "hidden", borderWidth: 2, borderColor: "transparent" };
items[5] = { borderColor: require("Themes").colors.BACKGROUND_BRAND };
let obj3 = { borderColor: require("Themes").colors.BACKGROUND_BRAND };
items[6] = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: require("Themes").colors.BORDER_NORMAL };
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.alignItems = "center";
obj5.justifyContent = "center";
items[7] = obj5;
let obj4 = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderWidth: 1, borderColor: require("Themes").colors.BORDER_NORMAL };
items[8] = { width: 28, height: 28, borderRadius: require("Themes").radii.round, backgroundColor: "transparent", alignItems: "center", justifyContent: "center" };
items = createCacheKey.createStyles(items);
let obj6 = { width: 28, height: 28, borderRadius: require("Themes").radii.round, backgroundColor: "transparent", alignItems: "center", justifyContent: "center" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyColorPickerSheet.tsx");

export default function DisplayNameStylesGummyColorPickerSheet(selectedColors) {
  selectedColors = selectedColors.selectedColors;
  const onSelectColors = selectedColors.onSelectColors;
  let dependencyMap;
  let callback;
  let first;
  let closure_5;
  let first1;
  let closure_7;
  let c8;
  let callback2;
  const tmp = items();
  dependencyMap = tmp;
  let obj = selectedColors(9479);
  let tmp5 = selectedColors.length > 0;
  const displayNameStylesEffectConfig = obj.useDisplayNameStylesEffectConfig(selectedColors(1935).DisplayNameEffect.GUMMY);
  if (tmp5) {
    tmp5 = !closure_7.some((items) => selectedColors(_undefined[11]).areArraysShallowEqual(items, selectedColors));
  }
  callback = tmp5;
  const tmp7 = callback(first.useState(() => {
    if (c3) {
      let result = selectedColors(_undefined[6]).rebuildGummySourceColor(selectedColors);
      const obj = selectedColors(_undefined[6]);
    } else {
      result = outer1_11;
    }
    return result;
  }), 2);
  first = tmp7[0];
  closure_5 = tmp7[1];
  const tmp9 = callback(first.useState(() => {
    let gummyColors = selectedColors;
    if (selectedColors.length <= 0) {
      gummyColors = selectedColors(_undefined[6]).buildGummyColors(outer1_11);
      const obj = selectedColors(_undefined[6]);
    }
    return gummyColors;
  }), 2);
  first1 = tmp9[0];
  closure_7 = tmp9[1];
  const findIndexResult = closure_7.findIndex((items) => selectedColors(_undefined[11]).areArraysShallowEqual(items, first1));
  c8 = findIndexResult;
  items = [first];
  callback = first.useCallback(() => {
    let obj = selectedColors(_undefined[12]);
    const result = obj.triggerHapticFeedback(selectedColors(_undefined[12]).HapticFeedbackTypes.IMPACT_LIGHT);
    obj = {
      initialColor: first,
      onSelect(outer1_11) {
        callback(outer1_11);
        callback2(outer1_0(outer1_2[6]).buildGummyColors(outer1_11));
      }
    };
    onSelectColors(_undefined[13])(obj);
  }, items);
  callback2 = first.useCallback((arg0) => {
    const items = [...arg0];
    dependencyMap(items);
  }, []);
  const items1 = [first1, onSelectColors];
  const callback1 = first.useCallback(() => {
    const items = [...closure_7[0]];
    dependencyMap(items);
    callback(outer1_11);
  }, []);
  callback2 = first.useCallback(() => {
    let obj = selectedColors(_undefined[12]);
    const result = obj.triggerHapticFeedback(selectedColors(_undefined[12]).HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelectColors(first1);
    obj = { default: false, colors: first1 };
    onSelectColors(_undefined[14]).track(_undefined2.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
    const obj2 = onSelectColors(_undefined[14]);
    onSelectColors(_undefined[15]).hideActionSheet();
  }, items1);
  obj = { header: null, children: null };
  obj = { title: displayNameStylesEffectConfig.name, trailing: null };
  const obj1 = { variant: "primary", size: "sm", text: null, onPress: null };
  const intl = tmp2(1236).intl;
  obj1[2] = intl.string(selectedColors(1236).t.XqMe3N);
  obj1[3] = callback2;
  obj[1] = callback2(selectedColors(4714).Button, obj1);
  obj[0] = callback2(selectedColors(5396).BottomSheetTitleHeader, obj);
  let obj2 = { style: tmp.body, children: null };
  const obj3 = { style: items2, children: null };
  items2 = [, ];
  ({ colorRowInset: arr5[0], optionContainer: arr5[1] } = tmp);
  const obj4 = { style: tmp.swatchWrapper, children: null };
  const items3 = [tmp.swatch, ];
  let swatchSelected = tmp20;
  if (findIndexResult < 0) {
    swatchSelected = tmp.swatchSelected;
  }
  const obj5 = { style: items3, onPress: callback, accessibilityRole: "button", accessibilityState: { selected: findIndexResult < 0 }, accessibilityLabel: null, children: null };
  items3[1] = swatchSelected;
  const intl2 = tmp2(1236).intl;
  obj5[4] = intl2.string(selectedColors(1236).t["FHBa/1"]);
  if (findIndexResult >= 0) {
    const obj6 = { style: null };
    obj6[0] = tmp.customSwatchEmpty;
    let tmp16Result = tmp16(tmp18, obj6);
  } else {
    const obj7 = { colors: null };
    obj7[0] = first1;
    tmp16Result = tmp16(onSelectColors(13935), obj7);
  }
  const items4 = [tmp16Result, ];
  const obj8 = { style: tmp.customIconOverlay, pointerEvents: "none", children: null };
  obj8[2] = callback2(closure_5, { style: tmp.customIconScrim, children: callback2(selectedColors(9677).PencilIcon, { color: "white", size: "sm" }) });
  items4[1] = callback2(closure_5, obj8);
  obj5[5] = items4;
  obj4[1] = closure_10(first1, obj5);
  const items5 = [
    callback2(closure_5, obj4),
    closure_7.map((colors) => {
      let closure_0 = colors;
      let obj = { style: _undefined.swatchWrapper, children: null };
      const items = [_undefined.swatch, ];
      let swatchSelected = tmp;
      if (c8 === arg1) {
        swatchSelected = _undefined.swatchSelected;
      }
      obj = {
        style: items,
        onPress() {
          return outer1_9(closure_0);
        },
        accessibilityRole: "button",
        accessibilityState: { selected: tmp },
        children: tmp2(onSelectColors(_undefined[20]), obj)
      };
      items[1] = swatchSelected;
      obj = { colors };
      obj[1] = closure_9(first1, obj);
      return closure_9(closure_5, obj, arg1);
    })
  ];
  obj3[1] = items5;
  const items6 = [closure_10(closure_5, obj3), ];
  const obj10 = { text: null, onPress: null, variant: "secondary" };
  const intl3 = tmp2(1236).intl;
  obj10[0] = intl3.string(selectedColors(1236).t.yBZMsQ);
  obj10[1] = callback1;
  items6[1] = callback2(selectedColors(4714).Button, obj10);
  obj2[1] = items6;
  obj[1] = closure_10(closure_5, obj2);
  return callback2(selectedColors(5397).BottomSheet, obj);
};