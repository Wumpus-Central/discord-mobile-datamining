// discord_app/modules/visual_effect_view/native/overrides/VEVOOPropTintColor.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import FormSwitch from "../../../../design/components/Forms/native/FormSwitch.native.tsx";
import Form from "../../../../design/void/Form/native/index.tsx";
import showCustomColorPickerActionSheetDefault from "../../../color_picker/native/showCustomColorPickerActionSheet.tsx";
import VEVOO from "VEVOO.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const VEVOOStore = fn(5781);
({ getVisualEffectViewOverrides: metroRequire, setVisualEffectViewOverides: closure_7 } = VEVOOStore);
const jsxProd = fn(21);
({ jsx: closure_8, Fragment: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let obj = { tintColor: null };
let size = {
  width: nativeDefault.space.PX_32,
  height: nativeDefault.space.PX_32,
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_700,
  borderRadius: nativeDefault.radii.sm,
};
obj.tintColor = size;
let closure_11 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/visual_effect_view/native/overrides/VEVOOPropTintColor.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(45);
        const tmp4 = closure_11();
        const visualEffectViewOverrideSharedStyles = VEVOO.useVisualEffectViewOverrideSharedStyles();
        [tmp8, require] = first2(noop.useState(false), 2);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let str = closure_6().tintColorOverrideHex;
          if (str == null) {
            str = "black";
          }
          cResult[0] = str;
          let first = str;
        } else {
          first = cResult[0];
        }
        const tmp6Result = first2(noop.useState(first), 2);
        const first1 = tmp6Result[0];
        dependencyMap = tmp6Result[1];
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp16 = closure_6();
          cResult[1] = tmp16;
          let tmp14 = tmp16;
        } else {
          tmp14 = cResult[1];
        }
        const tmp6Result2 = first2(noop.useState(tmp14.tintColorOverrideOpacity), 2);
        first2 = tmp6Result2[0];
        noop = tmp6Result2[1];
        const tmp7 = first2(noop.useState(false), 2);
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
                hexToRgbaStringResult = ColorUtils.hexToRgbaString(tintColorOverrideHex, tintColorOverrideOpacity);
              }
            }
            const obj2 = {};
            const merged = Object.assign(timestampProducer());
            obj2.tintColorOverrideOpacity = tintColorOverrideOpacity;
            obj2.tintColorOverrideHex = tintColorOverrideHex;
            obj2.tintColorOverride = hexToRgbaStringResult;
            if (null == hexToRgbaStringResult) {
              const obj3 = {};
              const merged1 = Object.assign(obj2);
              obj3.tintColorOverride = "rgba(0, 0, 0, 0)";
              React5(obj3);
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => {
                closure_2_7(obj2);
              });
            } else {
              React5(obj2);
            }
          };
          cResult[2] = fn;
          let tmp19 = fn;
        } else {
          tmp19 = cResult[2];
        }
        closure_5 = tmp19;
        if (cResult[3] !== visualEffectViewOverrideSharedStyles.zeroPaddingVertical) {
          const items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
          cResult[3] = visualEffectViewOverrideSharedStyles.zeroPaddingVertical;
          cResult[4] = items;
          let tmp20 = items;
        } else {
          tmp20 = cResult[4];
        }
        if (cResult[5] === first1) {
          if (cResult[6] === first2) {
            let tmp21 = cResult[7];
          }
          if (cResult[8] === tmp21) {
            if (cResult[9] === tmp8) {
              let tmp22 = cResult[10];
            }
            if (cResult[11] !== first1) {
              const obj4 = { backgroundColor: first1 };
              cResult[11] = first1;
              cResult[12] = obj4;
              let tmp26 = obj4;
            } else {
              tmp26 = cResult[12];
            }
            if (cResult[13] === tmp4.tintColor) {
              if (cResult[14] === tmp26) {
                let tmp27 = cResult[15];
              }
              if (cResult[16] === visualEffectViewOverrideSharedStyles.zeroPadding) {
                if (cResult[17] === tmp27) {
                  let tmp30 = cResult[18];
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
                  let tmp35 = str2;
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
                  let tmp39 = fn2;
                } else {
                  tmp39 = cResult[22];
                }
                if (cResult[23] === !tmp8) {
                  if (cResult[24] === tmp39) {
                    let tmp40 = cResult[25];
                  }
                  if (cResult[26] === visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal) {
                    if (cResult[27] === combined) {
                      if (cResult[28] === tmp40) {
                        if (cResult[29] === tmp34) {
                          let tmp44 = cResult[30];
                        }
                        if (cResult[31] === tmp44) {
                          if (cResult[32] === tmp30) {
                            let tmp48 = cResult[33];
                          }
                          if (cResult[34] === first1) {
                            if (cResult[35] === first2) {
                              let tmp52 = cResult[36];
                            }
                            if (cResult[37] === visualEffectViewOverrideSharedStyles.enabledSwitchStyle) {
                              if (cResult[38] === visualEffectViewOverrideSharedStyles.zeroHeight) {
                                if (cResult[39] === tmp48) {
                                  if (cResult[40] === tmp51) {
                                    if (cResult[41] === tmp52) {
                                      if (cResult[42] === tmp20) {
                                        if (cResult[43] === tmp22) {
                                          let tmp53 = cResult[44];
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
                                obj = { color: null, onSelect: null };
                                tmp = closure_1(closure_2[14]);
                                obj2 = closure_0(closure_2[15]);
                                obj.color = obj2.hex2int(closure_1);
                                obj.onSelect = function onSelect(color) {
                                  closure_1_5(require("utils/ColorUtils").int2hex(color), first2);
                                };
                                tmpResult = tmp(obj);
                                return;
                              }
                            }
                            tmp55[0] = tmp20;
                            ({ zeroHeight: tmp55[1], enabledSwitchStyle: tmp55[2] } =
                              visualEffectViewOverrideSharedStyles);
                            tmp55[3] = tmp22;
                            tmp55[4] = tmp48;
                            tmp55[5] = tmp51;
                            tmp55[6] = tmp52;
                            const tmp56 = closure_8(Form.FormRow, tmp55);
                            cResult[37] = visualEffectViewOverrideSharedStyles.enabledSwitchStyle;
                            cResult[38] = visualEffectViewOverrideSharedStyles.zeroHeight;
                            cResult[39] = tmp48;
                            cResult[40] = tmp51;
                            cResult[41] = tmp52;
                            cResult[42] = tmp20;
                            cResult[43] = tmp22;
                            cResult[44] = tmp56;
                            tmp53 = tmp56;
                          }
                          class Q {
                            constructor() {
                              obj = { color: null, onSelect: null };
                              tmp = closure_1(closure_2[14]);
                              obj2 = closure_0(closure_2[15]);
                              obj.color = obj2.hex2int(closure_1);
                              obj.onSelect = function onSelect(color) {
                                closure_1_5(require("utils/ColorUtils").int2hex(color), first2);
                              };
                              tmpResult = tmp(obj);
                              return;
                            }
                          }
                          cResult[34] = first1;
                          cResult[35] = first2;
                          cResult[36] = Q;
                          tmp52 = Q;
                        }
                        const obj5 = { children: null };
                        const items1 = [tmp30, tmp44];
                        obj5.children = items1;
                        const tmp50 = closure_10(closure_9, obj5);
                        cResult[31] = tmp44;
                        cResult[32] = tmp30;
                        cResult[33] = tmp50;
                        tmp48 = tmp50;
                      }
                    }
                  }
                  tmp46[0] = visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal;
                  tmp46[1] = tmp34;
                  tmp46[2] = combined;
                  tmp46[3] = tmp40;
                  const tmp47 = closure_8(Form.FormRow, tmp46);
                  cResult[26] = visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal;
                  cResult[27] = combined;
                  cResult[28] = tmp40;
                  cResult[29] = tmp34;
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
            const obj7 = { style: null };
            const items2 = [tmp4.tintColor, tmp26];
            obj7.style = items2;
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
            tmp = closure_0(arg0);
            tmp2 = closure_5;
            if (arg0) {
              tmp4 = closure_1;
              tmp5 = closure_3;
              tmp2Result = tmp2(closure_1, closure_3);
            } else {
              tmp2Result1 = tmp2(undefined, undefined);
            }
            return;
          }
        }
        cResult[5] = first1;
        cResult[6] = first2;
        cResult[7] = L;
        tmp21 = L;
        ref = noop.useRef(first2);
      }
    : () => {
        let tmp = closure_11();
        const visualEffectViewOverrideSharedStyles = VEVOO.useVisualEffectViewOverrideSharedStyles();
        [tmp7, require] = first1(noop.useState(false), 2);
        let str = closure_6().tintColorOverrideHex;
        if (str == null) {
          str = "black";
        }
        const tmp5Result = first1(noop.useState(str), 2);
        const backgroundColor = tmp5Result[0];
        dependencyMap = tmp5Result[1];
        const tmp5Result2 = first1(noop.useState(closure_6().tintColorOverrideOpacity), 2);
        first1 = tmp5Result2[0];
        noop = tmp5Result2[1];
        const tmp6 = first1(noop.useState(false), 2);
        closure_5 = obj2.useCallback((tintColorOverrideHex, tintColorOverrideOpacity) => {
          if (null != tintColorOverrideHex) {
            closure_2(tintColorOverrideHex);
          }
          if (null != tintColorOverrideOpacity) {
            closure_4(tintColorOverrideOpacity);
          }
          let hexToRgbaStringResult;
          if (null != tintColorOverrideHex) {
            if (null != tintColorOverrideOpacity) {
              hexToRgbaStringResult = ColorUtils.hexToRgbaString(tintColorOverrideHex, tintColorOverrideOpacity);
            }
          }
          const obj2 = {};
          const merged = Object.assign(timestampProducer());
          obj2.tintColorOverrideOpacity = tintColorOverrideOpacity;
          obj2.tintColorOverrideHex = tintColorOverrideHex;
          obj2.tintColorOverride = hexToRgbaStringResult;
          if (null == hexToRgbaStringResult) {
            const obj3 = {};
            const merged1 = Object.assign(obj2);
            obj3.tintColorOverride = "rgba(0, 0, 0, 0)";
            React5(obj3);
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              closure_2_7(obj2);
            });
          } else {
            React5(obj2);
          }
        }, []);
        let obj3 = {
          style: null,
          labelStyle: visualEffectViewOverrideSharedStyles.zeroHeight,
          leadingStyle: visualEffectViewOverrideSharedStyles.enabledSwitchStyle,
          leading: closure_8(FormSwitch.FormSwitch, {
            value: tmp7,
            onValueChange(arg0) {
              _require(arg0);
              if (arg0) {
                closure_5(first, first1);
              } else {
                closure_5(undefined, undefined);
              }
            },
          }),
          subLabel: null,
          disabled: null,
          onPress: null,
        };
        const items = [visualEffectViewOverrideSharedStyles.zeroPaddingVertical];
        obj3.style = items;
        const obj5 = { style: visualEffectViewOverrideSharedStyles.zeroPadding, label: "Blur Tint", trailing: null };
        const obj6 = { style: null };
        const items1 = [tmp.tintColor, { backgroundColor }];
        obj6.style = items1;
        obj5.trailing = closure_8(closure_5, obj6);
        const items2 = [closure_8(Form.FormRow, obj5)];
        const obj7 = {
          style: visualEffectViewOverrideSharedStyles.zeroPaddingHorizontal,
          disabled: !tmp7,
          label: null,
          subLabel: null,
        };
        let str2;
        if (first1 != null) {
          str2 = first1.toFixed(3);
        }
        if (str2 == null) {
          str2 = "";
        }
        const obj8 = { children: null };
        obj7.label = "Blur Tint Opacity " + str2;
        const obj4 = {
          value: tmp7,
          onValueChange(arg0) {
            _require(arg0);
            if (arg0) {
              closure_5(first, first1);
            } else {
              closure_5(undefined, undefined);
            }
          },
        };
        const ref = noop.useRef(first1);
        obj7.subLabel = closure_8(backgroundColor(15882), {
          disabled: !tmp7,
          initialValue: noop.useRef(first1),
          onValueChange(arg0) {
            closure_5(first, arg0);
          },
        });
        items2[1] = closure_8(Form.FormRow, obj7);
        obj8.children = items2;
        obj3.subLabel = closure_10(closure_9, obj8);
        obj3.disabled = !tmp7;
        obj3.onPress = function onPress() {
          const obj = { color: null, onSelect: null };
          const tmp = showCustomColorPickerActionSheetDefault;
          obj.color = utils_ColorUtils.hex2int(first);
          obj.onSelect = function onSelect(color) {
            closure_1_5(require("utils/ColorUtils").int2hex(color), first1);
          };
          tmp(obj);
        };
        return closure_8(Form.FormRow, obj3);
      },
);
