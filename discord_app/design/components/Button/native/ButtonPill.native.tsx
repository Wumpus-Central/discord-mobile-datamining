// === Module 5610: ButtonPill ===

// Module 5610 (ButtonPill)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4586 */;
import native from "native" /* 4595 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import shared from "shared" /* 4735 */;
import spring from "spring" /* 5604 */;
import springPresets from "springPresets" /* 5605 */;
import ButtonHooks from "ButtonHooks" /* 5608 */;
import ButtonShine from "ButtonShine" /* 5611 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import ButtonEllipsis from "ButtonEllipsis" /* 5616 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ButtonConstants_mod from "ButtonConstants" /* 5607 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const ReanimatedRexportDefault = ReanimatedRexport;
let _require;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ View: hasOwnProperty, StyleSheet: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let c10 = 300;
let ButtonConstants = ButtonConstants_mod;
const getButtonPadding = ButtonConstants.getButtonPadding;
const paddingVertical = getButtonPadding(ButtonConstants.SMALL_BUTTON_HEIGHT, ButtonConstants.SMALL_BUTTON_ICON_SIZE);
ButtonConstants = ButtonConstants_mod;
const getButtonPadding2 = ButtonConstants.getButtonPadding;
const paddingVertical2 = getButtonPadding2(ButtonConstants.MEDIUM_BUTTON_HEIGHT, ButtonConstants.MEDIUM_BUTTON_ICON_SIZE);
ButtonConstants = ButtonConstants_mod;
const getButtonPadding3 = ButtonConstants.getButtonPadding;
const paddingVertical3 = getButtonPadding3(ButtonConstants.LARGE_BUTTON_HEIGHT, ButtonConstants.LARGE_BUTTON_ICON_SIZE);
let closure_14 = createStyles.createStyles((arg0, arg1) => {
  let obj;
  let obj7;
  if ("sm" === arg1) {
    obj = { minHeight: ButtonConstants.SMALL_BUTTON_HEIGHT, minWidth: ButtonConstants.SMALL_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants.SMALL_BUTTON_HORIZONTAL_PADDING, paddingVertical };
    const obj2 = { minHeight: ButtonConstants.SMALL_BUTTON_HEIGHT, minWidth: ButtonConstants.SMALL_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants.SMALL_BUTTON_HORIZONTAL_PADDING, paddingVertical };
  } else if ("md" === arg1) {
    obj = { minHeight: ButtonConstants.MEDIUM_BUTTON_HEIGHT, minWidth: ButtonConstants.MEDIUM_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants.MEDIUM_BUTTON_HORIZONTAL_PADDING, paddingVertical: paddingVertical2 };
    const obj3 = { minHeight: ButtonConstants.MEDIUM_BUTTON_HEIGHT, minWidth: ButtonConstants.MEDIUM_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants.MEDIUM_BUTTON_HORIZONTAL_PADDING, paddingVertical: paddingVertical2 };
  } else {
    obj = {};
    if ("lg" === arg1) {
      obj = { minHeight: ButtonConstants.LARGE_BUTTON_HEIGHT, minWidth: ButtonConstants.LARGE_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants.LARGE_BUTTON_HORIZONTAL_PADDING, paddingVertical: paddingVertical3 };
      const obj5 = { minHeight: ButtonConstants.LARGE_BUTTON_HEIGHT, minWidth: ButtonConstants.LARGE_BUTTON_HEIGHT, paddingHorizontal: ButtonConstants.LARGE_BUTTON_HORIZONTAL_PADDING, paddingVertical: paddingVertical3 };
    }
  }
  const obj4 = ButtonConstants;
  const buttonBorderRadius = obj4.getButtonBorderRadius(arg1);
  const obj6 = { pill: obj7, expressivePill: { overflow: "hidden", borderRadius: buttonBorderRadius }, expressiveRiveFill: { color: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT }, childContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", flexGrow: 1, maxWidth: "100%" }, ellipsis: { position: "absolute", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } };
  obj7 = { flexDirection: "row", alignItems: "center", justifyContent: "center", overflow: "hidden", borderWidth: ButtonConstants.BUTTON_BORDER_WIDTH, borderRadius: buttonBorderRadius };
  const merged = Object.assign(obj);
  ({ color: nativeDefault.colors.CONTROL_EXPRESSIVE_BACKGROUND_DEFAULT });
  return obj6;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ExpressiveButtonRive;
  let children;
  let expressivePressState;
  let expressiveRiveRef;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let obj5;
  let obj6;
  let pressed;
  let shiny;
  let str4;
  let style;
  let variant;
  const obj = react2;
  const cResult = obj.c(42);
  ({ children, variant, style, shiny, expressiveRiveRef, expressivePressState } = arg0);
  let tmp4 = undefined !== shiny;
  ({ pressed, size } = arg0);
  if (tmp4) {
    tmp4 = shiny;
  }
  const tmpResult = ButtonHooks;
  const buttonPillStyles = tmpResult.useButtonPillStyles(variant, pressed);
  const tmpResult7 = ButtonHooks;
  const gradientPillStyles = tmpResult7.useGradientPillStyles(variant);
  const tmpResult8 = native;
  const theme = tmpResult8.useThemeContext().theme;
  const tmp7 = closure_14(variant, size);
  const tmpResult9 = useToken;
  const token = tmpResult9.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT);
  const tmpResult10 = useToken;
  const token1 = tmpResult10.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const tmpResult11 = useToken;
  const token2 = tmpResult11.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  if (cResult[0] === token) {
    if (cResult[1] === token1) {
      let tmp12;
      let tmp14;
      if (cResult[2] === token2) {
        tmp12 = cResult[3];
      }
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2, nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS];
        cResult[4] = items;
        tmp14 = items;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] === tmp4) {
        let tmp15;
        let tmp35;
        let tmp34;
        if (cResult[6] === variant) {
          tmp15 = cResult[7];
        }
        if ("experimental_premium-primary" !== variant) {
          if ("experimental_premium-basic" !== variant) {
            if (cResult[26] === expressivePressState) {
              if (cResult[27] === expressiveRiveRef) {
                if (cResult[28] === tmp7) {
                  if (cResult[29] === theme) {
                    let tmp18;
                    if (cResult[30] === variant) {
                      tmp18 = cResult[31];
                    }
                    if (cResult[32] === buttonPillStyles) {
                      let tmp26;
                      if (cResult[33] === style) {
                        tmp26 = cResult[34];
                      }
                      if (cResult[35] === children) {
                        if (cResult[36] === tmp15) {
                          let tmp27;
                          if (cResult[37] === tmp26) {
                            tmp27 = cResult[38];
                          }
                          if (cResult[39] === tmp27) {
                            let tmp30;
                            if (cResult[40] === tmp18) {
                              tmp30 = cResult[41];
                            }
                            return tmp30;
                          }
                          const obj2 = { children: items1 };
                          items1 = [tmp18, tmp27];
                          const tmp33 = metroImportAll(React4, obj2);
                          cResult[39] = tmp27;
                          cResult[40] = tmp18;
                          cResult[41] = tmp33;
                          tmp30 = tmp33;
                        }
                      }
                      const obj3 = { style: tmp26, children: items2 };
                      items2 = [children, tmp15];
                      const tmp29 = metroImportAll(ReanimatedRexportDefault.View, obj3);
                      cResult[35] = children;
                      cResult[36] = tmp15;
                      cResult[37] = tmp26;
                      cResult[38] = tmp29;
                      tmp27 = tmp29;
                    }
                    const items3 = [style, buttonPillStyles];
                    cResult[32] = buttonPillStyles;
                    cResult[33] = style;
                    cResult[34] = items3;
                    tmp26 = items3;
                  }
                }
              }
            }
            let tmp20Result = "expressive" === variant;
            if (tmp20Result) {
              const obj4 = { style: items4, children: metroImportDefault(ExpressiveButtonRive, obj5) };
              items4 = [metroRequire.absoluteFill, tmp7.expressivePill];
              obj5 = { withReducedMotion: "short-loop", ref: expressiveRiveRef, fit: "layout", artboard: str4, dataBinding: obj6 };
              ExpressiveButtonRive = native.ExpressiveButtonRive;
              str4 = "Mobile Expressive Button Dark Mode";
              const tmpResult12 = shared;
              if (tmpResult12.isThemeLight(theme)) {
                str4 = "Mobile Expressive Button Lightmode";
              }
              obj6 = { buttonColor: tmp7.expressiveRiveFill.color, cornerRadius: tmp7.expressivePill.borderRadius };
              const merged = Object.assign(expressivePressState);
              tmp20Result = metroImportDefault(hasOwnProperty, obj4);
            }
            cResult[26] = expressivePressState;
            cResult[27] = expressiveRiveRef;
            cResult[28] = tmp7;
            cResult[29] = theme;
            cResult[30] = variant;
            cResult[31] = tmp20Result;
            tmp18 = tmp20Result;
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const point = { x: 0, y: 0 };
          const point1 = { x: 1, y: 0 };
          cResult[8] = point;
          cResult[9] = point1;
          tmp35 = point1;
          tmp34 = point;
        } else {
          tmp34 = cResult[8];
          tmp35 = cResult[9];
        }
        if (cResult[10] === gradientPillStyles) {
          let tmp36;
          if (cResult[11] === style) {
            tmp36 = cResult[12];
          }
          if ("experimental_premium-basic" === variant) {
            tmp12 = tmp14;
          }
          if (cResult[13] === tmp36) {
            let tmp38;
            if (cResult[14] === tmp12) {
              tmp38 = cResult[15];
            }
            if (cResult[16] === buttonPillStyles) {
              let tmp41;
              if (cResult[17] === style) {
                tmp41 = cResult[18];
              }
              if (cResult[19] === children) {
                if (cResult[20] === tmp15) {
                  let tmp42;
                  if (cResult[21] === tmp41) {
                    tmp42 = cResult[22];
                  }
                  if (cResult[23] === tmp38) {
                    let tmp45;
                    if (cResult[24] === tmp42) {
                      tmp45 = cResult[25];
                    }
                    return tmp45;
                  }
                  const obj7 = { children: items5 };
                  items5 = [tmp38, tmp42];
                  const tmp48 = metroImportAll(React4, obj7);
                  cResult[23] = tmp38;
                  cResult[24] = tmp42;
                  cResult[25] = tmp48;
                  tmp45 = tmp48;
                }
              }
              const obj8 = { style: tmp41, children: items6 };
              items6 = [children, tmp15];
              const tmp44 = metroImportAll(ReanimatedRexportDefault.View, obj8);
              cResult[19] = children;
              cResult[20] = tmp15;
              cResult[21] = tmp41;
              cResult[22] = tmp44;
              tmp42 = tmp44;
            }
            const items7 = [style, buttonPillStyles];
            cResult[16] = buttonPillStyles;
            cResult[17] = style;
            cResult[18] = items7;
            tmp41 = items7;
          }
          const obj9 = { start: tmp34, end: tmp35, style: tmp36, colors: tmp12 };
          const tmp40 = metroImportDefault(LinearGradientDefault, obj9);
          cResult[13] = tmp36;
          cResult[14] = tmp12;
          cResult[15] = tmp40;
          tmp38 = tmp40;
        }
        const items8 = [style, gradientPillStyles, metroRequire.absoluteFill];
        cResult[10] = gradientPillStyles;
        cResult[11] = style;
        cResult[12] = items8;
        tmp36 = items8;
      }
      let tmp16 = null;
      if (tmp4) {
        const obj10 = { variant };
        tmp16 = metroImportDefault(ButtonShine.ButtonShine, obj10);
      }
      cResult[5] = tmp4;
      cResult[6] = variant;
      cResult[7] = tmp16;
      tmp15 = tmp16;
    }
  }
  const items9 = [token, token1, token2];
  cResult[0] = token;
  cResult[1] = token1;
  cResult[2] = token2;
  cResult[3] = items9;
  tmp12 = items9;
}) : ((pressed) => {
  let ExpressiveButtonRive;
  let children;
  let expressiveRiveRef;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let obj10;
  let obj9;
  let shiny;
  let str;
  let style;
  let variant;
  ({ children, variant, style, shiny } = pressed);
  pressed = pressed.pressed;
  if (shiny === undefined) {
    shiny = false;
  }
  const expressivePressState = pressed.expressivePressState;
  ({ expressiveRiveRef, size } = pressed);
  const obj = ButtonHooks;
  const buttonPillStyles = obj.useButtonPillStyles(variant, pressed);
  const obj2 = ButtonHooks;
  const gradientPillStyles = obj2.useGradientPillStyles(variant);
  const obj3 = native;
  const theme = obj3.useThemeContext().theme;
  const tmp5 = closure_14(variant, size);
  let items = [, , ];
  const obj4 = useToken;
  items[0] = obj4.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT);
  const obj5 = useToken;
  items[1] = obj5.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PURPLE_FOR_GRADIENT_2);
  const obj6 = useToken;
  items[2] = obj6.useToken(nativeDefault.colors.REDESIGN_BUTTON_PREMIUM_PRIMARY_PINK_FOR_GRADIENT);
  const items1 = [nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS, nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2, nativeDefault.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS];
  let tmp7 = null;
  if (shiny) {
    const obj7 = { variant };
    tmp7 = metroImportDefault(ButtonShine.ButtonShine, obj7);
  }
  if ("experimental_premium-primary" !== variant) {
    let obj11;
    if ("experimental_premium-basic" !== variant) {
      let tmp11Result = "expressive" === variant;
      if (tmp11Result) {
        const obj8 = { style: items2, children: metroImportDefault(ExpressiveButtonRive, obj9) };
        items2 = [metroRequire.absoluteFill, tmp5.expressivePill];
        obj9 = { withReducedMotion: "short-loop", ref: expressiveRiveRef, fit: "layout", artboard: str, dataBinding: obj10 };
        ExpressiveButtonRive = native.ExpressiveButtonRive;
        str = "Mobile Expressive Button Dark Mode";
        const tmpResult = shared;
        if (tmpResult.isThemeLight(theme)) {
          str = "Mobile Expressive Button Lightmode";
        }
        obj10 = { buttonColor: tmp5.expressiveRiveFill.color, cornerRadius: tmp5.expressivePill.borderRadius };
        const merged = Object.assign(expressivePressState);
        tmp11Result = metroImportDefault(hasOwnProperty, obj8);
      }
      obj11 = { children: items3 };
      items3 = [tmp11Result, ];
      const obj12 = { style: items4, children: items5 };
      items4 = [style, buttonPillStyles];
      items5 = [children, tmp7];
      items3[1] = metroImportAll(ReanimatedRexportDefault.View, obj12);
    }
    return metroImportAll(tmp10, obj11);
  }
  const obj13 = { start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, style: items6, colors: items };
  items6 = [style, gradientPillStyles, metroRequire.absoluteFill];
  const tmp6Result = LinearGradientDefault;
  if ("experimental_premium-basic" === variant) {
    items = items1;
  }
  const obj14 = { children: items7 };
  items7 = [metroImportDefault(tmp6Result, obj13), ];
  const obj15 = { style: items8, children: items9 };
  items8 = [style, buttonPillStyles];
  items9 = [children, tmp7];
  items7[1] = metroImportAll(ReanimatedRexportDefault.View, obj15);
  obj11 = obj14;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((loading) => {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(4);
  if (null == loading.loading) {
    let tmp9;
    if (cResult[0] !== loading) {
      const obj2 = {};
      const merged = Object.assign(loading);
      const tmp15 = metroImportDefault(closure_16, obj2);
      cResult[0] = loading;
      cResult[1] = tmp15;
      tmp9 = tmp15;
    } else {
      tmp9 = cResult[1];
    }
    tmp2 = tmp9;
  } else if (cResult[2] !== loading) {
    const obj3 = {};
    const merged1 = Object.assign(loading);
    const tmp8 = metroImportDefault(closure_17, obj3);
    cResult[2] = loading;
    cResult[3] = tmp8;
    tmp2 = tmp8;
  } else {
    tmp2 = cResult[3];
  }
  return tmp2;
}) : ((loading) => {
  let tmp6;
  if (null == loading.loading) {
    const obj2 = {};
    const merged = Object.assign(loading);
    tmp6 = metroImportDefault(closure_16, obj2);
  } else {
    const obj = {};
    const merged1 = Object.assign(loading);
    tmp6 = metroImportDefault(closure_17, obj);
  }
  return tmp6;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let expressivePressState;
  let expressiveRiveRef;
  let pressed;
  let shiny;
  let style;
  let variant;
  const obj = react2;
  const cResult = obj.c(15);
  ({ children, style, pressed, variant, size, shiny, expressiveRiveRef, expressivePressState } = arg0);
  let str = "primary";
  if (undefined !== variant) {
    str = variant;
  }
  if (undefined === size) {
    size = ButtonConstants.DEFAULT_BUTTON_SIZE;
  }
  const tmp5 = closure_14(str, size);
  if (cResult[0] === style) {
    let tmp6;
    if (cResult[1] === tmp5.pill) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === children) {
      let tmp7;
      if (cResult[4] === tmp5.childContainer) {
        tmp7 = cResult[5];
      }
      if (cResult[6] === expressivePressState) {
        if (cResult[7] === expressiveRiveRef) {
          if (cResult[8] === pressed) {
            if (cResult[9] === (undefined !== shiny && shiny)) {
              if (cResult[10] === size) {
                if (cResult[11] === tmp6) {
                  if (cResult[12] === tmp7) {
                    let tmp11;
                    if (cResult[13] === str) {
                      tmp11 = cResult[14];
                    }
                    return tmp11;
                  }
                }
              }
            }
          }
        }
      }
      const obj2 = { variant: str, size, style: tmp6, pressed, shiny: undefined !== shiny && shiny, expressiveRiveRef, expressivePressState, children: tmp7 };
      const tmp14 = metroImportDefault(closure_15, obj2);
      cResult[6] = expressivePressState;
      cResult[7] = expressiveRiveRef;
      cResult[8] = pressed;
      cResult[9] = undefined !== shiny && shiny;
      cResult[10] = size;
      cResult[11] = tmp6;
      cResult[12] = tmp7;
      cResult[13] = str;
      cResult[14] = tmp14;
      tmp11 = tmp14;
    }
    const obj3 = { style: tmp5.childContainer, children };
    const tmp10 = metroImportDefault(hasOwnProperty, obj3);
    cResult[3] = children;
    cResult[4] = tmp5.childContainer;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  const items = [tmp5.pill, style];
  cResult[0] = style;
  cResult[1] = tmp5.pill;
  cResult[2] = items;
  tmp6 = items;
}) : ((variant) => {
  let children;
  let expressivePressState;
  let expressiveRiveRef;
  let items;
  let obj2;
  let pressed;
  let style;
  let str = variant.variant;
  ({ children, style, pressed } = variant);
  if (str === undefined) {
    str = "primary";
  }
  let DEFAULT_BUTTON_SIZE = variant.size;
  if (DEFAULT_BUTTON_SIZE === undefined) {
    DEFAULT_BUTTON_SIZE = ButtonConstants.DEFAULT_BUTTON_SIZE;
  }
  let flag = variant.shiny;
  if (flag === undefined) {
    flag = false;
  }
  ({ expressiveRiveRef, expressivePressState } = variant);
  const tmp3 = closure_14(str, DEFAULT_BUTTON_SIZE);
  const obj = { variant: str, size: DEFAULT_BUTTON_SIZE, style: items, pressed, shiny: flag, expressiveRiveRef, expressivePressState, children: metroImportDefault(hasOwnProperty, obj2) };
  items = [tmp3.pill, style];
  obj2 = { style: tmp3.childContainer, children };
  return metroImportDefault(closure_15, obj);
});
let closure_16 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let closure_129_2;
  let expressivePressState;
  let expressiveRiveRef;
  let items1;
  let loaderSize;
  let loading;
  let pressed;
  let style;
  let tmp10;
  let tmp13;
  let tmp14;
  let tmp25;
  let tmp8;
  let tmp9;
  let variant;
  const obj = react2;
  const cResult = obj.c(32);
  ({ children, style, pressed, variant, size, loading, loaderSize, expressiveRiveRef, expressivePressState } = arg0);
  let str = "primary";
  if (undefined !== variant) {
    str = variant;
  }
  if (undefined === size) {
    size = ButtonConstants.DEFAULT_BUTTON_SIZE;
  }
  let closure_0 = tmp4;
  const tmp5 = closure_14(str, size);
  let closure_1 = react.useRef(null);
  [tmp8, closure_129_2] = _slicedToArray(react.useState(tmp4), 2);
  const tmp7 = _slicedToArray(react.useState(tmp4), 2);
  if (cResult[0] !== (undefined !== loading && loading)) {
    const fn = function o() {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
      }
      if (closure_0) {
        closure_1_2(true);
      } else {
        const _setTimeout = setTimeout;
        ref.current = setTimeout(() => {
          closure_1_2(false);
        }, 500);
      }
    };
    const items = [undefined !== loading && loading];
    cResult[0] = undefined !== loading && loading;
    cResult[1] = fn;
    cResult[2] = items;
    tmp10 = items;
    tmp9 = fn;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const effect = react.useEffect(tmp9, tmp10);
  [tmp13, tmp14] = closure_22(undefined !== loading && loading, size);
  _slicedToArray(closure_22(undefined !== loading && loading, size), 2);
  if (cResult[3] === style) {
    let tmp15;
    if (cResult[4] === tmp5.pill) {
      tmp15 = cResult[5];
    }
    if (cResult[6] === tmp13) {
      let tmp16;
      if (cResult[7] === tmp5.childContainer) {
        tmp16 = cResult[8];
      }
      if (cResult[9] === children) {
        let tmp17;
        if (cResult[10] === tmp16) {
          tmp17 = cResult[11];
        }
        if (cResult[12] === tmp14) {
          let tmp21;
          if (cResult[13] === tmp5.ellipsis) {
            tmp21 = cResult[14];
          }
          if (cResult[15] === loaderSize) {
            if (cResult[16] === tmp8) {
              if (cResult[17] === size) {
                let tmp22;
                if (cResult[18] === str) {
                  tmp22 = cResult[19];
                }
                if (cResult[20] === tmp22) {
                  let tmp26;
                  if (cResult[21] === tmp21) {
                    tmp26 = cResult[22];
                  }
                  if (cResult[23] === expressivePressState) {
                    if (cResult[24] === expressiveRiveRef) {
                      if (cResult[25] === pressed) {
                        if (cResult[26] === size) {
                          if (cResult[27] === tmp26) {
                            if (cResult[28] === tmp15) {
                              if (cResult[29] === tmp17) {
                                let tmp30;
                                if (cResult[30] === str) {
                                  tmp30 = cResult[31];
                                }
                                return tmp30;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj3 = { variant: str, size, style: tmp15, pressed, expressiveRiveRef, expressivePressState, children: items1 };
                  items1 = [tmp17, tmp26];
                  const tmp33 = metroImportAll(closure_15, obj3);
                  cResult[23] = expressivePressState;
                  cResult[24] = expressiveRiveRef;
                  cResult[25] = pressed;
                  cResult[26] = size;
                  cResult[27] = tmp26;
                  cResult[28] = tmp15;
                  cResult[29] = tmp17;
                  cResult[30] = str;
                  cResult[31] = tmp33;
                  tmp30 = tmp33;
                }
                const obj4 = { style: tmp21, children: tmp22 };
                const tmp29 = metroImportDefault(ReanimatedRexportDefault.View, obj4);
                cResult[20] = tmp22;
                cResult[21] = tmp21;
                cResult[22] = tmp29;
                tmp26 = tmp29;
              }
            }
          }
          let tmp24Result = tmp8;
          if (tmp24Result) {
            const obj5 = { variant: str, size: tmp25 };
            tmp25 = loaderSize;
            const Ellipsis = ButtonEllipsis.Ellipsis;
            if (loaderSize == null) {
              tmp25 = size;
            }
            tmp24Result = metroImportDefault(Ellipsis, obj5);
          }
          cResult[15] = loaderSize;
          cResult[16] = tmp8;
          cResult[17] = size;
          cResult[18] = str;
          cResult[19] = tmp24Result;
          tmp22 = tmp24Result;
        }
        const items2 = [tmp5.ellipsis, tmp14];
        cResult[12] = tmp14;
        cResult[13] = tmp5.ellipsis;
        cResult[14] = items2;
        tmp21 = items2;
      }
      const obj6 = { style: tmp16, children };
      const tmp20 = metroImportDefault(ReanimatedRexportDefault.View, obj6);
      cResult[9] = children;
      cResult[10] = tmp16;
      cResult[11] = tmp20;
      tmp17 = tmp20;
    }
    const items3 = [tmp5.childContainer, tmp13];
    cResult[6] = tmp13;
    cResult[7] = tmp5.childContainer;
    cResult[8] = items3;
    tmp16 = items3;
  }
  const items4 = [tmp5.pill, style];
  cResult[3] = style;
  cResult[4] = tmp5.pill;
  cResult[5] = items4;
  tmp15 = items4;
}) : ((variant) => {
  let c2;
  let children;
  let expressivePressState;
  let expressiveRiveRef;
  let items1;
  let items2;
  let items3;
  let items4;
  let pressed;
  let style;
  let tmp12Result;
  let tmp5;
  let tmp8;
  let tmp9;
  let str = variant.variant;
  ({ children, style, pressed } = variant);
  if (str === undefined) {
    str = "primary";
  }
  let DEFAULT_BUTTON_SIZE = variant.size;
  if (DEFAULT_BUTTON_SIZE === undefined) {
    DEFAULT_BUTTON_SIZE = ButtonConstants.DEFAULT_BUTTON_SIZE;
  }
  let flag = variant.loading;
  if (flag === undefined) {
    flag = false;
  }
  let loaderSize = variant.loaderSize;
  c2 = undefined;
  ({ expressiveRiveRef, expressivePressState } = variant);
  const tmp3 = closure_14(str, DEFAULT_BUTTON_SIZE);
  let closure_1 = react.useRef(null);
  let tmp4 = _slicedToArray(react.useState(flag), 2);
  [tmp5, c2] = tmp4;
  const items = [flag];
  const effect = react.useEffect(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
    }
    const tmp4 = flag;
    if (tmp4) {
      _undefined(true);
    } else {
      const _setTimeout = setTimeout;
      ref.current = setTimeout(() => {
        _undefined(false);
      }, 500);
    }
  }, items);
  const obj = { variant: str, size: DEFAULT_BUTTON_SIZE, style: items1, pressed, expressiveRiveRef, expressivePressState, children: items3 };
  items1 = [tmp3.pill, style];
  [tmp8, tmp9] = _slicedToArray(closure_22(flag, DEFAULT_BUTTON_SIZE), 2);
  const obj2 = { style: items2, children };
  items2 = [tmp3.childContainer, tmp8];
  const tmp7 = _slicedToArray(closure_22(flag, DEFAULT_BUTTON_SIZE), 2);
  items3 = [metroImportDefault(ReanimatedRexportDefault.View, obj2), ];
  const obj3 = { style: items4, children: tmp12Result };
  items4 = [tmp3.ellipsis, tmp9];
  const View = ReanimatedRexportDefault.View;
  if (tmp12Result) {
    const obj4 = { variant: str, size: loaderSize };
    const Ellipsis = ButtonEllipsis.Ellipsis;
    if (loaderSize == null) {
      loaderSize = DEFAULT_BUTTON_SIZE;
    }
    tmp12Result = metroImportDefault(Ellipsis, obj4);
  }
  items3[1] = metroImportDefault(View, obj3);
  return metroImportAll(closure_15, obj);
});
let closure_17 = tmp9;
const __initData = { code: "function ButtonPillNativeTsx1(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,\"animate-always\");if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}" };
const __initData2 = { code: "function ButtonPillNativeTsx2(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition_0=withSpring(loading?1:0,SUBTLE_SPRING,\"animate-always\");if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition_0):opacityTransition_0,transform:[{translateY:0}]};}return{opacity:opacityTransition_0,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}" };
const __initData3 = { code: "function ButtonPillNativeTsx3(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition=withSpring(loading?0:1,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?opacityTransition:withDelay(FADE_DELAY,opacityTransition),transform:[{translateY:0}]};}return{opacity:opacityTransition,transform:[{translateY:withSpring(loading?-1*offsetY:0,SUBTLE_SPRING)}]};}" };
const __initData4 = { code: "function ButtonPillNativeTsx4(){const{withSpring,loading,SUBTLE_SPRING,useReducedMotion,withDelay,FADE_DELAY,offsetY}=this.__closure;const opacityTransition_0=withSpring(loading?1:0,SUBTLE_SPRING,'animate-always');if(useReducedMotion){return{opacity:loading?withDelay(FADE_DELAY,opacityTransition_0):opacityTransition_0,transform:[{translateY:0}]};}return{opacity:opacityTransition_0,transform:[{translateY:withSpring(loading?0:offsetY,SUBTLE_SPRING)}]};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled() ? ((loading, arg1) => {
  let num;
  _require = loading;
  let obj = require("react");
  const cResult = obj.c(3);
  const enabled = react.useContext(require("react").AccessibilityPreferencesContext).reducedMotion.enabled;
  num = 12;
  if ("lg" === arg1) {
    num = 18;
  }
  let tmpResult = tmp(tmp2[14]);
  const fn = function o() {
    let tmp8;
    num = 1;
    const withSpring = spring.withSpring;
    spring;
    if (loading) {
      num = 0;
    }
    const withSpringResult = withSpring(num, springPresets.SUBTLE_SPRING, "animate-always");
    const obj = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (!loading) {
        const tmpResult = ReanimatedRexport;
        withDelayResult = tmpResult.withDelay(c10, withSpringResult);
      }
      obj.opacity = withDelayResult;
      const items = [{ translateY: 0 }];
      obj.transform = items;
      tmp8 = obj;
    } else {
      obj.opacity = withSpringResult;
      let num2 = 0;
      const withSpring2 = spring.withSpring;
      spring;
      if (loading) {
        num2 = -1 * num;
      }
      const items1 = [{ translateY: withSpring2(num2, springPresets.SUBTLE_SPRING) }];
      obj.transform = items1;
      tmp8 = obj;
      const obj2 = { translateY: withSpring2(num2, springPresets.SUBTLE_SPRING) };
    }
    return tmp8;
  };
  let obj2 = { withSpring: tmp(tmp2[18]).withSpring, loading, SUBTLE_SPRING: tmp(tmp2[19]).SUBTLE_SPRING, useReducedMotion: enabled, withDelay: tmp(tmp2[14]).withDelay, FADE_DELAY, offsetY: num };
  fn.__closure = obj2;
  fn.__workletHash = 8139455165925;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const tmpResult2 = tmp(tmp2[14]);
  const fn2 = function l() {
    let tmp7;
    num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (loading) {
      num = 1;
    }
    const withSpringResult = withSpring(num, springPresets.SUBTLE_SPRING, "animate-always");
    const obj = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (loading) {
        const tmpResult = ReanimatedRexport;
        withDelayResult = tmpResult.withDelay(c10, withSpringResult);
      }
      obj.opacity = withDelayResult;
      const items = [{ translateY: 0 }];
      obj.transform = items;
      tmp7 = obj;
    } else {
      obj.opacity = withSpringResult;
      let num2 = 0;
      const withSpring2 = spring.withSpring;
      spring;
      if (!loading) {
        num2 = num;
      }
      const items1 = [{ translateY: withSpring2(num2, springPresets.SUBTLE_SPRING) }];
      obj.transform = items1;
      tmp7 = obj;
      const obj2 = { translateY: withSpring2(num2, springPresets.SUBTLE_SPRING) };
    }
    return tmp7;
  };
  fn2.__closure = { withSpring: require("spring").withSpring, loading, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING, useReducedMotion: enabled, withDelay: require("ReanimatedRexport").withDelay, FADE_DELAY, offsetY: num };
  fn2.__workletHash = 7833278703280;
  fn2.__initData = __initData2;
  ({ withSpring: require("spring").withSpring, loading, SUBTLE_SPRING: require("springPresets").SUBTLE_SPRING, useReducedMotion: enabled, withDelay: require("ReanimatedRexport").withDelay, FADE_DELAY, offsetY: num });
  const animatedStyle1 = tmpResult2.useAnimatedStyle(fn2);
  if (cResult[0] === animatedStyle) {
    let tmp6;
    if (cResult[1] === animatedStyle1) {
      tmp6 = cResult[2];
    }
    return tmp6;
  }
  let items = [animatedStyle, animatedStyle1];
  cResult[0] = animatedStyle;
  cResult[1] = animatedStyle1;
  cResult[2] = items;
  tmp6 = items;
}) : ((loading, arg1) => {
  let num;
  _require = loading;
  const enabled = react.useContext(require("react").AccessibilityPreferencesContext).reducedMotion.enabled;
  num = 12;
  if ("lg" === arg1) {
    num = 18;
  }
  let tmpResult = tmp(tmp2[14]);
  const fn = function o() {
    let tmp8;
    num = 1;
    const withSpring = spring.withSpring;
    spring;
    if (loading) {
      num = 0;
    }
    const withSpringResult = withSpring(num, springPresets.SUBTLE_SPRING, "animate-always");
    const obj = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (!loading) {
        const tmpResult = ReanimatedRexport;
        withDelayResult = tmpResult.withDelay(c10, withSpringResult);
      }
      obj.opacity = withDelayResult;
      const items = [{ translateY: 0 }];
      obj.transform = items;
      tmp8 = obj;
    } else {
      obj.opacity = withSpringResult;
      let num2 = 0;
      const withSpring2 = spring.withSpring;
      spring;
      if (loading) {
        num2 = -1 * num;
      }
      const items1 = [{ translateY: withSpring2(num2, springPresets.SUBTLE_SPRING) }];
      obj.transform = items1;
      tmp8 = obj;
      const obj2 = { translateY: withSpring2(num2, springPresets.SUBTLE_SPRING) };
    }
    return tmp8;
  };
  let obj = { withSpring: tmp(tmp2[18]).withSpring, loading, SUBTLE_SPRING: tmp(tmp2[19]).SUBTLE_SPRING, useReducedMotion: enabled, withDelay: tmp(tmp2[14]).withDelay, FADE_DELAY, offsetY: num };
  fn.__closure = obj;
  fn.__workletHash = 7437403999943;
  fn.__initData = __initData3;
  let items = [tmpResult.useAnimatedStyle(fn), ];
  const tmpResult2 = tmp(tmp2[14]);
  const fn2 = function l() {
    let tmp7;
    num = 0;
    const withSpring = spring.withSpring;
    spring;
    if (loading) {
      num = 1;
    }
    const withSpringResult = withSpring(num, springPresets.SUBTLE_SPRING, "animate-always");
    const obj = { opacity: null, transform: null };
    if (enabled) {
      let withDelayResult = withSpringResult;
      if (loading) {
        const tmpResult = ReanimatedRexport;
        withDelayResult = tmpResult.withDelay(c10, withSpringResult);
      }
      obj.opacity = withDelayResult;
      const items = [{ translateY: 0 }];
      obj.transform = items;
      tmp7 = obj;
    } else {
      obj.opacity = withSpringResult;
      let num2 = 0;
      const withSpring2 = spring.withSpring;
      spring;
      if (!loading) {
        num2 = num;
      }
      const items1 = [{ translateY: withSpring2(num2, springPresets.SUBTLE_SPRING) }];
      obj.transform = items1;
      tmp7 = obj;
      const obj2 = { translateY: withSpring2(num2, springPresets.SUBTLE_SPRING) };
    }
    return tmp7;
  };
  let obj2 = { withSpring: tmp(tmp2[18]).withSpring, loading, SUBTLE_SPRING: tmp(tmp2[19]).SUBTLE_SPRING, useReducedMotion: enabled, withDelay: tmp(tmp2[14]).withDelay, FADE_DELAY, offsetY: num };
  fn2.__closure = obj2;
  fn2.__workletHash = 1552363136150;
  fn2.__initData = __initData4;
  items[1] = tmpResult2.useAnimatedStyle(fn2);
  return items;
});
let closure_22 = tmp10;
let size = size_mod;
const result = size.fileFinishedImporting("design/components/Button/native/ButtonPill.native.tsx");

export const ButtonPill = tmp7;
export const BasicButtonPill = tmp8;
export const LoadingButtonPill = tmp9;
export const useLoadingStyles = tmp10;