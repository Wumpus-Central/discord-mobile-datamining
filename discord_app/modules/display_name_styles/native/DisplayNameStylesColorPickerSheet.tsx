// === Module 15705: DisplayNameStylesColorPickerSheet ===

// Module 15705 (DisplayNameStylesColorPickerSheet)
import nativeDefault from "native" /* 576 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1092 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1389 */;
import CheckmarkLargeIcon from "CheckmarkLargeIcon" /* 4779 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4796 */;
import HapticUtils from "HapticUtils" /* 4797 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14966 */;
import ColorPickerConsts from "ColorPickerConsts" /* 15702 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire, StyleSheet } = get_ActivityIndicator);
const getColorPresetsForEffect = fn(1390).getColorPresetsForEffect;
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { container: { flex: 1 }, contentContainer: { alignSelf: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, presetGrid: null, presetRow: null, presetColor: null, presetColorSelected: null, checkmarkOverlay: null, checkmark: null, buttonsContainer: null, button: null };
let obj3 = { alignSelf: "center", paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.presetGrid = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let obj4 = { gap: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj2.presetRow = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
let size = { width: 42, height: 42, borderRadius: nativeDefault.radii.sm, borderWidth: 2, borderColor: "transparent" };
obj2.presetColor = size;
let obj5 = { gap: nativeDefault.space.PX_16, flexDirection: "row", justifyContent: "center" };
obj2.presetColorSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
let obj7 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj7.alignItems = "center";
obj7.justifyContent = "center";
obj2.checkmarkOverlay = obj7;
const size1 = { width: fn(15702).CHECKMARK_SIZE, height: fn(15702).CHECKMARK_SIZE };
obj2.checkmark = size1;
let obj6 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.buttonsContainer = { alignSelf: "stretch", flexDirection: "row", gap: nativeDefault.space.PX_16 };
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
  let tmp = closure_11();
  _slicedToArray = tmp;
  const tmp2 = selectedEffectId(onSelectColor[11])()[selectedEffectId];
  noop = tmp2;
  let items = [selectedEffectId];
  const memo = noop.useMemo(() => getColorPresetsForEffect(selectedEffectId).map((item) => item[0]), items);
  [color, closure_6] = noop.useState(() => DisplayNameStylesUtils.resolveSolidPresetSeed(selectedColor, selectedEffectId));
  const items1 = [color, selectedColor];
  const memo1 = noop.useMemo(() => first !== selectedColor, items1);
  closure_8 = noop.useCallback((arg0) => {
    closure_6(arg0);
  }, []);
  const items2 = [tmp2, onSelectColor];
  const items3 = [color, onSelectColor];
  const callback = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
    onSelectColor(32);
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items2);
  const items4 = [memo1, color, onSelectColor, tmp2];
  const callback1 = noop.useCallback(() => {
    showCustomColorPickerActionSheetDefault({
      color,
      onSelect(arg0) {
        const result = selectedColor(onSelectColor[13]).triggerHapticFeedback(selectedColor(onSelectColor[13]).HapticFeedbackTypes.IMPACT_MEDIUM);
        closure_1_2(arg0);
        const obj = selectedColor(onSelectColor[13]);
        selectedEffectId(onSelectColor[14]).hideActionSheet();
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
  let obj2 = { ref: selectedColor(onSelectColor[10]).useBottomSheetRef().bottomSheetRef, header: null, children: null };
  let obj3 = { title: null, trailing: null };
  let obj = selectedColor(onSelectColor[10]);
  const intl = selectedColor(onSelectColor[19]).intl;
  obj3.title = intl.string(selectedEffectId(onSelectColor[20])["6OxgN7"]);
  let obj4 = { text: null, onPress: null, variant: "primary", size: "sm" };
  const intl2 = selectedColor(onSelectColor[19]).intl;
  obj4.text = intl2.string(selectedColor(onSelectColor[19]).t.XqMe3N);
  obj4.onPress = callback2;
  obj3.trailing = closure_9(selectedColor(onSelectColor[21]).Button, obj4);
  obj2.header = closure_9(selectedEffectId(onSelectColor[18]), obj3);
  let obj5 = { style: tmp.container, children: null };
  const obj6 = { style: tmp.contentContainer, children: null };
  const obj7 = { style: tmp.presetGrid, children: null };
  const tmp10 = selectedEffectId(onSelectColor[18]);
  const obj8 = selectedEffectId(onSelectColor[22]);
  obj7.children = selectedEffectId(onSelectColor[22]).chunk(memo, 6).map((arr, index) => {
    closure_0 = index;
    return closure_1_9(first, {
      style: presetRow.presetRow,
      children: arr.map((item, index) => {
        closure_0 = item;
        let tmp = item === first;
        const obj = {
          onPress() {
            return closure_2_8(closure_0);
          },
          style: null,
          accessibilityRole: "button",
          accessibilityState: null,
          accessibilityLabel: null,
          children: null
        };
        const items = [presetColor.presetColor, , ];
        const obj2 = { backgroundColor: utils_ColorUtils.int2hex(item) };
        items[1] = obj2;
        let presetColorSelected = tmp;
        if (tmp) {
          presetColorSelected = presetColor.presetColorSelected;
        }
        items[2] = presetColorSelected;
        obj.style = items;
        obj.accessibilityState = { selected: tmp };
        obj.accessibilityLabel = utils_ColorUtils.int2hex(item);
        if (tmp) {
          const obj4 = { style: presetColor.checkmarkOverlay, pointerEvents: "none", children: null };
          const obj5 = { size: "custom", style: presetColor.checkmark, color: null };
          const darkness = utils_ColorUtils.getDarkness(item);
          let str = "black";
          if (darkness > ColorPickerConsts.DARK_SWATCH_THRESHOLD) {
            str = "white";
          }
          obj5.color = str;
          obj4.children = React7(CheckmarkLargeIcon.CheckmarkLargeIcon, obj5);
          tmp = React7(hasOwnProperty, obj4);
          const tmp5Result2 = utils_ColorUtils;
        }
        obj.children = tmp;
        return React7(timestampProducer, obj, 6 * closure_0 + index);
      })
    }, index);
  });
  const items5 = [closure_9(color, obj7), ];
  const obj9 = { style: tmp.buttonsContainer, children: null };
  const obj10 = { style: tmp.button, children: null };
  const obj11 = { text: null, onPress: null, variant: "secondary", size: "md", grow: true };
  const intl3 = selectedColor(onSelectColor[19]).intl;
  obj11.text = intl3.string(selectedEffectId(onSelectColor[20]).gIeJTK);
  obj11.onPress = callback;
  obj10.children = closure_9(selectedColor(onSelectColor[21]).Button, obj11);
  const items6 = [closure_9(color, obj10), ];
  const obj12 = { style: tmp.button, children: null };
  const obj13 = { text: null, onPress: null, variant: "secondary", size: "md", icon: null, grow: true };
  const intl4 = selectedColor(onSelectColor[19]).intl;
  obj13.text = intl4.string(selectedColor(onSelectColor[19]).t["FHBa/1"]);
  obj13.onPress = callback1;
  obj13.icon = closure_9(selectedColor(onSelectColor[24]).EyeDropperIcon, { size: "sm" });
  obj12.children = closure_9(selectedColor(onSelectColor[21]).Button, obj13);
  items6[1] = closure_9(color, obj12);
  obj9.children = items6;
  items5[1] = closure_10(color, obj9);
  obj6.children = items5;
  obj5.children = closure_10(color, obj6);
  obj2.children = closure_9(color, obj5);
  return closure_9(selectedColor(onSelectColor[17]).BottomSheet, obj2);
};