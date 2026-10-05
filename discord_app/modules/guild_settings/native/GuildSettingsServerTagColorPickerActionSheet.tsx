// discord_app/modules/guild_settings/native/GuildSettingsServerTagColorPickerActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ColorPickerUtils from "../../color_picker/native/ColorPickerUtils.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import GuildTagConstants from "../../guild_tag/GuildTagConstants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let BottomSheet, secondaryColor;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({
  GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: metroRequire,
  GUILD_TAG_BADGE_PALETTE_PRESETS: metroImportDefault,
  GuildTagBadgeSize: metroImportAll,
} = GuildTagConstants);
({ jsx: c9, jsxs: c10 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let closure_12 = { leading: true, trailing: true };
let closure_13 = createStyles.createStyles((width) => {
  const obj = {
    container: { paddingHorizontal: PX_16, paddingBottom: nativeDefault.space.PX_16 },
    preview: {
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: nativeDefault.space.PX_24,
      paddingVertical: nativeDefault.space.PX_12,
      borderRadius: nativeDefault.radii.sm,
      borderWidth: 1,
      borderColor: nativeDefault.colors.BORDER_MUTED,
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    },
    previewChiplet: {
      backgroundColor: "transparent",
      paddingHorizontal: 0,
      paddingVertical: 0,
      columnGap: nativeDefault.space.PX_8,
    },
    colorTabs: { alignSelf: "center", width },
    saturationValuePicker: { alignSelf: "center" },
    saturationValueColorBox: { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE },
    saturationValueColorBoxInner: { width, minWidth: width, height: 160, minHeight: 160 },
    selector: size,
    huePicker: { alignSelf: "center" },
    hueColorBarInner: { width, minWidth: width, height: 24 },
    hexInput: {
      height: 48,
      borderRadius: nativeDefault.radii.sm,
      borderWidth: 1,
      borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT,
      backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
      paddingHorizontal: nativeDefault.space.PX_12,
      textAlign: "center",
    },
    buttonGroup: { marginTop: nativeDefault.space.PX_24 },
  };
  ({ paddingHorizontal: PX_16, paddingBottom: nativeDefault.space.PX_16 });
  ({
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: nativeDefault.space.PX_24,
    paddingVertical: nativeDefault.space.PX_12,
    borderRadius: nativeDefault.radii.sm,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_MUTED,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  });
  ({ backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 0, columnGap: nativeDefault.space.PX_8 });
  ({ borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE });
  size = {
    width: 16,
    height: 16,
    borderRadius: nativeDefault.radii.round,
    borderColor: nativeDefault.unsafe_rawColors.WHITE,
  };
  ({
    height: 48,
    borderRadius: nativeDefault.radii.sm,
    borderWidth: 1,
    borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT,
    backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
    paddingHorizontal: nativeDefault.space.PX_12,
    textAlign: "center",
  });
  ({ marginTop: nativeDefault.space.PX_24 });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (secondaryColor) => {
      let badge;
      let closure_3;
      let closure_6;
      let first1;
      let first2;
      let onSelectColor;
      let primaryColor;
      let ref;
      let sharedValue2;
      let tag;
      let tmp24;
      let tmp2 = onSelectColor;
      let obj = primaryColor(onSelectColor[10]);
      const cResult = obj.c(114);
      ({ tag, badge, primaryColor } = secondaryColor);
      secondaryColor = secondaryColor.secondaryColor;
      onSelectColor = secondaryColor.onSelectColor;
      const bound = Math.max(240, Math.min(secondaryColor(onSelectColor[11])().width - 2 * ref, 358));
      sharedValue2(bound);
      _slicedToArray = tmp6;
      const first = first2[0];
      let obj2 = first;
      [first1, closure_6] = first.useState(primaryColor);
      let tmp11 = null;
      const useState = first.useState;
      if (closure_6[badge] >= 2) {
        tmp11 = secondaryColor;
      }
      const tmp8Result = _slicedToArray(useState(tmp11), 2);
      first2 = tmp8Result[0];
      let closure_8 = tmp8Result[1];
      const tmp8Result3 = _slicedToArray(obj2.useState("primary"), 2);
      const first3 = tmp8Result3[0];
      let closure_10 = tmp8Result3[1];
      ref = obj2.useRef(false);
      let primary = first1;
      const hex2rgb2hsv = primaryColor(tmp2[8]).hex2rgb2hsv;
      primaryColor(tmp2[8]);
      if (first1 == null) {
        primary = first.primary;
      }
      let hex2rgb2hsvResult = hex2rgb2hsv(primary);
      let num;
      const useSharedValue = primaryColor(tmp2[12]).useSharedValue;
      primaryColor(tmp2[12]);
      if (hex2rgb2hsvResult != null) {
        num = hex2rgb2hsvResult.h;
      }
      if (num == null) {
        num = 0;
      }
      const sharedValue = useSharedValue(num);
      let num2;
      const useSharedValue2 = primaryColor(tmp2[12]).useSharedValue;
      primaryColor(tmp2[12]);
      if (hex2rgb2hsvResult != null) {
        num2 = hex2rgb2hsvResult.s;
      }
      if (num2 == null) {
        num2 = 100;
      }
      sharedValue2 = useSharedValue2(num2 / 100);
      let num3;
      const useSharedValue3 = primaryColor(tmp2[12]).useSharedValue;
      primaryColor(tmp2[12]);
      if (hex2rgb2hsvResult != null) {
        num3 = hex2rgb2hsvResult.v;
      }
      if (num3 == null) {
        num3 = 100;
      }
      const sharedValue3 = useSharedValue3(num3 / 100);
      let str = first1;
      if (first1 == null) {
        str = first.primary;
      }
      if (cResult[0] !== str) {
        let formatted = str.toUpperCase();
        cResult[0] = str;
        cResult[1] = formatted;
        tmp24 = formatted;
      } else {
        tmp24 = cResult[1];
      }
      const tmp8Result4 = _slicedToArray(obj2.useState(tmp24), 2);
      let closure_15 = tmp8Result4[0];
      let closure_16 = tmp8Result4[1];
      let primary2 = first1;
      if (first1 == null) {
        primary2 = first.primary;
      }
      let tmp27 = null;
      if (closure_6[badge] >= 2) {
        let secondary = first2;
        if (first2 == null) {
          secondary = first.secondary;
        }
        tmp27 = secondary;
      }
      secondary = tmp27;
      if (cResult[2] === primary2) {
        let tmp28;
        if (cResult[3] === tmp27) {
          tmp28 = cResult[4];
        }
        let closure_19 = tmp28;
        if (cResult[5] === primaryColor) {
          let tmp29;
          let tmp30;
          if (cResult[6] === secondaryColor) {
            tmp29 = cResult[7];
          }
          let closure_20 = tmp29;
          const _Symbol = Symbol;
          let str2 = "react.memo_cache_sentinel";
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            function le(arg0, str) {
              let formatted;
              if (str != null) {
                formatted = str.toUpperCase();
              }
              if (formatted == null) {
                formatted = null;
              }
              if ("primary" === arg0) {
                closure_6(formatted);
              } else {
                closure_8(formatted);
              }
            }
            cResult[8] = le;
            tmp30 = le;
          } else {
            tmp30 = cResult[8];
          }
          let closure_21 = tmp30;
          if (cResult[9] === sharedValue) {
            if (cResult[10] === sharedValue2) {
              let tmp31;
              if (cResult[11] === sharedValue3) {
                tmp31 = cResult[12];
              }
              let closure_22 = tmp31;
              if (cResult[13] === sharedValue) {
                if (cResult[14] === sharedValue2) {
                  let tmp32;
                  let tmp33;
                  let tmp39;
                  if (cResult[15] === sharedValue3) {
                    tmp32 = cResult[16];
                  }
                  let closure_23 = tmp32;
                  if (cResult[17] !== tmp32) {
                    const items = [tmp32];
                    cResult[17] = tmp32;
                    cResult[18] = items;
                    tmp33 = items;
                  } else {
                    tmp33 = cResult[18];
                  }
                  const tmpResult8 = primaryColor(tmp2[13]);
                  const throttledFunction = tmpResult8.useThrottledFunction(tmp32, 32, tmp33, sharedValue);
                  if (cResult[19] !== throttledFunction) {
                    function he() {
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
                    }
                    cResult[19] = throttledFunction;
                    cResult[20] = he;
                    tmp39 = he;
                  } else {
                    tmp39 = cResult[20];
                  }
                  let closure_25 = tmp39;
                  if (cResult[21] === first3) {
                    let tmp42;
                    if (cResult[24] !== throttledFunction) {
                      class Se {
                        constructor() {
                          return () => throttledFunction.cancel();
                        }
                      }
                      const items1 = [throttledFunction];
                      cResult[24] = throttledFunction;
                      cResult[25] = Se;
                      cResult[26] = items1;
                      tmp42 = items1;
                    } else {
                      class Se {
                        constructor() {
                          return () => throttledFunction.cancel();
                        }
                      }
                      tmp42 = cResult[26];
                    }
                    const effect = obj2.useEffect(Se, tmp42);
                    if (cResult[27] === first3) {
                      class Se {
                        constructor() {
                          return () => throttledFunction.cancel();
                        }
                      }
                    }
                    function me() {
                      throttledFunction.cancel();
                      ref.current = false;
                      closure_23(first3);
                    }
                    cResult[27] = first3;
                    cResult[28] = throttledFunction;
                    cResult[29] = tmp32;
                    cResult[30] = me;
                  }
                  function ge() {
                    ref.current = true;
                    throttledFunction(first3);
                  }
                  cResult[21] = first3;
                  cResult[22] = throttledFunction;
                  cResult[23] = ge;
                }
              }
              function se(colorChannel) {
                const value = sharedValue.get();
                const value3 = sharedValue2.get();
                const value4 = sharedValue3.get();
                const obj = ColorPickerUtils;
                const hsvToRgbWorkletResult = obj.hsvToRgbWorklet({ h: value, s: value3, v: value4 });
                const obj2 = ColorUtils;
                const str = obj2.rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]);
                const formatted = str.toUpperCase();
                closure_16(formatted);
                closure_21(colorChannel, formatted);
                return { colorChannel, hex: formatted };
              }
              cResult[13] = sharedValue;
              cResult[14] = sharedValue2;
              cResult[15] = sharedValue3;
              cResult[16] = se;
              tmp32 = se;
            }
          }
          function oe(combined) {
            const obj = ColorUtils;
            const hex2rgb2hsvResult = obj.hex2rgb2hsv(combined);
            if (null != hex2rgb2hsvResult) {
              const result = sharedValue.set(hex2rgb2hsvResult.h);
              const result1 = sharedValue2.set(hex2rgb2hsvResult.s / 100);
              const result2 = sharedValue3.set(hex2rgb2hsvResult.v / 100);
            }
          }
          cResult[9] = sharedValue;
          cResult[10] = sharedValue2;
          cResult[11] = sharedValue3;
          cResult[12] = oe;
          tmp31 = oe;
        }
        function ae(arg0) {
          return "primary" === arg0 ? primaryColor : secondaryColor;
        }
        cResult[5] = primaryColor;
        cResult[6] = secondaryColor;
        cResult[7] = ae;
        tmp29 = ae;
      }
      class Q {
        constructor(arg0) {
          let tmp;
          if ("primary" === arg0) {
            tmp = primary2;
          } else {
            tmp = secondary;
            if (secondary == null) {
              tmp = primary2;
            }
          }
          return tmp;
        }
      }
      cResult[2] = primary2;
      cResult[3] = tmp27;
      cResult[4] = Q;
      tmp28 = Q;
    }
  : (secondaryColor) => {
      let BaseGuildTagChiplet;
      let BottomSheetTitleHeader;
      let GuildBadge;
      let Stack;
      let badge;
      let closure_3;
      let closure_6;
      let first1;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items13;
      let items14;
      let obj3;
      let obj4;
      let obj6;
      let obj8;
      let primaryColor;
      let tag;
      let tmp47;
      let tmp48;
      ({ tag, badge, primaryColor } = secondaryColor);
      secondaryColor = secondaryColor.secondaryColor;
      const onSelectColor = secondaryColor.onSelectColor;
      first1 = undefined;
      closure_6 = undefined;
      let first2;
      let closure_8;
      let first3;
      let closure_10;
      let ref;
      let sharedValue;
      let sharedValue2;
      let sharedValue3;
      let first4;
      let closure_16;
      let primary2;
      let secondary;
      let callback;
      let callback1;
      let callback2;
      let callback3;
      let callback4;
      let throttledFunction;
      let callback5;
      let tmp = secondaryColor;
      let tmp2 = onSelectColor;
      const bound = Math.max(240, Math.min(secondaryColor(onSelectColor[11])().width - 2 * ref, 358));
      const tmp4 = sharedValue2(bound);
      _slicedToArray = tmp5;
      const first = first2[0];
      let obj = first;
      let tmp7 = _slicedToArray;
      [first1, closure_6] = first.useState(primaryColor);
      let tmp10 = null;
      const useState = first.useState;
      if (closure_6[badge] >= 2) {
        tmp10 = secondaryColor;
      }
      const tmp7Result = tmp7(useState(tmp10), 2);
      first2 = tmp7Result[0];
      closure_8 = tmp7Result[1];
      const tmp7Result3 = tmp7(obj.useState("primary"), 2);
      first3 = tmp7Result3[0];
      closure_10 = tmp7Result3[1];
      ref = obj.useRef(false);
      let primary = first1;
      const hex2rgb2hsv = primaryColor(tmp2[8]).hex2rgb2hsv;
      primaryColor(tmp2[8]);
      if (first1 == null) {
        primary = first.primary;
      }
      let hex2rgb2hsvResult = hex2rgb2hsv(primary);
      let num;
      const useSharedValue = tmp15(tmp2[12]).useSharedValue;
      primaryColor(tmp2[12]);
      if (hex2rgb2hsvResult != null) {
        num = hex2rgb2hsvResult.h;
      }
      if (num == null) {
        num = 0;
      }
      sharedValue = useSharedValue(num);
      let num2;
      const useSharedValue2 = tmp15(tmp2[12]).useSharedValue;
      primaryColor(tmp2[12]);
      if (hex2rgb2hsvResult != null) {
        num2 = hex2rgb2hsvResult.s;
      }
      if (num2 == null) {
        num2 = 100;
      }
      sharedValue2 = useSharedValue2(num2 / 100);
      let num3;
      const useSharedValue3 = tmp15(tmp2[12]).useSharedValue;
      primaryColor(tmp2[12]);
      if (hex2rgb2hsvResult != null) {
        num3 = hex2rgb2hsvResult.v;
      }
      if (num3 == null) {
        num3 = 100;
      }
      sharedValue3 = useSharedValue3(num3 / 100);
      let str = first1;
      const useState2 = obj.useState;
      if (first1 == null) {
        str = first.primary;
      }
      const tmp7Result4 = tmp7(useState2(str.toUpperCase()), 2);
      first4 = tmp7Result4[0];
      closure_16 = tmp7Result4[1];
      primary2 = first1;
      if (first1 == null) {
        primary2 = first.primary;
      }
      let tmp26 = null;
      if (closure_6[badge] >= 2) {
        secondary = first2;
        if (first2 == null) {
          secondary = first.secondary;
        }
        tmp26 = secondary;
      }
      secondary = tmp26;
      let items = [primary2, tmp26];
      callback = obj.useCallback((arg0) => {
        let tmp;
        if ("primary" === arg0) {
          tmp = primary2;
        } else {
          tmp = secondary;
          if (secondary == null) {
            tmp = primary2;
          }
        }
        return tmp;
      }, items);
      const items1 = [primaryColor, secondaryColor];
      callback1 = obj.useCallback((arg0) => ("primary" === arg0 ? primaryColor : secondaryColor), items1);
      callback2 = obj.useCallback((arg0, str) => {
        let formatted;
        if (str != null) {
          formatted = str.toUpperCase();
        }
        if (formatted == null) {
          formatted = null;
        }
        if ("primary" === arg0) {
          closure_6(formatted);
        } else {
          closure_8(formatted);
        }
      }, []);
      const items2 = [sharedValue, sharedValue2, sharedValue3];
      callback3 = obj.useCallback((combined) => {
        const obj = ColorUtils;
        const hex2rgb2hsvResult = obj.hex2rgb2hsv(combined);
        if (null != hex2rgb2hsvResult) {
          const result = sharedValue.set(hex2rgb2hsvResult.h);
          const result1 = sharedValue2.set(hex2rgb2hsvResult.s / 100);
          const result2 = sharedValue3.set(hex2rgb2hsvResult.v / 100);
        }
      }, items2);
      const items3 = [sharedValue, sharedValue2, callback2, sharedValue3];
      callback4 = obj.useCallback((colorChannel) => {
        const value = sharedValue.get();
        const value3 = sharedValue2.get();
        const value4 = sharedValue3.get();
        const obj = ColorPickerUtils;
        const hsvToRgbWorkletResult = obj.hsvToRgbWorklet({ h: value, s: value3, v: value4 });
        const obj2 = ColorUtils;
        const str = obj2.rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]);
        const formatted = str.toUpperCase();
        closure_16(formatted);
        callback2(colorChannel, formatted);
        return { colorChannel, hex: formatted };
      }, items3);
      const items4 = [callback4];
      const tmp15Result8 = primaryColor(tmp2[13]);
      throttledFunction = tmp15Result8.useThrottledFunction(callback4, 32, items4, sharedValue);
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
        ref.current = true;
        throttledFunction(first3);
      }, items6);
      const effect = obj.useEffect(() => () => throttledFunction.cancel(), items7);
      const items8 = [first3, throttledFunction, callback4];
      const items9 = [first3, callback2, throttledFunction, callback3];
      const callback7 = obj.useCallback(() => {
        throttledFunction.cancel();
        ref.current = false;
        callback4(first3);
      }, items8);
      const items10 = [first3, first, callback1, callback2, throttledFunction, callback3];
      const callback8 = obj.useCallback((combined) => {
        if (combined.length > 0) {
          if ("#" !== combined.charAt(0)) {
            const _HermesInternal = HermesInternal;
            combined = "#" + combined.toUpperCase();
          }
          ref.current = false;
          throttledFunction.cancel();
          closure_16(combined);
          const obj = ColorUtils;
          if (null != obj.hex2rgb2hsv(combined)) {
            callback2(first3, combined);
            callback3(combined);
          }
        }
        combined = combined.toUpperCase();
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
        ref.current = false;
        throttledFunction.cancel();
        closure_16(str.toUpperCase());
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
          closure_10(str);
          const str2 = callback(str);
          const formatted = str2.toUpperCase();
          closure_16(formatted);
          callback3(formatted);
        }
      }, items11);
      const memo = obj.useMemo(() => {
        let intl;
        let intl2;
        const obj = { id: "primary", label: intl.string(primaryColor(onSelectColor[14]).t.PHT1N2), page: null };
        intl = primaryColor(onSelectColor[14]).intl;
        const items = [obj];
        const obj2 = { id: "secondary", label: intl2.string(primaryColor(onSelectColor[14]).t["9/wzjF"]), page: null };
        intl2 = primaryColor(onSelectColor[14]).intl;
        items[1] = obj2;
        return items;
      }, []);
      const items12 = [first1, first2, callback5, tmp5, first4, onSelectColor];
      const tmp15Result9 = primaryColor(tmp2[15]);
      const segmentedControlState = tmp15Result9.useSegmentedControlState({
        items: memo,
        pageWidth: bound,
        onSetActiveIndex: callback10,
      });
      let str2 = "WUMP";
      const callback11 = obj.useCallback(() => {
        const obj = ColorUtils;
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
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        }
      }, items12);
      if ("" !== tag) {
        str2 = tag;
      }
      const tmp15Result10 = primaryColor(tmp2[8]);
      let obj2 = {
        startExpanded: true,
        keyboardShouldPersistTaps: "handled",
        header: first3(BottomSheetTitleHeader, obj3),
        children: closure_10(Stack, obj4),
      };
      const tmp43 = null == tmp15Result10.hex2rgb2hsv(first4);
      BottomSheet = tmp15(tmp2[26]).BottomSheet;
      obj3 = { title: intl.string(primaryColor(tmp2[14]).t.T1IxYH) };
      BottomSheetTitleHeader = tmp15(tmp2[17]).BottomSheetTitleHeader;
      intl = tmp15(tmp2[14]).intl;
      obj4 = { spacing: tmp(tmp2[5]).space.PX_8, style: tmp4.container, children: items13 };
      Stack = tmp15(tmp2[25]).Stack;
      const obj5 = {
        accessible: true,
        accessibilityLabel: intl2.formatToPlainString(primaryColor(tmp2[14]).t.R1AXap, { tag: str2 }),
        style: tmp4.preview,
        children: first3(BaseGuildTagChiplet, obj6),
      };
      intl2 = tmp15(tmp2[14]).intl;
      obj6 = {
        guildTag: str2,
        guildBadge: first3(GuildBadge, size),
        textVariant: "heading-xxl/semibold",
        textStyle: primaryColor(tmp2[20]).TextStyleSheet["heading-xxl/semibold"],
        badgeSize: tmp47.SIZE_36,
        containerStyles: tmp4.previewChiplet,
      };
      BaseGuildTagChiplet = tmp15(tmp2[19]).BaseGuildTagChiplet;
      size = {
        badge,
        width: closure_8.SIZE_36,
        height: closure_8.SIZE_36,
        primaryTintColor: first1,
        secondaryTintColor: tmp48,
      };
      GuildBadge = tmp15(tmp2[18]).GuildBadge;
      tmp48 = undefined;
      tmp47 = closure_8;
      if (closure_6[badge] >= 2) {
        tmp48 = first2;
      }
      items13 = [first3(first1, obj5), , , ,];
      let tmp44Result = null;
      if (closure_6[badge] >= 2) {
        const obj7 = { style: tmp4.colorTabs, children: first3(primaryColor(tmp2[21]).SegmentedControl, obj8) };
        obj8 = { state: segmentedControlState, variant: "experimental_Large", keyboardShouldPersistTaps: "handled" };
        tmp44Result = tmp44(tmp46, obj7);
      }
      items13[1] = tmp44Result;
      const obj9 = {
        hue: sharedValue,
        saturation: sharedValue2,
        value: sharedValue3,
        saturationValuePickerStyle: tmp4.saturationValuePicker,
        saturationValueColorBoxStyle: tmp4.saturationValueColorBox,
        saturationValueColorBoxInnerStyle: tmp4.saturationValueColorBoxInner,
        saturationValueSelectorStyle: tmp4.selector,
        huePickerStyle: tmp4.huePicker,
        hueColorBarInnerStyle: tmp4.hueColorBarInner,
        hueSliderStyle: tmp4.selector,
        onPanUpdate: callback6,
        onPanFinalize: callback7,
      };
      items13[2] = first3(tmp(tmp2[22]), obj9);
      const obj10 = {
        accessibilityLabel: intl3.string(primaryColor(tmp2[14]).t["ozfa/h"]),
        value: first4,
        onChangeText: callback8,
        maxLength: 7,
        autoCapitalize: "characters",
        autoCorrect: false,
        style: tmp4.hexInput,
      };
      const BottomSheetTextInput = tmp15(tmp2[23]).BottomSheetTextInput;
      intl3 = tmp15(tmp2[14]).intl;
      items13[3] = first3(BottomSheetTextInput, obj10);
      const obj11 = { spacing: tmp(tmp2[5]).space.PX_8, style: tmp4.buttonGroup, children: items14 };
      const Stack2 = tmp15(tmp2[25]).Stack;
      const obj12 = {
        grow: true,
        text: intl4.string(primaryColor(tmp2[14]).t["R3BPH+"]),
        onPress: callback11,
        disabled: tmp43,
      };
      const Button = tmp15(tmp2[24]).Button;
      intl4 = tmp15(tmp2[14]).intl;
      items14 = [first3(Button, obj12)];
      const obj13 = {
        grow: true,
        variant: "secondary",
        text: intl5.string(primaryColor(tmp2[14]).t.yBZMsQ),
        onPress: callback9,
      };
      const Button2 = tmp15(tmp2[24]).Button;
      intl5 = tmp15(tmp2[14]).intl;
      items14[1] = first3(Button2, obj13);
      items13[4] = closure_10(Stack2, obj11);
      return first3(BottomSheet, obj2);
    };
let size = size_mod;
let result = size.fileFinishedImporting(
  "modules/guild_settings/native/GuildSettingsServerTagColorPickerActionSheet.tsx",
);

export default tmp4;
