// === Module 15883: VEVOOPropTintColor ===

// Module 15883 (VEVOOPropTintColor)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import utils_ColorUtils from "utils/ColorUtils" /* 1103 */;
import ColorUtils from "ColorUtils" /* 4733 */;
import FormSwitch from "FormSwitch" /* 6706 */;
import Form from "Form" /* 8924 */;
import showCustomColorPickerActionSheetDefault from "showCustomColorPickerActionSheet" /* 14437 */;
import VEVOO from "VEVOO" /* 15880 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import VEVOOStore from "VEVOOStore" /* 5781 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let size;
let react = react_mod;
const View = react_native.View;
({ getVisualEffectViewOverrides: metroRequire, setVisualEffectViewOverides: metroImportDefault } = VEVOOStore);
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let obj = { tintColor: size };
size = { width: nativeDefault.space.PX_32, height: nativeDefault.space.PX_32, backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700, borderRadius: nativeDefault.radii.sm };
let closure_11 = createStyles.createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_2;
  let closure_4;
  let first;
  let first2;
  let items1;
  let items2;
  let require;
  let tmp14;
  let tmp19;
  let tmp20;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(45);
  const tmp4 = closure_11();
  let obj2 = VEVOO;
  const visualEffectViewOverrideSharedStyles = obj2.useVisualEffectViewOverrideSharedStyles();
  let obj3 = react;
  [tmp8, require] = first2(react.useState(false), 2);
  first2(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let str = closure_6().tintColorOverrideHex;
    if (str == null) {
      str = "black";
    }
    cResult[0] = str;
    first = str;
  } else {
    first = cResult[0];
  }
  const tmp6Result = first2(obj3.useState(first), 2);
  const first1 = tmp6Result[0];
  dependencyMap = tmp6Result[1];
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp16 = closure_6();
    cResult[1] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[1];
  }
  const tmp6Result2 = first2(obj3.useState(tmp14.tintColorOverrideOpacity), 2);
  first2 = tmp6Result2[0];
  react = tmp6Result2[1];
  const ref = obj3.useRef(first2);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function p(tintColorOverrideHex, tintColorOverrideOpacity) {
      if (null != tintColorOverrideHex) {
        closure_2(tintColorOverrideHex);
      }
      if (null != tintColorOverrideOpacity) {
        closure_4(tintColorOverrideOpacity);
      }
      let hexToRgbaStringResult;
      if (null != tintColorOverrideHex) {
        if (null != tintColorOverrideOpacity) {
          const obj = ColorUtils;
          hexToRgbaStringResult = obj.hexToRgbaString(tintColorOverrideHex, tintColorOverrideOpacity);
        }
      }
      const obj2 = { tintColorOverrideOpacity, tintColorOverrideHex, tintColorOverride: hexToRgbaStringResult };
      const merged = Object.assign(metroRequire());
      if (null == hexToRgbaStringResult) {
        const obj3 = { tintColorOverride: "rgba(0, 0, 0, 0)" };
        const merged1 = Object.assign(obj2);
        metroImportDefault(obj3);
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          closure_2_7(obj2);
        });
      } else {
        metroImportDefault(obj2);
      }
    };
    cResult[2] = fn;
    tmp19 = fn;
  } else {
    tmp19 = cResult[2];
  }
  let closure_5 = tmp19;
  if (cResult[3] !== visualEffectViewOverrideSharedStyles.zeroPaddingVertical) {
    const items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
    cResult[3] = visualEffectViewOverrideSharedStyles.zeroPaddingVertical;
    cResult[4] = items;
    tmp20 = items;
  } else {
    tmp20 = cResult[4];
  }
  if (cResult[5] === first1) {
    let tmp21;
    if (cResult[6] === first2) {
      tmp21 = cResult[7];
    }
    if (cResult[8] === tmp21) {
      let tmp22;
      let tmp26;
      if (cResult[9] === tmp8) {
        tmp22 = cResult[10];
      }
      if (cResult[11] !== first1) {
        const obj4 = { backgroundColor: first1 };
        cResult[11] = first1;
        cResult[12] = obj4;
        tmp26 = obj4;
      } else {
        tmp26 = cResult[12];
      }
      if (cResult[13] === tmp4.tintColor) {
        let tmp27;
        if (cResult[14] === tmp26) {
          tmp27 = cResult[15];
        }
        if (cResult[16] === visualEffectViewOverrideSharedStyles.zeroPadding) {
          let tmp30;
          let tmp35;
          let tmp39;
          if (cResult[17] === tmp27) {
            tmp30 = cResult[18];
          }
          if (cResult[19] !== first2) {
            let str2;
            if (first2 != null) {
              str2 = first2.toFixed(3);
            }
            if (str2 == null) {
              str2 = "";
            }
            cResult[19] = first2;
            cResult[20] = str2;
            tmp35 = str2;
          } else {
            tmp35 = cResult[20];
          }
          const _HermesInternal = HermesInternal;
          const combined = "Blur Tint Opacity " + tmp35;
          if (cResult[21] !== first1) {
            const fn2 = function q(arg0) {
              closure_5(first1, arg0);
            };
            cResult[21] = first1;
            cResult[22] = fn2;
            tmp39 = fn2;
          } else {
            tmp39 = cResult[22];
          }
          if (cResult[23] === !tmp8) {
            let tmp40;
            if (cResult[24] === tmp39) {
              tmp40 = cResult[25];
            }
            if (cResult[26] === visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal) {
              if (cResult[27] === combined) {
                if (cResult[28] === tmp40) {
                  let tmp44;
                  if (cResult[29] === !tmp8) {
                    tmp44 = cResult[30];
                  }
                  if (cResult[31] === tmp44) {
                    let tmp48;
                    if (cResult[32] === tmp30) {
                      tmp48 = cResult[33];
                    }
                    if (cResult[34] === first1) {
                      let tmp52;
                      if (cResult[35] === first2) {
                        tmp52 = cResult[36];
                      }
                      if (cResult[37] === visualEffectViewOverrideSharedStyles.enabledSwitchStyle) {
                        if (cResult[38] === visualEffectViewOverrideSharedStyles.zeroHeight) {
                          if (cResult[39] === tmp48) {
                            if (cResult[40] === !tmp8) {
                              if (cResult[41] === tmp52) {
                                if (cResult[42] === tmp20) {
                                  let tmp53;
                                  if (cResult[43] === tmp22) {
                                    tmp53 = cResult[44];
                                  }
                                  return tmp53;
                                }
                              }
                            }
                          }
                        }
                      }
                      class Q {
                        constructor() {
                          let obj2;
                          let obj = {
                            color: obj2.hex2int(first1),
                            onSelect(color) {
                              const obj = require("utils/ColorUtils");
                              closure_1_5(obj.int2hex(color), first2);
                            }
                          };
                          const tmp = showCustomColorPickerActionSheetDefault;
                          obj2 = utils_ColorUtils;
                          tmp(obj);
                        }
                      }
                      tmp55[0] = tmp20;
                      ({ zeroHeight: tmp55[1], enabledSwitchStyle: tmp55[2] } = visualEffectViewOverrideSharedStyles);
                      tmp55[3] = tmp22;
                      tmp55[4] = tmp48;
                      tmp55[5] = !tmp8;
                      tmp55[6] = tmp52;
                      const tmp56 = closure_8(Form.FormRow, tmp55);
                      cResult[37] = visualEffectViewOverrideSharedStyles.enabledSwitchStyle;
                      cResult[38] = visualEffectViewOverrideSharedStyles.zeroHeight;
                      cResult[39] = tmp48;
                      cResult[40] = !tmp8;
                      cResult[41] = tmp52;
                      cResult[42] = tmp20;
                      cResult[43] = tmp22;
                      cResult[44] = tmp56;
                      tmp53 = tmp56;
                    }
                    class Q {
                      constructor() {
                        let obj2;
                        let obj = {
                          color: obj2.hex2int(first1),
                          onSelect(color) {
                            const obj = require("utils/ColorUtils");
                            closure_1_5(obj.int2hex(color), first2);
                          }
                        };
                        const tmp = showCustomColorPickerActionSheetDefault;
                        obj2 = utils_ColorUtils;
                        tmp(obj);
                      }
                    }
                    cResult[34] = first1;
                    cResult[35] = first2;
                    cResult[36] = Q;
                    tmp52 = Q;
                  }
                  const obj5 = { children: items1 };
                  items1 = [tmp30, tmp44];
                  const tmp50 = closure_10(closure_9, obj5);
                  cResult[31] = tmp44;
                  cResult[32] = tmp30;
                  cResult[33] = tmp50;
                  tmp48 = tmp50;
                }
              }
            }
            tmp46[0] = visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal;
            tmp46[1] = !tmp8;
            tmp46[2] = combined;
            tmp46[3] = tmp40;
            const tmp47 = closure_8(Form.FormRow, tmp46);
            cResult[26] = visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal;
            cResult[27] = combined;
            cResult[28] = tmp40;
            cResult[29] = !tmp8;
            cResult[30] = tmp47;
            tmp44 = tmp47;
          }
          const obj6 = { disabled: !tmp8, initialValue: ref, onValueChange: tmp39 };
          const tmp43 = closure_8(first1(15882), obj6);
          cResult[23] = !tmp8;
          cResult[24] = tmp39;
          cResult[25] = tmp43;
          tmp40 = tmp43;
        }
        tmp32[0] = visualEffectViewOverrideSharedStyles.zeroPadding;
        tmp32[2] = tmp27;
        const tmp33 = closure_8(Form.FormRow, tmp32);
        cResult[16] = visualEffectViewOverrideSharedStyles.zeroPadding;
        cResult[17] = tmp27;
        cResult[18] = tmp33;
        tmp30 = tmp33;
      }
      const obj7 = { style: items2 };
      items2 = [tmp4.tintColor, tmp26];
      const tmp29 = closure_8(closure_5, obj7);
      cResult[13] = tmp4.tintColor;
      cResult[14] = tmp26;
      cResult[15] = tmp29;
      tmp27 = tmp29;
    }
    tmp24[0] = tmp8;
    tmp24[1] = tmp21;
    const tmp25 = closure_8(FormSwitch.FormSwitch, tmp24);
    cResult[8] = tmp21;
    cResult[9] = tmp8;
    cResult[10] = tmp25;
    tmp22 = tmp25;
  }
  class L {
    constructor(arg0) {
      _require(arg0);
      if (arg0) {
        closure_5(first1, first2);
      } else {
        closure_5(undefined, undefined);
      }
    }
  }
  cResult[5] = first1;
  cResult[6] = first2;
  cResult[7] = L;
  tmp21 = L;
}) : (() => {
  let closure_2;
  let closure_4;
  let first1;
  let items;
  let items1;
  let obj4;
  let obj6;
  let obj8;
  let obj9;
  let require;
  let str2;
  let tmp7;
  let tmp = closure_11();
  let obj = VEVOO;
  const visualEffectViewOverrideSharedStyles = obj.useVisualEffectViewOverrideSharedStyles();
  let obj2 = react;
  [tmp7, require] = first1(react.useState(false), 2);
  const useState = react.useState;
  first1(react.useState(false), 2);
  let str = closure_6().tintColorOverrideHex;
  if (str == null) {
    str = "black";
  }
  const tmp5Result = first1(useState(str), 2);
  const backgroundColor = tmp5Result[0];
  dependencyMap = tmp5Result[1];
  const tmp5Result2 = first1(obj2.useState(closure_6().tintColorOverrideOpacity), 2);
  first1 = tmp5Result2[0];
  react = tmp5Result2[1];
  const ref = obj2.useRef(first1);
  let closure_5 = obj2.useCallback((tintColorOverrideHex, tintColorOverrideOpacity) => {
    if (null != tintColorOverrideHex) {
      closure_2(tintColorOverrideHex);
    }
    if (null != tintColorOverrideOpacity) {
      closure_4(tintColorOverrideOpacity);
    }
    let hexToRgbaStringResult;
    if (null != tintColorOverrideHex) {
      if (null != tintColorOverrideOpacity) {
        const obj = ColorUtils;
        hexToRgbaStringResult = obj.hexToRgbaString(tintColorOverrideHex, tintColorOverrideOpacity);
      }
    }
    const obj2 = { tintColorOverrideOpacity, tintColorOverrideHex, tintColorOverride: hexToRgbaStringResult };
    const merged = Object.assign(metroRequire());
    if (null == hexToRgbaStringResult) {
      const obj3 = { tintColorOverride: "rgba(0, 0, 0, 0)" };
      const merged1 = Object.assign(obj2);
      metroImportDefault(obj3);
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        closure_2_7(obj2);
      });
    } else {
      metroImportDefault(obj2);
    }
  }, []);
  let obj3 = {
    style: items,
    labelStyle: visualEffectViewOverrideSharedStyles.zeroHeight,
    leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle,
    leading: closure_8(FormSwitch.FormSwitch, obj4),
    subLabel: closure_10(closure_9, obj8),
    disabled: !tmp7,
    onPress() {
      let obj2;
      let obj = {
        color: obj2.hex2int(first),
        onSelect(color) {
          const obj = require("utils/ColorUtils");
          closure_1_5(obj.int2hex(color), first1);
        }
      };
      const tmp = showCustomColorPickerActionSheetDefault;
      obj2 = utils_ColorUtils;
      tmp(obj);
    }
  };
  items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
  const FormRow = Form.FormRow;
  obj4 = {
    value: tmp7,
    onValueChange(arg0) {
      _require(arg0);
      if (arg0) {
        closure_5(first, first1);
      } else {
        closure_5(undefined, undefined);
      }
    }
  };
  const obj5 = { style: visualEffectViewOverrideSharedStyles.zeroPadding, label: "Blur Tint", trailing: closure_8(closure_5, obj6) };
  obj6 = { style: items1 };
  items1 = [tmp.tintColor, { backgroundColor }];
  const FormRow2 = Form.FormRow;
  const items2 = [closure_8(FormRow2, obj5), ];
  const obj7 = { style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal, disabled: !tmp7, label: "Blur Tint Opacity " + str2, subLabel: closure_8(backgroundColor(15882), obj9) };
  str2 = undefined;
  const FormRow3 = Form.FormRow;
  if (first1 != null) {
    str2 = first1.toFixed(3);
  }
  if (str2 == null) {
    str2 = "";
  }
  obj8 = { children: items2 };
  obj9 = {
    disabled: !tmp7,
    initialValue: ref,
    onValueChange(arg0) {
      closure_5(first, arg0);
    }
  };
  items2[1] = closure_8(FormRow3, obj7);
  return closure_8(FormRow, obj3);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropTintColor.tsx");

export default memoResult;