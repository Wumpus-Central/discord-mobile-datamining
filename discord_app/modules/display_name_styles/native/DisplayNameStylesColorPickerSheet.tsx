// === Module 15352: DisplayNameStylesColorPickerSheet ===

// Module 15352 (DisplayNameStylesColorPickerSheet)
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1091 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import HapticUtils from "HapticUtils" /* 4528 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14595 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const getColorPresetsForEffect = fn(1389).getColorPresetsForEffect;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { header: { paddingTop: 4 }, headerTrailing: { justifyContent: "center", alignItems: "center" }, container: { flex: 1 }, contentContainer: null, presetGrid: null, presetRow: null, presetColor: null, presetColorSelected: null, buttonsContainer: null, button: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles.contentContainer = createStyles;
createStyles.presetGrid = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let obj1 = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
createStyles.presetRow = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
let size = { width: 40, height: 40, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
createStyles.presetColor = size;
let obj2 = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
createStyles.presetColorSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
let obj3 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
createStyles.buttonsContainer = { flexDirection: "row", gap: nativeDefault.space.PX_16 };
createStyles.button = { flex: 1 };
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesColorPickerSheet.tsx");

export default function DisplayNameStylesColorPickerSheet(selectedColor) {
  selectedColor = selectedColor.selectedColor;
  const selectedEffectId = selectedColor.selectedEffectId;
  const onSelectColor = selectedColor.onSelectColor;
  let tmp = closure_11();
  _slicedToArray = tmp;
  let obj = selectedColor(onSelectColor[8]);
  const tmp5 = selectedEffectId(onSelectColor[9])()[selectedEffectId];
  noop = tmp5;
  let items = [selectedEffectId];
  const memo = noop.useMemo(() => getColorPresetsForEffect(selectedEffectId).map((item) => item[0]), items);
  let tmp6 = _slicedToArray(noop.useState(selectedColor), 2);
  const color = tmp6[0];
  closure_6 = tmp6[1];
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
    let obj = HapticUtils;
    const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    if (memo1) {
      onSelectColor(first);
      obj = { default: first === 32, colors: null };
      const items = [first];
      obj.colors = items;
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_COLOR_SELECTED, obj);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items4);
  obj = { ref: obj.useBottomSheetRef().bottomSheetRef, header: null, children: null };
  obj = { style: tmp.header, children: null };
  const obj1 = { title: null, trailing: null };
  const intl = selectedColor(onSelectColor[16]).intl;
  obj1.title = intl.string(selectedEffectId(onSelectColor[17])["6OxgN7"]);
  let obj2 = { style: tmp.headerTrailing, children: null };
  let obj3 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = selectedColor(onSelectColor[16]).intl;
  obj3.text = intl2.string(selectedColor(onSelectColor[16]).t.XqMe3N);
  obj3.onPress = callback2;
  obj2.children = closure_9(selectedColor(onSelectColor[18]).Button, obj3);
  obj1.trailing = closure_9(color, obj2);
  obj.children = closure_9(selectedColor(onSelectColor[15]).BottomSheetTitleHeader, obj1);
  obj.header = closure_9(color, obj);
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.contentContainer, children: null };
  const obj6 = { style: tmp.presetGrid, children: null };
  let obj9 = selectedEffectId(onSelectColor[19]);
  obj6.children = obj9.chunk(memo.slice(0, 12), 6).map((arr, index) => {
    closure_0 = index;
    return closure_1_9(first, {
      style: presetRow.presetRow,
      children: arr.map((item, index) => {
        closure_0 = item;
        let obj = {
          onPress() {
            return closure_2_8(closure_0);
          },
          style: null,
          accessibilityRole: "button",
          accessibilityLabel: null
        };
        const items = [presetColor.presetColor, , ];
        obj = { backgroundColor: utils_ColorUtils.int2hex(item) };
        items[1] = obj;
        items[2] = item === first && presetColor.presetColorSelected;
        obj.style = items;
        const tmp = React7;
        const tmp2 = timestampProducer;
        const tmp6 = item === first && presetColor.presetColorSelected;
        obj.accessibilityLabel = utils_ColorUtils.int2hex(item);
        return tmp(tmp2, obj, 6 * closure_0 + index);
      })
    }, index);
  });
  const items5 = [closure_9(color, obj6), ];
  const obj7 = { style: tmp.buttonsContainer, children: null };
  let tmp12Result = selectedEffectId === selectedColor(onSelectColor[21]).DisplayNameEffect.SOLID;
  if (tmp12Result) {
    const obj8 = { style: tmp.button, children: null };
    obj9 = { text: null, onPress: null, variant: "secondary", size: "md", grow: true };
    const intl3 = tmp2(tmp3[16]).intl;
    obj9.text = intl3.string(selectedEffectId(tmp3[17]).gIeJTK);
    obj9.onPress = callback;
    obj8.children = tmp12(tmp2(tmp3[18]).Button, obj9);
    tmp12Result = tmp12(tmp13, obj8);
  }
  const items6 = [tmp12Result, ];
  const obj10 = { style: tmp.button, children: null };
  const obj11 = { text: null, onPress: null, variant: "secondary", size: "md", icon: null, grow: true };
  const intl4 = tmp2(tmp3[16]).intl;
  obj11.text = intl4.string(selectedColor(onSelectColor[16]).t["FHBa/1"]);
  obj11.onPress = callback1;
  obj11.icon = closure_9(selectedColor(onSelectColor[22]).EyeDropperIcon, { size: "sm" });
  obj10.children = closure_9(selectedColor(onSelectColor[18]).Button, obj11);
  items6[1] = closure_9(color, obj10);
  obj7.children = items6;
  items5[1] = closure_10(color, obj7);
  obj5.children = items5;
  obj4.children = closure_10(color, obj5);
  obj.children = closure_9(color, obj4);
  return closure_9(selectedColor(onSelectColor[14]).BottomSheet, obj);
};