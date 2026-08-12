// discord_app/modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx
import noop from "noop";
import { View } from "set";
import items3 from "items3";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ DISPLAY_NAME_STYLES_GUMMY_HUE_LIGHTNESS: c5, DISPLAY_NAME_STYLES_GUMMY_HUE_SATURATION: closure_6 } = items3);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { body: null, huePickerInset: null, previewWrapper: null, preview: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_12, paddingBottom: require("Themes").space.PX_16, gap: require("Themes").space.PX_16, alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_4 + 2, alignSelf: "stretch" };
createCacheKey[2] = { width: "25%", padding: 2 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_4 + 2, alignSelf: "stretch" };
createCacheKey[3] = { height: 40, flexDirection: "row", borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { height: 40, flexDirection: "row", borderRadius: require("Themes").radii.sm, overflow: "hidden" };
let result = require("items3").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesGummyCustomColorSheet.tsx");

export default function DisplayNameStylesGummyCustomColorSheet(onSelect) {
  onSelect = onSelect.onSelect;
  let sharedValue;
  const tmp = createCacheKey();
  let obj = onSelect(4083);
  let obj1 = onSelect(1933);
  let obj2 = onSelect(688);
  sharedValue = obj.useSharedValue(obj1.wrapHue(obj2.int2hslRaw(onSelect.initialColor).h));
  const items = [sharedValue, onSelect];
  const callback = React.useCallback(() => {
    const result = onSelect(4313).triggerHapticFeedback(onSelect(4313).HapticFeedbackTypes.IMPACT_LIGHT);
  }, []);
  const callback1 = React.useCallback(() => {
    const result = onSelect(outer1_2[9]).triggerHapticFeedback(onSelect(outer1_2[9]).HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = onSelect(outer1_2[9]);
    onSelect(onSelect(outer1_2[7]).hueToGummyColor(sharedValue.get()));
    const obj2 = onSelect(outer1_2[7]);
    sharedValue(outer1_2[10]).hideActionSheet();
  }, items);
  obj = { header: null, children: null };
  obj = { title: null, trailing: null };
  const intl = onSelect(1236).intl;
  obj[0] = intl.string(onSelect(1236).t.WTqQ5e);
  obj1 = { variant: "primary", size: "sm", text: null, onPress: null };
  const intl2 = onSelect(1236).intl;
  obj1[2] = intl2.string(onSelect(1236).t.XqMe3N);
  obj1[3] = callback1;
  obj[1] = callback(onSelect(4754).Button, obj1);
  obj[0] = callback(onSelect(5435).BottomSheetTitleHeader, obj);
  obj2 = { style: tmp.body, children: null };
  const obj3 = { style: tmp.previewWrapper, children: null };
  obj3[1] = callback(View, { style: tmp.preview, children: callback(sharedValue(14649), { hue: sharedValue }) });
  const items1 = [callback(View, obj3), ];
  const obj4 = { style: tmp.preview, children: callback(sharedValue(14649), { hue: sharedValue }) };
  items1[1] = callback(View, { style: tmp.huePickerInset, children: callback(sharedValue(13976), obj6) });
  obj2[1] = items1;
  obj[1] = callback2(View, obj2);
  return callback(onSelect(5436).BottomSheet, obj);
};