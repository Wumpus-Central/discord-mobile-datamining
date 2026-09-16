// === Module 15459: DisplayNameStylesGummyCustomColorSheet ===

// Module 15459 (DisplayNameStylesGummyCustomColorSheet)
import nativeDefault from "native" /* 576 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1389 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import HapticUtils from "HapticUtils" /* 4606 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const DisplayNameStylesConstants = fn(1390);
({ DISPLAY_NAME_STYLES_GUMMY_HUE_LIGHTNESS: hasOwnProperty, DISPLAY_NAME_STYLES_GUMMY_HUE_SATURATION: metroRequire } = DisplayNameStylesConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { body: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, alignItems: "center" }, huePickerInset: null, previewWrapper: null, preview: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16, alignItems: "center" };
obj2.huePickerInset = { paddingHorizontal: nativeDefault.space.PX_4 + 2, alignSelf: "stretch" };
obj2.previewWrapper = { width: "25%", padding: 2 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_4 + 2, alignSelf: "stretch" };
obj2.preview = { height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx");

export default function DisplayNameStylesGummyCustomColorSheet(onSelect) {
  onSelect = onSelect.onSelect;
  const tmp = closure_9();
  let obj = onSelect(4374);
  let obj2 = onSelect(1389);
  const sharedValue = obj.useSharedValue(obj2.wrapHue(onSelect(1092).int2hslRaw(onSelect.initialColor).h));
  const items = [sharedValue, onSelect];
  const callback = noop.useCallback(() => {
    const result = onSelect(4606).triggerHapticFeedback(onSelect(4606).HapticFeedbackTypes.IMPACT_LIGHT);
  }, []);
  const callback1 = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelect(DisplayNameStylesUtils.hueToGummyColor(sharedValue.get()));
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  const obj4 = { header: null, children: null };
  const obj5 = { title: null, trailing: null };
  const intl = onSelect(1115).intl;
  obj5.title = intl.string(onSelect(1115).t.WTqQ5e);
  const obj6 = { variant: "primary", size: "sm", text: null, onPress: null };
  const intl2 = onSelect(1115).intl;
  obj6.text = intl2.string(onSelect(1115).t.XqMe3N);
  obj6.onPress = callback1;
  obj5.trailing = closure_7(onSelect(5060).Button, obj6);
  obj4.header = closure_7(onSelect(7259).BottomSheetTitleHeader, obj5);
  const obj7 = { style: tmp.body, children: null };
  const obj8 = { style: tmp.previewWrapper, children: null };
  const obj3 = onSelect(1092);
  obj8.children = closure_7(View, { style: tmp.preview, children: closure_7(sharedValue(15460), { hue: sharedValue }) });
  const items1 = [closure_7(View, obj8), ];
  const obj10 = { style: tmp.huePickerInset, children: closure_7(sharedValue(14715), { hue: sharedValue, onPanFinalize: callback, saturation, lightness, fullWidth: true }) };
  items1[1] = closure_7(View, obj10);
  obj7.children = items1;
  obj4.children = closure_8(View, obj7);
  return closure_7(onSelect(7260).BottomSheet, obj4);
};