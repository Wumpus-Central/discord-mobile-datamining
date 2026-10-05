// === Module 14422: CustomColorPickerActionSheet ===

// Module 14422 (CustomColorPickerActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ColorUtils from "ColorUtils" /* 4727 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import ColorPickerUtils from "ColorPickerUtils" /* 14424 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, closure_7, closure_8, dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let c8 = "#000000";
let createStyles = createStyles_mod;
let obj = { container: obj2, suggestedColor: obj3, suggestedColorsContainer: { flexDirection: "row", justifyContent: "center" } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { minWidth: 32, height: 32, borderRadius: nativeDefault.radii.xs };
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((color) => {
  let onSelect;
  let suggestedColor;
  let suggestedColors;
  let obj = onSelect(576);
  const cResult = obj.c(12);
  ({ suggestedColors, onSelect } = color);
  color = color.color;
  const tmp2 = closure_9();
  dependencyMap = tmp2;
  if (null != suggestedColors) {
    if (0 !== suggestedColors.length) {
      let tmp3;
      if (cResult[0] === color) {
        if (cResult[1] === onSelect) {
          if (cResult[2] === tmp2.suggestedColor) {
            if (cResult[3] === suggestedColors) {
              tmp3 = cResult[4];
            }
            if (cResult[9] === tmp2.suggestedColorsContainer) {
              let tmp6;
              if (cResult[10] === tmp3) {
                tmp6 = cResult[11];
              }
              return tmp6;
            }
            const obj2 = { style: tmp10, children: tmp3 };
            const tmp9 = closure_6(View, obj2);
            cResult[9] = tmp2.suggestedColorsContainer;
            cResult[10] = tmp3;
            cResult[11] = tmp9;
            tmp6 = tmp9;
          }
        }
      }
      if (cResult[5] === color) {
        if (cResult[6] === onSelect) {
          let tmp4;
          if (cResult[7] === tmp2.suggestedColor) {
            tmp4 = cResult[8];
          }
          const mapped = suggestedColors.map(tmp4);
          cResult[0] = color;
          cResult[1] = onSelect;
          cResult[2] = tmp2.suggestedColor;
          cResult[3] = suggestedColors;
          cResult[4] = mapped;
          tmp3 = mapped;
        }
      }
      const fn = function v(color, arg1) {
        let closure_0 = color;
        const obj = {
          color,
          style: suggestedColor.suggestedColor,
          selected: color === color,
          onSelect() {
            if (null != onSelect) {
              tmp(color);
            }
          }
        };
        const tmp = color(suggestedColor[8]);
        return closure_1_6(tmp, obj, "" + color + "-" + arg1);
      };
      cResult[5] = color;
      cResult[6] = onSelect;
      cResult[7] = tmp2.suggestedColor;
      cResult[8] = fn;
      tmp4 = fn;
    }
  }
  return null;
}) : ((arg0) => {
  let suggestedColors;
  ({ suggestedColors, onSelect: require, color: importDefault } = arg0);
  let tmp = closure_9();
  const suggestedColor = tmp;
  let tmp2 = null;
  if (null != suggestedColors) {
    tmp2 = null;
    if (0 !== suggestedColors.length) {
      let obj = {
        style: tmp.suggestedColorsContainer,
        children: suggestedColors.map((color, index) => {
              let closure_0 = color;
              const obj = {
                color,
                style: suggestedColor.suggestedColor,
                selected: color === importDefault,
                onSelect() {
                  if (null != require) {
                    tmp(color);
                  }
                }
              };
              const tmp = require("ColorBlock");
              return closure_1_6(tmp, obj, "" + color + "-" + index);
            })
      };
      tmp2 = closure_6(View, obj);
    }
  }
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let actionButtonVariant;
  let closure_2;
  let closure_3;
  let color;
  let combined;
  let flag;
  let h;
  let items;
  let obj8;
  let onSelect;
  let s;
  let sharedValue;
  let suggestedColors;
  let tmp14;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp32;
  let tmp5;
  let v;
  let value;
  let obj = onSelect(576);
  const cResult = obj.c(86);
  ({ color, onSelect } = arg0);
  ({ suggestedColors, actionButtonVariant } = arg0);
  let str = "secondary";
  if (undefined !== actionButtonVariant) {
    str = actionButtonVariant;
  }
  const tmp4 = closure_9();
  if (cResult[0] !== color) {
    const tmpResult = onSelect(1103);
    const int2hexResult = tmpResult.int2hex(color);
    cResult[0] = color;
    cResult[1] = int2hexResult;
    tmp5 = int2hexResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult9 = onSelect(1103);
  let int2hsvResult = tmpResult9.int2hsv(color);
  ({ h, s, v } = int2hsvResult);
  [value, dependencyMap] = sharedValue.useState(tmp5);
  if (null != value) {
    try {
      let tmp15;
      if (cResult[3] !== value) {
        const tmpResult10 = onSelect(1103);
        const hex2intResult = tmpResult10.hex2int(value);
        tmp15 = hex2intResult;
        cResult[3] = value;
        cResult[4] = hex2intResult;
      } else {
        tmp15 = cResult[4];
      }
      tmp14 = tmp15;
    } catch (err) {
      let tmp18;
      const _Symbol2 = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult11 = onSelect(1103);
        const hex2intResult1 = tmpResult11.hex2int(closure_8);
        cResult[5] = hex2intResult1;
        tmp18 = hex2intResult1;
      } else {
        tmp18 = cResult[5];
      }
      tmp14 = tmp18;
    }
  } else {
    let tmp11;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmpResult12 = onSelect(1103);
      const hex2intResult2 = tmpResult12.hex2int(closure_8);
      cResult[2] = hex2intResult2;
      tmp11 = hex2intResult2;
    } else {
      tmp11 = cResult[2];
    }
    tmp14 = tmp11;
  }
  _slicedToArray = tmp14;
  const tmpResult13 = onSelect(4612);
  sharedValue = tmpResult13.useSharedValue(h);
  const tmpResult14 = onSelect(4612);
  const sharedValue1 = tmpResult14.useSharedValue(s);
  const tmpResult15 = onSelect(4612);
  const sharedValue2 = tmpResult15.useSharedValue(v);
  if (cResult[6] === str) {
    if (cResult[7] === color) {
      if (cResult[8] === sharedValue) {
        if (cResult[9] === value) {
          if (cResult[10] === tmp14) {
            if (cResult[11] === onSelect) {
              if (cResult[12] === sharedValue1) {
                if (cResult[13] === tmp4.container) {
                  if (cResult[14] === suggestedColors) {
                    if (cResult[15] === sharedValue2) {
                      tmp21 = cResult[16];
                      tmp22 = cResult[17];
                      tmp23 = cResult[18];
                      tmp24 = cResult[19];
                      tmp25 = cResult[20];
                      tmp26 = cResult[21];
                      tmp27 = cResult[22];
                      tmp28 = cResult[23];
                      tmp29 = cResult[24];
                      flag = cResult[25];
                      tmp30 = cResult[26];
                    }
                    if (cResult[58] === sharedValue) {
                      if (cResult[59] === value) {
                        if (cResult[60] === tmp14) {
                          if (cResult[61] === sharedValue1) {
                            let tmp54;
                            if (cResult[62] === sharedValue2) {
                              tmp54 = cResult[63];
                            }
                            if (cResult[64] === tmp21) {
                              if (cResult[65] === tmp25) {
                                if (cResult[66] === tmp54) {
                                  let tmp59;
                                  if (cResult[67] === tmp26) {
                                    tmp59 = cResult[68];
                                  }
                                  if (cResult[69] === sharedValue) {
                                    if (cResult[70] === tmp24) {
                                      if (cResult[71] === sharedValue1) {
                                        let tmp62;
                                        if (cResult[72] === sharedValue2) {
                                          tmp62 = cResult[73];
                                        }
                                        if (cResult[74] === tmp22) {
                                          if (cResult[75] === tmp59) {
                                            if (cResult[76] === tmp62) {
                                              if (cResult[77] === tmp27) {
                                                let tmp66;
                                                if (cResult[78] === tmp28) {
                                                  tmp66 = cResult[79];
                                                }
                                                if (cResult[80] === tmp23) {
                                                  if (cResult[81] === tmp66) {
                                                    if (cResult[82] === tmp29) {
                                                      if (cResult[83] === flag) {
                                                        let tmp69;
                                                        if (cResult[84] === tmp30) {
                                                          tmp69 = cResult[85];
                                                        }
                                                        return tmp69;
                                                      }
                                                    }
                                                  }
                                                }
                                                let obj2 = { onDismiss: tmp29, startExpanded: flag, header: tmp30, children: tmp66 };
                                                const tmp71 = sharedValue2(tmp23, obj2);
                                                cResult[80] = tmp23;
                                                cResult[81] = tmp66;
                                                cResult[82] = tmp29;
                                                cResult[83] = flag;
                                                cResult[84] = tmp30;
                                                cResult[85] = tmp71;
                                                tmp69 = tmp71;
                                              }
                                            }
                                          }
                                        }
                                        const obj3 = { style: tmp27, children: items };
                                        items = [tmp28, tmp59, tmp62];
                                        const tmp68 = closure_7(tmp22, obj3);
                                        cResult[74] = tmp22;
                                        cResult[75] = tmp59;
                                        cResult[76] = tmp62;
                                        cResult[77] = tmp27;
                                        cResult[78] = tmp28;
                                        cResult[79] = tmp68;
                                        tmp66 = tmp68;
                                      }
                                    }
                                  }
                                  const obj4 = { hue: sharedValue, saturation: sharedValue1, value: sharedValue2, onPanFinalize: tmp24 };
                                  const tmp65 = sharedValue2(value(14425), obj4);
                                  cResult[69] = sharedValue;
                                  cResult[70] = tmp24;
                                  cResult[71] = sharedValue1;
                                  cResult[72] = sharedValue2;
                                  cResult[73] = tmp65;
                                  tmp62 = tmp65;
                                }
                              }
                            }
                            const obj5 = { suggestedColors: tmp26, onSelect: tmp25, color: tmp54 };
                            const tmp61 = sharedValue2(tmp21, obj5);
                            cResult[64] = tmp21;
                            cResult[65] = tmp25;
                            cResult[66] = tmp54;
                            cResult[67] = tmp26;
                            cResult[68] = tmp61;
                            tmp59 = tmp61;
                          }
                        }
                      }
                    }
                    let hsv2intResult = tmp14;
                    if (null == value) {
                      const hsv2int = onSelect(1103).hsv2int;
                      onSelect(1103);
                      value = sharedValue.get();
                      let value2 = sharedValue1.get();
                      hsv2intResult = hsv2int(value, value2, sharedValue2.get());
                    }
                    cResult[58] = sharedValue;
                    cResult[59] = value;
                    cResult[60] = tmp14;
                    cResult[61] = sharedValue1;
                    cResult[62] = sharedValue2;
                    cResult[63] = hsv2intResult;
                    tmp54 = hsv2intResult;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (suggestedColors != null) {
    const mapped = suggestedColors.map((item) => {
      const obj = onSelect(closure_2[9]);
      return obj.hex2int(item);
    });
    combined = mapped.concat(color);
  }
  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
    function te(h) {
      const obj = ColorPickerUtils;
      const hsvToRgbWorkletResult = obj.hsvToRgbWorklet(h);
      const obj2 = ColorUtils;
      closure_2(obj2.rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]));
    }
    cResult[27] = te;
    tmp32 = te;
  } else {
    tmp32 = cResult[27];
  }
  closure_7 = tmp32;
  if (cResult[28] === sharedValue) {
    if (cResult[29] === sharedValue1) {
      let tmp33;
      if (cResult[30] === sharedValue2) {
        tmp33 = cResult[31];
      }
      if (cResult[32] === sharedValue) {
        if (cResult[33] === value) {
          if (cResult[34] === tmp14) {
            if (cResult[35] === onSelect) {
              if (cResult[36] === sharedValue1) {
                let tmp34;
                let tmp35;
                if (cResult[37] === sharedValue2) {
                  tmp34 = cResult[38];
                }
                closure_8 = tmp34;
                if (cResult[39] !== tmp34) {
                  function le() {
                    closure_8();
                    const obj = ActionSheetActionCreatorsDefault;
                    obj.hideActionSheet();
                  }
                  cResult[39] = tmp34;
                  cResult[40] = le;
                  tmp35 = le;
                } else {
                  tmp35 = cResult[40];
                }
                if (cResult[41] === sharedValue) {
                  if (cResult[42] === sharedValue1) {
                    let tmp36;
                    if (cResult[43] === sharedValue2) {
                      tmp36 = cResult[44];
                    }
                    if (cResult[45] === sharedValue) {
                      if (cResult[46] === sharedValue1) {
                        let tmp37;
                        let tmp38;
                        let tmp40;
                        if (cResult[47] === sharedValue2) {
                          tmp37 = cResult[48];
                        }
                        BottomSheet = onSelect(6645).BottomSheet;
                        const _Symbol3 = Symbol;
                        if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl = onSelect(1126).intl;
                          const stringResult = intl.string(onSelect(1126).t.WTqQ5e);
                          cResult[49] = stringResult;
                          tmp38 = stringResult;
                        } else {
                          tmp38 = cResult[49];
                        }
                        const _Symbol4 = Symbol;
                        if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = onSelect(1126).intl;
                          const stringResult1 = intl2.string(onSelect(1126).t.XqMe3N);
                          cResult[50] = stringResult1;
                          tmp40 = stringResult1;
                        } else {
                          tmp40 = cResult[50];
                        }
                        if (cResult[51] === str) {
                          let tmp42;
                          let tmp46;
                          if (cResult[52] === tmp35) {
                            tmp42 = cResult[53];
                          }
                          const container = tmp4.container;
                          const _Symbol5 = Symbol;
                          if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl3 = onSelect(1126).intl;
                            const stringResult2 = intl3.string(onSelect(1126).t["ozfa/h"]);
                            cResult[54] = stringResult2;
                            tmp46 = stringResult2;
                          } else {
                            tmp46 = cResult[54];
                          }
                          if (cResult[55] === value) {
                            let tmp48;
                            if (cResult[56] === tmp36) {
                              tmp48 = cResult[57];
                            }
                            const obj17 = value(12);
                            const uniqResult = obj17.uniq(combined);
                            cResult[6] = str;
                            cResult[7] = color;
                            cResult[8] = sharedValue;
                            cResult[9] = value;
                            cResult[10] = tmp14;
                            cResult[11] = onSelect;
                            cResult[12] = sharedValue1;
                            cResult[13] = tmp4.container;
                            cResult[14] = suggestedColors;
                            cResult[15] = sharedValue2;
                            cResult[16] = closure_10;
                            cResult[17] = sharedValue1;
                            cResult[18] = BottomSheet;
                            cResult[19] = tmp33;
                            cResult[20] = tmp37;
                            cResult[21] = uniqResult;
                            cResult[22] = container;
                            cResult[23] = tmp48;
                            cResult[24] = tmp34;
                            cResult[25] = true;
                            cResult[26] = tmp42;
                            tmp28 = tmp48;
                            tmp30 = tmp42;
                            flag = true;
                            tmp29 = tmp34;
                            tmp27 = container;
                            tmp26 = uniqResult;
                            tmp25 = tmp37;
                            tmp24 = tmp33;
                            tmp23 = BottomSheet;
                            tmp22 = tmp45;
                            tmp21 = closure_10;
                          }
                          const obj6 = { accessibilityLabel: tmp46, value, onChange: tmp36, maxLength: 7 };
                          const tmp50 = sharedValue2(onSelect(6098).TextInput, obj6);
                          cResult[55] = value;
                          cResult[56] = tmp36;
                          cResult[57] = tmp50;
                          tmp48 = tmp50;
                        }
                        const obj7 = { title: tmp38, trailing: sharedValue2(onSelect(5594).Button, obj8) };
                        const BottomSheetTitleHeader = onSelect(6644).BottomSheetTitleHeader;
                        obj8 = { variant: str, size: "sm", text: tmp40, onPress: tmp35 };
                        const tmp44 = sharedValue2(BottomSheetTitleHeader, obj7);
                        cResult[51] = str;
                        cResult[52] = tmp35;
                        cResult[53] = tmp44;
                        tmp42 = tmp44;
                      }
                    }
                    function ce(color) {
                      let s;
                      let v;
                      const obj = utils_ColorUtils;
                      closure_2(obj.int2hex(color));
                      const obj2 = utils_ColorUtils;
                      const int2hsvResult = obj2.int2hsv(color);
                      ({ s, v } = int2hsvResult);
                      const result = sharedValue.set(int2hsvResult.h);
                      const result1 = sharedValue1.set(s);
                      const result2 = sharedValue2.set(v);
                    }
                    cResult[45] = sharedValue;
                    cResult[46] = sharedValue1;
                    cResult[47] = sharedValue2;
                    cResult[48] = ce;
                    tmp37 = ce;
                  }
                }
                function ie(combined) {
                  let text = combined;
                  const tmp = combined.length > 0 && "#" !== combined.charAt(0);
                  if (tmp) {
                    text = `#${combined}`;
                  }
                  const obj = ColorUtils;
                  const hex2rgb2hsvResult = obj.hex2rgb2hsv(text);
                  closure_2(text);
                  if (null != hex2rgb2hsvResult) {
                    const result = sharedValue.set(hex2rgb2hsvResult.h);
                    const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
                    const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
                  }
                }
                cResult[41] = sharedValue;
                cResult[42] = sharedValue1;
                cResult[43] = sharedValue2;
                cResult[44] = ie;
                tmp36 = ie;
              }
            }
          }
        }
      }
      function se() {
        if (null != first) {
          const obj = ColorUtils;
          if (null != obj.hex2rgb2hsv(tmp)) {
            onSelect(closure_3);
          }
        }
        const hsv = _modDef683.hsv;
        _modDef683;
        value = sharedValue.get();
        const value2 = sharedValue1.get();
        const hsvResult = hsv(value, value2, sharedValue2.get());
        onSelect(hsvResult.num());
      }
      cResult[32] = sharedValue;
      cResult[33] = value;
      cResult[34] = tmp14;
      cResult[35] = onSelect;
      cResult[36] = sharedValue1;
      cResult[37] = sharedValue2;
      cResult[38] = se;
      tmp34 = se;
    }
  }
  function oe() {
    const obj2 = { h: sharedValue.get(), s: sharedValue1.get(), v: sharedValue2.get() };
    const obj = ReanimatedRexport;
    const runOnJSResult = obj.runOnJS(closure_7);
    runOnJSResult(obj2);
  }
  cResult[28] = sharedValue;
  cResult[29] = sharedValue1;
  cResult[30] = sharedValue2;
  cResult[31] = oe;
  tmp33 = oe;
}) : ((arg0) => {
  let BottomSheetTitleHeader;
  let Button;
  let actionButtonVariant;
  let closure_2;
  let color;
  let h;
  let intl;
  let intl2;
  let intl3;
  let items3;
  let obj10;
  let obj17;
  let obj7;
  let obj9;
  let onSelect;
  let s;
  let suggestedColors;
  let tmp13;
  let tmp14;
  let v;
  ({ color, onSelect } = arg0);
  ({ suggestedColors, actionButtonVariant } = arg0);
  if (actionButtonVariant === undefined) {
    actionButtonVariant = "secondary";
  }
  let memo;
  let sharedValue;
  let onDismiss;
  function updateInputHexValueFromHsv(h) {
    const obj = ColorPickerUtils;
    const hsvToRgbWorkletResult = obj.hsvToRgbWorklet(h);
    const obj2 = ColorUtils;
    closure_2(obj2.rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]));
  }
  let tmp = closure_9();
  let obj = onSelect(1103);
  const int2hexResult = obj.int2hex(color);
  let obj2 = onSelect(1103);
  let int2hsvResult = obj2.int2hsv(color);
  let obj3 = sharedValue;
  ({ h, s, v } = int2hsvResult);
  const tmp6 = memo(sharedValue.useState(int2hexResult), 2);
  let value = tmp6[0];
  dependencyMap = tmp6[1];
  const items = [value];
  memo = sharedValue.useMemo(() => {
    if (null == first) {
      const obj3 = utils_ColorUtils;
      return obj3.hex2int(c8);
    } else {
      try {
        const obj = utils_ColorUtils;
        return obj.hex2int(tmp);
      } catch (err) {
        const obj2 = utils_ColorUtils;
        return obj2.hex2int(c8);
      }
    }
  }, items);
  const obj4 = onSelect(4612);
  sharedValue = obj4.useSharedValue(h);
  const obj6 = onSelect(4612);
  const sharedValue1 = obj6.useSharedValue(s);
  const obj8 = onSelect(4612);
  const sharedValue2 = obj8.useSharedValue(v);
  let combined;
  if (suggestedColors != null) {
    const mapped = suggestedColors.map((item) => {
      const obj = onSelect(closure_2[9]);
      return obj.hex2int(item);
    });
    combined = mapped.concat(color);
  }
  const items1 = [sharedValue, sharedValue1, sharedValue2, onSelect, memo, value];
  onDismiss = obj3.useCallback(() => {
    if (null != first) {
      const obj = ColorUtils;
      if (null != obj.hex2rgb2hsv(tmp)) {
        onSelect(memo);
      }
    }
    const hsv = _modDef683.hsv;
    _modDef683;
    value = sharedValue.get();
    const value2 = sharedValue1.get();
    const hsvResult = hsv(value, value2, sharedValue2.get());
    onSelect(hsvResult.num());
  }, items1);
  const items2 = [onDismiss];
  const callback1 = obj3.useCallback(() => {
    callback();
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
  }, items2);
  const obj5 = { onDismiss, startExpanded: true, header: sharedValue2(BottomSheetTitleHeader, obj7), children: tmp13(tmp14, obj10) };
  BottomSheet = onSelect(6645).BottomSheet;
  obj7 = { title: intl.string(onSelect(1126).t.WTqQ5e), trailing: sharedValue2(Button, obj9) };
  BottomSheetTitleHeader = onSelect(6644).BottomSheetTitleHeader;
  intl = onSelect(1126).intl;
  obj9 = { variant: actionButtonVariant, size: "sm", text: intl2.string(onSelect(1126).t.XqMe3N), onPress: callback1 };
  Button = onSelect(5594).Button;
  intl2 = onSelect(1126).intl;
  obj10 = { style: tmp.container, children: items3 };
  const obj11 = {
    accessibilityLabel: intl3.string(onSelect(1126).t["ozfa/h"]),
    value,
    onChange(combined) {
      let text = combined;
      const tmp = combined.length > 0 && "#" !== combined.charAt(0);
      if (tmp) {
        text = `#${combined}`;
      }
      const obj = ColorUtils;
      const hex2rgb2hsvResult = obj.hex2rgb2hsv(text);
      closure_2(text);
      if (null != hex2rgb2hsvResult) {
        const result = sharedValue.set(hex2rgb2hsvResult.h);
        const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
        const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
      }
    },
    maxLength: 7
  };
  const TextInput = onSelect(6098).TextInput;
  intl3 = onSelect(1126).intl;
  items3 = [sharedValue2(TextInput, obj11), , ];
  const obj12 = {
    suggestedColors: obj17.uniq(combined),
    onSelect(color) {
      let s;
      let v;
      const obj = utils_ColorUtils;
      closure_2(obj.int2hex(color));
      const obj2 = utils_ColorUtils;
      const int2hsvResult = obj2.int2hsv(color);
      ({ s, v } = int2hsvResult);
      const result = sharedValue.set(int2hsvResult.h);
      const result1 = sharedValue1.set(s);
      const result2 = sharedValue2.set(v);
    },
    color: memo
  };
  obj17 = value(12);
  tmp13 = updateInputHexValueFromHsv;
  tmp14 = sharedValue1;
  const tmp16 = value;
  if (null == value) {
    const hsv2int = onSelect(1103).hsv2int;
    onSelect(1103);
    value = sharedValue.get();
    let value2 = sharedValue1.get();
    memo = hsv2int(value, value2, sharedValue2.get());
  }
  items3[1] = sharedValue2(closure_10, obj12);
  const obj13 = {
    hue: sharedValue,
    saturation: sharedValue1,
    value: sharedValue2,
    onPanFinalize() {
      const obj2 = { h: sharedValue.get(), s: sharedValue1.get(), v: sharedValue2.get() };
      const obj = ReanimatedRexport;
      const runOnJSResult = obj.runOnJS(updateInputHexValueFromHsv);
      runOnJSResult(obj2);
    }
  };
  items3[2] = sharedValue2(tmp16(14425), obj13);
  return sharedValue2(BottomSheet, obj5);
});
let result = size.fileFinishedImporting("modules/color_picker/native/CustomColorPickerActionSheet.tsx");

export default tmp4;