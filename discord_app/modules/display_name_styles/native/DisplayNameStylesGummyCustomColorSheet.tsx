// discord_app/modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import items3 from "../DisplayNameStylesConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ DISPLAY_NAME_STYLES_GUMMY_HUE_LIGHTNESS: c5, DISPLAY_NAME_STYLES_GUMMY_HUE_SATURATION: closure_6 } = items3);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { body: null, huePickerInset: null, previewWrapper: null, preview: null };
createCacheKey = {
  paddingHorizontal: ThemesDefault.space.PX_16,
  paddingTop: ThemesDefault.space.PX_12,
  paddingBottom: ThemesDefault.space.PX_16,
  gap: ThemesDefault.space.PX_16,
  alignItems: "center",
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: ThemesDefault.space.PX_4 + 2, alignSelf: "stretch" };
createCacheKey[2] = { width: "25%", padding: 2 };
let obj1 = { paddingHorizontal: ThemesDefault.space.PX_4 + 2, alignSelf: "stretch" };
createCacheKey[3] = { height: 40, flexDirection: "row", borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj2 = { height: 40, flexDirection: "row", borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
let result = require("set").fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx",
);

export default function DisplayNameStylesGummyCustomColorSheet(onSelect) {
  onSelect = onSelect.onSelect;
  let sharedValue;
  const tmp = callback3();
  let obj = onSelect(4217);
  obj1 = onSelect(1937);
  let obj2 = onSelect(685);
  sharedValue = obj.useSharedValue(obj1.wrapHue(obj2.int2hslRaw(onSelect.initialColor).h));
  const items = [sharedValue, onSelect];
  const callback = React.useCallback(() => {
    const result = onSelect(4446).triggerHapticFeedback(onSelect(4446).HapticFeedbackTypes.IMPACT_LIGHT);
  }, []);
  const callback1 = React.useCallback(() => {
    const result = onSelect(closure_1_2[9]).triggerHapticFeedback(
      onSelect(closure_1_2[9]).HapticFeedbackTypes.IMPACT_MEDIUM,
    );
    const obj = onSelect(closure_1_2[9]);
    onSelect(onSelect(closure_1_2[7]).hueToGummyColor(sharedValue.get()));
    const obj2 = onSelect(closure_1_2[7]);
    sharedValue(closure_1_2[10]).hideActionSheet();
  }, items);
  obj = { header: null, children: null };
  obj = { title: null, trailing: null };
  const intl = onSelect(1233).intl;
  obj[0] = intl.string(onSelect(1233).t.WTqQ5e);
  obj1 = { variant: "primary", size: "sm", text: null, onPress: null };
  const intl2 = onSelect(1233).intl;
  obj1[2] = intl2.string(onSelect(1233).t.XqMe3N);
  obj1[3] = callback1;
  obj[1] = callback(onSelect(4929).Button, obj1);
  obj[0] = callback(onSelect(5630).BottomSheetTitleHeader, obj);
  obj2 = { style: tmp.body, children: null };
  const obj3 = {
    style: tmp.previewWrapper,
    children: callback(View, { style: tmp.preview, children: callback(sharedValue(15188), { hue: sharedValue }) }),
  };
  const items1 = [callback(View, obj3)];
  const obj4 = { style: tmp.preview, children: callback(sharedValue(15188), { hue: sharedValue }) };
  items1[1] = callback(View, { style: tmp.huePickerInset, children: callback(sharedValue(14494), obj6) });
  obj2[1] = items1;
  obj[1] = callback2(View, obj2);
  return callback(onSelect(5631).BottomSheet, obj);
}
