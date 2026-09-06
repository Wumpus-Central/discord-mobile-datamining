// discord_app/modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DisplayNameStylesUtils from "../DisplayNameStylesUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const DisplayNameStylesConstants = fn(1389);
({ DISPLAY_NAME_STYLES_GUMMY_HUE_LIGHTNESS: hasOwnProperty, DISPLAY_NAME_STYLES_GUMMY_HUE_SATURATION: metroRequire } =
  DisplayNameStylesConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { body: null, huePickerInset: null, previewWrapper: null, preview: null };
createStyles = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
  alignItems: "center",
};
createStyles.body = createStyles;
createStyles.huePickerInset = { paddingHorizontal: nativeDefault.space.PX_4 + 2, alignSelf: "stretch" };
createStyles.previewWrapper = { width: "25%", padding: 2 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_4 + 2, alignSelf: "stretch" };
createStyles.preview = { height: 40, flexDirection: "row", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx",
);

export default function DisplayNameStylesGummyCustomColorSheet(onSelect) {
  onSelect = onSelect.onSelect;
  const tmp = closure_9();
  let obj = onSelect(4296);
  let obj1 = onSelect(1388);
  let obj2 = onSelect(1091);
  const sharedValue = obj.useSharedValue(obj1.wrapHue(obj2.int2hslRaw(onSelect.initialColor).h));
  const items = [sharedValue, onSelect];
  const callback = noop.useCallback(() => {
    const result = onSelect(4528).triggerHapticFeedback(onSelect(4528).HapticFeedbackTypes.IMPACT_LIGHT);
  }, []);
  const callback1 = noop.useCallback(() => {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
    onSelect(DisplayNameStylesUtils.hueToGummyColor(sharedValue.get()));
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  obj = { header: null, children: null };
  obj = { title: null, trailing: null };
  const intl = onSelect(1114).intl;
  obj.title = intl.string(onSelect(1114).t.WTqQ5e);
  obj1 = { variant: "primary", size: "sm", text: null, onPress: null };
  const intl2 = onSelect(1114).intl;
  obj1.text = intl2.string(onSelect(1114).t.XqMe3N);
  obj1.onPress = callback1;
  obj.trailing = closure_7(onSelect(4975).Button, obj1);
  obj.header = closure_7(onSelect(7149).BottomSheetTitleHeader, obj);
  obj2 = { style: tmp.body, children: null };
  const obj3 = {
    style: tmp.previewWrapper,
    children: closure_7(View, { style: tmp.preview, children: closure_7(sharedValue(15348), { hue: sharedValue }) }),
  };
  const items1 = [closure_7(View, obj3)];
  const obj5 = {
    style: tmp.huePickerInset,
    children: closure_7(sharedValue(14601), {
      hue: sharedValue,
      onPanFinalize: callback,
      saturation,
      lightness,
      fullWidth: true,
    }),
  };
  items1[1] = closure_7(View, obj5);
  obj2.children = items1;
  obj.children = closure_8(View, obj2);
  return closure_7(onSelect(7150).BottomSheet, obj);
}
