// === Module 17019: GuildSettingsServerTagColorPickerActionSheet ===

// Module 17019 (GuildSettingsServerTagColorPickerActionSheet)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import items from "items" /* 8270 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: closure_6, GUILD_TAG_BADGE_PALETTE_PRESETS: error, GuildTagBadgeSize: closure_8 } = items);
({ jsx: c9, jsxs: c10 } = jsxProd);
const PX_16 = ThemesDefault.space.PX_16;
let closure_12 = { leading: true, trailing: true };
let closure_13 = createCacheKey.createStyles((width) => {
  let obj = { container: null, preview: null, previewChiplet: null, colorTabs: null, saturationValuePicker: null, saturationValueColorBox: null, saturationValueColorBoxInner: null, selector: null, huePicker: null, hueColorBarInner: null, hexInput: null, buttonGroup: null };
  obj = { paddingHorizontal: PX_16, paddingBottom: ThemesDefault.space.PX_16 };
  obj[0] = obj;
  obj = { alignItems: "center", justifyContent: "center", paddingHorizontal: ThemesDefault.space.PX_24, paddingVertical: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj[1] = obj;
  obj[2] = { backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 0, columnGap: ThemesDefault.space.PX_8 };
  obj[3] = { alignSelf: "center", width };
  obj[4] = { alignSelf: "center" };
  obj1 = { backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 0, columnGap: ThemesDefault.space.PX_8 };
  obj[5] = { borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
  obj[6] = { width, minWidth: width, height: 160, minHeight: 160 };
  const obj2 = { borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
  obj[7] = { width: 16, height: 16, borderRadius: ThemesDefault.radii.round, borderColor: ThemesDefault.unsafe_rawColors.WHITE };
  obj[8] = { alignSelf: "center" };
  obj[9] = { width, minWidth: width, height: 24 };
  const obj3 = { width: 16, height: 16, borderRadius: ThemesDefault.radii.round, borderColor: ThemesDefault.unsafe_rawColors.WHITE };
  obj[10] = { height: 48, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.INPUT_BORDER_DEFAULT, backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: ThemesDefault.space.PX_12, textAlign: "center" };
  const obj4 = { height: 48, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.INPUT_BORDER_DEFAULT, backgroundColor: ThemesDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: ThemesDefault.space.PX_12, textAlign: "center" };
  obj[11] = { marginTop: ThemesDefault.space.PX_24 };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagColorPickerActionSheet.tsx");

export default function GuildSettingsServerTagColorPickerActionSheet(secondaryColor) {
  ({ tag, badge, primaryColor } = secondaryColor);
  secondaryColor = secondaryColor.secondaryColor;
  const onSelectColor = secondaryColor.onSelectColor;
  let callback;
  let first;
  let first1;
  let table;
  let first2;
  closure_8 = undefined;
  let first3;
  closure_10 = undefined;
  closure_11 = undefined;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  let first4;
  closure_16 = undefined;
  let primary2;
  let secondary;
  callback = undefined;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let throttledFunction;
  let callback5;
  const bound = Math.max(240, Math.min(secondaryColor(onSelectColor[9])().width - 2 * closure_11, 358));
  let tmp4 = sharedValue1(bound);
  callback = tmp5;
  first = first2[0];
  let obj = first;
  const tmp8 = callback(first.useState(primaryColor), 2);
  first1 = tmp8[0];
  table = tmp8[1];
  let tmp10 = null;
  if (table[badge] >= 2) {
    tmp10 = secondaryColor;
  }
  let tmp7Result = tmp7(first.useState(tmp10), 2);
  first2 = tmp7Result[0];
  closure_8 = tmp7Result[1];
  tmp7Result = tmp7(obj.useState("primary"), 2);
  first3 = tmp7Result[0];
  closure_10 = tmp7Result[1];
  closure_11 = obj.useRef(false);
  obj1 = primaryColor(tmp2[8]);
  let primary = first1;
  if (first1 == null) {
    primary = first.primary;
  }
  let hex2rgb2hsvResult = obj1.hex2rgb2hsv(primary);
  let tmp15Result = tmp15(tmp2[10]);
  let num;
  if (hex2rgb2hsvResult != null) {
    num = hex2rgb2hsvResult.h;
  }
  if (num == null) {
    num = 0;
  }
  sharedValue = tmp15Result.useSharedValue(num);
  tmp15Result = tmp15(tmp2[10]);
  let num2;
  if (hex2rgb2hsvResult != null) {
    num2 = hex2rgb2hsvResult.s;
  }
  if (num2 == null) {
    num2 = 100;
  }
  sharedValue1 = tmp15Result.useSharedValue(num2 / 100);
  let num3;
  if (hex2rgb2hsvResult != null) {
    num3 = hex2rgb2hsvResult.v;
  }
  if (num3 == null) {
    num3 = 100;
  }
  sharedValue2 = primaryColor(onSelectColor[10]).useSharedValue(num3 / 100);
  let str = first1;
  if (first1 == null) {
    str = first.primary;
  }
  const tmp7Result1 = callback(obj.useState(str.toUpperCase()), 2);
  first4 = tmp7Result1[0];
  closure_16 = tmp7Result1[1];
  primary2 = first1;
  if (first1 == null) {
    primary2 = first.primary;
  }
  let tmp22 = null;
  if (table[badge] >= 2) {
    secondary = first2;
    if (first2 == null) {
      secondary = first.secondary;
    }
    tmp22 = secondary;
  }
  secondary = tmp22;
  let items = [primary2, tmp22];
  callback = obj.useCallback((arg0) => {
    if ("primary" === arg0) {
      let tmp = primary2;
    } else {
      tmp = secondary;
      if (secondary == null) {
        tmp = primary2;
      }
    }
    return tmp;
  }, items);
  const items1 = [primaryColor, secondaryColor];
  callback1 = obj.useCallback((arg0) => "primary" === arg0 ? primaryColor : secondaryColor, items1);
  callback2 = obj.useCallback((arg0, str) => {
    let formatted;
    if (str != null) {
      formatted = str.toUpperCase();
    }
    if (formatted == null) {
      formatted = null;
    }
    if ("primary" === arg0) {
      callback(formatted);
    } else {
      callback2(formatted);
    }
  }, []);
  const items2 = [sharedValue, sharedValue1, sharedValue2];
  callback3 = obj.useCallback((first4) => {
    const hex2rgb2hsvResult = primaryColor(onSelectColor[8]).hex2rgb2hsv(first4);
    if (null != hex2rgb2hsvResult) {
      const result = sharedValue.set(hex2rgb2hsvResult.h);
      const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
      const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
    }
  }, items2);
  const items3 = [sharedValue, sharedValue1, callback2, sharedValue2];
  callback4 = obj.useCallback((colorChannel) => {
    let value = sharedValue.get();
    value = sharedValue1.get();
    const value1 = sharedValue2.get();
    let obj = primaryColor(onSelectColor[7]);
    const hsvToRgbWorkletResult = obj.hsvToRgbWorklet({ h: value, s: value, v: value1 });
    const obj2 = primaryColor(onSelectColor[8]);
    const formatted = primaryColor(onSelectColor[8]).rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]).toUpperCase();
    callback4(formatted);
    callback2(colorChannel, formatted);
    obj = { colorChannel, hex: formatted };
    return obj;
  }, items3);
  const tmp15Result1 = primaryColor(onSelectColor[10]);
  const items4 = [callback4];
  throttledFunction = primaryColor(onSelectColor[11]).useThrottledFunction(callback4, 32, items4, sharedValue);
  const items5 = [throttledFunction];
  callback5 = obj.useCallback(() => {
    if (ref.current) {
      let flushResult = throttledFunction.flush();
      if (flushResult == null) {
        flushResult = null;
      }
      if (null != flushResult) {
        tmp.current = false;
      }
      return flushResult;
    } else {
      return null;
    }
  }, items5);
  const items6 = [first3, throttledFunction];
  const items7 = [throttledFunction];
  const callback6 = obj.useCallback(() => {
    closure_11.current = true;
    throttledFunction(first3);
  }, items6);
  const effect = obj.useEffect(() => () => closure_24.cancel(), items7);
  const items8 = [first3, throttledFunction, callback4];
  const items9 = [first3, callback2, throttledFunction, callback3];
  const callback7 = obj.useCallback(() => {
    throttledFunction.cancel();
    closure_11.current = false;
    callback4(first3);
  }, items8);
  const items10 = [first3, first, callback1, callback2, throttledFunction, callback3];
  const callback8 = obj.useCallback((first4) => {
    if (first4.length > 0) {
      if ("#" !== first4.charAt(0)) {
        const _HermesInternal = HermesInternal;
        let combined = "#" + first4.toUpperCase();
      }
      closure_11.current = false;
      throttledFunction.cancel();
      callback4(combined);
      if (null != obj.hex2rgb2hsv(combined)) {
        callback2(first3, combined);
        callback3(combined);
      }
    }
    combined = first4.toUpperCase();
  }, items9);
  const items11 = [first3, callback5, callback, throttledFunction, callback3];
  const callback9 = obj.useCallback(() => {
    const tmp2 = callback1(first3);
    if ("primary" === first3) {
      secondary = first.primary;
    } else {
      secondary = first.secondary;
    }
    let str = tmp2;
    if (tmp2 == null) {
      str = secondary;
    }
    closure_11.current = false;
    throttledFunction.cancel();
    callback4(str.toUpperCase());
    callback2(first3, tmp2);
    callback3(str);
  }, items10);
  const callback10 = obj.useCallback((arg0) => {
    let str = "secondary";
    if (0 === arg0) {
      str = "primary";
    }
    if (str !== first3) {
      callback5();
      throttledFunction.cancel();
      callback3(str);
      const formatted = callback(str).toUpperCase();
      callback4(formatted);
      callback3(formatted);
      const str2 = callback(str);
    }
  }, items11);
  const memo = obj.useMemo(() => {
    let obj = { id: "primary", label: null, page: null };
    const intl = primaryColor(onSelectColor[12]).intl;
    obj[1] = intl.string(primaryColor(onSelectColor[12]).t.PHT1N2);
    const items = [obj, ];
    obj = { id: "secondary", label: null, page: null };
    const intl2 = primaryColor(onSelectColor[12]).intl;
    obj[1] = intl2.string(primaryColor(onSelectColor[12]).t["9/wzjF"]);
    items[1] = obj;
    return items;
  }, []);
  const tmp15Result2 = primaryColor(onSelectColor[11]);
  const items12 = [first1, first2, callback5, table[badge] >= 2, first4, onSelectColor];
  const segmentedControlState = primaryColor(onSelectColor[13]).useSegmentedControlState({ items: memo, pageWidth: bound, onSetActiveIndex: callback10 });
  let str2 = "WUMP";
  const callback11 = obj.useCallback(() => {
    if (null != obj.hex2rgb2hsv(first4)) {
      const tmp13 = callback5();
      let colorChannel;
      if (tmp13 != null) {
        colorChannel = tmp13.colorChannel;
      }
      const str2 = "primary" === colorChannel ? tmp13.hex : first1;
      let colorChannel1;
      if (tmp13 != null) {
        colorChannel1 = tmp13.colorChannel;
      }
      const str4 = "secondary" === colorChannel1 ? tmp13.hex : first2;
      let formatted;
      if (str2 != null) {
        formatted = str2.toLowerCase();
      }
      if (formatted == null) {
        formatted = null;
      }
      let tmp7 = null;
      if (closure_3) {
        let formatted1;
        if (str4 != null) {
          formatted1 = str4.toLowerCase();
        }
        if (formatted1 == null) {
          formatted1 = null;
        }
        tmp7 = formatted1;
      }
      onSelectColor(formatted, tmp7);
      secondaryColor(onSelectColor[14]).hideActionSheet();
      const obj2 = secondaryColor(onSelectColor[14]);
      const tmp4 = onSelectColor;
    }
  }, items12);
  if ("" !== tag) {
    str2 = tag;
  }
  const tmp15Result3 = primaryColor(onSelectColor[13]);
  const tmp15Result4 = primaryColor(onSelectColor[8]);
  obj = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  obj = { title: null };
  let intl = tmp15(tmp2[12]).intl;
  obj[0] = intl.string(primaryColor(onSelectColor[12]).t.T1IxYH);
  obj[2] = first3(primaryColor(onSelectColor[16]).BottomSheetTitleHeader, obj);
  obj1 = { spacing: tmp(tmp2[5]).space.PX_8, style: tmp4.container, children: null };
  let obj2 = { accessible: true, accessibilityLabel: null, style: null, children: null };
  let intl2 = tmp15(tmp2[12]).intl;
  obj2[1] = intl2.formatToPlainString(primaryColor(onSelectColor[12]).t.R1AXap, { tag: str2 });
  obj2[2] = tmp4.preview;
  const obj3 = { guildTag: str2, guildBadge: null, textVariant: "heading-xxl/semibold", textStyle: null, badgeSize: null, containerStyles: null };
  const obj4 = { badge, width: closure_8.SIZE_36, height: closure_8.SIZE_36, primaryTintColor: first1, secondaryTintColor: null };
  let tmp44;
  if (table[badge] >= 2) {
    tmp44 = first2;
  }
  obj4[4] = tmp44;
  obj3[1] = first3(primaryColor(onSelectColor[19]).GuildBadge, obj4);
  obj3[3] = primaryColor(onSelectColor[20]).TextStyleSheet["heading-xxl/semibold"];
  obj3[4] = closure_8.SIZE_36;
  obj3[5] = tmp4.previewChiplet;
  obj2[3] = first3(primaryColor(onSelectColor[18]).BaseGuildTagChiplet, obj3);
  const items13 = [first3(first1, obj2), , , , ];
  let tmp40Result = null;
  if (table[badge] >= 2) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp4.colorTabs;
    const obj6 = { state: null, variant: "experimental_Large", keyboardShouldPersistTaps: "handled" };
    obj6[0] = segmentedControlState;
    obj5[1] = tmp40(tmp15(tmp2[21]).SegmentedControl, obj6);
    tmp40Result = tmp40(tmp42, obj5);
  }
  items13[1] = tmp40Result;
  items13[2] = first3(secondaryColor(onSelectColor[22]), { hue: sharedValue, saturation: sharedValue1, value: sharedValue2, saturationValuePickerStyle: tmp4.saturationValuePicker, saturationValueColorBoxStyle: tmp4.saturationValueColorBox, saturationValueColorBoxInnerStyle: tmp4.saturationValueColorBoxInner, saturationValueSelectorStyle: tmp4.selector, huePickerStyle: tmp4.huePicker, hueColorBarInnerStyle: tmp4.hueColorBarInner, hueSliderStyle: tmp4.selector, onPanUpdate: callback6, onPanFinalize: callback7 });
  const obj8 = { accessibilityLabel: null, value: null, onChangeText: null, maxLength: 7, autoCapitalize: "characters", autoCorrect: false, style: null };
  const intl3 = tmp15(tmp2[12]).intl;
  obj8[0] = intl3.string(primaryColor(onSelectColor[12]).t["ozfa/h"]);
  obj8[1] = first4;
  obj8[2] = callback8;
  obj8[6] = tmp4.hexInput;
  items13[3] = first3(primaryColor(onSelectColor[23]).BottomSheetTextInput, obj8);
  const obj9 = { spacing: secondaryColor(onSelectColor[5]).space.PX_8, style: tmp4.buttonGroup, children: null };
  const obj10 = { grow: true, text: null, onPress: null, disabled: null };
  const intl4 = tmp15(tmp2[12]).intl;
  obj10[1] = intl4.string(primaryColor(onSelectColor[12]).t["R3BPH+"]);
  obj10[2] = callback11;
  obj10[3] = null == primaryColor(onSelectColor[8]).hex2rgb2hsv(first4);
  const items14 = [first3(primaryColor(onSelectColor[24]).Button, obj10), ];
  const obj11 = { grow: true, variant: "secondary", text: null, onPress: null };
  const intl5 = tmp15(tmp2[12]).intl;
  obj11[2] = intl5.string(primaryColor(onSelectColor[12]).t.yBZMsQ);
  obj11[3] = callback9;
  items14[1] = first3(primaryColor(onSelectColor[24]).Button, obj11);
  obj9[2] = items14;
  items13[4] = closure_10(primaryColor(onSelectColor[17]).Stack, obj9);
  obj1[2] = items13;
  obj[3] = closure_10(primaryColor(onSelectColor[17]).Stack, obj1);
  return first3(primaryColor(onSelectColor[15]).BottomSheet, obj);
};