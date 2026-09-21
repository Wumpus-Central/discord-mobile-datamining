// === Module 15625: DisplayNameStylesColorPickerSheet ===

// Module 15625 (DisplayNameStylesColorPickerSheet)
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import HapticUtils from "HapticUtils" /* 4724 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14871 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const getColorPresetsForEffect = fn(1390).getColorPresetsForEffect;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { container: { flex: 1 }, contentContainer: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, presetGrid: null, presetRow: null, presetColor: null, presetColorSelected: null, buttonsContainer: null, button: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.presetGrid = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let obj4 = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj2.presetRow = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
obj2.presetColor = size;
let obj5 = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
obj2.presetColorSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
let obj6 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.buttonsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
obj2.button = { flex: 1 };
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedColor) {
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  const onSelectColor = selectedColor.onSelectColor;
  color = undefined;
  closure_6 = undefined;
  const tmp = closure_11();
  _slicedToArray = tmp;
  const tmp5 = selectedEffectId(onSelectColor[9])()[selectedEffectId];
  noop = tmp5;
  let items = [selectedEffectId];
  const memo = noop.useMemo(() => getColorPresetsForEffect(selectedEffectId).map((item) => item[0]), items);
  [color, closure_6] = noop.useState(selectedColor);
  const items1 = [color, selectedColor];
  const memo1 = noop.useMemo(() => first !== selectedColor, items1);
  closure_8 = noop.useCallback((arg0) => {
    closure_6(arg0);
  }, []);
  const items2 = [tmp5, onSelectColor];
  const items3 = [color, onSelectColor];
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    onSelectColor(32);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items2);
  const items4 = [memo1, color, onSelectColor, tmp5];
  const callback1 = noop.useCallback(() => {
    showCustomColorPickerActionSheetDefault({
      color,
      onSelect(arg0) {
        const result = selectedColor(onSelectColor[10]).triggerHapticFeedback(selectedColor(onSelectColor[10]).HapticFeedbackTypes.IMPACT_MEDIUM);
        closure_1_2(arg0);
        const obj = selectedColor(onSelectColor[10]);
        selectedEffectId(onSelectColor[11]).hideActionSheet();
      },
      actionButtonVariant: "primary"
    });
  }, items3);
  const callback2 = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    if (memo1) {
      onSelectColor(first);
      const obj3 = { default: first === 32, colors: null };
      const items = [first];
      obj3.colors = items;
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj3);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items4);
  let obj2 = { ref: selectedColor(onSelectColor[8]).useBottomSheetRef().bottomSheetRef, header: null, children: null };
  let obj3 = { title: null, trailing: null };
  let obj = selectedColor(onSelectColor[8]);
  const tmp4 = selectedEffectId;
  const intl = selectedColor(onSelectColor[16]).intl;
  obj3.title = intl.string(selectedEffectId(onSelectColor[17])["6OxgN7"]);
  let obj4 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = selectedColor(onSelectColor[16]).intl;
  obj4.text = intl2.string(selectedColor(onSelectColor[16]).t.XqMe3N);
  obj4.onPress = callback2;
  obj3.trailing = closure_9(selectedColor(onSelectColor[18]).Button, obj4);
  obj2.header = closure_9(selectedEffectId(onSelectColor[15]), obj3);
  const obj5 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.contentContainer, children: null };
  const obj7 = { style: tmp.presetGrid, children: null };
  const tmp13 = selectedEffectId(onSelectColor[15]);
  const obj8 = selectedEffectId(onSelectColor[19]);
  obj7.children = selectedEffectId(onSelectColor[19]).chunk(memo.slice(0, 12), 6).map((arr, index) => {
    closure_0 = index;
    return closure_1_9(first, {
      style: presetRow.presetRow,
      children: arr.map((item, index) => {
        closure_0 = item;
        const obj = {
          onPress() {
            return closure_2_8(closure_0);
          },
          style: null,
          accessibilityRole: "button",
          accessibilityLabel: null
        };
        const items = [presetColor.presetColor, , ];
        const obj2 = { backgroundColor: utils_ColorUtils.int2hex(item) };
        items[1] = obj2;
        items[2] = item === first && presetColor.presetColorSelected;
        obj.style = items;
        const tmp6 = item === first && presetColor.presetColorSelected;
        obj.accessibilityLabel = utils_ColorUtils.int2hex(item);
        return React7(timestampProducer, obj, 6 * closure_0 + index);
      })
    }, index);
  });
  const items5 = [closure_9(color, obj7), ];
  const obj9 = { style: tmp.buttonsContainer, children: null };
  let tmp12Result = selectedEffectId === selectedColor(onSelectColor[21]).DisplayNameEffect.SOLID;
  if (tmp12Result) {
    const obj10 = { style: tmp.button, children: null };
    const obj11 = { text: null, onPress: null, variant: "secondary", size: "md", grow: true };
    const intl3 = tmp2(tmp3[16]).intl;
    obj11.text = intl3.string(tmp4(tmp3[17]).gIeJTK);
    obj11.onPress = callback;
    obj10.children = closure_9(tmp2(tmp3[18]).Button, obj11);
    tmp12Result = closure_9(tmp14, obj10);
  }
  const items6 = [tmp12Result, ];
  const obj12 = { style: tmp.button, children: null };
  const obj13 = { text: null, onPress: null, variant: "secondary", size: "md", icon: null, grow: true };
  const intl4 = tmp2(tmp3[16]).intl;
  obj13.text = intl4.string(selectedColor(onSelectColor[16]).t["FHBa/1"]);
  obj13.onPress = callback1;
  obj13.icon = closure_9(selectedColor(onSelectColor[22]).EyeDropperIcon, { size: "sm" });
  obj12.children = closure_9(selectedColor(onSelectColor[18]).Button, obj13);
  items6[1] = closure_9(color, obj12);
  obj9.children = items6;
  items5[1] = closure_10(color, obj9);
  obj6.children = items5;
  obj5.children = closure_10(color, obj6);
  obj2.children = closure_9(color, obj5);
  return closure_9(selectedColor(onSelectColor[14]).BottomSheet, obj2);
};