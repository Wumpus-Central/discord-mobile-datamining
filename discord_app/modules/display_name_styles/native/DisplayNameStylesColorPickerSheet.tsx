// discord_app/modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { getColorPresetsForEffect } from "../DisplayNameStylesConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
({ View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, paddingBottom: ThemesDefault.space.PX_16 };
createCacheKey[3] = createCacheKey;
createCacheKey[4] = { gap: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[5] = { gap: ThemesDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
createCacheKey[6] = { width: 40, height: 40, borderRadius: ThemesDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
createCacheKey[7] = { borderColor: ThemesDefault.colors.CONTROL_BRAND_FOREGROUND };
createCacheKey[8] = { flexDirection: "row", gap: ThemesDefault.space.PX_16 };
createCacheKey[9] = { flex: 1 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedColor) {
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  const onSelectColor = selectedColor.onSelectColor;
  const tmp = callback3();
  let callback = tmp;
  let obj = selectedColor(onSelectColor[8]);
  const tmp5 = selectedEffectId(onSelectColor[9])()[selectedEffectId];
  const React = tmp5;
  let items = [selectedEffectId];
  const memo = React.useMemo(() => memo1(selectedEffectId).map((item, index) => item[0]), items);
  let tmp6 = callback(React.useState(selectedColor), 2);
  const first = tmp6[0];
  closure_6 = tmp6[1];
  const items1 = [first, selectedColor];
  const memo1 = React.useMemo(() => first !== selectedColor, items1);
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
        const result = selectedColor(onSelectColor[10]).triggerHapticFeedback(selectedColor(onSelectColor[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
        callback(arg0);
        const obj = selectedColor(onSelectColor[10]);
        selectedEffectId(onSelectColor[11]).hideActionSheet();
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
      selectedEffectId(onSelectColor[13]).track(constants.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
      const obj2 = selectedEffectId(onSelectColor[13]);
    }
    selectedEffectId(onSelectColor[11]).hideActionSheet();
    const obj4 = selectedEffectId(onSelectColor[11]);
  }, items4);
  { ref: obj.useBottomSheetRef().bottomSheetRef, header: null, children: null };
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
  let obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.contentContainer, children: null };
  const obj6 = { style: tmp.presetGrid, children: null };
  let obj9 = selectedEffectId(onSelectColor[19]);
  obj6[1] = obj9.chunk(memo.slice(0, 12), 6).map((item, index) => {
    closure_0 = index;
    return closure_1_9(first, {
      style: presetRow.presetRow,
      children: item.map((item, index) => {
        closure_0 = item;
        const items = [closure_1_3.presetColor, , ];
        const obj = { backgroundColor: selectedColor(onSelectColor[20]).int2hex(item) };
        items[1] = obj;
        items[2] = item === first && closure_1_3.presetColorSelected;
        obj[1] = items;
        const obj3 = selectedColor(onSelectColor[20]);
        obj[3] = selectedColor(onSelectColor[20]).int2hex(item);
        return closure_2_9(closure_6, obj, 6 * closure_0 + index);
      })
    }, index);
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
  items5[1] = callback(first, obj7);
  obj5[1] = items5;
  obj4[1] = callback(first, obj5);
  obj[2] = callback2(first, obj4);
  return callback2(selectedColor(onSelectColor[14]).BottomSheet, obj);
};