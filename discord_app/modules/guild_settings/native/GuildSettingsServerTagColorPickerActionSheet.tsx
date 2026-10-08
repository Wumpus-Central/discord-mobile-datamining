// === Module 18093: GuildSettingsServerTagColorPickerActionSheet ===

// Module 18093 (GuildSettingsServerTagColorPickerActionSheet)
import nativeDefault from "native" /* 587 */;
import ColorUtils from "ColorUtils" /* 4927 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ColorPickerUtils from "ColorPickerUtils" /* 14665 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildTagConstants = fn(7860);
({ GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: metroRequire, GUILD_TAG_BADGE_PALETTE_PRESETS: closure_7, GuildTagBadgeSize: closure_8 } = GuildTagConstants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
let closure_12 = { leading: true, trailing: true };
const createStyles = fn(5090);
let closure_13 = createStyles.createStyles((width) => {
  const obj = { container: { paddingHorizontal: PX_16, paddingBottom: nativeDefault.space.PX_16 }, preview: null, previewChiplet: null, colorTabs: null, saturationValuePicker: null, saturationValueColorBox: null, saturationValueColorBoxInner: null, selector: null, huePicker: null, hueColorBarInner: null, hexInput: null, buttonGroup: null };
  const obj2 = { paddingHorizontal: PX_16, paddingBottom: nativeDefault.space.PX_16 };
  obj.preview = { alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  const obj3 = { alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_24, paddingVertical: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj.previewChiplet = { backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 0, columnGap: nativeDefault.space.PX_8 };
  obj.colorTabs = { alignSelf: "center", width };
  obj.saturationValuePicker = { alignSelf: "center" };
  const obj4 = { backgroundColor: "transparent", paddingHorizontal: 0, paddingVertical: 0, columnGap: nativeDefault.space.PX_8 };
  obj.saturationValueColorBox = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.saturationValueColorBoxInner = { width, minWidth: width, height: 160, minHeight: 160 };
  const size = { width: 16, height: 16, borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.unsafe_rawColors.WHITE };
  obj.selector = size;
  obj.huePicker = { alignSelf: "center" };
  obj.hueColorBarInner = { width, minWidth: width, height: 24 };
  const obj5 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.hexInput = { height: 48, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_12, textAlign: "center" };
  const obj6 = { height: 48, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.INPUT_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT, paddingHorizontal: nativeDefault.space.PX_12, textAlign: "center" };
  obj.buttonGroup = { marginTop: nativeDefault.space.PX_24 };
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagColorPickerActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsServerTagColorPickerActionSheet(secondaryColor) {
  const cResult = primaryColor(onSelectColor[10]).c(114);
  ({ tag, badge, primaryColor } = secondaryColor);
  secondaryColor = secondaryColor.secondaryColor;
  onSelectColor = secondaryColor.onSelectColor;
  const bound = Math.max(240, Math.min(secondaryColor(onSelectColor[11])().width - 2 * ref, 358));
  const tmp6 = sharedValue1(bound);
  _slicedToArray = tmp7;
  const first = first2[0];
  [first1, dependencyMap] = first.useState(primaryColor);
  let tmp12 = null;
  if (dependencyMap[badge] >= 2) {
    tmp12 = secondaryColor;
  }
  [first2, closure_8] = first.useState(tmp12);
  [first3, closure_10] = first.useState("primary");
  let obj = primaryColor(onSelectColor[10]);
  ref = first.useRef(false);
  let primary = first1;
  if (first1 == null) {
    primary = first.primary;
  }
  let hex2rgb2hsvResult = primaryColor(onSelectColor[8]).hex2rgb2hsv(primary);
  const tmpResult = primaryColor(onSelectColor[8]);
  let num;
  if (hex2rgb2hsvResult != null) {
    num = hex2rgb2hsvResult.h;
  }
  if (num == null) {
    num = 0;
  }
  const sharedValue = primaryColor(onSelectColor[12]).useSharedValue(num);
  const tmpResult7 = primaryColor(onSelectColor[12]);
  let num2;
  if (hex2rgb2hsvResult != null) {
    num2 = hex2rgb2hsvResult.s;
  }
  if (num2 == null) {
    num2 = 100;
  }
  sharedValue1 = primaryColor(onSelectColor[12]).useSharedValue(num2 / 100);
  const tmpResult8 = primaryColor(onSelectColor[12]);
  let num3;
  if (hex2rgb2hsvResult != null) {
    num3 = hex2rgb2hsvResult.v;
  }
  if (num3 == null) {
    num3 = 100;
  }
  const sharedValue2 = primaryColor(onSelectColor[12]).useSharedValue(num3 / 100);
  let str = first1;
  if (first1 == null) {
    str = first.primary;
  }
  if (cResult[0] !== str) {
    let formatted = str.toUpperCase();
    cResult[0] = str;
    cResult[1] = formatted;
    let tmp21 = formatted;
  } else {
    tmp21 = cResult[1];
  }
  [first4, closure_16] = first.useState(tmp21);
  let primary2 = first1;
  if (first1 == null) {
    primary2 = first.primary;
  }
  let tmp25 = null;
  if (dependencyMap[badge] >= 2) {
    let secondary = first2;
    if (first2 == null) {
      secondary = first.secondary;
    }
    tmp25 = secondary;
  }
  secondary = tmp25;
  if (cResult[2] === primary2) {
    if (cResult[3] === tmp25) {
      let tmp26 = cResult[4];
    }
    closure_19 = tmp26;
    if (cResult[5] === primaryColor) {
      if (cResult[6] === secondaryColor) {
        let tmp27 = cResult[7];
      }
      closure_20 = tmp27;
      const _Symbol = Symbol;
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
        let tmp28 = le;
      } else {
        tmp28 = cResult[8];
      }
      closure_21 = tmp28;
      if (cResult[9] === sharedValue) {
        if (cResult[10] === sharedValue1) {
          if (cResult[11] === sharedValue2) {
            let tmp29 = cResult[12];
          }
          closure_22 = tmp29;
          if (cResult[13] === sharedValue) {
            if (cResult[14] === sharedValue1) {
              if (cResult[15] === sharedValue2) {
                let tmp30 = cResult[16];
              }
              closure_23 = tmp30;
              if (cResult[17] !== tmp30) {
                const items = [tmp30];
                cResult[17] = tmp30;
                cResult[18] = items;
                let tmp31 = items;
              } else {
                tmp31 = cResult[18];
              }
              const tmpResult10 = tmp(tmp2[13]);
              const throttledFunction = tmpResult10.useThrottledFunction(tmp30, 32, tmp31, sharedValue);
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
                let tmp37 = he;
              } else {
                tmp37 = cResult[20];
              }
              closure_25 = tmp37;
              if (cResult[21] === first3) {
                if (cResult[22] === throttledFunction) {
                  let tmp38 = cResult[23];
                }
                if (cResult[24] !== throttledFunction) {
                  function ve() {
                    return () => throttledFunction.cancel();
                  }
                  const items1 = [throttledFunction];
                  cResult[24] = throttledFunction;
                  cResult[25] = ve;
                  cResult[26] = items1;
                  let tmp40 = items1;
                  let tmp39 = ve;
                } else {
                  tmp39 = cResult[25];
                  tmp40 = cResult[26];
                }
                const effect = obj2.useEffect(tmp39, tmp40);
                if (cResult[27] === first3) {
                  if (cResult[28] === throttledFunction) {
                    if (cResult[29] === tmp30) {
                      let tmp42 = cResult[30];
                    }
                    if (cResult[31] === first3) {
                      if (cResult[32] === throttledFunction) {
                        if (cResult[33] === tmp29) {
                          let tmp43 = cResult[34];
                        }
                        if (cResult[35] === first3) {
                          if (cResult[36] === tmp27) {
                            if (cResult[37] === throttledFunction) {
                              if (cResult[38] === tmp29) {
                                let tmp45 = cResult[39];
                              }
                              if (cResult[40] === first3) {
                                if (cResult[41] === tmp37) {
                                  if (cResult[42] === tmp26) {
                                    if (cResult[43] === throttledFunction) {
                                      if (cResult[44] === tmp29) {
                                        let tmp47 = cResult[45];
                                      }
                                      const _Symbol2 = Symbol;
                                      class Be {
                                        constructor(arg0) {
                                          str = "secondary";
                                          if (0 === secondaryColor) {
                                            str = "primary";
                                          }
                                          if (str !== closure_9) {
                                            tmp = closure_25;
                                            tmp2 = closure_25();
                                            tmp3 = closure_24;
                                            cancelResult = closure_24.cancel();
                                            tmp5 = closure_10;
                                            tmp6 = closure_10(str);
                                            tmp7 = closure_19;
                                            str2 = closure_19(str);
                                            formatted = str2.toUpperCase();
                                            tmp9 = closure_16;
                                            tmp10 = closure_16(formatted);
                                            tmp11 = closure_22;
                                            tmp12 = closure_22(formatted);
                                          }
                                          return;
                                        }
                                      }
                                      if (tmp48 === Symbol.for("react.memo_cache_sentinel")) {
                                        const obj3 = { id: "primary", label: null, page: null };
                                        class Be {
                                          constructor(arg0) {
                                            str = "secondary";
                                            if (0 === secondaryColor) {
                                              str = "primary";
                                            }
                                            if (str !== closure_9) {
                                              tmp = closure_25;
                                              tmp2 = closure_25();
                                              tmp3 = closure_24;
                                              cancelResult = closure_24.cancel();
                                              tmp5 = closure_10;
                                              tmp6 = closure_10(str);
                                              tmp7 = closure_19;
                                              str2 = closure_19(str);
                                              formatted = str2.toUpperCase();
                                              tmp9 = closure_16;
                                              tmp10 = closure_16(formatted);
                                              tmp11 = closure_22;
                                              tmp12 = closure_22(formatted);
                                            }
                                            return;
                                          }
                                        }
                                        obj3.label = tmp50(tmp(tmp2[14]).t.PHT1N2);
                                        cResult[46] = obj3;
                                        let tmp49 = obj3;
                                      } else {
                                        tmp49 = cResult[46];
                                      }
                                      const _Symbol3 = Symbol;
                                      if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                                        const items2 = [tmp49, ];
                                        class Be {
                                          constructor(arg0) {
                                            str = "secondary";
                                            if (0 === secondaryColor) {
                                              str = "primary";
                                            }
                                            if (str !== closure_9) {
                                              tmp = closure_25;
                                              tmp2 = closure_25();
                                              tmp3 = closure_24;
                                              cancelResult = closure_24.cancel();
                                              tmp5 = closure_10;
                                              tmp6 = closure_10(str);
                                              tmp7 = closure_19;
                                              str2 = closure_19(str);
                                              formatted = str2.toUpperCase();
                                              tmp9 = closure_16;
                                              tmp10 = closure_16(formatted);
                                              tmp11 = closure_22;
                                              tmp12 = closure_22(formatted);
                                            }
                                            return;
                                          }
                                        }
                                        const intl = tmp(tmp2[14]).intl;
                                        tmp52[1] = intl.string(tmp(tmp2[14]).t["9/wzjF"]);
                                        items2[1] = tmp52;
                                        cResult[47] = items2;
                                        let tmp51 = items2;
                                      } else {
                                        tmp51 = cResult[47];
                                      }
                                      if (cResult[48] === tmp47) {
                                        tmp(tmp2[15]);
                                        class Be {
                                          constructor(arg0) {
                                            str = "secondary";
                                            if (0 === secondaryColor) {
                                              str = "primary";
                                            }
                                            if (str !== closure_9) {
                                              tmp = closure_25;
                                              tmp2 = closure_25();
                                              tmp3 = closure_24;
                                              cancelResult = closure_24.cancel();
                                              tmp5 = closure_10;
                                              tmp6 = closure_10(str);
                                              tmp7 = closure_19;
                                              str2 = closure_19(str);
                                              formatted = str2.toUpperCase();
                                              tmp9 = closure_16;
                                              tmp10 = closure_16(formatted);
                                              tmp11 = closure_22;
                                              tmp12 = closure_22(formatted);
                                            }
                                            return;
                                          }
                                        }
                                        if (cResult[51] === first1) {
                                          if (cResult[52] === first2) {
                                            if (cResult[53] === tmp37) {
                                              if (cResult[54] === tmp7) {
                                                if (cResult[55] === first4) {
                                                  if (cResult[56] === onSelectColor) {
                                                    let tmp56 = cResult[57];
                                                  }
                                                  let str3 = "WUMP";
                                                  class Be {
                                                    constructor(arg0) {
                                                      str = "secondary";
                                                      if (0 === secondaryColor) {
                                                        str = "primary";
                                                      }
                                                      if (str !== closure_9) {
                                                        tmp = closure_25;
                                                        tmp2 = closure_25();
                                                        tmp3 = closure_24;
                                                        cancelResult = closure_24.cancel();
                                                        tmp5 = closure_10;
                                                        tmp6 = closure_10(str);
                                                        tmp7 = closure_19;
                                                        str2 = closure_19(str);
                                                        formatted = str2.toUpperCase();
                                                        tmp9 = closure_16;
                                                        tmp10 = closure_16(formatted);
                                                        tmp11 = closure_22;
                                                        tmp12 = closure_22(formatted);
                                                      }
                                                      return;
                                                    }
                                                  }
                                                  if ("" !== tag) {
                                                    str3 = tag;
                                                  }
                                                  if (cResult[58] !== first4) {
                                                    const hex2rgb2hsvResult1 = tmp(tmp2[8]).hex2rgb2hsv(first4);
                                                    class Be {
                                                      constructor(arg0) {
                                                        str = "secondary";
                                                        if (0 === secondaryColor) {
                                                          str = "primary";
                                                        }
                                                        if (str !== closure_9) {
                                                          tmp = closure_25;
                                                          tmp2 = closure_25();
                                                          tmp3 = closure_24;
                                                          cancelResult = closure_24.cancel();
                                                          tmp5 = closure_10;
                                                          tmp6 = closure_10(str);
                                                          tmp7 = closure_19;
                                                          str2 = closure_19(str);
                                                          formatted = str2.toUpperCase();
                                                          tmp9 = closure_16;
                                                          tmp10 = closure_16(formatted);
                                                          tmp11 = closure_22;
                                                          tmp12 = closure_22(formatted);
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    cResult[58] = first4;
                                                    cResult[59] = hex2rgb2hsvResult1;
                                                    const tmpResult12 = tmp(tmp2[8]);
                                                  }
                                                  const _Symbol4 = Symbol;
                                                  if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
                                                    const obj4 = { title: null };
                                                    class Be {
                                                      constructor(arg0) {
                                                        str = "secondary";
                                                        if (0 === secondaryColor) {
                                                          str = "primary";
                                                        }
                                                        if (str !== closure_9) {
                                                          tmp = closure_25;
                                                          tmp2 = closure_25();
                                                          tmp3 = closure_24;
                                                          cancelResult = closure_24.cancel();
                                                          tmp5 = closure_10;
                                                          tmp6 = closure_10(str);
                                                          tmp7 = closure_19;
                                                          str2 = closure_19(str);
                                                          formatted = str2.toUpperCase();
                                                          tmp9 = closure_16;
                                                          tmp10 = closure_16(formatted);
                                                          tmp11 = closure_22;
                                                          tmp12 = closure_22(formatted);
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    const intl2 = tmp(tmp2[14]).intl;
                                                    obj4.title = intl2.string(tmp(tmp2[14]).t.T1IxYH);
                                                    const tmp63 = first3(tmp62, obj4);
                                                    cResult[60] = tmp63;
                                                    let tmp60 = tmp63;
                                                  } else {
                                                    tmp60 = cResult[60];
                                                  }
                                                  if (cResult[61] !== str3) {
                                                    const intl3 = tmp(tmp2[14]).intl;
                                                    class Be {
                                                      constructor(arg0) {
                                                        str = "secondary";
                                                        if (0 === secondaryColor) {
                                                          str = "primary";
                                                        }
                                                        if (str !== closure_9) {
                                                          tmp = closure_25;
                                                          tmp2 = closure_25();
                                                          tmp3 = closure_24;
                                                          cancelResult = closure_24.cancel();
                                                          tmp5 = closure_10;
                                                          tmp6 = closure_10(str);
                                                          tmp7 = closure_19;
                                                          str2 = closure_19(str);
                                                          formatted = str2.toUpperCase();
                                                          tmp9 = closure_16;
                                                          tmp10 = closure_16(formatted);
                                                          tmp11 = closure_22;
                                                          tmp12 = closure_22(formatted);
                                                        }
                                                        return;
                                                      }
                                                    }
                                                    tmp65[0] = str3;
                                                    const formatToPlainStringResult = intl3.formatToPlainString(tmp(tmp2[14]).t.R1AXap, tmp65);
                                                    cResult[61] = str3;
                                                    cResult[62] = formatToPlainStringResult;
                                                    let tmp64 = formatToPlainStringResult;
                                                  } else {
                                                    tmp64 = cResult[62];
                                                  }
                                                  let tmp67;
                                                  if (tmp7) {
                                                    tmp67 = first2;
                                                  }
                                                  if (cResult[63] === badge) {
                                                    if (cResult[64] === first1) {
                                                      if (cResult[65] === tmp67) {
                                                        let tmp68 = cResult[66];
                                                      }
                                                      if (cResult[67] === str3) {
                                                        if (cResult[68] === tmp6.previewChiplet) {
                                                          if (cResult[69] === tmp68) {
                                                            let tmp72 = cResult[70];
                                                          }
                                                          if (cResult[71] === tmp6.preview) {
                                                            if (cResult[72] === tmp64) {
                                                              if (cResult[73] === tmp72) {
                                                                let tmp75 = cResult[74];
                                                              }
                                                              if (cResult[75] === tmp55) {
                                                                if (cResult[76] === tmp7) {
                                                                  if (cResult[77] === tmp6.colorTabs) {
                                                                    let tmp78 = cResult[78];
                                                                  }
                                                                  if (cResult[79] === tmp42) {
                                                                    if (cResult[80] === tmp38) {
                                                                      if (cResult[81] === sharedValue) {
                                                                        if (cResult[82] === sharedValue1) {
                                                                          if (cResult[83] === tmp6.hueColorBarInner) {
                                                                            if (cResult[84] === tmp6.huePicker) {
                                                                              if (cResult[85] === tmp6.saturationValueColorBox) {
                                                                                if (cResult[86] === tmp6.saturationValueColorBoxInner) {
                                                                                  if (cResult[87] === tmp6.saturationValuePicker) {
                                                                                    if (cResult[88] === tmp6.selector) {
                                                                                      if (cResult[89] === sharedValue2) {
                                                                                        let tmp83 = cResult[90];
                                                                                      }
                                                                                      const _Symbol5 = Symbol;
                                                                                      class Be {
                                                                                        constructor(arg0) {
                                                                                          str = "secondary";
                                                                                          if (0 === secondaryColor) {
                                                                                            str = "primary";
                                                                                          }
                                                                                          if (str !== closure_9) {
                                                                                            tmp = closure_25;
                                                                                            tmp2 = closure_25();
                                                                                            tmp3 = closure_24;
                                                                                            cancelResult = closure_24.cancel();
                                                                                            tmp5 = closure_10;
                                                                                            tmp6 = closure_10(str);
                                                                                            tmp7 = closure_19;
                                                                                            str2 = closure_19(str);
                                                                                            formatted = str2.toUpperCase();
                                                                                            tmp9 = closure_16;
                                                                                            tmp10 = closure_16(formatted);
                                                                                            tmp11 = closure_22;
                                                                                            tmp12 = closure_22(formatted);
                                                                                          }
                                                                                          return;
                                                                                        }
                                                                                      }
                                                                                      if (tmp85 === Symbol.for("react.memo_cache_sentinel")) {
                                                                                        const string = tmp(tmp2[14]).intl.string;
                                                                                        class Be {
                                                                                          constructor(arg0) {
                                                                                            str = "secondary";
                                                                                            if (0 === secondaryColor) {
                                                                                              str = "primary";
                                                                                            }
                                                                                            if (str !== closure_9) {
                                                                                              tmp = closure_25;
                                                                                              tmp2 = closure_25();
                                                                                              tmp3 = closure_24;
                                                                                              cancelResult = closure_24.cancel();
                                                                                              tmp5 = closure_10;
                                                                                              tmp6 = closure_10(str);
                                                                                              tmp7 = closure_19;
                                                                                              str2 = closure_19(str);
                                                                                              formatted = str2.toUpperCase();
                                                                                              tmp9 = closure_16;
                                                                                              tmp10 = closure_16(formatted);
                                                                                              tmp11 = closure_22;
                                                                                              tmp12 = closure_22(formatted);
                                                                                            }
                                                                                            return;
                                                                                          }
                                                                                        }
                                                                                        cResult[91] = tmp87;
                                                                                        let tmp86 = tmp87;
                                                                                      } else {
                                                                                        tmp86 = cResult[91];
                                                                                      }
                                                                                      if (cResult[92] === tmp43) {
                                                                                        if (cResult[93] === first4) {
                                                                                          if (cResult[94] === tmp6.hexInput) {
                                                                                            let tmp88 = cResult[95];
                                                                                          }
                                                                                          const _Symbol6 = Symbol;
                                                                                          class Be {
                                                                                            constructor(arg0) {
                                                                                              str = "secondary";
                                                                                              if (0 === secondaryColor) {
                                                                                                str = "primary";
                                                                                              }
                                                                                              if (str !== closure_9) {
                                                                                                tmp = closure_25;
                                                                                                tmp2 = closure_25();
                                                                                                tmp3 = closure_24;
                                                                                                cancelResult = closure_24.cancel();
                                                                                                tmp5 = closure_10;
                                                                                                tmp6 = closure_10(str);
                                                                                                tmp7 = closure_19;
                                                                                                str2 = closure_19(str);
                                                                                                formatted = str2.toUpperCase();
                                                                                                tmp9 = closure_16;
                                                                                                tmp10 = closure_16(formatted);
                                                                                                tmp11 = closure_22;
                                                                                                tmp12 = closure_22(formatted);
                                                                                              }
                                                                                              return;
                                                                                            }
                                                                                          }
                                                                                          if (cResult[96] === Symbol.for("react.memo_cache_sentinel")) {
                                                                                            const string2 = tmp(tmp2[14]).intl.string;
                                                                                            class Be {
                                                                                              constructor(arg0) {
                                                                                                str = "secondary";
                                                                                                if (0 === secondaryColor) {
                                                                                                  str = "primary";
                                                                                                }
                                                                                                if (str !== closure_9) {
                                                                                                  tmp = closure_25;
                                                                                                  tmp2 = closure_25();
                                                                                                  tmp3 = closure_24;
                                                                                                  cancelResult = closure_24.cancel();
                                                                                                  tmp5 = closure_10;
                                                                                                  tmp6 = closure_10(str);
                                                                                                  tmp7 = closure_19;
                                                                                                  str2 = closure_19(str);
                                                                                                  formatted = str2.toUpperCase();
                                                                                                  tmp9 = closure_16;
                                                                                                  tmp10 = closure_16(formatted);
                                                                                                  tmp11 = closure_22;
                                                                                                  tmp12 = closure_22(formatted);
                                                                                                }
                                                                                                return;
                                                                                              }
                                                                                            }
                                                                                            cResult[96] = tmp93;
                                                                                            let tmp92 = tmp93;
                                                                                          } else {
                                                                                            tmp92 = cResult[96];
                                                                                          }
                                                                                          if (cResult[97] === tmp56) {
                                                                                            if (cResult[98] === tmp59) {
                                                                                              let tmp94 = cResult[99];
                                                                                            }
                                                                                            const _Symbol7 = Symbol;
                                                                                            class Be {
                                                                                              constructor(arg0) {
                                                                                                str = "secondary";
                                                                                                if (0 === secondaryColor) {
                                                                                                  str = "primary";
                                                                                                }
                                                                                                if (str !== closure_9) {
                                                                                                  tmp = closure_25;
                                                                                                  tmp2 = closure_25();
                                                                                                  tmp3 = closure_24;
                                                                                                  cancelResult = closure_24.cancel();
                                                                                                  tmp5 = closure_10;
                                                                                                  tmp6 = closure_10(str);
                                                                                                  tmp7 = closure_19;
                                                                                                  str2 = closure_19(str);
                                                                                                  formatted = str2.toUpperCase();
                                                                                                  tmp9 = closure_16;
                                                                                                  tmp10 = closure_16(formatted);
                                                                                                  tmp11 = closure_22;
                                                                                                  tmp12 = closure_22(formatted);
                                                                                                }
                                                                                                return;
                                                                                              }
                                                                                            }
                                                                                            if (tmp97 === Symbol.for("react.memo_cache_sentinel")) {
                                                                                              const string3 = tmp(tmp2[14]).intl.string;
                                                                                              class Be {
                                                                                                constructor(arg0) {
                                                                                                  str = "secondary";
                                                                                                  if (0 === secondaryColor) {
                                                                                                    str = "primary";
                                                                                                  }
                                                                                                  if (str !== closure_9) {
                                                                                                    tmp = closure_25;
                                                                                                    tmp2 = closure_25();
                                                                                                    tmp3 = closure_24;
                                                                                                    cancelResult = closure_24.cancel();
                                                                                                    tmp5 = closure_10;
                                                                                                    tmp6 = closure_10(str);
                                                                                                    tmp7 = closure_19;
                                                                                                    str2 = closure_19(str);
                                                                                                    formatted = str2.toUpperCase();
                                                                                                    tmp9 = closure_16;
                                                                                                    tmp10 = closure_16(formatted);
                                                                                                    tmp11 = closure_22;
                                                                                                    tmp12 = closure_22(formatted);
                                                                                                  }
                                                                                                  return;
                                                                                                }
                                                                                              }
                                                                                              cResult[100] = tmp99;
                                                                                            }
                                                                                            if (cResult[101] !== tmp45) {
                                                                                              const obj5 = { grow: true, variant: "secondary", text: null, onPress: null };
                                                                                              class Be {
                                                                                                constructor(arg0) {
                                                                                                  str = "secondary";
                                                                                                  if (0 === secondaryColor) {
                                                                                                    str = "primary";
                                                                                                  }
                                                                                                  if (str !== closure_9) {
                                                                                                    tmp = closure_25;
                                                                                                    tmp2 = closure_25();
                                                                                                    tmp3 = closure_24;
                                                                                                    cancelResult = closure_24.cancel();
                                                                                                    tmp5 = closure_10;
                                                                                                    tmp6 = closure_10(str);
                                                                                                    tmp7 = closure_19;
                                                                                                    str2 = closure_19(str);
                                                                                                    formatted = str2.toUpperCase();
                                                                                                    tmp9 = closure_16;
                                                                                                    tmp10 = closure_16(formatted);
                                                                                                    tmp11 = closure_22;
                                                                                                    tmp12 = closure_22(formatted);
                                                                                                  }
                                                                                                  return;
                                                                                                }
                                                                                              }
                                                                                              obj5.onPress = tmp45;
                                                                                              const tmp102 = first3(tmp(tmp2[24]).Button, obj5);
                                                                                              cResult[101] = tmp45;
                                                                                              cResult[102] = tmp102;
                                                                                              let tmp100 = tmp102;
                                                                                            } else {
                                                                                              tmp100 = cResult[102];
                                                                                            }
                                                                                            if (cResult[103] === tmp6.buttonGroup) {
                                                                                              if (cResult[104] === tmp94) {
                                                                                                if (cResult[105] === tmp100) {
                                                                                                  let tmp103 = cResult[106];
                                                                                                }
                                                                                                if (cResult[107] === tmp6.container) {
                                                                                                  if (cResult[108] === tmp75) {
                                                                                                    if (cResult[109] === tmp78) {
                                                                                                      if (cResult[110] === tmp83) {
                                                                                                        if (cResult[111] === tmp88) {
                                                                                                          if (cResult[112] === tmp103) {
                                                                                                            let tmp106 = cResult[113];
                                                                                                          }
                                                                                                          return tmp106;
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                                class Be {
                                                                                                  constructor(arg0) {
                                                                                                    str = "secondary";
                                                                                                    if (0 === secondaryColor) {
                                                                                                      str = "primary";
                                                                                                    }
                                                                                                    if (str !== closure_9) {
                                                                                                      tmp = closure_25;
                                                                                                      tmp2 = closure_25();
                                                                                                      tmp3 = closure_24;
                                                                                                      cancelResult = closure_24.cancel();
                                                                                                      tmp5 = closure_10;
                                                                                                      tmp6 = closure_10(str);
                                                                                                      tmp7 = closure_19;
                                                                                                      str2 = closure_19(str);
                                                                                                      formatted = str2.toUpperCase();
                                                                                                      tmp9 = closure_16;
                                                                                                      tmp10 = closure_16(formatted);
                                                                                                      tmp11 = closure_22;
                                                                                                      tmp12 = closure_22(formatted);
                                                                                                    }
                                                                                                    return;
                                                                                                  }
                                                                                                }
                                                                                                const obj6 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: tmp60, children: null };
                                                                                                const obj7 = { spacing: tmp4(tmp2[5]).space.PX_8, style: tmp6.container, children: null };
                                                                                                const items3 = [tmp75, tmp78, tmp83, tmp88, tmp103];
                                                                                                obj7.children = items3;
                                                                                                obj6.children = closure_10(tmp(tmp2[25]).Stack, obj7);
                                                                                                const tmp108 = first3(tmp(tmp2[26]).BottomSheet, obj6);
                                                                                                cResult[107] = tmp6.container;
                                                                                                cResult[108] = tmp75;
                                                                                                cResult[109] = tmp78;
                                                                                                cResult[110] = tmp83;
                                                                                                cResult[111] = tmp88;
                                                                                                cResult[112] = tmp103;
                                                                                                cResult[113] = tmp108;
                                                                                                tmp106 = tmp108;
                                                                                              }
                                                                                            }
                                                                                            const obj8 = { spacing: tmp4(tmp2[5]).space.PX_8, style: tmp91, children: null };
                                                                                            const items4 = [tmp94, tmp100];
                                                                                            obj8.children = items4;
                                                                                            const tmp105 = closure_10(tmp(tmp2[25]).Stack, obj8);
                                                                                            cResult[103] = tmp6.buttonGroup;
                                                                                            cResult[104] = tmp94;
                                                                                            cResult[105] = tmp100;
                                                                                            cResult[106] = tmp105;
                                                                                            tmp103 = tmp105;
                                                                                          }
                                                                                          const obj9 = { grow: true, text: tmp92, onPress: tmp56, disabled: tmp59 };
                                                                                          const tmp96 = first3(tmp(tmp2[24]).Button, obj9);
                                                                                          cResult[97] = tmp56;
                                                                                          cResult[98] = tmp59;
                                                                                          cResult[99] = tmp96;
                                                                                          tmp94 = tmp96;
                                                                                        }
                                                                                      }
                                                                                      const obj10 = { accessibilityLabel: tmp86, value: first4, onChangeText: tmp43, maxLength: 7, autoCapitalize: "characters", autoCorrect: false, style: tmp6.hexInput };
                                                                                      const tmp90 = first3(tmp(tmp2[23]).BottomSheetTextInput, obj10);
                                                                                      cResult[92] = tmp43;
                                                                                      cResult[93] = first4;
                                                                                      cResult[94] = tmp6.hexInput;
                                                                                      cResult[95] = tmp90;
                                                                                      tmp88 = tmp90;
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                  class Be {
                                                                    constructor(arg0) {
                                                                      str = "secondary";
                                                                      if (0 === secondaryColor) {
                                                                        str = "primary";
                                                                      }
                                                                      if (str !== closure_9) {
                                                                        tmp = closure_25;
                                                                        tmp2 = closure_25();
                                                                        tmp3 = closure_24;
                                                                        cancelResult = closure_24.cancel();
                                                                        tmp5 = closure_10;
                                                                        tmp6 = closure_10(str);
                                                                        tmp7 = closure_19;
                                                                        str2 = closure_19(str);
                                                                        formatted = str2.toUpperCase();
                                                                        tmp9 = closure_16;
                                                                        tmp10 = closure_16(formatted);
                                                                        tmp11 = closure_22;
                                                                        tmp12 = closure_22(formatted);
                                                                      }
                                                                      return;
                                                                    }
                                                                  }
                                                                  const obj11 = { hue: sharedValue, saturation: sharedValue1, value: sharedValue2, saturationValuePickerStyle: null, saturationValueColorBoxStyle: null, saturationValueColorBoxInnerStyle: null, saturationValueSelectorStyle: null, huePickerStyle: null, hueColorBarInnerStyle: null, hueSliderStyle: null, onPanUpdate: null, onPanFinalize: null };
                                                                  ({ saturationValuePicker: obj16.saturationValuePickerStyle, saturationValueColorBox: obj16.saturationValueColorBoxStyle, saturationValueColorBoxInner: obj16.saturationValueColorBoxInnerStyle, selector: obj16.saturationValueSelectorStyle, huePicker: obj16.huePickerStyle, hueColorBarInner: obj16.hueColorBarInnerStyle, selector: obj16.hueSliderStyle } = tmp6);
                                                                  obj11.onPanUpdate = tmp38;
                                                                  obj11.onPanFinalize = tmp42;
                                                                  const tmp84 = first3(tmp4(tmp2[22]), obj11);
                                                                  cResult[79] = tmp42;
                                                                  cResult[80] = tmp38;
                                                                  cResult[81] = sharedValue;
                                                                  cResult[82] = sharedValue1;
                                                                  cResult[83] = tmp6.hueColorBarInner;
                                                                  cResult[84] = tmp6.huePicker;
                                                                  cResult[85] = tmp6.saturationValueColorBox;
                                                                  cResult[86] = tmp6.saturationValueColorBoxInner;
                                                                  cResult[87] = tmp6.saturationValuePicker;
                                                                  cResult[88] = tmp6.selector;
                                                                  cResult[89] = sharedValue2;
                                                                  cResult[90] = tmp84;
                                                                  tmp83 = tmp84;
                                                                }
                                                              }
                                                              class Be {
                                                                constructor(arg0) {
                                                                  str = "secondary";
                                                                  if (0 === secondaryColor) {
                                                                    str = "primary";
                                                                  }
                                                                  if (str !== closure_9) {
                                                                    tmp = closure_25;
                                                                    tmp2 = closure_25();
                                                                    tmp3 = closure_24;
                                                                    cancelResult = closure_24.cancel();
                                                                    tmp5 = closure_10;
                                                                    tmp6 = closure_10(str);
                                                                    tmp7 = closure_19;
                                                                    str2 = closure_19(str);
                                                                    formatted = str2.toUpperCase();
                                                                    tmp9 = closure_16;
                                                                    tmp10 = closure_16(formatted);
                                                                    tmp11 = closure_22;
                                                                    tmp12 = closure_22(formatted);
                                                                  }
                                                                  return;
                                                                }
                                                              }
                                                              if (tmp7) {
                                                                class Be {
                                                                  constructor(arg0) {
                                                                    str = "secondary";
                                                                    if (0 === secondaryColor) {
                                                                      str = "primary";
                                                                    }
                                                                    if (str !== closure_9) {
                                                                      tmp = closure_25;
                                                                      tmp2 = closure_25();
                                                                      tmp3 = closure_24;
                                                                      cancelResult = closure_24.cancel();
                                                                      tmp5 = closure_10;
                                                                      tmp6 = closure_10(str);
                                                                      tmp7 = closure_19;
                                                                      str2 = closure_19(str);
                                                                      formatted = str2.toUpperCase();
                                                                      tmp9 = closure_16;
                                                                      tmp10 = closure_16(formatted);
                                                                      tmp11 = closure_22;
                                                                      tmp12 = closure_22(formatted);
                                                                    }
                                                                    return;
                                                                  }
                                                                }
                                                                tmp82[0] = tmp6.colorTabs;
                                                                const obj13 = { state: tmp55, variant: "experimental_Large", keyboardShouldPersistTaps: "handled" };
                                                                tmp82[1] = first3(tmp(tmp2[21]).SegmentedControl, obj13);
                                                                const tmp79 = first3(first1, tmp82);
                                                              }
                                                              cResult[75] = tmp55;
                                                              cResult[76] = tmp7;
                                                              cResult[77] = tmp6.colorTabs;
                                                              cResult[78] = tmp79;
                                                              tmp78 = tmp79;
                                                            }
                                                          }
                                                          class Be {
                                                            constructor(arg0) {
                                                              str = "secondary";
                                                              if (0 === secondaryColor) {
                                                                str = "primary";
                                                              }
                                                              if (str !== closure_9) {
                                                                tmp = closure_25;
                                                                tmp2 = closure_25();
                                                                tmp3 = closure_24;
                                                                cancelResult = closure_24.cancel();
                                                                tmp5 = closure_10;
                                                                tmp6 = closure_10(str);
                                                                tmp7 = closure_19;
                                                                str2 = closure_19(str);
                                                                formatted = str2.toUpperCase();
                                                                tmp9 = closure_16;
                                                                tmp10 = closure_16(formatted);
                                                                tmp11 = closure_22;
                                                                tmp12 = closure_22(formatted);
                                                              }
                                                              return;
                                                            }
                                                          }
                                                          const obj14 = { accessible: true, accessibilityLabel: tmp64, style: tmp6.preview, children: tmp72 };
                                                          const tmp77 = first3(first1, obj14);
                                                          cResult[71] = tmp6.preview;
                                                          cResult[72] = tmp64;
                                                          cResult[73] = tmp72;
                                                          cResult[74] = tmp77;
                                                          tmp75 = tmp77;
                                                        }
                                                      }
                                                      class Be {
                                                        constructor(arg0) {
                                                          str = "secondary";
                                                          if (0 === secondaryColor) {
                                                            str = "primary";
                                                          }
                                                          if (str !== closure_9) {
                                                            tmp = closure_25;
                                                            tmp2 = closure_25();
                                                            tmp3 = closure_24;
                                                            cancelResult = closure_24.cancel();
                                                            tmp5 = closure_10;
                                                            tmp6 = closure_10(str);
                                                            tmp7 = closure_19;
                                                            str2 = closure_19(str);
                                                            formatted = str2.toUpperCase();
                                                            tmp9 = closure_16;
                                                            tmp10 = closure_16(formatted);
                                                            tmp11 = closure_22;
                                                            tmp12 = closure_22(formatted);
                                                          }
                                                          return;
                                                        }
                                                      }
                                                      const obj15 = { guildTag: str3, guildBadge: tmp68, textVariant: "heading-xxl/semibold", textStyle: tmp(tmp2[20]).TextStyleSheet["heading-xxl/semibold"], badgeSize: closure_8.SIZE_36, containerStyles: tmp6.previewChiplet };
                                                      const tmp74 = first3(tmp(tmp2[19]).BaseGuildTagChiplet, obj15);
                                                      cResult[67] = str3;
                                                      cResult[68] = tmp6.previewChiplet;
                                                      cResult[69] = tmp68;
                                                      cResult[70] = tmp74;
                                                      tmp72 = tmp74;
                                                    }
                                                  }
                                                  const size = { badge, width: null, height: null, primaryTintColor: null, secondaryTintColor: null };
                                                  ({ SIZE_36: obj12.width, SIZE_36: obj12.height } = closure_8);
                                                  size.primaryTintColor = first1;
                                                  size.secondaryTintColor = tmp67;
                                                  const tmp71 = first3(tmp(tmp2[18]).GuildBadge, size);
                                                  cResult[63] = badge;
                                                  cResult[64] = first1;
                                                  cResult[65] = tmp67;
                                                  cResult[66] = tmp71;
                                                  tmp68 = tmp71;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        function we() {
                                          if (null != obj.hex2rgb2hsv(first4)) {
                                            const tmp13 = closure_25();
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
                                            ActionSheetActionCreatorsDefault.hideActionSheet();
                                          }
                                          obj = ColorUtils;
                                        }
                                        cResult[51] = first1;
                                        cResult[52] = first2;
                                        cResult[53] = tmp37;
                                        cResult[54] = tmp7;
                                        cResult[55] = first4;
                                        cResult[56] = onSelectColor;
                                        cResult[57] = we;
                                        tmp56 = we;
                                      }
                                      const obj17 = { items: tmp51, pageWidth: bound, onSetActiveIndex: tmp47 };
                                      cResult[48] = tmp47;
                                      cResult[49] = bound;
                                      cResult[50] = obj17;
                                    }
                                  }
                                }
                              }
                              class Be {
                                constructor(arg0) {
                                  str = "secondary";
                                  if (0 === secondaryColor) {
                                    str = "primary";
                                  }
                                  if (str !== closure_9) {
                                    tmp = closure_25;
                                    tmp2 = closure_25();
                                    tmp3 = closure_24;
                                    cancelResult = closure_24.cancel();
                                    tmp5 = closure_10;
                                    tmp6 = closure_10(str);
                                    tmp7 = closure_19;
                                    str2 = closure_19(str);
                                    formatted = str2.toUpperCase();
                                    tmp9 = closure_16;
                                    tmp10 = closure_16(formatted);
                                    tmp11 = closure_22;
                                    tmp12 = closure_22(formatted);
                                  }
                                  return;
                                }
                              }
                              cResult[40] = first3;
                              cResult[41] = tmp37;
                              cResult[42] = tmp26;
                              cResult[43] = throttledFunction;
                              cResult[44] = tmp29;
                              cResult[45] = Be;
                              tmp47 = Be;
                            }
                          }
                        }
                        cResult[35] = first3;
                        cResult[36] = tmp27;
                        cResult[37] = throttledFunction;
                        cResult[38] = tmp29;
                        cResult[39] = tmp46;
                        tmp45 = tmp46;
                      }
                    }
                    cResult[31] = first3;
                    cResult[32] = throttledFunction;
                    cResult[33] = tmp29;
                    cResult[34] = tmp44;
                    tmp43 = tmp44;
                  }
                }
                function me() {
                  throttledFunction.cancel();
                  closure_11.current = false;
                  closure_23(first3);
                }
                cResult[27] = first3;
                cResult[28] = throttledFunction;
                cResult[29] = tmp30;
                cResult[30] = me;
                tmp42 = me;
              }
              function ge() {
                closure_11.current = true;
                throttledFunction(first3);
              }
              cResult[21] = first3;
              cResult[22] = throttledFunction;
              cResult[23] = ge;
              tmp38 = ge;
            }
          }
          function se(colorChannel) {
            value = sharedValue.get();
            value3 = sharedValue1.get();
            const value4 = sharedValue2.get();
            const hsvToRgbWorkletResult = ColorPickerUtils.hsvToRgbWorklet({ h: value, s: value3, v: value4 });
            const formatted = ColorUtils.rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]).toUpperCase();
            closure_16(formatted);
            closure_21(colorChannel, formatted);
            return { colorChannel, hex: formatted };
          }
          cResult[13] = sharedValue;
          cResult[14] = sharedValue1;
          cResult[15] = sharedValue2;
          cResult[16] = se;
          tmp30 = se;
        }
      }
      function oe(first4) {
        const hex2rgb2hsvResult = ColorUtils.hex2rgb2hsv(first4);
        if (null != hex2rgb2hsvResult) {
          const result = sharedValue.set(hex2rgb2hsvResult.h);
          const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
          const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
        }
      }
      cResult[9] = sharedValue;
      cResult[10] = sharedValue1;
      cResult[11] = sharedValue2;
      cResult[12] = oe;
      tmp29 = oe;
    }
    function te(arg0) {
      return "primary" === arg0 ? primaryColor : secondaryColor;
    }
    cResult[5] = primaryColor;
    cResult[6] = secondaryColor;
    cResult[7] = te;
    tmp27 = te;
  }
  class Q {
    constructor(arg0) {
      if ("primary" === secondaryColor) {
        tmp = primary;
      } else {
        tmp = secondary;
        tmp2 = null;
        if (secondary == null) {
          tmp = primary;
        }
      }
      return tmp;
    }
  }
  cResult[2] = primary2;
  cResult[3] = tmp25;
  cResult[4] = Q;
  tmp26 = Q;
}) : (function GuildSettingsServerTagColorPickerActionSheet(secondaryColor) {
  ({ tag, badge, primaryColor } = secondaryColor);
  secondaryColor = secondaryColor.secondaryColor;
  const onSelectColor = secondaryColor.onSelectColor;
  first1 = undefined;
  dependencyMap = undefined;
  first2 = undefined;
  closure_8 = undefined;
  first3 = undefined;
  closure_10 = undefined;
  let ref;
  let sharedValue;
  let sharedValue1;
  let sharedValue2;
  first4 = undefined;
  closure_16 = undefined;
  let primary2;
  let secondary;
  let callback;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  let throttledFunction;
  let callback5;
  const bound = Math.max(240, Math.min(secondaryColor(onSelectColor[11])().width - 2 * ref, 358));
  const tmp4 = sharedValue1(bound);
  _slicedToArray = tmp5;
  const first = first2[0];
  [first1, dependencyMap] = first.useState(primaryColor);
  let tmp10 = null;
  if (dependencyMap[badge] >= 2) {
    tmp10 = secondaryColor;
  }
  [first2, closure_8] = first.useState(tmp10);
  [first3, closure_10] = first.useState("primary");
  ref = obj.useRef(false);
  let primary = first1;
  if (first1 == null) {
    primary = first.primary;
  }
  let hex2rgb2hsvResult = primaryColor(onSelectColor[8]).hex2rgb2hsv(primary);
  let obj2 = primaryColor(onSelectColor[8]);
  let num;
  if (hex2rgb2hsvResult != null) {
    num = hex2rgb2hsvResult.h;
  }
  if (num == null) {
    num = 0;
  }
  sharedValue = primaryColor(onSelectColor[12]).useSharedValue(num);
  const tmp15Result = primaryColor(onSelectColor[12]);
  let num2;
  if (hex2rgb2hsvResult != null) {
    num2 = hex2rgb2hsvResult.s;
  }
  if (num2 == null) {
    num2 = 100;
  }
  sharedValue1 = primaryColor(onSelectColor[12]).useSharedValue(num2 / 100);
  const tmp15Result6 = primaryColor(onSelectColor[12]);
  let num3;
  if (hex2rgb2hsvResult != null) {
    num3 = hex2rgb2hsvResult.v;
  }
  if (num3 == null) {
    num3 = 100;
  }
  sharedValue2 = primaryColor(onSelectColor[12]).useSharedValue(num3 / 100);
  let str = first1;
  if (first1 == null) {
    str = first.primary;
  }
  [first4, closure_16] = first.useState(str.toUpperCase());
  primary2 = first1;
  if (first1 == null) {
    primary2 = first.primary;
  }
  let tmp22 = null;
  if (dependencyMap[badge] >= 2) {
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
      closure_6(formatted);
    } else {
      closure_8(formatted);
    }
  }, []);
  const items2 = [sharedValue, sharedValue1, sharedValue2];
  callback3 = obj.useCallback((first4) => {
    const hex2rgb2hsvResult = ColorUtils.hex2rgb2hsv(first4);
    if (null != hex2rgb2hsvResult) {
      const result = sharedValue.set(hex2rgb2hsvResult.h);
      const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
      const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
    }
  }, items2);
  const items3 = [sharedValue, sharedValue1, callback2, sharedValue2];
  callback4 = obj.useCallback((colorChannel) => {
    value = sharedValue.get();
    value3 = sharedValue1.get();
    const value4 = sharedValue2.get();
    const hsvToRgbWorkletResult = ColorPickerUtils.hsvToRgbWorklet({ h: value, s: value3, v: value4 });
    const formatted = ColorUtils.rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]).toUpperCase();
    closure_16(formatted);
    callback2(colorChannel, formatted);
    return { colorChannel, hex: formatted };
  }, items3);
  const tmp15Result7 = primaryColor(onSelectColor[12]);
  const items4 = [callback4];
  throttledFunction = primaryColor(onSelectColor[13]).useThrottledFunction(callback4, 32, items4, sharedValue);
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
  const effect = obj.useEffect(() => () => throttledFunction.cancel(), items7);
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
      closure_16(combined);
      if (null != obj.hex2rgb2hsv(combined)) {
        callback2(first3, combined);
        callback3(combined);
      }
      obj = ColorUtils;
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
      const formatted = callback(str).toUpperCase();
      closure_16(formatted);
      callback3(formatted);
      const str2 = callback(str);
    }
  }, items11);
  const memo = obj.useMemo(() => {
    const obj = { id: "primary", label: null, page: null };
    const intl = primaryColor(onSelectColor[14]).intl;
    obj.label = intl.string(primaryColor(onSelectColor[14]).t.PHT1N2);
    const items = [obj, ];
    const obj2 = { id: "secondary", label: null, page: null };
    const intl2 = primaryColor(onSelectColor[14]).intl;
    obj2.label = intl2.string(primaryColor(onSelectColor[14]).t["9/wzjF"]);
    items[1] = obj2;
    return items;
  }, []);
  const tmp15Result8 = primaryColor(onSelectColor[13]);
  const items12 = [first1, first2, callback5, dependencyMap[badge] >= 2, first4, onSelectColor];
  const segmentedControlState = primaryColor(onSelectColor[15]).useSegmentedControlState({ items: memo, pageWidth: bound, onSetActiveIndex: callback10 });
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
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    obj = ColorUtils;
  }, items12);
  if ("" !== tag) {
    str2 = tag;
  }
  const tmp15Result9 = primaryColor(onSelectColor[15]);
  const tmp15Result10 = primaryColor(onSelectColor[8]);
  const obj3 = { startExpanded: true, keyboardShouldPersistTaps: "handled", header: null, children: null };
  const obj4 = { title: null };
  let intl = tmp15(tmp2[14]).intl;
  obj4.title = intl.string(primaryColor(onSelectColor[14]).t.T1IxYH);
  obj3.header = first3(primaryColor(onSelectColor[17]).BottomSheetTitleHeader, obj4);
  const obj5 = { spacing: secondaryColor(onSelectColor[5]).space.PX_8, style: tmp4.container, children: null };
  const obj6 = { accessible: true, accessibilityLabel: null, style: null, children: null };
  let intl2 = tmp15(tmp2[14]).intl;
  obj6.accessibilityLabel = intl2.formatToPlainString(primaryColor(onSelectColor[14]).t.R1AXap, { tag: str2 });
  obj6.style = tmp4.preview;
  const obj7 = { guildTag: str2, guildBadge: null, textVariant: "heading-xxl/semibold", textStyle: null, badgeSize: null, containerStyles: null };
  const size = { badge, width: closure_8.SIZE_36, height: closure_8.SIZE_36, primaryTintColor: first1, secondaryTintColor: null };
  let tmp44;
  if (dependencyMap[badge] >= 2) {
    tmp44 = first2;
  }
  size.secondaryTintColor = tmp44;
  obj7.guildBadge = first3(primaryColor(onSelectColor[18]).GuildBadge, size);
  obj7.textStyle = primaryColor(onSelectColor[20]).TextStyleSheet["heading-xxl/semibold"];
  obj7.badgeSize = closure_8.SIZE_36;
  obj7.containerStyles = tmp4.previewChiplet;
  obj6.children = first3(primaryColor(onSelectColor[19]).BaseGuildTagChiplet, obj7);
  const items13 = [first3(first1, obj6), , , , ];
  let tmp40Result = null;
  if (dependencyMap[badge] >= 2) {
    const obj8 = { style: tmp4.colorTabs, children: null };
    const obj9 = { state: segmentedControlState, variant: "experimental_Large", keyboardShouldPersistTaps: "handled" };
    obj8.children = tmp40(tmp15(tmp2[21]).SegmentedControl, obj9);
    tmp40Result = tmp40(tmp42, obj8);
  }
  items13[1] = tmp40Result;
  items13[2] = first3(secondaryColor(onSelectColor[22]), { hue: sharedValue, saturation: sharedValue1, value: sharedValue2, saturationValuePickerStyle: tmp4.saturationValuePicker, saturationValueColorBoxStyle: tmp4.saturationValueColorBox, saturationValueColorBoxInnerStyle: tmp4.saturationValueColorBoxInner, saturationValueSelectorStyle: tmp4.selector, huePickerStyle: tmp4.huePicker, hueColorBarInnerStyle: tmp4.hueColorBarInner, hueSliderStyle: tmp4.selector, onPanUpdate: callback6, onPanFinalize: callback7 });
  const obj11 = { accessibilityLabel: null, value: null, onChangeText: null, maxLength: 7, autoCapitalize: "characters", autoCorrect: false, style: null };
  const intl3 = tmp15(tmp2[14]).intl;
  obj11.accessibilityLabel = intl3.string(primaryColor(onSelectColor[14]).t["ozfa/h"]);
  obj11.value = first4;
  obj11.onChangeText = callback8;
  obj11.style = tmp4.hexInput;
  items13[3] = first3(primaryColor(onSelectColor[23]).BottomSheetTextInput, obj11);
  const obj12 = { spacing: secondaryColor(onSelectColor[5]).space.PX_8, style: tmp4.buttonGroup, children: null };
  const obj13 = { grow: true, text: null, onPress: null, disabled: null };
  const intl4 = tmp15(tmp2[14]).intl;
  obj13.text = intl4.string(primaryColor(onSelectColor[14]).t["R3BPH+"]);
  obj13.onPress = callback11;
  obj13.disabled = null == primaryColor(onSelectColor[8]).hex2rgb2hsv(first4);
  const items14 = [first3(primaryColor(onSelectColor[24]).Button, obj13), ];
  const obj14 = { grow: true, variant: "secondary", text: null, onPress: null };
  const intl5 = tmp15(tmp2[14]).intl;
  obj14.text = intl5.string(primaryColor(onSelectColor[14]).t.yBZMsQ);
  obj14.onPress = callback9;
  items14[1] = first3(primaryColor(onSelectColor[24]).Button, obj14);
  obj12.children = items14;
  items13[4] = closure_10(primaryColor(onSelectColor[25]).Stack, obj12);
  obj5.children = items13;
  obj3.children = closure_10(primaryColor(onSelectColor[25]).Stack, obj5);
  return first3(primaryColor(onSelectColor[26]).BottomSheet, obj3);
});