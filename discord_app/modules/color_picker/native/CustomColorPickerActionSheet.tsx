// === Module 14663: CustomColorPickerActionSheet ===

// Module 14663 (CustomColorPickerActionSheet)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import ColorUtils from "ColorUtils" /* 4927 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import ColorPickerUtils from "ColorPickerUtils" /* 14665 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let c8 = "#000000";
const createStyles = fn(5090);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 }, suggestedColor: null, suggestedColorsContainer: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.suggestedColor = { minWidth: 32, height: 32, borderRadius: nativeDefault.radii.xs };
obj2.suggestedColorsContainer = { flexDirection: "row", justifyContent: "center" };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function SuggestedColors(color) {
  const cResult = onSelect(576).c(12);
  ({ suggestedColors, onSelect } = color);
  color = color.color;
  const tmp2 = closure_9();
  dependencyMap = tmp2;
  if (null != suggestedColors) {
    let num8 = 0;
    if (0 !== suggestedColors.length) {
      if (cResult[0] === color) {
        if (cResult[1] === onSelect) {
          if (cResult[2] === tmp2.suggestedColor) {
            if (cResult[3] === suggestedColors) {
              if (cResult[9] === tmp2.suggestedColorsContainer) {
                if (cResult[10] === tmp3) {
                  let tmp7 = cResult[11];
                }
                return tmp7;
              }
              const obj2 = { style: tmp11, children: cResult[4] };
              const tmp10 = closure_6(View, obj2);
              cResult[9] = tmp2.suggestedColorsContainer;
              cResult[10] = cResult[4];
              cResult[11] = tmp10;
              tmp7 = tmp10;
            }
          }
        }
      }
      if (cResult[5] === color) {
        if (cResult[6] === onSelect) {
          if (cResult[7] === tmp2.suggestedColor) {
            let tmp4 = cResult[8];
          }
          const mapped = suggestedColors.map(tmp4);
          cResult[num8] = color;
          cResult[1] = onSelect;
          onSelect = tmp2.suggestedColor;
          cResult[2] = onSelect;
          cResult[3] = suggestedColors;
          num8 = 4;
          cResult[4] = mapped;
        }
      }
      const fn = function v(color, arg1) {
        closure_0 = color;
        return closure_1_6(color(suggestedColor[8]), {
          color,
          style: suggestedColor.suggestedColor,
          selected: color === color,
          onSelect() {
            if (null != onSelect) {
              tmp(closure_0);
            }
          }
        }, "" + color + "-" + arg1);
      };
      cResult[5] = color;
      cResult[6] = onSelect;
      cResult[7] = tmp2.suggestedColor;
      cResult[8] = fn;
      tmp4 = fn;
    }
  }
  return null;
}) : (function SuggestedColors(arg0) {
  ({ suggestedColors, onSelect: require, color: importDefault } = arg0);
  const tmp = closure_9();
  const suggestedColor = tmp;
  let tmp2 = null;
  if (null != suggestedColors) {
    tmp2 = null;
    if (0 !== suggestedColors.length) {
      const obj = {
        style: tmp.suggestedColorsContainer,
        children: suggestedColors.map((color, index) => {
              closure_0 = color;
              return closure_1_6(require("ColorBlock"), {
                color,
                style: suggestedColor.suggestedColor,
                selected: color === closure_1,
                onSelect() {
                  if (null != require) {
                    tmp(closure_0);
                  }
                }
              }, "" + color + "-" + index);
            })
      };
      tmp2 = closure_6(View, obj);
    }
  }
  return tmp2;
});
ReactCompilerGating = fn(558);
let obj4 = { minWidth: 32, height: 32, borderRadius: nativeDefault.radii.xs };
const size = fn(2);
let result = size.fileFinishedImporting("modules/color_picker/native/CustomColorPickerActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CustomColorPickerActionSheet(arg0) {
  const cResult = onSelect(576).c(86);
  ({ color, onSelect } = arg0);
  ({ suggestedColors, actionButtonVariant } = arg0);
  let str = "secondary";
  if (undefined !== actionButtonVariant) {
    str = actionButtonVariant;
  }
  let flag = closure_9();
  if (cResult[0] !== color) {
    const int2hexResult = onSelect(1103).int2hex(color);
    cResult[0] = color;
    cResult[1] = int2hexResult;
    let tmp8 = int2hexResult;
    const tmp5Result = onSelect(1103);
  } else {
    tmp8 = cResult[1];
  }
  let obj = onSelect(576);
  const tmp5Result8 = onSelect(1103);
  ({ h, s, v } = onSelect(1103).int2hsv(color));
  [value, dependencyMap] = sharedValue.useState(tmp8);
  if (null != value) {
    try {
      if (cResult[3] !== value) {
        const hex2intResult = onSelect(1103).hex2int(value);
        let tmp18 = hex2intResult;
        cResult[3] = value;
        cResult[4] = hex2intResult;
        const tmp5Result9 = onSelect(1103);
      } else {
        tmp18 = cResult[4];
      }
      let tmp17 = tmp18;
    } catch (err) {
      const _Symbol2 = Symbol;
      if (tmp2[5] === Symbol.for("react.memo_cache_sentinel")) {
        const hex2intResult1 = tmp4(tmp[9]).hex2int(closure_8);
        tmp2[5] = hex2intResult1;
        const tmp4Result = tmp4(tmp[9]);
      }
    }
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const hex2intResult2 = onSelect(1103).hex2int(closure_8);
      cResult[2] = hex2intResult2;
      let tmp14 = hex2intResult2;
      const tmp5Result10 = onSelect(1103);
    } else {
      tmp14 = cResult[2];
    }
    tmp17 = tmp14;
  }
  _slicedToArray = tmp17;
  let int2hsvResult = onSelect(1103).int2hsv(color);
  sharedValue = onSelect(4810).useSharedValue(h);
  const tmp5Result11 = onSelect(4810);
  const sharedValue1 = onSelect(4810).useSharedValue(s);
  const tmp5Result12 = onSelect(4810);
  const sharedValue2 = onSelect(4810).useSharedValue(v);
  if (cResult[6] === str) {
    if (cResult[7] === color) {
      if (cResult[8] === sharedValue) {
        if (cResult[9] === value) {
          if (cResult[10] === tmp17) {
            if (cResult[11] === onSelect) {
              if (cResult[12] === sharedValue1) {
                if (cResult[13] === flag.container) {
                  if (cResult[14] === suggestedColors) {
                    if (cResult[15] === sharedValue2) {
                      if (cResult[58] === sharedValue) {
                        if (cResult[59] === value) {
                          if (cResult[60] === tmp17) {
                            if (cResult[61] === sharedValue1) {
                              if (cResult[62] === sharedValue2) {
                                let tmp68 = cResult[63];
                              }
                              if (cResult[64] === tmp25) {
                                if (cResult[65] === tmp29) {
                                  if (cResult[66] === tmp68) {
                                    if (cResult[67] === tmp30) {
                                      let tmp72 = cResult[68];
                                    }
                                    if (cResult[69] === sharedValue) {
                                      if (cResult[70] === tmp28) {
                                        if (cResult[71] === sharedValue1) {
                                          if (cResult[72] === sharedValue2) {
                                            let tmp75 = cResult[73];
                                          }
                                          if (cResult[74] === tmp26) {
                                            if (cResult[75] === tmp72) {
                                              if (cResult[76] === tmp75) {
                                                if (cResult[77] === tmp31) {
                                                  if (cResult[78] === tmp32) {
                                                    let tmp79 = cResult[79];
                                                  }
                                                  if (cResult[80] === tmp27) {
                                                    if (cResult[81] === tmp79) {
                                                      if (cResult[82] === tmp33) {
                                                        if (cResult[83] === tmp34) {
                                                          if (cResult[84] === tmp35) {
                                                            let tmp82 = cResult[85];
                                                          }
                                                          return tmp82;
                                                        }
                                                      }
                                                    }
                                                  }
                                                  let obj2 = { onDismiss: tmp33, startExpanded: tmp34, header: tmp35, children: tmp79 };
                                                  const tmp84 = sharedValue2(tmp27, obj2);
                                                  cResult[80] = tmp27;
                                                  cResult[81] = tmp79;
                                                  cResult[82] = tmp33;
                                                  cResult[83] = tmp34;
                                                  cResult[84] = tmp35;
                                                  cResult[85] = tmp84;
                                                  tmp82 = tmp84;
                                                }
                                              }
                                            }
                                          }
                                          const obj3 = { style: tmp31, children: null };
                                          const items = [tmp32, tmp72, tmp75];
                                          obj3.children = items;
                                          const tmp81 = closure_7(tmp26, obj3);
                                          cResult[74] = tmp26;
                                          cResult[75] = tmp72;
                                          cResult[76] = tmp75;
                                          cResult[77] = tmp31;
                                          cResult[78] = tmp32;
                                          cResult[79] = tmp81;
                                          tmp79 = tmp81;
                                        }
                                      }
                                    }
                                    const obj4 = { hue: sharedValue, saturation: sharedValue1, value: sharedValue2, onPanFinalize: tmp28 };
                                    const tmp78 = sharedValue2(value(14666), obj4);
                                    cResult[69] = sharedValue;
                                    cResult[70] = tmp28;
                                    cResult[71] = sharedValue1;
                                    cResult[72] = sharedValue2;
                                    cResult[73] = tmp78;
                                    tmp75 = tmp78;
                                  }
                                }
                              }
                              const obj5 = { suggestedColors: tmp30, onSelect: tmp29, color: tmp68 };
                              const tmp74 = sharedValue2(tmp25, obj5);
                              cResult[64] = tmp25;
                              cResult[65] = tmp29;
                              cResult[66] = tmp68;
                              cResult[67] = tmp30;
                              cResult[68] = tmp74;
                              tmp72 = tmp74;
                            }
                          }
                        }
                      }
                      let hsv2intResult = tmp17;
                      if (null == value) {
                        value = sharedValue.get();
                        value2 = sharedValue1.get();
                        hsv2intResult = onSelect(1103).hsv2int(value, value2, sharedValue2.get());
                        const tmp5Result14 = onSelect(1103);
                      }
                      cResult[58] = sharedValue;
                      cResult[59] = value;
                      cResult[60] = tmp17;
                      cResult[61] = sharedValue1;
                      cResult[62] = sharedValue2;
                      cResult[63] = hsv2intResult;
                      tmp68 = hsv2intResult;
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
  if (suggestedColors != null) {
    const mapped = suggestedColors.map((item) => onSelect(1103).hex2int(item));
    const combined = mapped.concat(color);
  }
  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
    function updateInputHexValueFromHsv(h) {
      const hsvToRgbWorkletResult = ColorPickerUtils.hsvToRgbWorklet(h);
      dependencyMap(ColorUtils.rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]));
    }
    cResult[27] = updateInputHexValueFromHsv;
    let tmp37 = updateInputHexValueFromHsv;
  } else {
    tmp37 = cResult[27];
  }
  closure_7 = tmp37;
  if (cResult[28] === sharedValue) {
    if (cResult[29] === sharedValue1) {
      if (cResult[30] === sharedValue2) {
        let tmp38 = cResult[31];
      }
      if (cResult[32] === sharedValue) {
        if (cResult[33] === value) {
          if (cResult[34] === tmp17) {
            if (cResult[35] === onSelect) {
              if (cResult[36] === sharedValue1) {
                if (cResult[37] === sharedValue2) {
                  let tmp39 = cResult[38];
                }
                closure_8 = tmp39;
                if (cResult[39] !== tmp39) {
                  function le() {
                    closure_8();
                    ActionSheetActionCreatorsDefault.hideActionSheet();
                  }
                  cResult[39] = tmp39;
                  cResult[40] = le;
                  let tmp40 = le;
                } else {
                  tmp40 = cResult[40];
                }
                if (cResult[41] === sharedValue) {
                  if (cResult[42] === sharedValue1) {
                    if (cResult[43] === sharedValue2) {
                      let container = cResult[44];
                    }
                    if (cResult[45] === sharedValue) {
                      if (cResult[46] === sharedValue1) {
                        if (cResult[47] === sharedValue2) {
                          let tmp41 = cResult[48];
                        }
                        BottomSheet = onSelect(6829).BottomSheet;
                        const _Symbol3 = Symbol;
                        if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl = onSelect(1126).intl;
                          const stringResult = intl.string(onSelect(1126).t.WTqQ5e);
                          cResult[49] = stringResult;
                          let tmp42 = stringResult;
                        } else {
                          tmp42 = cResult[49];
                        }
                        const _Symbol4 = Symbol;
                        if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = onSelect(1126).intl;
                          const stringResult1 = intl2.string(onSelect(1126).t.XqMe3N);
                          cResult[50] = stringResult1;
                          let tmp44 = stringResult1;
                        } else {
                          tmp44 = cResult[50];
                        }
                        if (cResult[51] === str) {
                          if (cResult[52] === tmp40) {
                            let tmp46 = cResult[53];
                          }
                          const container2 = flag.container;
                          const _Symbol5 = Symbol;
                          if (cResult[54] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl3 = onSelect(1126).intl;
                            const stringResult2 = intl3.string(onSelect(1126).t["ozfa/h"]);
                            cResult[54] = stringResult2;
                            let tmp50 = stringResult2;
                          } else {
                            tmp50 = cResult[54];
                          }
                          if (cResult[55] === value) {
                            if (cResult[56] === container) {
                              let tmp52 = cResult[57];
                            }
                            const uniqResult = value(12).uniq(combined);
                            cResult[6] = str;
                            cResult[7] = color;
                            cResult[8] = sharedValue;
                            cResult[9] = value;
                            cResult[10] = tmp17;
                            cResult[11] = onSelect;
                            cResult[12] = sharedValue1;
                            container = flag.container;
                            cResult[13] = container;
                            cResult[14] = suggestedColors;
                            cResult[15] = sharedValue2;
                            cResult[16] = closure_10;
                            cResult[17] = tmp49;
                            cResult[18] = BottomSheet;
                            cResult[19] = tmp38;
                            cResult[20] = tmp41;
                            cResult[21] = uniqResult;
                            cResult[22] = container2;
                            cResult[23] = tmp52;
                            cResult[24] = tmp39;
                            flag = true;
                            cResult[25] = true;
                            suggestedColors = 26;
                            cResult[26] = tmp46;
                            const obj17 = value(12);
                          }
                          const obj6 = { accessibilityLabel: tmp50, value, onChange: container, maxLength: 7 };
                          const tmp54 = sharedValue2(onSelect(6283).TextInput, obj6);
                          cResult[55] = value;
                          cResult[56] = container;
                          cResult[57] = tmp54;
                          tmp52 = tmp54;
                        }
                        const obj7 = { title: tmp42, trailing: null };
                        const obj8 = { variant: str, size: "sm", text: tmp44, onPress: tmp40 };
                        obj7.trailing = sharedValue2(onSelect(5375).Button, obj8);
                        const tmp48 = sharedValue2(onSelect(6828).BottomSheetTitleHeader, obj7);
                        cResult[51] = str;
                        cResult[52] = tmp40;
                        cResult[53] = tmp48;
                        tmp46 = tmp48;
                      }
                    }
                    function onSelectSuggested(color) {
                      dependencyMap(utils_ColorUtils.int2hex(color));
                      const int2hsvResult = utils_ColorUtils.int2hsv(color);
                      ({ s, v } = int2hsvResult);
                      const result = sharedValue.set(int2hsvResult.h);
                      const result1 = sharedValue1.set(s);
                      const result2 = sharedValue2.set(v);
                    }
                    cResult[45] = sharedValue;
                    cResult[46] = sharedValue1;
                    cResult[47] = sharedValue2;
                    cResult[48] = onSelectSuggested;
                    tmp41 = onSelectSuggested;
                  }
                }
                function onTextInputChange(first4) {
                  let tmp = first4.length > 0;
                  if (tmp) {
                    tmp = "#" !== first4.charAt(0);
                  }
                  let text = first4;
                  if (tmp) {
                    text = `#${first4}`;
                  }
                  const hex2rgb2hsvResult = ColorUtils.hex2rgb2hsv(text);
                  dependencyMap(text);
                  if (null != hex2rgb2hsvResult) {
                    const result = sharedValue.set(hex2rgb2hsvResult.h);
                    const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
                    const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
                  }
                }
                cResult[41] = sharedValue;
                cResult[42] = sharedValue1;
                cResult[43] = sharedValue2;
                cResult[44] = onTextInputChange;
                container = onTextInputChange;
              }
            }
          }
        }
      }
      function se() {
        if (null != first) {
          if (null != obj.hex2rgb2hsv(tmp)) {
            onSelect(closure_3);
          }
          obj = ColorUtils;
        }
        value = sharedValue.get();
        value2 = sharedValue1.get();
        onSelect(_modDef683.hsv(value, value2, sharedValue2.get()).num());
        const hsvResult = _modDef683.hsv(value, value2, sharedValue2.get());
      }
      cResult[32] = sharedValue;
      cResult[33] = value;
      cResult[34] = tmp17;
      cResult[35] = onSelect;
      cResult[36] = sharedValue1;
      cResult[37] = sharedValue2;
      cResult[38] = se;
      tmp39 = se;
    }
  }
  function onPanFinalize() {
    const obj2 = { h: null, s: null, v: null };
    obj2.h = sharedValue.get();
    obj2.s = sharedValue1.get();
    obj2.v = sharedValue2.get();
    ReanimatedRexport.runOnJS(closure_7)(obj2);
  }
  cResult[28] = sharedValue;
  cResult[29] = sharedValue1;
  cResult[30] = sharedValue2;
  cResult[31] = onPanFinalize;
  tmp38 = onPanFinalize;
  const tmp5Result13 = onSelect(4810);
}) : (function CustomColorPickerActionSheet(arg0) {
  ({ color, onSelect } = arg0);
  ({ suggestedColors, actionButtonVariant } = arg0);
  if (actionButtonVariant === undefined) {
    actionButtonVariant = "secondary";
  }
  let memo;
  let sharedValue;
  let onDismiss;
  function updateInputHexValueFromHsv(h) {
    const hsvToRgbWorkletResult = ColorPickerUtils.hsvToRgbWorklet(h);
    dependencyMap(ColorUtils.rgbToHex(hsvToRgbWorkletResult[0], hsvToRgbWorkletResult[1], hsvToRgbWorkletResult[2]));
  }
  let tmp = closure_9();
  let obj = onSelect(1103);
  const int2hexResult = onSelect(1103).int2hex(color);
  let obj2 = onSelect(1103);
  ({ h, s, v } = onSelect(1103).int2hsv(color));
  const tmp6 = memo(sharedValue.useState(int2hexResult), 2);
  value = tmp6[0];
  dependencyMap = tmp6[1];
  const items = [value];
  memo = sharedValue.useMemo(() => {
    if (null == first) {
      return utils_ColorUtils.hex2int(c8);
    } else {
      try {
        return utils_ColorUtils.hex2int(tmp);
      } catch (err) {
        return utils_ColorUtils.hex2int(c8);
      }
    }
  }, items);
  let int2hsvResult = onSelect(1103).int2hsv(color);
  sharedValue = onSelect(4810).useSharedValue(h);
  const obj4 = onSelect(4810);
  const sharedValue1 = onSelect(4810).useSharedValue(s);
  const obj6 = onSelect(4810);
  const sharedValue2 = onSelect(4810).useSharedValue(v);
  let combined;
  if (suggestedColors != null) {
    const mapped = suggestedColors.map((item) => onSelect(1103).hex2int(item));
    combined = mapped.concat(color);
  }
  const items1 = [sharedValue, sharedValue1, sharedValue2, onSelect, memo, value];
  onDismiss = obj3.useCallback(() => {
    if (null != first) {
      if (null != obj.hex2rgb2hsv(tmp)) {
        onSelect(memo);
      }
      obj = ColorUtils;
    }
    value = sharedValue.get();
    value2 = sharedValue1.get();
    onSelect(_modDef683.hsv(value, value2, sharedValue2.get()).num());
    const hsvResult = _modDef683.hsv(value, value2, sharedValue2.get());
  }, items1);
  const items2 = [onDismiss];
  const callback1 = obj3.useCallback(() => {
    callback();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items2);
  const obj5 = { onDismiss, startExpanded: true, header: null, children: null };
  const obj7 = { title: null, trailing: null };
  const intl = onSelect(1126).intl;
  obj7.title = intl.string(onSelect(1126).t.WTqQ5e);
  const obj9 = { variant: actionButtonVariant, size: "sm", text: null, onPress: null };
  const intl2 = onSelect(1126).intl;
  obj9.text = intl2.string(onSelect(1126).t.XqMe3N);
  obj9.onPress = callback1;
  obj7.trailing = sharedValue2(onSelect(5375).Button, obj9);
  obj5.header = sharedValue2(onSelect(6828).BottomSheetTitleHeader, obj7);
  const obj10 = { style: tmp.container, children: null };
  const obj11 = { accessibilityLabel: null, value: null, onChange: null, maxLength: 7 };
  const intl3 = onSelect(1126).intl;
  obj11.accessibilityLabel = intl3.string(onSelect(1126).t["ozfa/h"]);
  obj11.value = value;
  obj11.onChange = function onTextInputChange(first4) {
    let tmp = first4.length > 0;
    if (tmp) {
      tmp = "#" !== first4.charAt(0);
    }
    let text = first4;
    if (tmp) {
      text = `#${first4}`;
    }
    const hex2rgb2hsvResult = ColorUtils.hex2rgb2hsv(text);
    dependencyMap(text);
    if (null != hex2rgb2hsvResult) {
      const result = sharedValue.set(hex2rgb2hsvResult.h);
      const result1 = sharedValue1.set(hex2rgb2hsvResult.s / 100);
      const result2 = sharedValue2.set(hex2rgb2hsvResult.v / 100);
    }
  };
  const items3 = [sharedValue2(onSelect(6283).TextInput, obj11), , ];
  const obj12 = { suggestedColors: null, onSelect: null, color: null };
  const obj8 = onSelect(4810);
  const tmp13 = updateInputHexValueFromHsv;
  const tmp14 = sharedValue1;
  const tmp16 = value;
  obj12.suggestedColors = value(12).uniq(combined);
  obj12.onSelect = function onSelectSuggested(color) {
    dependencyMap(utils_ColorUtils.int2hex(color));
    const int2hsvResult = utils_ColorUtils.int2hsv(color);
    ({ s, v } = int2hsvResult);
    const result = sharedValue.set(int2hsvResult.h);
    const result1 = sharedValue1.set(s);
    const result2 = sharedValue2.set(v);
  };
  if (null == value) {
    value = sharedValue.get();
    value2 = sharedValue1.get();
    memo = onSelect(1103).hsv2int(value, value2, sharedValue2.get());
    const tmp2Result = onSelect(1103);
  }
  obj12.color = memo;
  items3[1] = sharedValue2(closure_10, obj12);
  items3[2] = sharedValue2(tmp16(14666), {
    hue: sharedValue,
    saturation: sharedValue1,
    value: sharedValue2,
    onPanFinalize() {
      const obj2 = { h: null, s: null, v: null };
      obj2.h = sharedValue.get();
      obj2.s = sharedValue1.get();
      obj2.v = sharedValue2.get();
      ReanimatedRexport.runOnJS(updateInputHexValueFromHsv)(obj2);
    }
  });
  obj10.children = items3;
  obj5.children = tmp13(tmp14, obj10);
  return sharedValue2(onSelect(6829).BottomSheet, obj5);
});