// === Module 14699: DisplayNameStylesColorPickerSheet ===

// Module 14699 (DisplayNameStylesColorPickerSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { getColorPresetsForEffect } from "items3" /* 1934 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { header: { paddingTop: 4 }, headerTrailing: { justifyContent: "center", alignItems: "center" }, container: { flex: 1 }, contentContainer: null, presetGrid: null, presetRow: null, presetColor: null, presetColorSelected: null, buttonsContainer: null, button: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { gap: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
let obj1 = { gap: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[5] = { gap: ThemesDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
let obj2 = { gap: ThemesDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
createCacheKey[6] = { width: 40, height: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
let obj3 = { width: 40, height: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
createCacheKey[7] = { borderColor: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
let obj4 = { borderColor: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
createCacheKey[8] = { flexDirection: "row", gap: ThemesDefault.space.PX_16 };
createCacheKey[9] = { flex: 1 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj5 = { flexDirection: "row", gap: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedColor) {
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  const onSelectColor = selectedColor.onSelectColor;
  let callback;
  let React;
  let first;
  closure_6 = undefined;
  let memo1;
  closure_8 = undefined;
  let tmp = callback3();
  callback = tmp;
  let obj = selectedColor(onSelectColor[8]);
  let tmp5 = selectedEffectId(onSelectColor[9])()[selectedEffectId];
  React = tmp5;
  let items = [selectedEffectId];
  const memo = React.useMemo(() => memo1(selectedEffectId).map((arg0) => arg0[0]), items);
  let tmp6 = callback(React.useState(selectedColor), 2);
  first = tmp6[0];
  closure_6 = tmp6[1];
  const items1 = [first, selectedColor];
  memo1 = React.useMemo(() => first !== selectedColor, items1);
  closure_8 = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  const items2 = [tmp5, onSelectColor];
  const items3 = [first, onSelectColor];
  callback = React.useCallback(() => {
    const result = selectedColor(onSelectColor[10]).triggerHapticFeedback(selectedColor(onSelectColor[10]).HapticFeedbackTypes.IMPACT_LIGHT);
    onSelectColor(32);
    const obj = selectedColor(onSelectColor[10]);
    selectedEffectId(onSelectColor[11]).hideActionSheet();
  }, items2);
  const items4 = [memo1, first, onSelectColor, tmp5];
  const callback1 = React.useCallback(() => {
    selectedEffectId(onSelectColor[12])({
      color: first,
      onSelect(arg0) {
        const result = closure_1_0(closure_1_2[10]).triggerHapticFeedback(closure_1_0(closure_1_2[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
        callback(arg0);
        const obj = closure_1_0(closure_1_2[10]);
        closure_1_1(closure_1_2[11]).hideActionSheet();
      },
      actionButtonVariant: "primary"
    });
  }, items3);
  const callback2 = React.useCallback(() => {
    let obj = selectedColor(onSelectColor[10]);
    const result = obj.triggerHapticFeedback(selectedColor(onSelectColor[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
    if (memo1) {
      onSelectColor(first);
      obj = { default: null, colors: null };
      obj[0] = first === 32;
      const items = [first];
      obj[1] = items;
      selectedEffectId(tmp[13]).track(constants.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
      const obj2 = selectedEffectId(tmp[13]);
    }
    selectedEffectId(onSelectColor[11]).hideActionSheet();
  }, items4);
  obj = { ref: obj.useBottomSheetRef().bottomSheetRef, header: null, children: null };
  obj = { style: tmp.header, children: null };
  obj1 = { title: null, trailing: null };
  const intl = selectedColor(onSelectColor[16]).intl;
  obj1[0] = intl.string(selectedEffectId(onSelectColor[17])["6OxgN7"]);
  let obj2 = { style: tmp.headerTrailing, children: null };
  let obj3 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = selectedColor(onSelectColor[16]).intl;
  obj3[0] = intl2.string(selectedColor(onSelectColor[16]).t.XqMe3N);
  obj3[1] = callback2;
  obj2[1] = callback2(selectedColor(onSelectColor[18]).Button, obj3);
  obj1[1] = callback2(first, obj2);
  obj[1] = callback2(selectedColor(onSelectColor[15]).BottomSheetTitleHeader, obj1);
  obj[1] = callback2(first, obj);
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.contentContainer, children: null };
  const obj6 = { style: tmp.presetGrid, children: null };
  let obj9 = selectedEffectId(onSelectColor[19]);
  obj6[1] = obj9.chunk(memo.slice(0, 12), 6).map((arr) => {
    closure_0 = arg1;
    return closure_1_9(first, {
      style: presetRow.presetRow,
      children: arr.map((color) => {
        closure_0 = color;
        let obj = {
          onPress() {
            return closure_1_8(closure_0);
          },
          style: null,
          accessibilityRole: "button",
          accessibilityLabel: null
        };
        const items = [closure_1_3.presetColor, , ];
        obj = { backgroundColor: selectedColor(onSelectColor[20]).int2hex(color) };
        items[1] = obj;
        items[2] = color === closure_1_5 && closure_1_3.presetColorSelected;
        obj[1] = items;
        const obj3 = selectedColor(onSelectColor[20]);
        const tmp = closure_2_9;
        const tmp2 = closure_6;
        const tmp3 = closure_1_3;
        const tmp4 = selectedColor;
        const tmp5 = onSelectColor;
        const tmp6 = color === closure_1_5 && closure_1_3.presetColorSelected;
        obj[3] = selectedColor(onSelectColor[20]).int2hex(color);
        return tmp(tmp2, obj, 6 * closure_0 + arg1);
      })
    }, arg1);
  });
  const items5 = [callback2(first, obj6), ];
  const obj7 = { style: tmp.buttonsContainer, children: null };
  let tmp12Result = selectedEffectId === selectedColor(onSelectColor[21]).DisplayNameEffect.SOLID;
  if (tmp12Result) {
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.button;
    obj9 = { text: null, onPress: null, variant: "secondary", size: "md", grow: true };
    const intl3 = tmp2(tmp3[16]).intl;
    obj9[0] = intl3.string(selectedEffectId(tmp3[17]).gIeJTK);
    obj9[1] = callback;
    obj8[1] = tmp12(tmp2(tmp3[18]).Button, obj9);
    tmp12Result = tmp12(tmp13, obj8);
  }
  const items6 = [tmp12Result, ];
  const obj10 = { style: tmp.button, children: null };
  const obj11 = { text: null, onPress: null, variant: "secondary", size: "md", icon: null, grow: true };
  const intl4 = tmp2(tmp3[16]).intl;
  obj11[0] = intl4.string(selectedColor(onSelectColor[16]).t["FHBa/1"]);
  obj11[1] = callback1;
  obj11[4] = callback2(selectedColor(onSelectColor[22]).EyeDropperIcon, { size: "sm" });
  obj10[1] = callback2(selectedColor(onSelectColor[18]).Button, obj11);
  items6[1] = callback2(first, obj10);
  obj7[1] = items6;
  items5[1] = closure_10(first, obj7);
  obj5[1] = items5;
  obj4[1] = closure_10(first, obj5);
  obj[2] = callback2(first, obj4);
  return callback2(selectedColor(onSelectColor[14]).BottomSheet, obj);
};